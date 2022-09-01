import { useState } from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import StarsIcon from '@mui/icons-material/Stars';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import CheckIcon from '@mui/icons-material/Check';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import ActiveLink from '../ActiveLink';
import { wait } from '../../lib/funtions/utils';

const HomeFooter = () => {
	const [copied, setCopied] = useState(false);
	const [command, setCommand] = useState('yarn add @biscuitland/core');

	return (
		<div style={{ marginTop: '50px' }}>
			<Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
				<ActiveLink href={'https://github.com/oasisjs'}>
					<Button variant="outlined" size="large" startIcon={<GitHubIcon></GitHubIcon>}>
						Github
					</Button>
				</ActiveLink>
				<CopyToClipboard
					text={command}
					onCopy={async () => {
						setCopied(true);
						await wait(1_000);

						if (command.startsWith('yarn')) setCommand('npm install @biscuitland/core');
						else setCommand('yarn add @biscuitland/core');

						setCopied(false);
					}}
				>
					<Button startIcon={copied ? <CheckIcon></CheckIcon> : <KeyboardCommandKeyIcon></KeyboardCommandKeyIcon>} variant="contained">
						{copied ? 'Command copied' : command}
					</Button>
				</CopyToClipboard>
			</Stack>
			<Stack spacing={2} direction="row" marginTop={3}>
				<Chip label="1,720 downloads" color="secondary" icon={<DownloadIcon></DownloadIcon>} />
				<Chip label="72 Stars on Github" color="warning" icon={<StarsIcon></StarsIcon>} />
			</Stack>
		</div>
	);
};

export default HomeFooter;
