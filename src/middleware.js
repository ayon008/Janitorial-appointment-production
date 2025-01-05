import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'


const userRoutes = ['/profile', '/search/:leads*', '/messages'];
const adminRoutes = ['/adminDashboard', '/adminDashboard/allLeads', '/adminDashboard/allUser', '/adminDashboard/leadUpload', '/adminDashboard/allLeads/:id', '/adminDashboard/subscriber'];
const sellerRoutes = ['/sellerDashboard', '/sellerDashboard/leadUpload'];

export function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const cookieStore = cookies()
    const userTokenObj = cookieStore.get('userToken');
    const token = userTokenObj?.value;
    console.log(token);
    const loginURL = new URL('/login', request.url);
    loginURL.searchParams.append('redirect', pathname);
    loginURL.searchParams.append('message', 'You need to log in to access this page.');
    if (!token) {
        return NextResponse.redirect(loginURL);
    }
    try {
        const decoded = jwtDecode(token);
        console.log(decoded);
        const isAdmin = decoded?.isAdmin;
        const isSeller = decoded?.isSeller;
        console.log(isAdmin, isSeller);

        if (isAdmin) {
            return NextResponse.next();
        }
        else if (isSeller && (userRoutes.includes(pathname)) || sellerRoutes.includes(pathname)) {
            return NextResponse.next();
        }
        else if (userRoutes.includes(pathname)) {
            return NextResponse.next();
        }
        return NextResponse.redirect(loginURL)
    } catch (error) {
        console.log(error);
        return NextResponse.redirect(loginURL)
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/profile', '/search/:leads*', '/messages', '/dashBoard', '/adminDashboard', '/adminDashboard/allLeads', '/adminDashboard/allUser', '/adminDashboard/leadUpload', '/sellerDashboard', '/sellerDashboard/leadUpload', '/adminDashboard/allLeads/:id', '/adminDashboard/subscriber', '/adminDashboard/contacts', '/adminDashboard/messages'],
}