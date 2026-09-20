'use client';

import { CONTACT_EMAIL, LOCATION, PHONE } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="section-padding container space-y-4 pb-16!">
      <div className="flex justify-center">
        <a href={`mailto:${CONTACT_EMAIL}`} className="link-underline text-lg">
          {CONTACT_EMAIL}
        </a>
      </div>
      <div className="text-muted-foreground flex justify-center gap-3 text-sm">
        <span>{LOCATION}</span>
        <span aria-hidden="true">·</span>
        <span>{PHONE}</span>
      </div>
    </footer>
  );
};

export default Footer;
