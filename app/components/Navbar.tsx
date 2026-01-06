import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">CEJ Abogados</div>

      <ul className="navbar-links">
        <li>
          <Link href="/">Inicio</Link>
        </li>

        <li>
          <Link href="/areas">Áreas de práctica</Link>
        </li>

        <li>
          <Link href="/contacto">Contacto</Link>
        </li>

        <li>
          <Link href="/cita" className="navbar-button">
            Agenda tu consulta
          </Link>
        </li>
      </ul>
    </nav>
  );
}
