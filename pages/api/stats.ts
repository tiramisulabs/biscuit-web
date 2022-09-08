import type { NextApiRequest, NextApiResponse } from 'next';

import ky from 'ky';

type githubRepository = {
	id: string;
	name: string;
	description: string;
	url: string;
	stargazers_count: number;
};

export type npmDownloadsStatsTotal = {
	start: string;
	end: string;
	package: string;
	downloads: Array<{ downloads: number; day: string }>;
};

export type StatsResponse = {
	repository: {
		name: string;
		description: string;
		url: string;
		stargazers: number;
	};
	npm: {
		name: string;
		downloads: number;
	};
};

export default async function handler(_: NextApiRequest, res: NextApiResponse<StatsResponse>) {
	const githubRepository = await ky
		.get('https://api.github.com/repos/oasisjs/biscuit', {
			headers: { Authorization: `Bearer ${process.env.API_KEY_GITHUB}` },
		})
		.json<githubRepository>();

	const npmDownloadsStats = await ky
		.get(`https://api.npmjs.org/downloads/range/2020-06-01:${new Date().toISOString().slice(0, 10)}/@biscuitland/core`)
		.json<npmDownloadsStatsTotal>();

	res.status(200).json({
		repository: {
			name: githubRepository.name,
			description: githubRepository.description,
			url: githubRepository.url,
			stargazers: githubRepository.stargazers_count,
		},
		npm: {
			name: npmDownloadsStats.package,
			downloads: npmDownloadsStats.downloads.reduce<number>((a, b) => a + b.downloads, 0),
		},
	});
}
