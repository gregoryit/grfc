import tableHeader, { ITableHeader } from './tableHeader';
import tableSettings, { ITableSettings } from './tableSettings';

import { fakeTable } from '../fakeTable';

export interface ITableRow {
  id: number;
  number: string;
  dateOfStart: Date;
  dateOfEnd: Date;
  owner: string;
  radioService: string;
  INN: number;
  region: string;
}

export interface ITable {
  data: ITableRow[];
  selectedData: number[];
  tableHeader: ITableHeader;
  tableSettings: ITableSettings;
}

export default {
  modules: {
    tableHeader,
    tableSettings,
  },
  state() {
    return {
      data: fakeTable,
      selectedData: [],
    };
  },
  mutations: {
    toggleRowSelection(state: ITable, rowId: number) {
      const rowInState = state.selectedData.includes(rowId);
      if (rowInState) {
        state.selectedData = state.selectedData.filter(
          (id: number) => id !== rowId
        );
      } else {
        const newId = state.data.find(
          (item: ITableRow) => item.id === rowId
        )?.id;
        if (newId) {
          state.selectedData.push(newId);
        }
      }
    },
    sortBy(
      state: ITable,
      payload: [value: keyof ITableRow, direction: boolean]
    ) {
      const [value, direction] = payload;
      state.data = state.data.sort((a, b) => {
        if (direction) {
          return a[value] >= b[value] ? 1 : -1;
        } else {
          return a[value] < b[value] ? 1 : -1;
        }
      });
    },
  },
  getters: {
    isRowSelected: (state: ITable) => (id: number) => {
      return state.selectedData.includes(id);
    },
    getFindedLength: (state: ITable) => {
      return state.data.length;
    },
    getDataByColumns: (state: ITable) => (id: number) => {
      let index = 0;
      const currentRow = Object.assign(
        {},
        state.data.find((item) => item.id === id)
      );
      for (const key in currentRow) {
        const isIndexInSelectedColumns =
          state.tableHeader.selectedColumns.includes(index);
        if (!isIndexInSelectedColumns && key !== 'id') {
          delete currentRow[key as keyof ITableRow];
        }
        index++;
      }
      return currentRow;
    },
  },
};
