'use client';

import { CONTACT_EMAIL } from '@/lib/constants';

const NAV_LINKS: Array<{ href: string; label: string }> = [
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Compétences' },
  { href: '#formation', label: 'Formation' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <header className="supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full backdrop-blur">
      <nav className="container flex h-16 items-center justify-between gap-6 md:h-20">
        <ul className="flex items-center gap-5 md:gap-8">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 transition-colors hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-foreground decoration-foreground/30 hover:decoration-foreground shrink-0 text-sm underline underline-offset-4 transition-colors"
        >
          Me contacter
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
