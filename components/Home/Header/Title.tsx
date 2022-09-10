import Fade from '@mui/material/Fade';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Image from 'next/image';

const HomeTitle = () => {
	return (
		<Box textAlign={'start'} marginBottom={'20px'}>
			<Image src={'/icon.svg'} width="200px" height="200px" alt="biscuit.js Icon"></Image>
			<Fade in timeout={2e3} unmountOnExit>
				<Typography variant="h2" gutterBottom fontWeight={'bold'} maxWidth={500} margin="0">
					Create wonderful bots with{' '}
					<Typography variant="h2" color="secondary" component="span" fontWeight={'bold'}>
						biscuitjs
					</Typography>
				</Typography>
			</Fade>
			<Fade in timeout={3e3} unmountOnExit>
				<Typography variant="h5" gutterBottom marginTop="10px">
					A brand new bleeding edge non bloated Discord library.
				</Typography>
			</Fade>
		</Box>
	);
};

export default HomeTitle;
