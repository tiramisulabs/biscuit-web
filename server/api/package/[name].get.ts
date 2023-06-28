import ky from 'ky';
import { npmDownloadsPackage } from '../stats.get.js';

type npmjsPackageScore = {
	final: number;
	detail: {
		quality: number;
		popularity: number;
		maintenance: number;
	};
};

type npmjsSearchPackages = {
	objects: { package: PackageInfo; score: npmjsPackageScore }[];
	total: number;
	time: string;
};

export type PackageInfo = {
	name: string;
	fullname: string;
	version: string;
	scope: string;
	description: string;
	links: { homepage: string };
	readme: string;
	score: npmjsPackageScore;
	downloads: number;
	maintainers: { username: string; email: string }[];
};

export default defineEventHandler(async (event) => {
	const params = getRouterParams(event) as { name: string };

	const packages = await ky
		.get('http://registry.npmjs.com/-/v1/search', {
			searchParams: { text: `@biscuitland/${params.name}`, size: 1 },
		})
		.json<npmjsSearchPackages>()
		.catch(() => null);

	const npmDownloadsStats = await ky
		.get(
			`https://api.npmjs.org/downloads/range/2020-06-01:${new Date().toISOString().slice(0, 10)}/@biscuitland/${
				params.name
			}`,
		)
		.json<npmDownloadsPackage>()
		.catch(() => null);

	if (!packages) throw createError({ statusCode: 404, statusMessage: 'Package not found.' });
	if (!npmDownloadsStats) throw createError({ statusCode: 404, statusMessage: 'Package not found.' });

	const readme = await ky
		.get(`https://raw.githubusercontent.com/oasisjs/biscuit/main/packages/${params.name}/README.md`)
		.arrayBuffer();

	const pkg = packages.objects[0].package;
	const score = packages.objects[0].score.detail;

	return {
		name: pkg.name,
		version: pkg.version,
		description: pkg.description,
		links: pkg.links,
		readme: Buffer.from(readme).toString(),
		downloads: npmDownloadsStats.downloads.reduce<number>((a, b) => a + b.downloads, 0).toLocaleString(),
		maintainers: pkg.maintainers,
		score: {
			quality: Math.round(score.quality * 100),
			popularity: Math.round(score.popularity * 100),
			maintenance: Math.round(score.maintenance * 100),
		},
	};
});
