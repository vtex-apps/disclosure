import React, { FC, ReactNode } from 'react';

import { useDisclosure } from './DisclosureContext';

export interface DisclosureStateIndicatorProps {
  show?: ReactNode;
  hide?: ReactNode;
}

const DisclosureStateIndicator: FC<DisclosureStateIndicatorProps> = ({
  show,
  hide,
}) => {
  const { state } = useDisclosure();

  if (!state) {
    return null;
  }

  return <>{state.visible ? hide : show}</>;
};

export default DisclosureStateIndicator;
