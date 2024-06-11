<script lang="ts" setup>

const columns = [
  { title: 'Название', dataIndex: 'name', key: 'name' },
  { title: 'Бюджет', dataIndex: 'price', key: 'price' },
  { title: 'Статус', dataIndex: 'status', key: 'status' },
  { title: 'Ответственный', dataIndex: 'creator', key: 'creator' },
  { title: 'Дата создания', dataIndex: 'createdAt', key: 'createdAt' },
];

interface DataItem {
  key: number;
  name: string;
  price: number;
  status: string;
  creator: string;
  createdAt: string;
}

const innerColumns = [
  { title: 'Имя', dataIndex: 'name', key: 'name' },
  { title: 'Телефон', dataIndex: 'phone', key: 'phone' },
  { title: 'Почта', dataIndex: 'email', key: 'email' },
];

interface innerDataItem {
  key: number;
  name: string;
  phone: string;
  email: string;
}

</script>

<template>
  <div style="background: #ececec; padding: 30px">
    <a-card title="Тестовое задания" :bordered="false">
      <a-input-search
          v-model:value="value"
          placeholder="Найти"
          style="width: 200px"
          @search="onSearch"
      />
      <a-divider/>
      <a-table :columns="columns" :data-source="data" :pagination="false">
        <template #expandedRowRender>
          <a-table :columns="innerColumns" :data-source="innerData" :pagination="false"/>
        </template>
      </a-table>
    </a-card>
  </div>
</template>