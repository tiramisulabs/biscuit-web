import { useState } from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';

import CheckIcon from '@mui/icons-material/Check';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { hexColorToRgba } from '../../../lib/funtions/colors';
import { wait } from '../../../lib/funtions/utils';
import Styles from '../../../styles/Home/Sections.module.css';

export type SectionsComponentTypes = {
	packageName: string;
	description: string;
	image: string;
	direction: 'left' | 'right';
};

const Gradient = Styled('div')(({ theme }) => {
	const color = (alpha: number) => hexColorToRgba(theme.palette.background.default, alpha);

	return {
		width: '100%',
		height: '100%',
		background: `linear-gradient(350deg, ${color(1)} 0%, ${color(0.8)} 40%, ${color(0.3)} 50%);`,
		padding: '40px',
	};
});

const CustomAnchor = Styled('a')(() => ({}));

const Sections = ({ image, packageName, description, direction }: SectionsComponentTypes) => {
	const [copied, setCopied] = useState(false);
	const [command, setCommand] = useState(`npm install @biscuitland/${packageName}`);

	const onCopyCommand = async () => {
		setCopied(true);
		await wait(1_000);

		if (command.startsWith('yarn')) setCommand(`npm install @biscuitland/${packageName}`);
		else setCommand(`yarn add @biscuitland/${packageName}`);

		setCopied(false);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: direction === 'left' ? { xs: 'column', md: 'row' } : { xs: 'column', md: 'row-reverse' },
				justifyContent: { md: 'space-between', xs: 'center' },
				alignItems: 'center',
				marginBottom: '200px',
				padding: '15px',
			}}
		>
			<Box
				width={{ xs: '100%', md: '700px' }}
				height={{ xs: '300px', md: '500px' }}
				className={Styles.container}
				style={{ backgroundImage: `url('${image}')` }}
				marginRight={{ xs: '0px', md: '50px' }}
			>
				<Gradient sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end' }}>
					<CopyToClipboard text={command} onCopy={onCopyCommand}>
						<Typography
							variant="h5"
							color={(theme) => theme.palette.primary.main}
							fontWeight="bold"
							className={Styles.feature}
							display={{ xs: 'none', md: 'block' }}
						>
							{copied ? (
								<Stack spacing={1} direction="row" alignItems="center">
									<CheckIcon></CheckIcon> <p>Command copied</p>
								</Stack>
							) : (
								command
							)}
						</Typography>
					</CopyToClipboard>
				</Gradient>
			</Box>
			<Stack sx={{ maxWidth: { xs: '100%', md: '500px' } }} direction="column" spacing={3}>
				<Box className={Styles.feature}>
					<Link href={{ pathname: '/packages/[slug]', query: { slug: packageName } }} passHref>
						<CustomAnchor sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', flexFlow: 'wrap', cursor: 'pointer' }}>
							<Typography variant="h2" gutterBottom fontWeight="bold" color={(theme) => theme.palette.secondary.main}>
								@biscuitland/
							</Typography>
							<Typography variant="h2" gutterBottom fontWeight="bold">
								{packageName}
							</Typography>
						</CustomAnchor>
					</Link>
				</Box>
				<Box className={Styles.feature}>
					<Link href={{ pathname: '/packages/[slug]', query: { slug: packageName } }} passHref>
						<CustomAnchor sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'row', flexFlow: 'wrap', cursor: 'pointer' }}>
							<Typography variant="h3" gutterBottom fontWeight="bold" color={(theme) => theme.palette.secondary.main}>
								@biscuitland/
							</Typography>
							<Typography variant="h3" gutterBottom fontWeight="bold">
								{packageName}
							</Typography>
						</CustomAnchor>
					</Link>
				</Box>
				<Typography variant="h5" gutterBottom>
					{description}
				</Typography>
			</Stack>
		</Box>
	);
};

export default Sections;
