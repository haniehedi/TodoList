<template>
    <div>
        <div class="container" dir="rtl" >
            <div class="col-md-6 col-md-offset-3">
                <div class="form-group">
                   <mainHeader></mainHeader>
                    <br> <br>
                    <form @submit.prevent="register">
                        <br>
                        <br>
                        <h3 style="text-align: center">ثبت نام  </h3>
                        <hr>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label" > نام کاربری </label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" v-model="name" id="inputEmail3" placeholder="نام کاربری برای خود انتخاب کنید ">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label"> ایمیل </label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" v-model="email" id="inputEmail4" placeholder="ایمیل خودرا وارد کنید">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">رمز عبور </label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control"  v-model="password" id="inputPassword3" placeholder="رمز عبور انتخاب کنید ">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">تکرار رمز </label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control"  v-model="password_confirmation"  id="inputPassword4" placeholder="تکرار مجدد رمز عبور ">
                            </div>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="checkedgh">
                            <label class="form-check-label" for="exampleCheck1" >قوانین و ضوابت را میپذیرم </label>
                        </div>
                        <button type="submit" class="btn btn-group-justified btn-primary " @click="onSubmit">ثبت نام  </button>
                    </form>


                </div>
            </div>
        </div>
<!--        <footer></footer>-->
    </div>
</template>

<script>

    import mainHeader from "../struct/mainHeader";
    // import axios from "axios"

    export default {
        name: "Register",
        data(){
            return{
                name:'',
                email:'',
                password:'',
                password_confirmation:'',
                checkedgh:'',
                is_admin:null
            }
        },
        components: {mainHeader},
        methods:{
            // onSubmit(){
            //     const formData={
            //         name: this.name,
            //         email:this.email,
            //         password:this.password,
            //         checked:this.checkedgh
            //     }
            //     console.log(formData)
            //     axios.post('https://jsonplaceholder.typicode.com/posts')
            //     .then((res)=>{
            //         console.log(res)
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //     })
            // }
        register: function () {
                let data = {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation : this.password_confirmation,  
                checked:this.checkedgh,
                is_admin: this.is_admin
                }
                this.$store
                    .dispatch('register', data)
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
       }
    }
</script>

<style scoped>

</style>