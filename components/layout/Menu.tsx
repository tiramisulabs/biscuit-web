import { useEffect, useState } from 'react';
import Image from 'next/image';

import { useColorScheme, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import Styles from '../../styles/Layout/Menu.module.css';
import ActiveLink from '../ActiveLink';
import { hexColorToRgba } from '../../lib/funtions/colors';

// TODO: Logic for ActiveLink
const Menu = () => {
	const { mode, setMode } = useColorScheme();
	const theme = useTheme();

	// For server-side rendering
	// Read more on https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className={Styles.container} style={{ backgroundColor: hexColorToRgba(theme.palette.background.default, 0.5) }}>
			<Stack spacing={2} direction="row" alignItems="center">
				<ActiveLink href={'/'}>
					<a>
						<Image src={'/icon.svg'} width={50} height={50} alt="Biscuit logo"></Image>
					</a>
				</ActiveLink>
				<Stack spacing={2} direction="row" alignItems="center">
					<ActiveLink href={'/'}>
						<a>
							<Button variant="text" startIcon={<HomeIcon></HomeIcon>}>
								Home
							</Button>
						</a>
					</ActiveLink>
					<ActiveLink href={'/packages'}>
						<a>
							<Button variant="text" startIcon={<InventoryIcon></InventoryIcon>}>
								Packages
							</Button>
						</a>
					</ActiveLink>
				</Stack>
			</Stack>
			<Stack spacing={2} direction="row" alignItems="center">
				<ActiveLink href={'/packages'}>
					<a>
						<Button variant="text" startIcon={<GitHubIcon></GitHubIcon>}>
							Repository
						</Button>
					</a>
				</ActiveLink>
				<IconButton
					color="primary"
					component="label"
					onClick={() => {
						if (mode === 'light') {
							setMode('dark');
						} else {
							setMode('light');
						}
					}}
				>
					{mode === 'dark' ? <LightModeIcon></LightModeIcon> : <DarkModeIcon></DarkModeIcon>}
				</IconButton>
			</Stack>
		</div>
	);
};

export default Menu;
