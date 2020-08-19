<template>
<div >
 <!-- <bold>کل موجودی  :{{this.money}} </bold> -->
  
     <!-- <input type="text" v-model="filterText">
     -->
    <div class="panel panel-success" v-for="(book) in books" :key="book.id">
    <div class="panel-heading" >
        <big>نام کتاب : {{book.bookname}}</big>
       - <small>تعداد :{{book.booknum}}</small>
       <button  @click.stop="(event) => pluss(event,book)"  class="btn btn-link pull-left"><span class="glyphicon glyphicon-plus "></span></button>
       <button  @click.stop="(event) => minuss(event,book)" class="btn btn-link pull-left"><span class="glyphicon glyphicon-minus pull-left"></span></button>
    </div>
    <div class="panel-body">
    
        قیمت :{{book.bookprice}}
        <button type="button" class="btn btn-info pull-left" @click.stop="(event) => buyB(event,book)">خرید</button>
        <button class="btn btn-danger btn-circle pull-left" type="button"  @click.stop="(event) => deleteB(event,book)">
        حذف کتاب 
        </button>
    </div>
    </div>

</div>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:"Book", 
    computed:{
          ...mapGetters(['books']), 
        //   bookSearch(){
        //       return this.books.filter((element)=>{
        //           return this.element.match(this.filterText)
        //       })
        //   }
      },
    methods:{
        ...mapActions(['deleteBook', 'buyBook', 'plus', 'minus']),
        deleteB(event, book){
                this.deleteBook(book)
            },
        buyB(event, book){
            this.buyBook(book)
        },
        pluss(event, book){
            this.plus(book)
        },
        minuss(event, book){
            this.minus(book)
        } 
        
    }
      
}
</script>

<style scoped>

</style>