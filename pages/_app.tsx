import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import createEmotionCache from '../lib/createEmotionCache';
import Theme from '../lib/theme';
import Layout from '../components/layout/Layout';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: CustomAppProps) {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<CssVarsProvider theme={Theme}>
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CssVarsProvider>
		</CacheProvider>
	);
}

export default MyApp;

interface CustomAppProps extends AppProps {
	emotionCache?: EmotionCache;
}
