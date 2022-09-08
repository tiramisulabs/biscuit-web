import { Fragment } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import ky from 'ky';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import Styles from '../../styles/Packages/Info.module.css';
import Header from '../../components/Packages/Header';
import { PackageInfo } from '../api/package/[name]';

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
			<Container maxWidth="lg">
				<Paper className={Styles.readme} elevation={0}>
					<div dangerouslySetInnerHTML={{ __html: pkg.readme }} style={{ overflowX: 'auto' }}></div>
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
