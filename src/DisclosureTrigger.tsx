import React, { FC, ReactNode } from 'react'
import { Disclosure } from 'reakit/Disclosure'

import { useDisclosureState } from './DisclosureContext'

interface Props {
  id?: string
  show?: ReactNode
  hide?: ReactNode
  children?: ReactNode
}

const DisclosureTrigger: FC<Props> = ({ show, hide, children }) => {
  const state = useDisclosureState()

  if (!state) {
    return null
  }

  return (
    <Disclosure {...state}>
      {children ?? (state.visible ? hide : show)}
    </Disclosure>
  )
}

export default DisclosureTrigger
