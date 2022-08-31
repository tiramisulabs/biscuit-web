import { Fragment } from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import GitHubIcon from '@mui/icons-material/GitHub';
import CookieIcon from '@mui/icons-material/Cookie';
import DownloadIcon from '@mui/icons-material/Download';
import StarsIcon from '@mui/icons-material/Stars';

const HomeFooter = () => {
	return (
		<div style={{ marginTop: '50px' }}>
			<Stack spacing={2} direction="row">
				<Button variant="outlined" size="large" startIcon={<GitHubIcon></GitHubIcon>}>
					Github
				</Button>
				<Button variant="contained" size="large" startIcon={<CookieIcon></CookieIcon>}>
					yarn add @biscuitland/core
				</Button>
			</Stack>
			<Stack spacing={2} direction="row" marginTop={3}>
				<Chip label="1,720 downloads" color="secondary" icon={<DownloadIcon></DownloadIcon>} />
				<Chip label="72 Stars on Github" color="warning" icon={<StarsIcon></StarsIcon>} />
			</Stack>
		</div>
	);
};

export default HomeFooter;
