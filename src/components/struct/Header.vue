<template>
    <div class="container" dir="rtl" >
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <p class="navbar-text navbar-right"><router-link to="/"> <a href="#" class="navbar-link">صفحه ی اصلی </a></router-link></p>
                <p class="navbar-text navbar-right"><router-link to="/register"><a href="#" class="navbar-link">ثبت نام</a></router-link></p>
                <p class="navbar-text navbar-right"><router-link to="/login"><a href="#" class="navbar-link">ورود </a></router-link></p>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>