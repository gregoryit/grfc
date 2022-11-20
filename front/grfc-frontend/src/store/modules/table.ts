export interface ITableRow {
  id: number;
  code: string;
  name: string;
  description: string;
  author: string;
  type: string;
  status: string;
  date: Date;
}
export interface ITable {
  data: ITableRow[];
  selectedData: number[];
}
export default {
  state() {
    return {
      data: [
        {
          id: 1,
          code: '001',
          name: 'mok1',
          description: 'mokDesc1',
          author: 'Зорина Виктория Романовна',
          type: 'type1',
          status: 'На ознакомлении',
          date: new Date(),
        },
        {
          id: 2,
          code: '002',
          name: 'mok2',
          description: 'mokDesc2',
          author: 'Ермаков Максим Иванович',
          type: 'type2',
          status: 'Выполнено',
          date: new Date(),
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
    sortBy(state: ITable, value: 'code') {
      state.data = state.data.sort((a, b) => {
        if (a[value] >= b[value]) return 1;
        else return -1;
      });
    },
  },
  getters: {
    isRowSelected: (state: ITable) => (id: number) => {
      return state.selectedData.includes(id);
    },
  },
};
