export interface ITableHeaderCell {
  id: number;
  value: string;
  name: string;
  searchType: 'data' | 'default';
}

export interface ITableHeader {
  data: ITableHeaderCell[];
  selectedColumns: number[];
}

export default {
  namespaced: true,
  state() {
    return {
      data: [
        {
          id: 1,
          value: 'number',
          name: 'Номер',
          searchType: 'default',
        },
        {
          id: 2,
          value: 'dateOfStart',
          name: 'Дата начала',
          searchType: 'data',
        },
        {
          id: 3,
          value: 'dateOfEnd',
          name: 'Дата конца',
          searchType: 'data',
        },
        {
          id: 4,
          value: 'owner',
          name: 'Владелец',
          searchType: 'default',
        },
        {
          id: 5,
          value: 'INN',
          name: 'ИНН',
          searchType: 'default',
        },
        {
          id: 6,
          value: 'region',
          name: 'Регион',
          searchType: 'default',
        },
      ],
      selectedColumns: [1, 2, 3, 4, 5, 6],
    };
  },
  mutations: {
    selectColumn(state: ITableHeader, id: number) {
      state.selectedColumns.push(id);
    },
    unselectColumn(state: ITableHeader, id: number) {
      if (state.selectedColumns.length === 1) return;
      state.selectedColumns = state.selectedColumns.filter(
        (columnId) => columnId !== id
      );
    },
  },
  getters: {
    getAllCells(state: ITableHeader) {
      return state.data;
    },
    getSelectedColumns(state: ITableHeader) {
      return state.data.filter((item) => {
        const isColumnSelected = state.selectedColumns.includes(item.id);
        if (isColumnSelected) {
          return item;
        }
      });
    },
    getUnselectedColumns(state: ITableHeader) {
      return state.data.filter((item) => {
        const isColumnSelected = state.selectedColumns.includes(item.id);
        if (!isColumnSelected) {
          return item;
        }
      });
    },
  },
};
