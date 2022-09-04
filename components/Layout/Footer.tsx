import Link from 'next/link';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export type FooterComponentTypes = {
	bottomNavigation: boolean;
	mounted: boolean;
};

const Footer = ({ bottomNavigation, mounted }: FooterComponentTypes) => {
	return (
		<Box
			sx={{ backgroundColor: (theme) => theme.palette.background.paper }}
			paddingTop="20px"
			paddingBottom={bottomNavigation && mounted ? '56px' : '20px'}
		>
			<Container>
				<Divider sx={{ marginBottom: '30px' }}></Divider>
				<Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
					<Typography variant="subtitle1" gutterBottom marginRight={5}>
						© {new Date().getFullYear()} biscuitland - All rights reserved.
					</Typography>
					<Link href={'/'}>
						<a>
							<IconButton aria-label="go-to-up">
								<ArrowUpwardIcon />
							</IconButton>
						</a>
					</Link>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
