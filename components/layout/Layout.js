import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
   return (
      <>
         <header className='header'>
            <h2>customer relationship management</h2>
            <Link href='/add-customer'> add customer </Link>
         </header>
         <div className='main'>{children}</div>
         <footer className='footer'>
            <a href='https://botostart.ir' target='_blank' rel='noreferrer'>
               next js project
            </a>
         </footer>
      </>
   );
};

export default Layout;
