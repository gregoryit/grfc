<template>
  <table class="table">
    <BodyHeader />
    <tbody class="table__body body">
      <BodyRow v-for="item in mokData" :key="item.id" :data="item" />
    </tbody>
  </table>
</template>

<script lang="ts">
import BodyHeader from './bodyModules/BodyHeader.vue';
import BodyRow from './bodyModules/BodyRow.vue';
export default {
  name: 'TableBody',
  components: {
    BodyRow,
    BodyHeader,
  },
  data() {
    return {
      mokData: [
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
    };
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  padding: 0;
  margin: 0;
  border-collapse: collapse;
}
</style>
