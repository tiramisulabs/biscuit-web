import 'animate.css/animate.min.css';

import { Fragment } from 'react';
import dynamic from 'next/dynamic';
import ky from 'ky';

import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

import { StatsResponse } from './api/stats';
import { hexColorToRgba } from '../lib/funtions/colors';
import Styles from '../styles/Home/Home.module.css';

import type { GetStaticProps, NextPage } from 'next';
const HeaderTitle = dynamic(() => import('../components/Home/Header/Title'));
const HeaderFooter = dynamic(() => import('../components/Home/Header/Footer'));
const Footer = dynamic(() => import('../components/Home/Footer/Footer'));

export type HomeProps = {
	stats: StatsResponse;
};

const Gradient = styled('div')(({ theme }) => {
	const color = (alpha: number) => hexColorToRgba(theme.palette.background.default, alpha);

	return {
		width: '100%',
		height: '100%',
		background: `linear-gradient(90deg, ${color(1)} 0%, ${color(1)} 45%, ${color(0.3)} 100%);`,
		padding: '20px',
	};
});

const Home: NextPage<HomeProps> = ({ stats }) => {
	return (
		<Fragment>
			<div className={Styles.container}>
				<Gradient sx={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: '20px', justifyContent: 'center' }}>
					<Container>
						<HeaderTitle />
						<HeaderFooter repository={stats.repository} npm={stats.npm} />
					</Container>
				</Gradient>
			</div>
			<Footer></Footer>
		</Fragment>
	);
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const apiStats = await ky.get('/api/stats').json<StatsResponse>();
	return { props: { stats: apiStats }, revalidate: 3600 };
};

export default Home;
