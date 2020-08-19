
const state = {
    works: [],
    dones:[],
    notes: [],
    myynote: '',
    lastId: 0, 
    user:{},
    modal:'', 
    ago:'', 
    oldTime:''
}
const mutations = {
    ['ADD_WORK']: (state, work) => {
        if(work.work){
            const workWithId = [work].map(w => {
                w.id = ++state.lastId
                return w
            })
            state.works = state.works.concat(work)
        }
         
    },
    ['DELETE_WORK']: (state, work) => {
        state.works = state.works
            .filter(w => w.id !== work.id)
    },
    ['UPDATE']: (state, work) => {
        state.works = state.works
            .filter(w => w.id !== work.id)
            .concat([work])
    },
    ['TASKS']: (state) => {
        state.works.filter(x => x.done);

    },
    ['NOTES']: (state) => {
        state.notes.filter(x => x.done);

    },
    // ['UPDATE_NOTE']: (state, payload) => {
    //     return state.myynote = payload
    //     //console.log(myynote)
    // },
    ['DELETE_NOTE']: (state, note) => {
        state.notes = state.notes
            .filter(n => n.id !== note.id)
    },
    ['ADD_NOTE']: (state, note) => {
        if(note.note){
            const noteWithId = [note].map(no => {
                no.id = ++state.lastId
                return no
            })
            state.notes = state.notes.concat(noteWithId)
       }
    },
    // ['SCREEN_TIME']: (state) =>{
    //     // state.ago = moment(this.oldTime).fromNow();
    //     state.oldTime = new Date();
    //         setInterval(() => {
    //             state.ago = moment(this.oldTime).fromNow();
    //         }, 1000);
    //     },  
 }
const actions = {
    addWork: ({ commit }, work) => {
        commit('ADD_WORK', work)
    },
    deleteWork: ({ commit }, work) => {
        commit('DELETE_WORK', work)
    },
    deleteNote: ({ commit }, note) => {
        commit('DELETE_NOTE', note)
    },
    tasks: ({ commit }) => {
        commit('TASKS')
    },
    notess: ({ commit }) => {
        commit('NOTES')
    },
    update: ({ commit }, work) => {
        if (!work) return
        commit('UPDATE', work)
    },
    addNote: ({ commit }, note) => {
        commit('ADD_NOTE', note)
    },
    // updateNote: ({ commit }, note) => {
    //     commit('UPDATE_NOTE', note)
    // }, 
    // screenTime: ({ commit }) => {
    //     commit('SCREEN_TIME')
    // },
   
}

const getters = {
    works(state) {
        const comparer = (a, b) => b.id - a.id
        return state.works.filter(x => !x.done).sort(comparer);
    },
    // ago(state) {
    //     return state.ago;
    // },
    dones(state) {
        return state.works.filter(x => x.done);
    },
    notes(state) {
        return state.notes.filter(n => !n.done);
    },
    myynote(state) {
        return state.myynote
    },
    modal(state) {
        return state.mymodal
    }, 
    loggedIn(state){
        return state.token !== null
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}