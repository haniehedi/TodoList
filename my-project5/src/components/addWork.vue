<template>
    <div id="hi1">
        <div class="container" dir="rtl">
            <div class="col-md-6 col-md-offset-3">
                <div class="form-group">
                    <Header></Header>
                    <br>
                    <br>
                    <div class="input-group input-group-sm">
                        <span class="input-group-addon" id="sizing-addon1"> کار جدید </span>
                        <input type="text" class="form-control" placeholder="افزودن کار جدید" aria-describedby="sizing-addon1" v-model="mywork">
                    </div>
                    <button class="btn btn-primary btn-sm btn-block" @click="addNewItem">افزودن به لیست کار ها</button>
                    <br>
                    <br><br>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th> کار انجام نشده </th>
                                    <th>تعیین زمان  </th>
                                    <th>مدت انجام  </th>
                                    <th> </th>
                                </tr>
                            </thead>
                                    <tbody  v-for="(work) in works" :key="work.id">
                                        <tr>
                                            <td>
                                                <input type="checkbox" class="custom-control-input" id="check1" v-model="work.done" @change="tasks">
                                                {{work.work}}
                                            </td>
                                            <td>
                                                <div class="btn-group" role="group" aria-label="...">
                                                    <button v-if="work.start == null" type="button" class="btn btn-success" @click.stop="(event) => start(event, work)">شروع</button>
                                                    <button v-else type="button" class="btn btn-success" @click.stop="(event) => end(event, work)">پایان</button>
                                                </div>
                                            </td>
                                            <td>
                                                <span>{{ (new Date(work.runtime)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]}}</span>
                                            </td>
                                            <td>
                                                <button class="btn btn-danger btn-circle" type="button"  @click.stop="(event) => deleteItem(event,work)">
                                                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                                </button>
                                            </td>
                                        </tr>

                                    </tbody>
                        </table>
                        <br>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea3">یاداشت  : </label>
                            <textarea class="form-control" id="exampleFormControlTextarea3" rows="1"  v-model="myynote"></textarea>
                            <button class="btn btn-primary" @click="addMyNote">افزودن یاداشت</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import {mapActions,mapGetters} from 'vuex';
    import Header from "./header";


    export default {
        name: "myC",
        components: {Header},
        data(){
            return{
                mywork:'',
                mynote:'',
                tstart:0,
                tend:20
            }
        },
        computed:{
            ...mapGetters(['works','dones']),
            myynote:{
                get(){
                    return this.$store.getters.myynote
                },
                set(myynote){
                    return this.$store.dispatch('updateNote', myynote)
                }
            }
        },
        methods: {
            ...mapActions([
                'addWork',
                'deleteWork',
                'tasks',
                'update',
                'addNote',
                'updateNote'
            ]),
            start(event, work){
                work.start = new Date()
                this.update(work)
            },
            end(event, work){
                var x = new Date()
                var diff = x - work.start
                work.runtime += diff
                work.start = null
                this.update(work)
            },
            addNewItem() {
                this.addWork({
                        work : this.mywork,
                        time : new Date().getUTCSeconds(),
                        runtime: 0,
                        start: null,
                        done:false
                    })
                 },
            deleteItem(event, work){
                this.deleteWork(work)
            },
            addMyNote(){
                //console.log(this.myynote)
                this.addNote({
                    note: this.myynote
                })
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
    }
    input[type='checkbox'] {
        position: relative;
        top: 1px;
        display: inline-block;
        font-family: 'Glyphicons Halflings';
        font-style: normal;
        font-weight: 400;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        content: "\e157";
    }


</style>