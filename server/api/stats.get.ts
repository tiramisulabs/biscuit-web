import ky from 'ky';

export type npmDownloadsPackage = {
	start: string;
	end: string;
	package: string;
	downloads: Array<{ downloads: number; day: string }>;
};

type githubRepository = {
	id: string;
	name: string;
	description: string;
	url: string;
	stargazers_count: number;
	forks_count: number;
};

export default defineEventHandler(async () => {
	const config = useRuntimeConfig();
	const npmjsCorePkgDownloads = await ky
		.get(
			`https://api.npmjs.org/downloads/range/2020-06-01:${new Date()
				.toISOString()
				.slice(0, 10)}/@biscuitland/core`,
		)
		.json<npmDownloadsPackage>();

	const githubCorePkg = await ky('https://api.github.com/repos/oasisjs/biscuit').json<githubRepository>();
	const serverSupportStats = await ky(
		`https://discord.com/api/invites/${config.public.discordSupportUrl.split('/')[3]}?with_counts=true`,
	).json<{ approximate_member_count: number }>();

	return {
		package: npmjsCorePkgDownloads.package,
		downloads: npmjsCorePkgDownloads.downloads.reduce<number>((a, b) => a + b.downloads, 0),
		stargazers: githubCorePkg.stargazers_count,
		forks: githubCorePkg.forks_count,
		discord_support_members: serverSupportStats.approximate_member_count,
	};
});
