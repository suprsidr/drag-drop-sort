import React from "react";
import propTypes from "prop-types";
import { RecoilRoot, atom } from "recoil";
// import createPersistedState from "use-persisted-state";

// export const useColumnState = createPersistedState('columnState');
import { populationData } from '../data';

const allAvailableColumns = Object.entries(populationData)
  .reduce((prev, [id, { name }]) => {
    prev.push({ id, name })
    return prev;
  }, []);

export const initialState = atom({
  key: "initialState",
  default: {
    availableColumns: allAvailableColumns,
    visibleColumns: [],
    fixedColumns: null,
  },
});

export const savedState = atom({
  key: "savedState",
  default: {
    visibleColumns: [],
    fixedColumns: 0,
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
