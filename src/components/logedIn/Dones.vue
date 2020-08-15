<template>
  <div class="container" dir="rtl">
    <loged-in-header></loged-in-header>
    <div class="col-md-6 col-md-offset-3">
      <div class="form-group">

        <h3>لیست کارهای انجام شده  </h3>
        <hr>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="(work,i) in dones" :key="work"  >
            <div class="input-group input-group-sm">
              <span class="input-group-addon" id="sizing-addon1"> {{i+1}} </span>
              <div type="text" class="form-control" aria-describedby="sizing-addon1" >
                {{work.work}}
              </div>
            </div>
            <button class="btn btn-group-sm"  @click.stop="(event) => didntDone(event, work)">
              <span class="glyphicon glyphicon-share-alt" aria-hidden="true"></span>
            </button>

          </li>
        </ul>
        <hr>
        <br><br><br>
      </div>
    </div>
    <loged-in-footer></loged-in-footer>
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex';
  import LogedInHeader from "../struct/logedInHeader";
  import LogedInFooter from "../struct/logedInFooter";

  export default {
    name: "Dones",
    components: {LogedInFooter, LogedInHeader},
    data(){
      return{
        mywork:''
      }
    },
    computed:{
      ...mapGetters(['works','dones'])
    },
    methods: {
      ...mapActions([
        'tasks',
      ]),
      didntDone(event, work){
        work.done= !work.done;
        this.tasks({})
      },

    }
  }

</script>

<style scoped>
  .active {
    color: #578b22;
  }
</style>