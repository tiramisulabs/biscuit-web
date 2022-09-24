import Image from 'next/image';
import Link from 'next/link';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';

import Styles from '../../styles/Layout/Menu.module.css';
import ActiveLink from '../ActiveLink';
import { hexColorToRgba } from '../../lib/funtions/colors';

const Menu = () => {
	return (
		<Box
			className={Styles.container}
			component="div"
			sx={{ display: { xs: 'none', sm: 'flex' }, bgcolor: (theme) => hexColorToRgba(theme.palette.background.default, 0.5) }}
			flexDirection="row"
			justifyContent="space-between"
			zIndex={10}
		>
			<Stack spacing={2} direction="row" alignItems="center">
				<Link href={'/'} passHref>
					<a>
						<Image src={'/icon.svg'} width="50px" height="50px" alt="Biscuit logo"></Image>
					</a>
				</Link>
				<Stack spacing={2} direction="row" alignItems="center">
					<ActiveLink href={'/'} activeClassName={Styles['menu-item-selected']} passHref>
						<a>
							<Button variant="text" startIcon={<HomeIcon></HomeIcon>}>
								Home
							</Button>
						</a>
					</ActiveLink>
					<Link href={'https://docs.biscuitjs.com'}>
						<a>
							<Button variant="text" startIcon={<BookIcon></BookIcon>}>
								Documentation
							</Button>
						</a>
					</Link>
				</Stack>
			</Stack>
			<Stack spacing={2} direction="row" alignItems="center">
				<Link href={'https://github.com/oasisjs/biscuit'}>
					<a>
						<Button variant="text" startIcon={<GitHubIcon></GitHubIcon>}>
							Repository
						</Button>
					</a>
				</Link>
			</Stack>
		</Box>
	);
};

export default Menu;
