import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

interface Props {
	a: string;
}

const Packages: NextPage<Props> = ({ a }) => {
	return <div></div>;
};

export const getStaticProps: GetStaticProps = (ctx) => {
	return { props: {} };
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

export default Packages;
