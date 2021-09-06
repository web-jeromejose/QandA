import React from 'react';
import { PageTitle } from './PageTitle';

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
