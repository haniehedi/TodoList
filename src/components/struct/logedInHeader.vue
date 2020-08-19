<template>
    <div class="container" dir="rtl" >
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <p class="navbar-text navbar-right"><router-link to="/mypage"> <a href="#" class="navbar-link">
                    <span class="glyphicon glyphicon-tasks"></span>
                    کار های من</a></router-link></p>
                <p class="navbar-text navbar-right"><router-link to="/dones"><a href="#" class="navbar-link">
                    <span class="glyphicon glyphicon-check"></span>
                    انجام شده</a></router-link></p>
                <!-- <p class="navbar-text navbar-right"><router-link to="/store"><a href="#" class="navbar-link">فروشگاه</a></router-link></p> -->
                <p class="navbar-text navbar-right"><router-link to="/notes"><a href="#" class="navbar-link">
                    <span class="glyphicon glyphicon-pencil"></span>
                    یاداشت ها  </a></router-link></p>
                <!-- <p class="navbar-text navbar-right"><router-link to="/buy"><a href="#" class="navbar-link">خرید های من</a></router-link></p> -->
                 <p class="navbar-text navbar-right pull-left"><router-link to="/"><a href="#" class="navbar-link">خروج  </a></router-link></p>
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