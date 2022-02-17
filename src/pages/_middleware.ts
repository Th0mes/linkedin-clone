import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: any) {
	if (req.nextUrl.pathname === '/') {
		const session = await getToken({
			req,
			secret: process.env.SECRET,
			secureCookie: process.env.NODE_ENV === 'production',
		});
		// You could also check for any property on the session object,
		// like role === "admin" or name === "John Doe", etc.
		if (!session) return NextResponse.redirect('/home');
		// If user is authenticated, continue.
	}
}
