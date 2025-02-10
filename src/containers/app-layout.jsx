"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';

const AppLayout = ({children, statusPage}) => {
  const pathName = usePathname();
  const isLoginRoute = pathName === '/login';
  return (
    <>
      <header className="flex gap-4">
        <Link href="/" className="text-blue-500">Home </Link>
        {statusPage.name} 
        {!isLoginRoute && <Link href="/login" className="text-blue-500">  Login</Link>}
      </header>
      <page-content>
        {children}
      </page-content>
      <footer></footer>
    </>
  );
}

export default AppLayout;