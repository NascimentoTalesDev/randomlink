import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getUrls } from './app/actions'

export async function middleware(request: NextRequest) {
  const death = request.cookies.get("agvdfavdavdgad")?.value
  if(!death){
    const urls = await getUrls()
    const randomUrl = urls[Math.floor(Math.random() * urls.length)]
    return NextResponse.redirect(new URL(`https://wa.me/${randomUrl}?text=Opa%20gostaria%20de%20fazer%20um%20teste`, request.url))
  }
}

export const config = {
    matcher: '/:path*',
  }