import React, { Fragment } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import ky from 'ky';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import Markdoc from '@markdoc/markdoc';

import Header from '../../components/Packages/Header';
import { PackageInfo } from '../api/package/[name]';

interface Props {
	pkg: PackageInfo;
}

const Packages: NextPage<Props> = ({ pkg }) => {
	const readme = Markdoc.transform(Markdoc.parse(pkg.readme));

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
				<Paper
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
					{Markdoc.renderers.react(readme, React)}
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
