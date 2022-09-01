import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#10b982',
		},
		secondary: {
			main: '#5865F2',
		},
		error: {
			main: '#ff7e7c',
		},
		warning: {
			main: '#ffe75c',
		},
		info: {
			main: '#c976f8',
		},
		success: {
			main: '#74c69d',
		},
		background: {
			default: '#111828',
			paper: '#1a222f',
		},
		text: {
			primary: '#edf2f6',
		},
	},
});

export default theme;
