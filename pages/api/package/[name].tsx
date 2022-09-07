import ky from 'ky';
import * as markdown from 'markdown-it';

import { NextApiRequest, NextApiResponse } from 'next';

type npmjsPackageScore = {
	final: number;
	detail: {
		quality: number;
		popularity: number;
		maintenance: number;
	};
};

type npmjsSearchPackages = {
	objects: Array<{ package: PackageInfo }>;
	total: number;
	time: string;
};

export type PackageInfo = {
	name: string;
	version: string;
	scope: string;
	description: string;
	links: { homepage: string };
	score: npmjsPackageScore;
	readme: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<PackageInfo>) {
	const name = req.query.name as string;

	const packages = await ky
		.get('http://registry.npmjs.com/-/v1/search', {
			headers: { Authorization: `Bearer ${process.env.API_KEY_GITHUB}` },
			searchParams: { text: `@biscuitland/${name}`, size: 1 },
		})
		.json<npmjsSearchPackages>();

	if (packages.total === 0) return res.status(404);

	const readme = await ky.get(`https://raw.githubusercontent.com/oasisjs/biscuit/main/packages/${name}/README.md`).arrayBuffer();
	const readmeParsed = Buffer.from(readme).toString();

	const { name: pkgName, description, version, scope, score, links } = packages.objects[0].package;
	res.status(200).json({
		name: pkgName,
		description,
		version,
		links,
		score,
		scope,
		readme: markdown.default().render(readmeParsed),
	});
}
