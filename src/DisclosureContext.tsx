import * as React from 'react'
import {
  DisclosureStateReturn,
  DisclosureInitialState,
  useDisclosureState as useDisclosureStateReakit,
} from 'reakit/Disclosure'

import { useDisclosureGroup } from './DisclosureGroupContext'

const DisclosureContext = React.createContext<
  DisclosureStateReturn | undefined
>(undefined)

interface Props {
  visible: DisclosureInitialState['visible']
  animated: DisclosureInitialState['animated']
}

export const DisclosureProvider: React.FC<Props> = ({
  visible,
  animated,
  children,
}) => {
  const state = useDisclosureStateReakit({ visible, animated })
  const {
    state: groupState,
    changeVisibility,
    addDisclosure,
  } = useDisclosureGroup()
  const prevVisible = React.useRef(visible)

  const { visible: stateVisible, baseId, setVisible } = state

  React.useEffect(() => {
    addDisclosure(state)
  }, [addDisclosure, state])

  React.useLayoutEffect(() => {
    if (groupState.allVisibility) {
      state.setVisible(groupState.allVisibility === 'shown')
      return
    }

    if (groupState.maxVisible === 'many') {
      return
    }

    if (groupState.visibleContent.includes(baseId) === false) {
      state.setVisible(false)
    }
  }, [groupState, changeVisibility, stateVisible, baseId, setVisible, state])

  prevVisible.current = stateVisible

  const newState = React.useMemo(() => {
    return {
      ...state,
      onClick: () => {
        changeVisibility(state.baseId, !state.visible)
      },
    }
  }, [state, changeVisibility])

  return (
    <DisclosureContext.Provider value={newState}>
      {children}
    </DisclosureContext.Provider>
  )
}

export const useDisclosureState = (): DisclosureStateReturn | undefined => {
  const state = React.useContext(DisclosureContext)
  return state
}
