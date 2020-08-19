<template>
    <div class="container" dir="rtl" >
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <p v-if=!loggedIn class="navbar-text navbar-right"><router-link to="/"> <a href="#" class="navbar-link">صفحه ی اصلی </a></router-link></p>
                <p v-if=!loggedIn class="navbar-text navbar-right"><router-link to="/reg"><a href="#" class="navbar-link">ثبت نام </a></router-link></p>
                <p v-if=!loggedIn class="navbar-text navbar-right"><router-link to="/log"><a href="#" class="navbar-link">ورود  </a></router-link></p>
                 
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "mainHeader", 
        computed:{
            loggedIn(){
                return this.$store.getters.loggedIn
            }
        }
    }
</script>

<style scoped>

</style>