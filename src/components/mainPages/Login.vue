<template>
  <div>
    <mainHeader></mainHeader>
    <div class="container" dir="rtl">
      <div class="col-md-6 col-md-offset-3">
        <div class="form-group">
          <br />
          <br />
          <!-- <form action="#" @submit.prevent="login"> -->
          <form class="login" @submit.prevent="login">
            <br />
            <br />
            <h3 style="text-align: center">ورود به صفحه ی کاربری</h3>
            <hr />
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label" >نام کاربری</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail3"
                  v-model="email"
                  placeholder="نام کاربری "
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">رمز عبور</label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword3"
                  v-model="password"
                  placeholder="پسورد"
                />
              </div>
            </div>
            <button type="submit" class="btn btn-group-justified btn-primary">ورود</button>
          </form>
          <br />

          <p style="text-align: center">
            <a>رمز عبور را فراموش کردم</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainHeader from "../struct/mainHeader";
// import { mapActions } from "vuex";
export default {
  name: "Login",
  components: { mainHeader },
  data() {
    return {
      email: null,
      password: null
    };
  },
  
  methods: {   
    // login(){
    //     this.$store.dispatch('currentUser/loginUser', this.user)
    // } ,
    // ...mapActions("retrieveToken"),
    // login() {
    //   this.retrieveToken({
    //     username: this.username,
    //     password: this.password,
    //   }).then(() => {
    //     this.$router.push({ name: "todo" });
    //   });
    // },
    login(){
      let email= this.email 
      let password= this.password
      this.$store.dispatch('login', { username:email, password})
       .then(() => this.$router.push('/mypage'))
       .catch(err => console.log(err))

    }
  },
};
</script>

<style scoped>
</style>