import * as React from 'react';
import { DisclosureStateReturn } from 'reakit/Disclosure';

interface State {
  visibleContent: string[];
  allVisibility: 'shown' | 'hidden' | null;
  maxVisible: 'one' | 'many';
}

const initialState: State = {
  visibleContent: [],
  allVisibility: null,
  maxVisible: 'one',
};

interface Props {
  maxVisible: 'one' | 'many';
}

interface GroupContext {
  state: State;
  addDisclosure: (disclosure: DisclosureStateReturn) => void;
  changeVisibility: (id: string, visible: boolean) => void;
  changeGroupVisibility: (ids: string[]) => void;
}

const DisclosureGroupContext = React.createContext<GroupContext | undefined>(
  undefined
);

type Disclosures = Record<
  DisclosureStateReturn['baseId'],
  DisclosureStateReturn
>;
const DisclosureGroupChildrenContext = React.createContext<
  Disclosures | undefined
>(undefined);

const useDisclosureChildren = (): [
  Disclosures,
  GroupContext['addDisclosure']
] => {
  const [disclosures, setDisclosures] = React.useState<Disclosures>({});

  const addDisclosure = React.useCallback(
    (disclosure: DisclosureStateReturn) => {
      setDisclosures(prevState => {
        return {
          ...prevState,
          [disclosure.baseId]: disclosure,
        };
      });
    },
    []
  );

  return [disclosures, addDisclosure];
};

export const DisclosureContextProvider: React.FC<Props> = ({
  maxVisible,
  children,
}) => {
  const [state, setState] = React.useState<State>({
    maxVisible,
    visibleContent: [],
    allVisibility: null,
  });
  const [disclosures, addDisclosure] = useDisclosureChildren();

  const handleChangeVisibility = React.useCallback(
    (id: string, visible: boolean) => {
      if (maxVisible === 'many') {
        setState({
          maxVisible,
          allVisibility: null,
          visibleContent: [],
        });
        return;
      }

      setState(prevState => ({
        maxVisible,
        allVisibility: null,
        visibleContent: visible
          ? [id]
          : prevState.visibleContent.includes(id)
          ? prevState.visibleContent.filter(content => content !== id)
          : prevState.visibleContent,
      }));
    },
    [maxVisible]
  );

  const handleGroupVisibility = React.useCallback(
    (ids: string[]) => {
      setState(prevState => ({
        maxVisible,
        allVisibility:
          prevState.allVisibility === null ||
          prevState.allVisibility === 'hidden'
            ? 'shown'
            : 'hidden',
        visibleContent: ids,
      }));
    },
    [maxVisible]
  );

  const contextValue = React.useMemo(() => {
    return {
      state,
      changeVisibility: handleChangeVisibility,
      changeGroupVisibility: handleGroupVisibility,
      addDisclosure,
    };
  }, [addDisclosure, handleChangeVisibility, handleGroupVisibility, state]);

  return (
    <DisclosureGroupContext.Provider value={contextValue}>
      <DisclosureGroupChildrenProvider disclosures={disclosures}>
        {children}
      </DisclosureGroupChildrenProvider>
    </DisclosureGroupContext.Provider>
  );
};

interface DisclosureGroupChildrenProviderProps {
  disclosures: Disclosures;
}

const DisclosureGroupChildrenProvider: React.FC<DisclosureGroupChildrenProviderProps> = ({
  disclosures,
  children,
}) => {
  return (
    <DisclosureGroupChildrenContext.Provider value={disclosures}>
      {children}
    </DisclosureGroupChildrenContext.Provider>
  );
};

const noopChangeVisibility = (_id: string, _visible: boolean) => {};
const noopChangeGroupVisibility = (_ids: string[]) => {};
const noopAddDisclosure = (_disclosure: DisclosureStateReturn) => {};
const noopContext: GroupContext = {
  state: { ...initialState, maxVisible: 'many' },
  changeVisibility: noopChangeVisibility,
  changeGroupVisibility: noopChangeGroupVisibility,
  addDisclosure: noopAddDisclosure,
};

export const useDisclosureGroup = (): GroupContext => {
  const context = React.useContext(DisclosureGroupContext);

  return context ?? noopContext;
};

const noopGroupChildContext = {};

export const useDisclosureGroupChildren = (): Record<
  DisclosureStateReturn['baseId'],
  DisclosureStateReturn
> => {
  const context = React.useContext(DisclosureGroupChildrenContext);

  return context ?? noopGroupChildContext;
};
