import type { NextPage } from 'next';
import { signOut } from 'next-auth/react';
import Head from 'next/head';

const Home: React.FC<NextPage> = () => {
	return (
		<div>
			<Head>
				<title>LinkedIn</title>
				<meta name="description" content="LinkedIn Clone" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<button onClick={() => signOut()}>Sign Out</button>
		</div>
	);
};

export default Home;
