<template>
    <div>
      <mainHeader></mainHeader>
        <div class="container" dir="rtl" >
            <div class="col-md-6 col-md-offset-3">
                <div class="form-group">
                   <br><br><br>
                    <h3 >صفحه ی اصلی </h3>
<!--                    <router-link to="mypage"><a>صفحه ی من </a></router-link>-->
<!--                    <Footer></Footer>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
   import mainHeader from '../struct/mainHeader'
    export default {
        name: "Home",
        components:{mainHeader},
        created(){
            this.$$store.dispatch('destroyToken')
        }
    }
</script>

<style scoped>

</style>