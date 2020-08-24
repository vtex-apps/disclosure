import React, { FC } from 'react';

import { DisclosureProvider } from './DisclosureContext';

export interface DisclosureLayoutProps {
  initialVisibility?: 'visible' | 'hidden';
  animated?: boolean | number;
}

const DisclosureLayout: FC<DisclosureLayoutProps> = ({
  initialVisibility = 'hidden',
  animated = false,
  children,
}) => {
  return (
    <DisclosureProvider
      visible={initialVisibility === 'visible'}
      animated={animated}
    >
      {children}
    </DisclosureProvider>
  );
};

export default DisclosureLayout;
