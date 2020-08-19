<template>
    <div class="container" dir="rtl">
        <loged-in-header></loged-in-header>
        <div class="col-md-8 col-md-offset-2">
            <div class="form-group">

               <br><br><br>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item list-group-item-warning" v-for="(note,i) in notes" :key="note"  >
                        <span class="badge" style="background-color:indianred">{{i+1}}  </span>
                         <span  style="color:indianred; margin-right:2.5em"> {{note.note}}</span>
                         
                          <button style="color:indianred"  @click.stop="(event) => deleteMyNote(event, note)" class="btn btn-link pull-left"><span class="glyphicon glyphicon-saved "></span></button>
                    <!-- <input type="checkbox" class="form-check-input pull-left" id="check1" v-model="note.done" @change="notess"> -->

                    </li>
                </ul>           
            </div>
        </div>
         

    </div>

</template>
<script>
    import {mapGetters, mapActions} from 'vuex';
    // import LogedInFooter from "../struct/logedInFooter";
    import LogedInHeader from "../struct/logedInHeader";

    export default {

        name: "Notes",
        components: {LogedInHeader},
        
        computed:{
            ...mapGetters(['notes'])
        }, 
        methods:{
           
            ...mapActions([ 'deleteNote' , 'notess']),
             deleteMyNote(event, note){
                this.deleteNote(note)
            }
        }
    }

</script>
<style scoped>

.btn-circle {
        width: 30px;
        height: 30px;
        text-align: center;
        padding: 6px 0;
        font-size: 12px;
        line-height: 1.42;
        border-radius: 15px;
        color: indianred ;
    }
   
</style>