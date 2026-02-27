import styles from '../styles/HeaderMenu.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: "/", label: "Home", exact: true },
  { href: "/uitslagen", label: "Wedstrijden" },
  { href: "/recent", label: "Recent" },
  { href: "/stand", label: "Stand" },
  { href: "/clubinfo", label: "Clubs" },
];

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className={styles.links}>
      {links.map((link) => {
        const isActive = link.exact
          ? pathname === link.href
          : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.link} ${isActive ? styles.active : ""}`}
          >
            <div>{link.label}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderMenu;