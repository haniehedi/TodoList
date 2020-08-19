<template>
<div class="container">
    <loged-In-header></loged-In-header>
    <br><br>
    <div class="col-md-6 col-md-offset-3">
    <div>
        <div class="form-group">
            <label for="exampleInputEmail1">نام کتاب</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="نام کتاب "     v-model="bookname">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">تعداد</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="تعداد موجود"  v-model="booknum">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">قیمت</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="قیمت کتاب "   v-model="bookprice">
        </div>
        <div class="form-group">        
        </div>
    
        <button  @click="addNewBook" class="btn btn-primary">افزودن</button>
       
    </div>
     <hr>
    <br>
    <bold>موجودی :{{this.money}}</bold>
  
<br> <br>
<Book></Book>

   
 </div>

</div>
    
</template>

<script>
import LogedInHeader from "../struct/logedInHeader";
import Book from "./Book"
import { mapActions, mapGetters } from 'vuex';
export default {
      name: 'Store',
      components: {LogedInHeader, Book},
      data(){
          return{
              bookname:null,
              booknum:null,
              bookprice:null, 
              
          }
      }, 
      computed:{
          ...mapGetters(['books', 'money']), 
         
      },
      methods:{
          ...mapActions(['addBook']), 
          addNewBook(){
              this.addBook({
                  bookname: this.bookname, 
                  booknum: this.booknum,
                  bookprice: this.bookprice,
                  bought:0,
                  

              })
          }
      }
    
}
</script>

<style scoped>

</style>