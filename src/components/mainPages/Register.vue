<template>
    <div>
        <div class="container" dir="rtl" >
            <div class="col-md-6 col-md-offset-3">
                <div class="form-group">
<!--                    <header></header>-->
                    <br> <br>
                    <form>
                        <br>
                        <br>
                        <h3 style="text-align: center">ثبت نام  </h3>
                        <hr>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label"> نام کاربری </label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" placeholder="نام کاربری برای خود انتخاب کنید ">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label"> ایمیل </label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail4" placeholder="ایمیل خودرا وارد کنید">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">رمز عبور </label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword3" placeholder="رمز عبور انتخاب کنید ">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">تکرار رمز </label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword4" placeholder="تکرار مجدد رمز عبور ">
                            </div>
                        </div>
                        <button class="btn btn-group-justified btn-primary ">ثبت نام  </button>
                    </form>


                </div>
            </div>
        </div>
<!--        <footer></footer>-->
    </div>
</template>

<script>

    // import Header from "../struct/Header";
    export default {
        name: "Register",
        // components: {Header},
    }
</script>

<style scoped>

</style>