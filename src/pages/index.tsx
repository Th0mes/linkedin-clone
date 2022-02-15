import type { NextPage } from 'next';
import Head from 'next/head';

const Home: React.FC<NextPage> = () => {
	return (
		<div>
			<Head>
				<title>LinkedIn</title>
				<meta name="description" content="LinkedIn Clone" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			LinkedIn Clone
		</div>
	);
};

export default Home;
