<template>
    <div class="container" dir="rtl">
      <div id="nav">
        <router-link to="/mypage">dashbord</router-link> |
        <router-link to="/about">About</router-link><span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
      </div>
        <router-view></router-view>
    </div>
</template>

<script>
// import { mapActions } from 'vuex';
export default {
  name: 'App',
  // ...mapActions(['logout']),
  /// vuex
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          // this.$store.dispatch(logout)
          this.$store.dispatch()
        }
        throw err;
      });
    });
  },

  /////vue 
  computed : {
      isLoggedIn : function(){ 
        return this.$store.getters.isLoggedIn
        }
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/log')
        })
      }
    }
  

}
</script>

<style>

</style>
