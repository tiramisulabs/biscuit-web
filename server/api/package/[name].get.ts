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
	objects: Array<{ package: PackageInfo; score: npmjsPackageScore }>;
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
};

export default defineEventHandler(async (event) => {
	const params = getRouterParams(event) as { name: string };

	const packages = await ky
		.get('http://registry.npmjs.com/-/v1/search', {
			searchParams: { text: `@biscuitland/${params.name}`, size: 1 },
		})
		.json<npmjsSearchPackages>();

	const npmDownloadsStats = await ky
		.get(
			`https://api.npmjs.org/downloads/range/2020-06-01:${new Date().toISOString().slice(0, 10)}/@biscuitland/${
				params.name
			}`,
		)
		.json<npmDownloadsPackage>();

	const readme = await ky
		.get(`https://raw.githubusercontent.com/oasisjs/biscuit/main/packages/${params.name}/README.md`)
		.arrayBuffer();

	const pkg = packages.objects[0].package;
	return {
		name: pkg.name,
		version: pkg.version,
		description: pkg.description,
		links: pkg.links,
		readme: Buffer.from(readme).toString(),
		downloads: npmDownloadsStats.downloads.reduce<number>((a, b) => a + b.downloads, 0),
	};
});
