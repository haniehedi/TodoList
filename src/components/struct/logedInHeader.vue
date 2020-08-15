<template>
    <div class="container" dir="rtl" >
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <p class="navbar-text navbar-right"><router-link to="/mypage"> <a href="#" class="navbar-link">کار های من</a></router-link></p>
                <p class="navbar-text navbar-right"><router-link to="/dones"><a href="#" class="navbar-link">انجام شده</a></router-link></p>
                <p class="navbar-text navbar-right"><router-link to="/notes"><a href="#" class="navbar-link">یاداشت ها  </a></router-link></p>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "logedInHeader"
    }
</script>

<style scoped>

</style>