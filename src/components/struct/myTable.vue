<template>
 <table class="table table-hover">
                           
    <thead>
        <tr>
            <th> کار انجام نشده </th>
            <th>تعیین زمان  </th>
            <th>مدت انجام  </th>
            <th> </th>
        </tr>
    </thead>
    <!-- <tbody  v-for="(work) in works" :key="work.id">
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

    </tbody> -->
</table>
    
</template>

<script>
    import mapGetters from 'vuex';
    export default {
        name: "myTable",
        computed:{
            ...mapGetters(['works']),
        }
    }
</script>

<style scoped>

</style>