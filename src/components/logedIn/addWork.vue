<template>
  <div id="hi1">
    <LogedInHeader></LogedInHeader>

    <div class="container" dir="rtl">
      <br />
      <br />

      <nav class="alert alert-info" role="alert">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              <small>
                <span class="glyphicon glyphicon-user"></span>
                خوش آمدید، {{currentUser.Name}}
              </small>
            </a>
          </div>
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              <small>نام کاربری {{currentUser.UserName}}</small>
            </a>
          </div>
          <div class="navbar-header pull-left">
            <a class="navbar-brand" href="#">
              <!-- <span class="glyphicon glyphicon-time"></span> -->
              <small class="pull-center">
                <span class="glyphicon glyphicon-time"></span>
                ورود به برنامه :{{this.ago}}
              </small>
            </a>
          </div>
        </div>
      </nav>
      <div class="col-md-8 col-md-offset-2">
        <div class="form-group">
          <div class="input-group input-group-sm">
            <span class="input-group-addon" id="sizing-addon1">کار جدید</span>
            <input
              type="text"
              class="form-control"
              placeholder="افزودن کار جدید"
              aria-describedby="sizing-addon1"
              v-model="mywork"
            />
          </div>
          <button class="btn btn-primary btn-sm btn-block" @click="addNewItem">افزودن به لیست کار ها</button>
          <br />

          <br />
          <br />

          <table class="table table-hover">
            <thead>
              <tr>
                <th style="color:indianred">کار انجام نشده</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody v-for="(work) in formattedWorks" :key="work.id">
              <tr class="work-item">
                <td colspan="11">
                  <input
                    type="checkbox"
                    class="glyphicon glyphicon-unchecked"
                    id="check1"
                    v-model="work.done"
                    @change="tasks"
                  />
                  <span style="margin-right:1.5em">{{work.work}}</span>
                </td>

                <td></td>
                <td v-if="work && work.elapsedTime">
                  <big
                    v-if="(work.elapsedTime - work.runtime) >=0"
                  >{{ (new Date(work.elapsedTime - work.runtime)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]}}</big>
                  <big
                    v-if="(work.elapsedTime - work.runtime) <0"
                  >{{ (new Date(0)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]}}</big>
                  <br />
                  <small>{{ (new Date(work.elapsedTime)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]}}</small>
                </td>
                <td v-else></td>
                <td>
                  <div class="pull-left">
                    <div class="btn-group" role="group" aria-label="...">
                      <button
                        v-if="work.start == null"
                        type="button"
                        class="btn btn-link"
                        @click.stop="(event) => start(event, work)"
                      >
                        <span class="glyphicon glyphicon-play" style="color:indianred"></span>
                      </button>
                      <button
                        v-else
                        type="button"
                        class="btn btn-link"
                        @click.stop="(event) => end(event, work)"
                      >
                        <span class="glyphicon glyphicon-pause" style="color:green"></span>
                      </button>
                      <br />
                    </div>
                    <span>
                      <button
                        class="btn btn-link delete-btn"
                        type="button"
                        @click.stop="(event) => deleteItem(event,work)"
                      >
                        <span
                          class="glyphicon glyphicon-trash"
                          style="color:indianred"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <div class="form-group">
            <label for="exampleFormControlTextarea3">
              یاداشت
              <span style="color:gray" class="glyphicon glyphicon-comment"></span>
            </label>

            <textarea
              class="form-control"
              id="exampleFormControlTextarea3"
              rows="1"
              v-model="myynote"
            ></textarea>

            <button style="color:indianred" class="btn btn-link pull-left" @click="addMyNote">
              <span class="glyphicon glyphicon-plus"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <loged-in-footer></loged-in-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import LogedInHeader from "../struct/logedInHeader";
import LogedInFooter from "../struct/logedInFooter";

import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
moment.locale("fa", fa);
moment.loadPersian();

export default {
  name: "myC",
  components: { LogedInFooter, LogedInHeader },
  created() {
    // this.oldTime = new Date();
    // setInterval(() => {
    //    this.screenTime();
    // }, 1000);
    // this.screenTime();
    this.oldTime = new Date();
    setInterval(() => {
      this.ago = moment(this.oldTime).fromNow();
    }, 1000);
  },

  data() {
    return {
      email: "",
      mywork: "",
      myynote: "",
      tstart: 0,
      tend: 20,
      ago: "",
      elapsedTime: 0,
      elapsedTimeNow: 0,
      timer: undefined,

      timers: [],
    };
  },
  computed: {
    ...mapGetters(["works", "currentUser"]),

    formattedWorks() {
      const x = new Date();

      return this.works.map((w) => {
        if (w.start != null) {
          w.start = new Date(w.start);

          if (this.timers[w.id]) {
            clearInterval(this.timers[w.id]);
          }

          var diff = x - w.start;
          w.elapsedTime = w.runtime + diff;

          this.timers[w.id] = setInterval(() => {
            w.elapsedTime += 1000;
          }, 1000);
        }
        return w;
      });
    },
  },

  methods: {
    ...mapActions([
      "addWork",
      "deleteWork",
      "tasks",
      "update",
      "addNote",
      "updateNote",
      "screenTime",
    ]),

    start(event, work) {
      work.startCounter++;
      work.start = new Date();
      this.timers[work.id] = setInterval(() => {
        work.elapsedTime += 1000;
      }, 1000);
      this.update(work);
    },
    end(event, work) {
      clearInterval(this.timers[work.id]);
      var x = new Date();
      var diff = x - work.start;
      work.runtime += diff;
      work.start = null;
      this.update(work);
    },
    addNewItem() {
      this.addWork({
        work: this.mywork,
        runtime: 0,
        start: null,
        done: false,
        elapsedTime: 0,
        startCounter: 0,
        time: 0,
      });
      this.mywork = "";
    },
    deleteItem(event, work) {
      this.deleteWork(work);
    },
    addMyNote() {
      this.addNote({
        note: this.myynote,
        done: false,
      });
      this.myynote = "";
    },
  },
};
</script>

<style scoped>
input[type="checkbox"] {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: "Glyphicons Halflings";
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e157";
}

.work-item .delete-btn {
  visibility: hidden;
}
.work-item:hover .delete-btn {
  visibility: visible;
}
</style>