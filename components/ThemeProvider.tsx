import { ReactNode } from 'react';

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';

import NextNProgress from 'nextjs-progressbar';

import Theme from '../lib/common/theme';

const ThemeCustomProvider = ({ children }: { children: ReactNode }) => (
	<ThemeProvider theme={Theme}>
		<CssBaseline />
		<NextNProgress color={Theme.palette.primary.main}></NextNProgress>
		{children}
	</ThemeProvider>
);

export default ThemeCustomProvider;
