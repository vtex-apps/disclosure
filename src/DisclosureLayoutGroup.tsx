import React, { FC } from 'react';

import { DisclosureContextProvider } from './DisclosureGroupContext';

export interface DisclosureLayoutGroupProps {
  maxVisible?: 'one' | 'many';
}

const DisclosureLayoutGroup: FC<DisclosureLayoutGroupProps> = ({
  maxVisible = 'one',
  children,
}) => {
  return (
    <DisclosureContextProvider maxVisible={maxVisible}>
      {children}
    </DisclosureContextProvider>
  );
};

export default DisclosureLayoutGroup;
