<template>
  <div class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click.stop="onClosed"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title">
            <small style="color:darkgreen" class="pull-left">انجام شده</small>
          </h4>
        </div>
        <div class="modal-body">
          کل مدت اجرا : {{ (new Date(mywork.runtime)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]}}
          <div class="pull-left">دفعات انجام : {{mywork.startCounter}}</div>
          <table class="table table-hover" text-align="center">
            <thead>
              <tr>
                <th style="color:rgb(173, 84, 84)">شروع</th>
                <th style="color:rgb(173, 84, 84)">پایان</th>
                <th style="color:rgb(173, 84, 84)">مدت اجرا</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "worksHistory",
  props: {
      mywork: {
          default: () => ({})
      }
  },
  methods: {
      onClosed(event) {
          this.$emit("closed")
      }
  }
};
</script>

<style scoped>
</style>