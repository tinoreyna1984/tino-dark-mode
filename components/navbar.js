import Link from "next/link";
import DarkModeButton from "./dark-mode-button";

export default function Navbar() {
    return (
        <div
            className='flex flex-col md:flex-row md:justify-between md:items-baseline
            bg-gradient-to-r from-slate-50 to-slate-300
            dark:from-slate-900 dark:to-slate-600
            p-6 shadow-md shadow-white'
        >
            <Link href='/'><p className='text-4xl font-bold dark:text-slate-200'>MySite</p></Link>
            <nav className='flex flex-col mt-4 md:flex-row md:mt-0'>
                <Link className='md:mr-4 text-lg dark:text-slate-200' href='/'>Home</Link>
                <Link className='md:mr-4 text-lg dark:text-slate-200' href='#'>About</Link>
                <Link className='md:mr-4 text-lg dark:text-slate-200' href='#'>Portfolio</Link>
                <Link className='md:mr-4 text-lg dark:text-slate-200' href='#'>Contact</Link>
                <DarkModeButton />
            </nav>
        </div>
    );
}