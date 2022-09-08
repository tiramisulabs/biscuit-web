import { useEffect, useState } from 'react';

import ky from 'ky';

import { StatsResponse } from '../../pages/api/stats';

const useStats = () => {
	const [loading, setLoading] = useState(true);
	const [stats, setStats] = useState<StatsResponse>({
		repository: { name: 'oasisjs/biscuit', description: '', url: '', stargazers: 0 },
		npm: { name: '@biscuitland/core', downloads: 0 },
	});

	useEffect(() => {
		const statsData = async () => {
			const apiStats = await ky.get('/api/stats').json<StatsResponse>();
			setLoading(false);
			setStats(apiStats);
		};

		statsData();
	}, []);

	return {
		loading,
		stats,
	};
};

export default useStats;
