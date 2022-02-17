import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import GoogleProvider from 'next-auth/providers/google';
import clientPromise from 'src/lib/mongodb';

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		// ...add more providers here
	],
	secret: process.env.SECRET,
	adapter: MongoDBAdapter(clientPromise),
	pages: {
		signIn: '/home',
	},
	session: {
		strategy: 'jwt',
	},
	debug: false,
});
