import { Fragment } from 'react';
import type { NextPage } from 'next';

import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

import { hexColorToRgba } from '../lib/funtions/colors';
import Title from '../components/Home/Title';
import Footer from '../components/Home/Footer';
import Styles from '../styles/Home/Home.module.css';

const Gradient = styled('div')(({ theme }) => {
	const color = (alpha: number) => hexColorToRgba(theme.palette.background.default, alpha);

	return {
		width: '100%',
		height: '100%',
		background: `linear-gradient(90deg, ${color(1)} 0%, ${color(1)} 45%, ${color(0.3)} 100%);`,
		padding: '20px',
	};
});

const Home: NextPage = () => {
	return (
		<Fragment>
			<div className={Styles.container}>
				<Gradient sx={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: '20px', justifyContent: 'center' }}>
					<Container>
						<Title></Title>
						<Footer></Footer>
					</Container>
				</Gradient>
			</div>
		</Fragment>
	);
};

export default Home;
