
interface LayoutProps {
    title: string;
    children: React.ReactNode;
}
import NavBar from './elements/Navbar';
import Footer from './elements/Footer';
import { useEffect } from 'react';

export const Layout = ({title, children}: LayoutProps) => {

    // useEffect to change the title of the website
    useEffect(() => {
      document.title = title;
    }, [title])
    
  return (
    <>
    <NavBar />

    <main className='flex flex-col gap-y-20 md:gap-y-32 overflow-hidden'>
        {children}
    </main>

    <Footer />
    </>
  )
}

export default Layout
