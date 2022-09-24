import Image from 'next/image';

import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomeTitle = () => {
	return (
		<Box textAlign={'start'} marginBottom={'20px'}>
			<Image src={'/icon.svg'} width="200px" height="200px" alt="biscuit.js Icon"></Image>
			<Grow in={true} timeout={1_000}>
				<Typography variant="h2" gutterBottom fontWeight={'bold'} maxWidth={500} margin="0">
					Create wonderful bots with{' '}
					<Typography variant="h2" color="secondary" component="span" fontWeight={'bold'}>
						biscuitjs
					</Typography>
				</Typography>
			</Grow>
			<Grow in={true} timeout={2_000}>
				<Typography variant="h5" gutterBottom marginTop="10px">
					A brand new bleeding edge non bloated Discord library.
				</Typography>
			</Grow>
		</Box>
	);
};

export default HomeTitle;
