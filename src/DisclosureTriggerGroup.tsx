import React, { FC, ReactNode, useMemo } from 'react'
import { Disclosure, DisclosureStateReturn } from 'reakit/Disclosure'

import {
  useDisclosureGroup,
  useDisclosureGroupChildren,
} from './DisclosureGroupContext'

interface Props {
  id?: string
  show?: ReactNode
  hide?: ReactNode
  children?: ReactNode
}

const DisclosureTriggerGroup: FC<Props> = ({ show, hide, children }) => {
  const { changeGroupVisibility } = useDisclosureGroup()
  const disclosureGroupChildren = useDisclosureGroupChildren()

  const childDisclosures = useMemo(() => {
    return Object.values(disclosureGroupChildren)
  }, [disclosureGroupChildren])

  const childrenId = useMemo(() => {
    return childDisclosures.map(content => content.baseId)
  }, [disclosureGroupChildren])

  const props = useMemo(() => {
    return {
      onClick: () => changeGroupVisibility(childrenId),
    }
  }, [changeGroupVisibility, childrenId])

  if (childDisclosures.length === 0) {
    return null
  }

  return (
    <DisclosureRecursive props={props} disclosures={childDisclosures}>
      {(state: DisclosureStateReturn) =>
        children ?? (state.visible ? hide : show)
      }
    </DisclosureRecursive>
  )
}

interface DisclosureRecursiveProps {
  disclosures: DisclosureStateReturn[]
  props: any
}

const DisclosureRecursive: FC<DisclosureRecursiveProps> = ({
  props,
  disclosures,
  children,
}) => {
  const [current, ...next] = disclosures

  if (next.length === 0) {
    return (
      <Disclosure {...props} {...current}>
        {typeof children === 'function' ? children(current) : children}
      </Disclosure>
    )
  }

  return (
    <Disclosure {...props} {...current}>
      {next.length > 0
        ? childProps => (
            <DisclosureRecursive props={childProps} disclosures={next}>
              {children}
            </DisclosureRecursive>
          )
        : typeof children === 'function'
        ? children(current)
        : children}
    </Disclosure>
  )
}

export default DisclosureTriggerGroup
