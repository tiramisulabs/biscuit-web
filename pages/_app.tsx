import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
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
				<meta
					name="description"
					content="Biscuit is primarily inspired by Discord.js and Discordeno but it does not include a cache layer by default, we believe that you should not make software that does things it is not supposed to do."
				/>
				<meta name="application-name" content="@biscuitland/core" />
				<meta name="og:site_name" content="biscuitjs | Discord Bot Framework" />
				<meta name="og:url" content="https://biscuitjs.com/" />
				<meta name="og:title" content="biscuitjs | Discord Bot Framework" />
				<meta name="og:type" content="website" />
				<meta name="og:image" content="https://biscuitjs.com/og_background.png" />
				<meta
					name="og:description"
					content="Biscuit is primarily inspired by Discord.js and Discordeno but it does not include a cache layer by default, we believe that you should not make software that does things it is not supposed to do."
				/>
			</Head>
			<ThemeProvider theme={Theme}>
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;

interface CustomAppProps extends AppProps {
	emotionCache?: EmotionCache;
}
