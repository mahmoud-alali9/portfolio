'use client';

import { useEffect, useState } from 'react';

import {
  AVAILABILITY_BADGES,
  CONTACT_EMAIL,
  COPYRIGHT,
  LOCATION,
  SIGNATURE_NAME,
} from '@/lib/constants';

const TIME_ZONE = 'Europe/Paris';

const formatLocalTime = (timeZone: string) =>
  new Intl.DateTimeFormat('fr-FR', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date());

/** Live-updating local clock for the given IANA timezone. */
const useLocalTime = (timeZone: string) => {
  const [time, setTime] = useState(() => formatLocalTime(timeZone));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(formatLocalTime(timeZone));
    }, 1000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return time;
};

const Footer = () => {
  const localTime = useLocalTime(TIME_ZONE);

  return (
    <footer className="section-padding container space-y-12 border-t border-hairline pb-16!">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="text-helper text-[11px] font-semibold tracking-[1.4px] uppercase">
            Contact
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="link-underline text-lg">
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="space-y-2">
          <p className="text-helper text-[11px] font-semibold tracking-[1.4px] uppercase">
            Localisation
          </p>
          <p className="text-muted-foreground text-sm">
            {LOCATION} · <span suppressHydrationWarning>{localTime}</span>
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-helper text-[11px] font-semibold tracking-[1.4px] uppercase">
            Disponibilité
          </p>
          {AVAILABILITY_BADGES.map((badge) => (
            <p key={badge} className="text-muted-foreground text-sm">
              <span className="text-success mr-1.5" aria-hidden="true">
                ●
              </span>
              {badge}
            </p>
          ))}
        </div>
      </div>

      <div className="border-hairline flex flex-col items-start gap-4 border-t pt-8 md:flex-row md:items-end md:justify-between">
        <p className="font-display text-3xl italic opacity-90">
          {SIGNATURE_NAME}
        </p>
        <p className="text-helper text-xs">{COPYRIGHT}</p>
      </div>
    </footer>
  );
};

export default Footer;
