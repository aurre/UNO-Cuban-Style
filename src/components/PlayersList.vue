<template>
    <b-list-group>
        <b-list-group-item v-for="item in items" :key="item">{{ item }}</b-list-group-item>
    </b-list-group>
</template>

<script>
export default {
  name: 'PlayersList',
  props: {
    items: Array,
  },
};
</script>
