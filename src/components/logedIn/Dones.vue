<template>
  <div class="container" dir="rtl">
    <loged-in-header></loged-in-header>' 
    <div class="col-md-8  col-md-offset-2"> 
      <div class="form-group">
        <br><br><br>
<table class="table table-hover">
  <thead>
    <tr>
      <th style="color:rgb(173, 84, 84)" >کار های انجام شده</th>
        <th></th><th></th>               
    </tr>
  </thead>
  <tbody v-for="(work,i) in dones" :key="work">
    <tr>
      <td colspan="12">
        <span class="badge pull-right" style="background-color:rgb(173, 84, 84)" >{{i+1}}  </span>
          <p style="margin-right:2.5em" :mymodal="work.work" > 
            {{work.work}}
          </p>
      </td>               
      <td>
        <button  class="btn btn-link glyphicon glyphicon-share-alt pull-left" @click.stop="(event) => didntDone(event, work)" 
            style="color:rgb(173, 84, 84)">
        </button>
        <button  class="btn btn-link glyphicon glyphicon-modal-window pull-left"  
             data-toggle="modal"  @click="work.modal = true"  data-target="#me" style="color:rgb(173, 84, 84)">
        </button>      
        
                             
      </td>    
                
        </tr>               
  </tbody>
      
</table>
      </div>
    </div>
    <div v-for="work in dones" :key="work">
      <worksHistory v-if="work.modal" :mywork="work" ></worksHistory> 
    </div>

</div>

    
</template>

<script>
  import {mapActions,mapGetters} from 'vuex';
  import LogedInHeader from "../struct/logedInHeader";
  import worksHistory from "./worksHistory";
  // import LogedInFooter from "../struct/logedInFooter";

  export default {
    name: "Dones",
    components: {LogedInHeader,  worksHistory},
    data(){
      return{
        mywork:'',
        mymodal:'',
        haniehanie:'haniehanie'
      }
    },
    computed:{
      ...mapGetters(['works','dones', 'modal'])
    },
    methods: {
      ...mapActions(['tasks', 'addModal' ]),
      didntDone(event, work){
        work.done= !work.done;
        this.tasks({})
      },
      addMyModal(event, work){
          work.modal= true
          // this.mymodal= work;
          // state.modal = state.modal.concat(modal)
      }, 
          // endModal(event, work){
          //   work.modal= false
          // }
    }
  }

</script>

<style scoped>
.left {
  float: left;
  
  
}
.right{
  float: right;
}

  .active {
    color: #365c11;
    color:rgb(173, 84, 84)
  }
</style>