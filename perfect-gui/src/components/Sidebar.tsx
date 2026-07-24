import type { MouseEvent } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface NavGroup {
  title: string;
  links: NavLink[];
}

const groups: NavGroup[] = [
  { title: 'Introduction', links: [{ href: '#hero', label: 'Overview' }] },
  { title: 'Options', links: [{ href: '#options', label: 'All options' }] },
  {
    title: 'Methods',
    links: [
      { href: '#method-button', label: '.button()' },
      { href: '#method-slider', label: '.slider()' },
      { href: '#method-toggle', label: '.toggle()' },
      { href: '#method-list', label: '.list()' },
      { href: '#method-image', label: '.image()' },
      { href: '#method-color', label: '.color()' },
      { href: '#method-vector2', label: '.vector2()' },
      { href: '#method-folder', label: '.folder()' },
      { href: '#method-tabs', label: '.tabs()' },
      { href: '#method-toggleclose', label: '.toggleClose()' },
      { href: '#method-kill', label: '.kill()' },
    ],
  },
];

interface SidebarProps {
  open: boolean;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export default function Sidebar({ open, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar custom-scrollbar" data-open={open} aria-label="Documentation">
      <div className="sidebar__brand">
        <div className="sidebar__mark" />
        <span className="sidebar__wordmark">perfect-gui</span>
      </div>

      <nav className="sidebar__nav">
        {groups.map((group) => (
          <div key={group.title} className="sidebar__nav">
            <div className="sidebar__group">{group.title}</div>
            {group.links.map((link) => (
              <a key={link.href} href={link.href} className="sidebar__link" onClick={onNavigate}>
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar__footer">
        <a href="https://github.com/thibka/perfect-gui">GitHub</a>
        <a href="https://www.npmjs.com/package/perfect-gui">NPM</a>
      </div>
    </aside>
  );
}
