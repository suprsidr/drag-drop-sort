import React, { useEffect } from "react";
import propTypes from "prop-types";
import { RecoilRoot, atom, selector, useRecoilState } from "recoil";
import createPersistedState from "use-persisted-state";

import { populationData } from "../data";

export const useColumnState = createPersistedState("columnState");

const allAvailableColumns = Object.entries(populationData).reduce(
  (prev, [id, { name }]) => {
    prev.push({ id, name });
    return prev;
  },
  []
);

export const modalToggle = atom({
  key: "modalToggle",
  default: false,
});

export const savedState = atom({
  key: "savedState",
  default: {
    visibleColumns: [],
    fixedColumns: 0,
  },
});

export const columnState = selector({
  key: "columnState",
  get: ({ get }) => {
    const { visibleColumns, fixedColumns } = get(savedState);
    return {
      availableColumns: allAvailableColumns.filter(
        (item) => !visibleColumns.includes(item.id)
      ),
      visibleColumns: allAvailableColumns.filter((item) =>
        visibleColumns.includes(item.id)
      ),
      fixedColumns: fixedColumns !== null ? fixedColumns - 1 : null,
    };
  },
});

const StateUpdater = () => {
  const [saved, setSaved] = useRecoilState(savedState);
  const [persistedState, setPersistedState] = useColumnState(saved);

  useEffect(() => {
    if (JSON.stringify(persistedState) !== JSON.stringify(saved)) {
      setSaved(persistedState || saved);
    }
  }, [persistedState]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setPersistedState(saved);
  }, [saved]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

const Provider = ({ children }) => {
  return (
    <RecoilRoot>
      <StateUpdater />
      {children}
    </RecoilRoot>
  );
};

Provider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

export default Provider;
