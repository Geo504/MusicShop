import {NextResponse} from 'next/server'

// import { verifyToken } from './services/verifyToken.js'

export async function middleware(request) {
  const jwt = request.cookies.get('token');
  
  if (request.nextUrl.pathname.startsWith('/profile')) {
    if (jwt==undefined) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    // const resp = await verifyToken();
    // console.log(resp);
    // if (!response) {
    //   return NextResponse.redirect(new URL('/login', request.url))
    // }
  }
  return NextResponse.next()
}