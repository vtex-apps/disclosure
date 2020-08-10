import React, { FC } from 'react'

import { DisclosureContextProvider } from './DisclosureGroupContext'

interface Props {
  maxVisible?: 'one' | 'many'
}

const DisclosureLayoutGroup: FC<Props> = ({ maxVisible = 'one', children }) => {
  return (
    <DisclosureContextProvider maxVisible={maxVisible}>
      {children}
    </DisclosureContextProvider>
  )
}

export default DisclosureLayoutGroup
