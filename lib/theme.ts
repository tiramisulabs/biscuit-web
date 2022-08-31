import { experimental_extendTheme } from '@mui/material/styles';

const theme = experimental_extendTheme({
	colorSchemes: {
		dark: {
			palette: {
				primary: {
					main: '#10b982',
				},
				secondary: {
					main: '#7582eb',
				},
				error: {
					main: '#ff7e7c',
				},
				warning: {
					main: '#ffff75',
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
		},
		light: {
			palette: {
				primary: {
					main: '#10b982',
				},
				secondary: {
					main: '#7582eb',
				},
				error: {
					main: '#ff7e7c',
				},
				warning: {
					main: '#ffff75',
				},
				info: {
					main: '#c976f8',
				},
				success: {
					main: '#74c69d',
				},
				background: {
					default: '#fcfcfc',
					paper: '#fafafa',
				},
				text: {
					primary: '#000',
				},
			},
		},
	},
});

export default theme;
