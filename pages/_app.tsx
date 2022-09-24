import '../styles/globals.css';

import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { DefaultSeo } from 'next-seo';

import createEmotionCache from '../lib/common/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();
const ThemeCustomProvider = dynamic(() => import('../components/ThemeProvider'));

const Layout = dynamic(() => import('../components/Layout/Layout'));

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: CustomAppProps) {
	const seo = {
		title: 'biscuitjs | Discord Bot Framework',
		description:
			'Biscuit is primarily inspired by Discord.js and Discordeno but it does not include a cache layer by default, we believe that you should not make software that does things it is not supposed to do.',
	};

	return (
		<CacheProvider value={emotionCache}>
			<DefaultSeo
				description={seo.description}
				defaultTitle={seo.title}
				titleTemplate="%s | biscuitjs"
				additionalMetaTags={[
					{ name: 'viewport', content: 'initial-scale=1, width=device-width' },
					{ name: 'application-name', content: 'npm i @biscuitland/core' },
				]}
				twitter={{ site: '@biscuitjs', cardType: 'summary_large_image' }}
				openGraph={{
					description: seo.description,
					site_name: 'npm i @biscuitland/core',
					url: 'https://www.biscuitjs.com',
					type: 'website',
					images: [
						{
							url: 'https://www.biscuitjs.com/og_background.webp',
							type: 'image/webp',
							alt: 'biscuitjs code sample',
							width: 1910,
							height: 1040,
						},
					],
				}}
			/>
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
