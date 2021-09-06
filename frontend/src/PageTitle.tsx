import React from 'react';

interface PropsPageTitle {
  children: React.ReactNode;
}
export const PageTitle = ({ children }: PropsPageTitle) => <h2>{children}</h2>;
