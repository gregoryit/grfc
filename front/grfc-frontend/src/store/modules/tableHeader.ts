export interface ITableHeaderColumn {
  id: number;
  value: string;
  name: string;
  imageSrc?: string;
  hasSearch?: boolean;
  direction?: boolean;
}
export interface ITableHeader {
  data: ITableHeaderColumn[];
  selectedColumns: number[];
}
export default {
  state() {
    return {
      data: [
        {
          id: 1,
          value: 'code',
          name: 'Код',
          hasSearch: true,
          direction: false,
        },
        {
          id: 2,
          value: 'name',
          name: 'Наименование',
          imageSrc: 'arrow',
          direction: false,
        },
        {
          id: 3,
          value: 'description',
          name: 'Описание',
          imageSrc: 'length',
          direction: false,
        },
        {
          id: 4,
          value: 'author',
          name: 'Автор',
          hasSearch: true,
          imageSrc: 'arrow',
          direction: false,
        },
        {
          id: 5,
          value: 'type',
          name: 'Тип',
          imageSrc: 'length',
          direction: false,
        },
        {
          id: 6,
          value: 'status',
          name: 'Статус',
          hasSearch: true,
          imageSrc: 'arrow',
          direction: false,
        },
        {
          id: 7,
          value: 'date',
          name: 'Дата',
          imageSrc: 'date',
        },
        {
          id: 8,
          value: 'dateOfCreate',
          name: 'Дата создания',
          imageSrc: 'date',
        },
        {
          id: 9,
          value: 'dateOfEdit',
          name: 'Дата изменения',
          imageSrc: 'date',
        },
        {
          id: 10,
          value: 'signatory',
          name: 'Подписант',
          imageSrc: 'arrow',
          direction: false,
        },
        {
          id: 11,
          value: 'correspondent',
          name: 'Корреспондент',
          imageSrc: 'arrow',
          direction: false,
        },
      ],
      selectedColumns: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  mutations: {
    selectColumn(state: ITableHeader, id: number) {
      state.selectedColumns.push(id);
    },
    unselectColumn(state: ITableHeader, id: number) {
      state.selectedColumns = state.selectedColumns.filter(
        (columnId) => columnId !== id
      );
    },
  },
  getters: {
    getAllColumns(state: ITableHeader) {
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
