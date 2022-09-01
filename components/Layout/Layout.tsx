import { ReactNode, Fragment } from 'react';
import Head from 'next/head';

import { When } from 'react-if';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from './Menu';
import BottomNavigation from './BottomNavigation';

export type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const showBottonNavigation = !useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

	return (
		<Fragment>
			<Head>
				<title>biscuit.js | Discord Bot Framework</title>
			</Head>
			<Menu></Menu>
			<main style={{ paddingBottom: showBottonNavigation ? '90px' : 'unset' }}>{children}</main>
			<When condition={showBottonNavigation}>
				<BottomNavigation show={showBottonNavigation}></BottomNavigation>
			</When>
		</Fragment>
	);
};

export default Layout;
