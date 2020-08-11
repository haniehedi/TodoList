<template>
    <ul class="nav nav-tabs">
        <router-link tag="li" activeClass="active"  to="/" ><a href="#">افزودن کار جدید</a></router-link>
        <router-link tag="li" activeClass="active" to="/tasks" ><a href="#">لیست کارهای انجام شده</a></router-link>
        <router-link tag="li" activeClass="active" to="/notes"  ><a href="#">یاداشت ها </a></router-link>
    </ul>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>