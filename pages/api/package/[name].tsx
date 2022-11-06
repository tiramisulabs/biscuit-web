import ky from 'ky';

import { NextApiRequest, NextApiResponse } from 'next';
import { npmDownloadsStatsTotal } from '../stats';

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

export default async function handler(req: NextApiRequest, res: NextApiResponse<PackageInfo>) {
	const name = req.query.name as string;

	const packages = await ky
		.get('http://registry.npmjs.com/-/v1/search', {
			searchParams: { text: `@biscuitland/${name}`, size: 1 },
		})
		.json<npmjsSearchPackages>();

	if (packages.total === 0) return res.status(404);

	const npmDownloadsStats = await ky
		.get(`https://api.npmjs.org/downloads/range/2020-06-01:${new Date().toISOString().slice(0, 10)}/@biscuitland/${name}`)
		.json<npmDownloadsStatsTotal>();

	const readme = await ky.get(`https://raw.githubusercontent.com/oasisjs/biscuit/main/packages/${name}/README.md`).arrayBuffer();
	const readmeParsed = Buffer.from(readme).toString();

	const { name: pkgName, description, version, scope, links } = packages.objects[0].package;
	const score = packages.objects[0].score;
	const customName = pkgName.split('/')[1];

	res.status(200).json({
		name: customName,
		fullname: `@${scope}/${customName}`,
		description,
		version,
		links,
		score: {
			...score,
			detail: {
				popularity: score.detail.popularity * 100,
				quality: score.detail.quality * 100,
				maintenance: score.detail.maintenance * 100,
			},
		},
		scope,
		readme: readmeParsed,
		downloads: npmDownloadsStats.downloads.reduce<number>((a, b) => a + b.downloads, 0),
	});
}
