import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import createEmotionCache from '../lib/common/createEmotionCache';
import Layout from '../components/Layout/Layout';
import Theme from '../lib/common/theme';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: CustomAppProps) {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<CssVarsProvider theme={Theme} defaultMode="dark">
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
