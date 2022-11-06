import Link from 'next/link';

import Grow from '@mui/material/Grow';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import StarsIcon from '@mui/icons-material/Stars';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import CheckIcon from '@mui/icons-material/Check';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useInstallCommand } from '../../../lib/hooks/install-command';
import { StatsResponse } from '../../../pages/api/stats';
import { FC } from 'react';

export type HomeFooterProps = StatsResponse;

const HomeFooter: FC<HomeFooterProps> = ({ repository, npm }) => {
	const installCommand = useInstallCommand('@biscuitland/core');

	return (
		<Grow in timeout={3_000} unmountOnExit>
			<div style={{ marginTop: '50px' }}>
				<Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
					<Link href={'https://github.com/oasisjs'} passHref>
						<a>
							<Button variant="outlined" size="large" startIcon={<GitHubIcon></GitHubIcon>} fullWidth>
								Github
							</Button>
						</a>
					</Link>
					<CopyToClipboard text={installCommand.command} onCopy={installCommand.onCopyCommand}>
						<Button
							startIcon={installCommand.copied ? <CheckIcon></CheckIcon> : <KeyboardCommandKeyIcon></KeyboardCommandKeyIcon>}
							variant="contained"
						>
							{installCommand.copied ? 'Command copied' : installCommand.command}
						</Button>
					</CopyToClipboard>
				</Stack>
				<Stack spacing={2} direction="row" marginTop={3} justifyContent={{ xs: 'center', sm: 'unset' }}>
					<Chip label={`${npm.downloads.toLocaleString()} downloads`} color="secondary" icon={<DownloadIcon></DownloadIcon>} />
					<Chip label={`${repository.stargazers.toLocaleString()} Stars on Github`} color="warning" icon={<StarsIcon></StarsIcon>} />
				</Stack>
			</div>
		</Grow>
	);
};

export default HomeFooter;
