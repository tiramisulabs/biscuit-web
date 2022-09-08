import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import EqualizerIcon from '@mui/icons-material/Equalizer';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BlindIcon from '@mui/icons-material/Blind';
import DownloadIcon from '@mui/icons-material/Download';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import Progressbar from '../Progressbar';

import { useInstallCommand } from '../../lib/hooks/install-command';
import { PackageInfo } from '../../pages/api/package/[name]';
import Styles from '../../../styles/Packages/Info.module.css';

const Header = ({ pkg }: { pkg: PackageInfo }) => {
	const installCommand = useInstallCommand(pkg.fullname);

	return (
		<Box
			className={Styles.header}
			sx={{ backgroundColor: (theme) => theme.palette.background.paper, padding: { xs: '0px', lg: '100px 50px 50px 50px' } }}
		>
			<Container className={Styles.info} maxWidth="lg">
				<Grid
					container
					spacing={1}
					columns={{ xs: 1, md: 2 }}
					className={Styles.stats}
					direction={{ lg: 'row', md: 'row', xs: 'column' }}
					justifyContent={{ xs: 'start', lg: 'space-between' }}
				>
					<Grid item width={{ xs: '100%', lg: 'fit-content' }}>
						<Stack maxWidth={600} sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
							<Stack direction="row">
								<Typography variant="h3" gutterBottom color={(theme) => theme.palette.secondary.main}>
									@{pkg.scope}/
								</Typography>
								<Typography variant="h3" gutterBottom>
									{pkg.name}
								</Typography>
							</Stack>
							<Typography variant="subtitle1" gutterBottom>
								{pkg.description}
							</Typography>
						</Stack>
						<Stack sx={{ display: { xs: 'block', lg: 'none', md: 'none' } }}>
							<Stack direction="row">
								<Typography variant="h4" gutterBottom color={(theme) => theme.palette.secondary.main}>
									@{pkg.scope}/
								</Typography>
								<Typography variant="h4" gutterBottom>
									{pkg.name}
								</Typography>
							</Stack>
							<Typography variant="body2" gutterBottom>
								{pkg.description}
							</Typography>
						</Stack>
					</Grid>
					<Grid item width={{ xs: '100%', md: 'fit-content', lg: 'fit-content' }}>
						<Stack spacing={2} alignItems="end" sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
							<Stack direction="row" spacing={2} alignItems="center">
								<DownloadIcon fontSize="large"></DownloadIcon>

								<Typography variant="h4" display="block" gutterBottom>
									{pkg.downloads.toLocaleString()} downloads
								</Typography>
							</Stack>
							<CopyToClipboard text={installCommand.command} onCopy={installCommand.onCopyCommand}>
								<Button
									color="secondary"
									variant="contained"
									fullWidth
									startIcon={installCommand.copied ? <CheckIcon></CheckIcon> : <KeyboardCommandKeyIcon></KeyboardCommandKeyIcon>}
								>
									{installCommand.copied ? 'Command copied' : installCommand.command}
								</Button>
							</CopyToClipboard>
						</Stack>
						<Stack spacing={2} marginTop={3} sx={{ display: { xs: 'block', md: 'none', lg: 'none' } }}>
							<Stack direction="row" spacing={2} alignItems="center">
								<DownloadIcon fontSize="large"></DownloadIcon>

								<Typography variant="h5" display="block" gutterBottom>
									{pkg.downloads.toLocaleString()} downloads
								</Typography>
							</Stack>
							<CopyToClipboard text={installCommand.command} onCopy={installCommand.onCopyCommand}>
								<Button
									color="secondary"
									variant="contained"
									fullWidth
									startIcon={installCommand.copied ? <CheckIcon></CheckIcon> : <KeyboardCommandKeyIcon></KeyboardCommandKeyIcon>}
								>
									{installCommand.copied ? 'Command copied' : installCommand.command}
								</Button>
							</CopyToClipboard>
						</Stack>
					</Grid>
				</Grid>
				<Grid
					container
					columns={3}
					className={Styles.stats}
					sx={{ backgroundColor: (theme) => theme.palette.background.default }}
					alignItems="center"
					justifyContent="center"
					direction={{ lg: 'row', md: 'row', xs: 'column' }}
					marginBottom={{ xs: '35px', lg: '0px' }}
					paddingTop={{ md: '20px' }}
				>
					<Grid item>
						<Stack direction="row" spacing={2}>
							<AutoAwesomeIcon></AutoAwesomeIcon>

							<Typography variant="overline" display="block" gutterBottom>
								Quality
							</Typography>
						</Stack>
						<Progressbar value={pkg.score.detail.quality} sx={{ width: '300px' }} color="success" />
					</Grid>
					<Grid item>
						<Stack direction="row" spacing={2}>
							<EqualizerIcon></EqualizerIcon>
							<Typography variant="overline" display="block" gutterBottom>
								Popularity
							</Typography>
						</Stack>
						<Progressbar value={pkg.score.detail.popularity} sx={{ width: '300px' }} color="warning" />
					</Grid>
					<Grid item>
						<Stack direction="row" spacing={2}>
							<BlindIcon></BlindIcon>
							<Typography variant="overline" display="block" gutterBottom>
								Maintenance
							</Typography>
						</Stack>
						<Progressbar value={pkg.score.detail.maintenance} sx={{ width: '300px' }} color="error" />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Header;
