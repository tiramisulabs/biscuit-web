import '../styles/globals.css';
import 'animate.css/animate.min.css';

import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { CacheProvider, EmotionCache } from '@emotion/react';

import createEmotionCache from '../lib/common/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();
const ThemeCustomProvider = dynamic(() => import('../components/ThemeProvider'));

const Layout = dynamic(() => import('../components/Layout/Layout'));

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
				<meta name="og:site_name" content="npm i @biscuitland/core" />
				<meta name="og:url" content="https://www.biscuitjs.com" />
				<meta name="og:title" content="biscuitjs | Discord Bot Framework" />
				<meta name="og:type" content="website" />
				<meta name="og:image" content="https://www.biscuitjs.com/og_background.webp" />
				<meta
					name="og:description"
					content="Biscuit is primarily inspired by Discord.js and Discordeno but it does not include a cache layer by default, we believe that you should not make software that does things it is not supposed to do."
				/>
			</Head>
			<ThemeCustomProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeCustomProvider>
		</CacheProvider>
	);
}

export default MyApp;

interface CustomAppProps extends AppProps {
	emotionCache?: EmotionCache;
}
