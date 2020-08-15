<template>
    <div>
<!--        <loged-in-header></loged-in-header>-->
        <div class="container" dir="rtl" >
            <div class="col-md-6 col-md-offset-3">
                <div class="form-group">
<!--                    <Header></Header>-->
                    <br> <br>
                    <form>
                        <br>
                        <br>
                        <h3 style="text-align: center">ورود به صفحه ی کاربری  </h3>
                        <hr>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label"> نام کاربری </label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" placeholder="نام کاربری ">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">رمز عبور </label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword3" placeholder="پسورد">
                            </div>
                        </div>
                        <button class="btn btn-group-justified btn-primary ">ورود </button>
                    </form>
                    <br>

                    <p style="text-align: center"><a>رمز عبور را فراموش کردم </a></p>
                </div>
            </div>
        </div>

<!--        <Footer></Footer>-->

    </div>
</template>

<script>

    // import LogedInHeader from "../struct/logedInHeader";
    export default {
        name: "Login",
        // components: {LogedInHeader},
        // components: { Footer, Header}
    }
</script>

<style scoped>

</style>