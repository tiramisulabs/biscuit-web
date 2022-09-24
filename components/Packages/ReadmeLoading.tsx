import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const ReadmeLoading = () => {
	return (
		<Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center">
			<Stack alignItems="center" spacing={5}>
				<CircularProgress size={100} />
				<Typography variant="h4" gutterBottom>
					Loading readme...
				</Typography>
			</Stack>
		</Box>
	);
};

export default ReadmeLoading;
