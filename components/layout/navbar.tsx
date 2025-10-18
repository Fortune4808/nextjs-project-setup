"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname()

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about-us', label: 'About Us' },
        { href: '/our-services', label: 'Our Services' },
        { href: '/blog', label: 'Blog' },
    ]

    return (
        <nav className="w-full">
            <ul>
                <li>
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            title={link.label}
                            className={`px-8 py-4 text-nowrap hover:text-[var(--secondary-color)] hover:rounded-[5px] ${pathname === link.href ? 'text-[var(--secondary-color)] rounded-[5px]' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar