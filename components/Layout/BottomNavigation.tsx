import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import InventoryIcon from '@mui/icons-material/Inventory';
import BookIcon from '@mui/icons-material/Book';

export type BottomNavigationPros = {
	show: boolean;
};

const BottomNavigationComponent = ({ show }: BottomNavigationPros) => {
	const [menuPosition, setMenuPosition] = useState(-1);
	const [showDrawer, setShowDrawer] = useState(false);
	const router = useRouter();

	const hideDrawer = () => setShowDrawer(false);

	useEffect(() => {
		if (show) {
			if (router.route === '/') setMenuPosition(1);
			if (router.route === '/packages') setMenuPosition(2);
		}
	}, [router.route, show]);

	return (
		<Box position="fixed" bottom={0} left={0} right={0}>
			<BottomNavigation
				showLabels
				value={menuPosition}
				onChange={(_, value) => {
					if (value === 2) setShowDrawer(true);
					if (value === 1) router.push('/');
					if (value === 0) router.push('https://github.com/oasisjs');
				}}
			>
				<BottomNavigationAction label="Repository" icon={<GitHubIcon></GitHubIcon>} />
				<BottomNavigationAction label="Home" icon={<HomeIcon></HomeIcon>} />
				<BottomNavigationAction label="Menu" icon={<MenuIcon></MenuIcon>} />
			</BottomNavigation>
			<Drawer anchor="bottom" open={showDrawer} onClose={hideDrawer}>
				<nav aria-label="menu-drawer">
					<List
						sx={{ bgcolor: 'background.paper', width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
						subheader={<ListSubheader>Menu</ListSubheader>}
					>
						<ListItem disablePadding onClick={() => router.push('/packages')}>
							<ListItemButton selected={menuPosition === 3}>
								<ListItemIcon>
									<InventoryIcon />
								</ListItemIcon>
								<ListItemText primary="Packages" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding onClick={() => router.push('https://docs.biscuitjs.com')}>
							<ListItemButton>
								<ListItemIcon>
									<BookIcon />
								</ListItemIcon>
								<ListItemText primary="Documentation" />
							</ListItemButton>
						</ListItem>
					</List>
				</nav>
			</Drawer>
		</Box>
	);
};

export default BottomNavigationComponent;
