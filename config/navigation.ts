import { ROUTES } from '@/constants/routes';

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: ReadonlyArray<NavItem> = [
  {
    label: 'Home',
    href: ROUTES.HOME,
  },
  {
    label: 'Learn',
    href: ROUTES.LEARN,
  },
  {
    label: 'Scriptures',
    href: ROUTES.SCRIPTURES,
  },
  {
    label: 'Shlokas',
    href: ROUTES.SHLOKAS,
  },
  {
    label: 'About',
    href: ROUTES.ABOUT,
  },
  {
    label: 'Suggest & Improve',
    href: ROUTES.SUGGEST,
  },
];