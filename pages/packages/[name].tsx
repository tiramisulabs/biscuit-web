import React, { Fragment } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import { NextSeo } from 'next-seo';
import { CodeBlock, dracula } from 'react-code-blocks';
import Markdown from 'markdown-to-jsx';
import ky from 'ky';

import Header from '../../components/Packages/Header';
import { PackageInfo } from '../api/package/[name]';

import Styles from '../../styles/Packages/Container.module.css';

export type PackageProps = {
	pkg: PackageInfo;
};

const Packages: NextPage<PackageProps> = ({ pkg }) => {
	return (
		<Fragment>
			<NextSeo
				title={pkg.fullname}
				description={pkg.description}
				openGraph={{ images: [{ url: `https://www.biscuitjs.com/home/sections/${pkg.name}-code.webp` }] }}
			/>
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
					<Markdown
						options={{
							overrides: {
								code: {
									component: ({ children }) => (
										<CodeBlock
											showLineNumbers={false}
											customStyle={{ backgroundColor: 'transparent', overflowX: 'scroll', overflowY: 'hidden' }}
											theme={dracula}
											text={children}
											language="javascript"
										/>
									),
								},
							},
						}}
					>
						{pkg.readme.replaceAll('```js', '\n```js').replaceAll('```', '\n```')}
					</Markdown>
				</Paper>
			</Container>
		</Fragment>
	);
};

export const getStaticProps: GetStaticProps<PackageProps> = async (ctx) => {
	const packageInfo = await ky.get(`${process.env.NEXT_PUBLIC_API_URL}/package/${ctx.params?.name}`).json<PackageInfo>();

	return {
		props: {
			pkg: packageInfo,
		},
		revalidate: 3600,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const packagesList = await ky
		.get('https://registry.npmjs.com/-/v1/search?text=@biscuitland')
		.json<{ objects: Array<{ package: PackageInfo }> }>();

	const paths = packagesList.objects.map((p) => ({ params: { name: p.package.name.split('/')[1] } }));
	return { paths, fallback: 'blocking' };
};

export default Packages;
