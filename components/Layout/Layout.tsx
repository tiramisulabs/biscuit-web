import { ReactNode, Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

import { When, Unless } from 'react-if';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Menu from './Menu';

export type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const showBottonNavigation = !useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
	const router = useRouter();
	const [menuPosition, setMenuPosition] = useState(-1);

	useEffect(() => {
		if (showBottonNavigation) {
			if (router.route === '/') setMenuPosition(1);
		}
	}, [router.route, showBottonNavigation]);

	return (
		<Fragment>
			<Head>
				<title>biscuit.js | Discord Bot Framework</title>
			</Head>
			<Menu></Menu>
			<main style={{ paddingBottom: showBottonNavigation ? '35px' : 'unset' }}>{children}</main>
			<When condition={showBottonNavigation}>
				<Box position="fixed" bottom={0} left={0} right={0}>
					<BottomNavigation
						showLabels
						value={menuPosition}
						onChange={(_, value) => {
							if (value === 1) router.push('/');
							if (value === 0) router.push('https://github.com/oasisjs');
						}}
					>
						<BottomNavigationAction label="Repository" icon={<GitHubIcon></GitHubIcon>} />
						<BottomNavigationAction label="Home" icon={<HomeIcon></HomeIcon>} />
						<BottomNavigationAction label="Menu" icon={<MenuIcon></MenuIcon>} />
					</BottomNavigation>
				</Box>
			</When>
		</Fragment>
	);
};

export default Layout;
