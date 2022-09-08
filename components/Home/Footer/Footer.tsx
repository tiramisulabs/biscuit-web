import { Fragment } from 'react';
import Link from 'next/link';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

import Sections from './Sections';

const Footer = () => {
	return (
		<Fragment>
			<Container sx={{ display: 'flex', flexDirection: 'column', width: '100%', paddingBottom: '50px', paddingTop: '50px' }} maxWidth="xl">
				<Sections
					image="/home/sections/core-code.webp"
					packageName="core"
					description="Classes, functions and main structures to create an application with biscuit. Core contains the essentials to launch you to develop your own customized and scalable bot."
					direction="left"
				></Sections>
				<Sections
					image="/home/sections/types-code.webp"
					packageName="api-types"
					description="1:1 type definition with the latest available in the Discord API. No need to worry about your code typing anymore."
					direction="right"
				></Sections>
				<Sections
					image="/home/sections/cache-code.webp"
					packageName="cache"
					description="A cache will help you avoid making HTTP requests to the Discord api, saving you network resources and avoiding a possible Rate Limit."
					direction="left"
				></Sections>
				<Sections
					image="/home/sections/helpers-code.webp"
					packageName="helpers"
					description="Collectors, builders and other helper functions such as setPresence."
					direction="right"
				></Sections>
				<Sections
					image="/home/sections/rest-code.webp"
					packageName="rest"
					description="Wrapper ready to make any Discord API request with simple methods."
					direction="left"
				></Sections>
				<Sections
					image="/home/sections/ws-code.webp"
					packageName="ws"
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
					<Stack direction={{ xs: 'column', md: 'row' }} spacing={2} marginTop={3}>
						<Link href={'https://github.com/oasisjs'} passHref>
							<a>
								<Button variant="outlined" size="large" startIcon={<GitHubIcon></GitHubIcon>}>
									Github
								</Button>
							</a>
						</Link>
						<Link href={'https://discord.com/invite/XNw2RZFzaP'} passHref>
							<a>
								<Button variant="contained" size="large" startIcon={<PsychologyAltIcon></PsychologyAltIcon>}>
									Discord Server
								</Button>
							</a>
						</Link>
					</Stack>
				</Container>
			</Box>
		</Fragment>
	);
};

export default Footer;