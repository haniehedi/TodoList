<template>
  <div class="container" dir="rtl">
    <loged-in-header></loged-in-header>'
    <div class="col-md-8 col-md-offset-2">
      <div class="form-group">
        <br />
        <br />
        <br />
        <table class="table table-hover">
          <thead>
            <tr>
              <th style="color:rgb(173, 84, 84)">کار های انجام شده</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="(work,i) in dones" :key="work.id">
            <tr>
              <td colspan="12">
                <span class="badge pull-right" style="background-color:rgb(173, 84, 84)">{{i+1}}</span>
                <p style="margin-right:2.5em">{{work.work}}</p>
              </td>
              <td>
                <button
                  class="btn btn-link glyphicon glyphicon-share-alt pull-left"
                  @click.stop="(event) => didntDone(event, work)"
                  style="color:rgb(173, 84, 84)"
                ></button>
                <button
                  class="btn btn-link glyphicon glyphicon-modal-window pull-left"
                  @click.stop="(event) => showModal(event, work)"
                  style="color:rgb(173, 84, 84)"
                ></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <worksHistory
      id="work-modal"
      v-if="activeWork != null"
      :mywork="activeWork"
      @closed="modalClosed"
    ></worksHistory>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LogedInHeader from "../struct/logedInHeader";
import worksHistory from "./worksHistory";
// import LogedInFooter from "../struct/logedInFooter";

export default {
  name: "Dones",
  components: { LogedInHeader, worksHistory },
  data() {
    return {
      activeWork: null,
      haniehanie: "haniehanie",
    };
  },
  computed: {
    ...mapGetters(["works", "dones", "modal"]),
  },
  methods: {
    ...mapActions(["tasks", "addModal"]),
    didntDone(event, work) {
      work.done = !work.done;
      this.tasks({});
    },
    showModal(event, work) {
      this.activeWork = work;
      this.$nextTick(() => {
        $("#work-modal").modal("show");
      });
    },
    modalClosed() {
      $("#work-modal").modal("hide");
      this.activeWork = null;
    },
  },
};
</script>

<style scoped>
.left {
  float: left;
}
.right {
  float: right;
}

.active {
  color: #365c11;
  color: rgb(173, 84, 84);
}
</style>