import React from 'react';
import { PageTitle } from './PageTitle.tsx';

interface PropsPage {
  title?: string;
  children: React.ReactNode;
}
export const Page = ({ title, children }: PropsPage) => (
  <div>
    {title && <PageTitle>{title}</PageTitle>}
    {children}
  </div>
);
