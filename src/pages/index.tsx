import type { NextPage } from 'next';
import { signOut } from 'next-auth/react';
import Head from 'next/head';

type HomeProps = NextPage & {
	option: any;
	event: any;
};

const Home: React.FC<HomeProps> = ({ option, event }) => {
	return (
		<div>
			<Head>
				<title>LinkedIn</title>
				<meta name="description" content="LinkedIn Clone" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<button onClick={signOut}>Sign Out</button>
		</div>
	);
};

export default Home;
