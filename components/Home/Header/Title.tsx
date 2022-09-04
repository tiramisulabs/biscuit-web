import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Image from 'next/image';

const HomeTitle = () => {
	return (
		<Box textAlign={'start'} marginBottom={'20px'}>
			<Image src={'/icon.svg'} width="200" height="200" alt="biscuit.js Icon"></Image>

			<Typography variant="h2" gutterBottom fontWeight={'bold'} maxWidth={500} margin="0">
				Create wonderful bots with{' '}
				<Typography variant="h2" color="secondary" component="span" fontWeight={'bold'}>
					biscuitjs
				</Typography>
			</Typography>

			<Typography variant="h5" gutterBottom>
				A brand new bleeding edge non bloated Discord library
			</Typography>
		</Box>
	);
};

export default HomeTitle;
