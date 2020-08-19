<template>
<div >
    <loged-In-header></loged-In-header>
    <br><br><br>
 کل موجودی  :{{this.money}} 
<br> <br>
 <div class="panel panel-success" v-for="(book) in books" :key="book">
    <div class="panel-heading" >
        <big>نام کتاب : {{book.bookname}}</big>
       - <small> قیمت خرید :{{book.bookprice}}</small>
      
    </div>
    <div class="panel-body">
    
       تعداد خریداری شده :  {{book.bought}}
        
        <button class="btn btn-danger btn-circle pull-left" type="button"  @click.stop="(event) => deleteB(event,book)">
        حذف از لیست
        </button>
    </div>
    </div>

</div>
    
    
</template>

<script>
import LogedInHeader from "../struct/logedInHeader";
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Buy',
      components: {LogedInHeader},
      computed:{
          ...mapGetters(['buys', 'books', 'money'])
      },
      methods:{
          ...mapActions(['deleteBuyBook']),
          deleteB(event, book){
                this.deleteBuyBook(book)
            }
      }
    
}
</script>


<style scoped>

</style>