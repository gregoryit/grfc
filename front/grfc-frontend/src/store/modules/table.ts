import tableHeader, { ITableHeader } from './tableHeader';

export interface ITableRow {
  id: number;
  code: string;
  name: string;
  description: string;
  author: string;
  type: string;
  status: string;
  date: Date;
  dateOfCreate: Date;
  dateOfEdit: Date;
  signatory: string;
  correspondent: string;
}
export interface ITable {
  data: ITableRow[];
  selectedData: number[];
  tableHeader: ITableHeader;
}
export default {
  modules: {
    tableHeader,
  },
  state() {
    return {
      data: [
        {
          id: 1,
          code: '001',
          name: 'mok2',
          description: 'mokDesc1',
          author: 'Зорина Виктория Романовна',
          type: 'type1',
          status: 'На ознакомлении',
          date: new Date(),
          dateOfCreate: new Date(),
          dateOfEdit: new Date(),
          signatory: '001',
          correspondent: '001',
        },
        {
          id: 2,
          code: '002',
          name: 'mok1',
          description: 'mokDesc2',
          author: 'Ермаков Максим Иванович',
          type: 'type2',
          status: 'Выполнено',
          date: new Date(),
          dateOfCreate: new Date(),
          dateOfEdit: new Date(),
          signatory: '002',
          correspondent: '002',
        },
        {
          id: 3,
          code: '003',
          name: 'mok3',
          description: 'mokDesc3',
          author: 'Белова Аиша Михайловна',
          type: 'type3',
          status: 'На рассмотрении',
          date: new Date(),
          dateOfCreate: new Date(),
          dateOfEdit: new Date(),
          signatory: '003',
          correspondent: '003',
        },
      ],
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
    getFindedLen: (state: ITable) => {
      return state.data.length;
    },
    getDataByColumns: (state: ITable) => (data: ITableRow) => {
      let index = 0;
      for (const key in data) {
        const isIndexInSelectedColumns =
          state.tableHeader.selectedColumns.includes(index);
        if (!isIndexInSelectedColumns && key !== 'id') {
          delete data[key as keyof ITableRow];
        }
        index++;
      }
      return data;
    },
  },
};
