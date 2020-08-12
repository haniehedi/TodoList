<template>
    <div class="container" dir="rtl">
        <div class="col-md-6 col-md-offset-3">
            <div class="form-group">
                <Header></Header>
                <h3>یاداشت های من  </h3>
                <hr>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="(note,i) in notes" :key="note"  >
                        {{i+1}}){{note.note}}
                    </li>
                </ul>
                <hr>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    import Header from "./header";
    export default {

        name: "Notes",
        components: {Header},
        computed:{
            ...mapGetters(['notes'])
        }
    }

</script>
<style scoped>
</style>