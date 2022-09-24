import React, { Fragment } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import ky from 'ky';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import Header from '../../components/Packages/Header';
import { PackageInfo } from '../api/package/[name]';

import Styles from '../../styles/Packages/Container.module.css';
import ReadmeLoading from '../../components/Packages/ReadmeLoading';

const Readme = dynamic(() => import('../../components/Packages/Readme'), { ssr: false, loading: () => <ReadmeLoading /> });

interface Props {
	pkg: PackageInfo;
}

const Packages: NextPage<Props> = ({ pkg }) => {
	return (
		<Fragment>
			<Head>
				<title>{pkg.fullname} | biscuitjs</title>
				<meta name="og:title" content={`${pkg.fullname} | biscuitjs`} />
				<meta name="description" content={pkg.description} />
				<meta name="og:description" content={pkg.description} />
			</Head>
			<Header pkg={pkg}></Header>
			<Container maxWidth="lg" sx={{ minHeight: '100vh' }}>
				<Paper
					className={Styles.container}
					elevation={0}
					sx={{
						overflowX: 'auto',
						width: ' 100%',
						padding: '20px',
						marginBottom: '20px',
						borderBottomLeftRadius: '20px',
						borderBottomRightRadius: '20px',
					}}
				>
					<Readme readme={pkg.readme} />
				</Paper>
			</Container>
		</Fragment>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const packageInfo = await ky.get(`${process.env.NEXT_PUBLIC_API_URL}/package/${ctx.query.name?.at(0)}`).json<PackageInfo>();

	return {
		props: {
			pkg: packageInfo,
		},
	};
};

export default Packages;
