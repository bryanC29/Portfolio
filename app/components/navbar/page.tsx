import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-center md:justify-between flex-wrap bg-black text-white">
            <Link href='/' className="text-2xl font-bold uppercase p-4 text-center">Bryan Christy</Link>
            <ul className="flex flex-row flex-wrap justify-center list-none px-4">
                <li className="m-3 hover:underline hover:underline-offset-2">
                    <Link href='/'>Home</Link>
                </li>
                <li className="m-3 hover:underline hover:underline-offset-2">
                    <Link href='/about'>About</Link>
                </li>
                <li className="m-3 hover:underline hover:underline-offset-2">
                    <Link href='/projects'>Projects</Link>
                </li>
                <li className="m-3 hover:underline hover:underline-offset-2">
                    <Link href='/designs'>Designs</Link>
                </li>
                <li className="m-3 hover:underline hover:underline-offset-2">
                    <Link href='/companies'>Companies</Link>
                </li>
                <li className="m-3 hover:underline hover:underline-offset-2">
                    <Link href='/contact'>Contact me</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;