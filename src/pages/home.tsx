import type { NextPage } from 'next';
import Image from 'next/image';
import HeaderLink from 'src/components/HeaderLink';
import {
	MdExplore,
	MdGroup,
	MdOndemandVideo,
	MdBusinessCenter,
	MdArrowForwardIos,
} from 'react-icons/md';
import Head from 'next/head';

const Home: React.FC<NextPage> = () => {
	return (
		<div className="space-y-10">
			<Head>
				<title>LinkedIn</title>
			</Head>
			<header className="flex justify-around items-center py-4 max-w-screen-2xl mx-auto">
				<div className="relative w-36 h-10">
					<Image
						src="https://rb.gy/vtbzlp"
						alt="LinkedIn Logo"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="flex items-center sm:divide-x divide-gray-300">
					<div className="hidden sm:flex space-x-8 pr-4">
						<HeaderLink Icon={MdExplore} text="Discover" />
						<HeaderLink Icon={MdGroup} text="People" />
						<HeaderLink Icon={MdOndemandVideo} text="Learning" />
						<HeaderLink Icon={MdBusinessCenter} text="Jobs" />
					</div>
					<div className="pl-4">
						<button className="text-blue-700 font-semibold rounded-full border-2 border-blue-700 px-5 py-1.5 transition-all hover:bg-blue-700 hover:text-white">
							Sign In
						</button>
					</div>
				</div>
			</header>
			<main className="flex flex-col xl:flex-row justify-between items-center max-w-screen-2xl mx-auto">
				<div className="space-y-6 xl:space-y-10">
					<h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug xl:pl-0 text-center xl:text-left">
						Welcome to your professional community
					</h1>
					<div className="space-y-4">
						<div className="intent">
							<h2 className="text-xl">Search for a job</h2>
							<MdArrowForwardIos className="text-gray-700" />
						</div>
						<div className="intent">
							<h2 className="text-xl">Find a person you know</h2>
							<MdArrowForwardIos className="text-gray-700" />
						</div>
						<div className="intent">
							<h2 className="text-xl">Learn a new skill</h2>
							<MdArrowForwardIos className="text-gray-700" />
						</div>
					</div>
				</div>
				<div className="relative w-80 h-80 sm:w-96 sm:h-96 xl:w-[650px] xl:h-[650px]">
					<Image src="https://rb.gy/vkzpzt" alt="" layout="fill" priority />
				</div>
			</main>
		</div>
	);
};

export default Home;

// 1:03:01
