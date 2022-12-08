export interface ITableSettings {
  rowsInTable: number;
  fontSize: number;
  padding: number;
}

export default {
  state() {
    return {
      rowsInTable: 10,
      fontSize: 12,
      padding: 5,
    };
  },
  mutations: {
    setRows(state: ITableSettings, value: number) {
      state.rowsInTable = value;
    },
    setFontSize(state: ITableSettings, value: number) {
      state.fontSize = value;
    },
    setPadding(state: ITableSettings, value: number) {
      state.padding = value;
    },
  },
};
