import { ReactNode, Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { When } from 'react-if';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from './Menu';
import BottomNavigation from './BottomNavigation';
import Footer from './Footer';
import dynamic from 'next/dynamic';

const ScrollToUp = dynamic(() => import('../Shared/ScrollToUp'), { ssr: false });

export type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const showBottonNavigation = !useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
	const [mounted, setMounted] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<Fragment>
			<Head>
				<title>biscuitjs | Discord Bot Framework</title>
			</Head>
			<Menu></Menu>
			<ScrollToUp />
			<main style={{ paddingTop: router.pathname === '/' ? '0px' : showBottonNavigation ? '0px' : '60px' }}>{children}</main>
			<When condition={showBottonNavigation && mounted}>
				<BottomNavigation show={showBottonNavigation}></BottomNavigation>
			</When>
			<Footer bottomNavigation={showBottonNavigation} mounted={mounted}></Footer>
		</Fragment>
	);
};

export default Layout;
