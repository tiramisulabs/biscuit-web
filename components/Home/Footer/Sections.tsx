import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';

import { hexColorToRgba } from '../../../lib/funtions/colors';
import Styles from '../../../styles/Home/Sections.module.css';

export type SectionsComponentTypes = {
	package: string;
	description: string;
	image: string;
	direction: 'left' | 'right';
};

// TODO: Fix error about class names
const Gradient = Styled('div')(({ theme }) => {
	const color = (alpha: number) => hexColorToRgba(theme.palette.background.default, alpha);

	return {
		width: '100%',
		height: '100%',
		background: `linear-gradient(350deg, ${color(1)} 0%, ${color(0.8)} 40%, ${color(0.3)} 50%);`,
		padding: '40px',
	};
});

const Sections = ({ image, package: title, description, direction }: SectionsComponentTypes) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: direction === 'left' ? 'row' : 'row-reverse',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginBottom: '200px',
			}}
		>
			<Box width={700} height={500} className={Styles.container} style={{ backgroundImage: `url('${image}')` }}>
				<Gradient sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end' }}>
					<Typography variant="h5" color={(theme) => theme.palette.primary.main} fontWeight="bold" className={Styles.feature}>
						npm i @biscuitland/{title}
					</Typography>
				</Gradient>
			</Box>
			<Stack sx={{ maxWidth: '500px' }} direction="column" spacing={3}>
				<Box sx={{ display: 'flex', flexDirection: 'row', flexFlow: 'wrap', cursor: 'pointer' }} className={Styles.feature}>
					<Typography variant="h2" gutterBottom fontWeight="bold" color={(theme) => theme.palette.secondary.main}>
						@biscuitland/
					</Typography>
					<Typography variant="h2" gutterBottom fontWeight="bold">
						{title}
					</Typography>
				</Box>
				<Typography variant="h5" gutterBottom>
					{description}
				</Typography>
			</Stack>
		</Box>
	);
};

export default Sections;
