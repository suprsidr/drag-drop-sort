import React from "react";
import propTypes from "prop-types";
import { RecoilRoot, atom, selector } from "recoil";
// import createPersistedState from "use-persisted-state";

// export const useColumnState = createPersistedState('columnState');
import { populationData } from "../data";

const allAvailableColumns = Object.entries(populationData).reduce(
  (prev, [id, { name }]) => {
    prev.push({ id, name });
    return prev;
  },
  []
);

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

const Provider = ({ children }) => <RecoilRoot>{children}</RecoilRoot>;

Provider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

export default Provider;
