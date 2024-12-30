<template>
  <div class="box">
    <button @click="sub">-</button>
    {{ num }}
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            num: 10
        }
    },
    methods: {
        add(){
            this.num++
        },
        sub(){
            this.num--
        }
    }
}
</script>

<style>
</style>