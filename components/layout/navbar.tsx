"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname()

    const links = [
        { href: '/about-us', label: 'About Us' },
        { href: '/our-services', label: 'Our Services' },
        { href: '/blog', label: 'Blog' },
        { href: '/faq', label: 'FAQ' },
    ]

    return (
        <nav className="w-full px-10">
            <ul className="flex">
                {links.map((link) => (
                    <li key={link.href} className="group">
                        <Link
                            href={link.href}
                            title={link.label}
                            className={`px-5 py-4 text-nowrap hover:text-[var(--secondary-color)] text-sm hover:rounded-[5px] ${pathname === link.href ? 'text-[var(--secondary-color)] rounded-[5px]' : ''}`}
                        > {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default Navbar