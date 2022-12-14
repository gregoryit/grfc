export interface INotifyState {
    data: INotify[];
  }
export interface INotify {
    id: number;
    title: string;
    data: Date;
    subtitle: string;
}


export default {
  state() {
    return {
      data: [
        {
          id: 1,
          title: 'New messege',
          data: new Date(),
          subtitle: 'disc',
        },
        {
          id: 2,
          title: 'New messege',
          data: new Date(),
          subtitle: 'disc',
        },
        {
          id: 3,
          title: 'New messege',
          data: new Date(),
          subtitle: 'disc',
        },
      ],
    };
  },
  getters: {
    getAllNotify(state: INotifyState) {
      return state.data;
    },
  },
};
