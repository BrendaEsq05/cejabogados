'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/areas', label: 'Áreas de práctica' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo" onClick={close}>
        <Image
          src="/logo.png"
          alt="CEJ Abogados"
          width={168}
          height={56}
          className="navbar-logo-image"
          priority
        />
      </Link>

      <button
        type="button"
        className={`navbar-toggle${open ? ' is-open' : ''}`}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar-links${open ? ' is-open' : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? 'is-active' : undefined}
              onClick={close}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/cita" className="navbar-button" onClick={close}>
            Agenda tu consulta
          </Link>
        </li>
      </ul>
    </nav>
  );
}
