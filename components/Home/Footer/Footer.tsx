import { Fragment } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import Sections from './Sections';

const Footer = () => {
	return (
		<Fragment>
			<Container sx={{ display: 'flex', flexDirection: 'column', width: '100%', paddingBottom: '50px', paddingTop: '50px' }} maxWidth="xl">
				<Sections
					image="/home/sections/core-code.png"
					package="core"
					description="Classes, functions and main structures to create an application with biscuit. Core contains the essentials to launch you to develop your own customized and scalable bot."
					direction="left"
				></Sections>
				<Sections
					image="/home/sections/types-code.png"
					package="api-types"
					description="1:1 type definition with the latest available in the Discord API. No need to worry about your code typing anymore."
					direction="right"
				></Sections>
				<Sections
					image="/home/sections/cache-code.png"
					package="cache"
					description="A cache will help you avoid making HTTP requests to the Discord api, saving you network resources and avoiding a possible Rate Limit."
					direction="left"
				></Sections>
				<Sections
					image="/home/sections/helpers-code.png"
					package="helpers"
					description="Collectors, builders and other helper functions such as setPresence."
					direction="right"
				></Sections>
				<Sections
					image="/home/sections/rest-code.png"
					package="rest"
					description="Wrapper ready to make any Discord API request with simple methods."
					direction="left"
				></Sections>
				<Sections
					image="/home/sections/ws-code.png"
					package="ws"
					description="A standalone gateway to interface Discord, it is meant to be used with a rest manager to send fetch requests to Discord"
					direction="right"
				></Sections>
			</Container>

			<Box
				sx={{
					backgroundColor: (theme) => theme.palette.background.paper,
					paddingLeft: '20px',
					paddingRight: '20px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingTop: '200px',
						paddingBottom: '200px',
						textAlign: 'center',
					}}
				>
					<Typography variant="h4" gutterBottom fontWeight="bold">
						Get ready to create your best Discord bot
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Biscuit is primarily inspired by Discord.js and Discordeno but it does not include a cache layer by default, we believe that
						you should not make software that does things it is not supposed to do.
					</Typography>
					<Stack direction="row" spacing={2} marginTop={3}>
						<Button variant="outlined" size="large">
							Github
						</Button>
						<Button variant="contained" size="large">
							Discord Server
						</Button>
					</Stack>
				</Container>

				<Box sx={{ padding: '20px', width: '100%' }} maxWidth="xl">
					<Divider sx={{ marginBottom: '30px' }}></Divider>
					<Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
						<Typography variant="subtitle1" gutterBottom>
							© {new Date().getFullYear()} biscuitland - All rights reserved.
						</Typography>
						<IconButton aria-label="go-to-up">
							<ArrowUpwardIcon />
						</IconButton>
					</Box>
				</Box>
			</Box>
		</Fragment>
	);
};

export default Footer;
