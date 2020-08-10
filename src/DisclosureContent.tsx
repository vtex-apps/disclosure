import React, { FC, ReactNode } from 'react'
import { useDisclosureContent } from 'reakit/Disclosure'

import { useDisclosureState } from './DisclosureContext'

interface Props {
  children: ReactNode
}

const DisclosureContent: FC<Props> = ({ children }) => {
  const state = useDisclosureState()
  const htmlProps = useDisclosureContent(state)

  if (!state) {
    return <></>
  }

  return <div {...htmlProps}>{children}</div>
}

export default DisclosureContent
