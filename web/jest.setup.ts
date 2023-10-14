import { type ReactNode } from 'react';
// this mock makes sure any components using the translate hook can use it without a warning being shown
jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  Trans: ({ children }: { children: ReactNode }) => children,
}));
