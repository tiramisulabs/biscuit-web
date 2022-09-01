import { ReactNode, Fragment, useState, useEffect } from 'react';
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
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<Fragment>
			<Head>
				<title>biscuitjs | Discord Bot Framework</title>
			</Head>
			<Menu></Menu>
			<main style={{ paddingBottom: showBottonNavigation && mounted ? '90px' : 'unset' }}>{children}</main>
			<When condition={showBottonNavigation && mounted}>
				<BottomNavigation show={showBottonNavigation}></BottomNavigation>
			</When>
		</Fragment>
	);
};

export default Layout;
