import React, { FC, ReactNode } from 'react'

import { useDisclosureState } from './DisclosureContext'

interface Props {
  id?: string
  show?: ReactNode
  hide?: ReactNode
}

const DisclosureStateIndicator: FC<Props> = ({ show, hide }) => {
  const state = useDisclosureState()

  if (!state) {
    return null
  }

  return <>{state.visible ? hide : show}</>
}

export default DisclosureStateIndicator
