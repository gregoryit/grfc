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

//         <div class="notifications-dropdown__item">
//           <div class="notifications-dropdown__info">
//             <div class="notifications-dropdown__title">Название</div>
//             <div class="notifications-dropdown__time">9:30 AM</div>
//           </div>
//           <div class="notifications-dropdown__description">
//             Описание... <br />...
//           </div>
//         </div>
//         <div class="notifications-dropdown__item">
//           <div class="notifications-dropdown__info">
//             <div class="notifications-dropdown__title">Название</div>
//             <div class="notifications-dropdown__time">9:25 AM</div>
//           </div>
//           <div class="notifications-dropdown__description">
//             Описание... <br />...
//           </div>
//         </div>
//         <div class="notifications-dropdown__item">
//           <div class="notifications-dropdown__info">
//             <div class="notifications-dropdown__title">Название</div>
//             <div class="notifications-dropdown__time">9:20 AM</div>
//           </div>
//           <div class="notifications-dropdown__description">
//             Описание... <br />...
//           </div>
//         </div>