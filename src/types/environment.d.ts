namespace NodeJS {
	interface ProcessEnv extends NodeJS.ProcessEnv {
		GOOGLE_ID: string;
		GOOGLE_SECRET: string;
		MONGODB_URI: string;
		MONGO_DB: string;
		SECRET: string;
	}
}
