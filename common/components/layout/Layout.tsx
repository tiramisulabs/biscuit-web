import { ReactNode, Fragment } from 'react';
import Head from 'next/head';

import Menu from './Menu';

export type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<Fragment>
			<Head>
				<title>biscuit.js | Discord Bot Framework</title>
			</Head>
			<Menu></Menu>
			<main>{children}</main>
		</Fragment>
	);
};

export default Layout;
