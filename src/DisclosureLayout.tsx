import React, { FC } from 'react'

import { DisclosureProvider } from './DisclosureContext'

interface Props {
  id?: string
  initialVisibility?: 'visible' | 'hidden'
  animated?: boolean | number
}

const DisclosureLayout: FC<Props> = ({
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
  )
}

export default DisclosureLayout
