<template>
    <div class="container" dir="rtl">
        <loged-in-header></loged-in-header>
        <div class="col-md-6 col-md-offset-3">
            <div class="form-group">

                <h3>یاداشت های من  </h3>
                <hr>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="(note,i) in notes" :key="note"  >
                        {{i+1}}){{note.note}}
                        <button  class="btn btn-group-sm"> حذف</button>
                    </li>
                </ul>
                <hr>
            </div>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea3">یاداشت  : </label>
            <textarea class="form-control" id="exampleFormControlTextarea3" rows="1"  v-model="myynote"></textarea>
            <button class="btn btn-primary" @click="addMyNote">افزودن یاداشت</button>
        </div>
        <br><br><br>
        <loged-in-footer></loged-in-footer>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    import LogedInFooter from "../struct/logedInFooter";
    import LogedInHeader from "../struct/logedInHeader";

    export default {

        name: "Notes",
        components: {LogedInHeader, LogedInFooter},
        computed:{
            ...mapGetters(['notes'])
        }
    }

</script>
<style scoped>
</style>