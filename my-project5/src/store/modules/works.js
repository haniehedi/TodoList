

const state={
    works:[],
    notes:[{note: ''}],
    myynote:'',
    lastId: 0
}
const mutations ={
    ['ADD_NOTE']: (state)=>{
        state.notes.push({
            note: state.myynote
        })
    },
    ['ADD_WORK']: (state, work) => {
        const workWithId = [work].map(w => {
            w.id = ++state.lastId
            return w
        })
        state.works = state.works.concat(workWithId)
    },
    ['DELETE_WORK']:(state, work) => {
        state.works = state.works
            .filter(w => w.id !== work.id)
    } ,
    ['UPDATE']: (state, work) => {
        state.works = state.works
            .filter(w => w.id !== work.id)
            .concat([work])
    },
    // ['TASKS']:(state)=>{
    //     state.works.filter(x => x.done);
    //
    // },
    ['UPDATE_NOTE']:(payload)=>{
        return state.myynote= payload
        //console.log(myynote)
    }
}
const actions= {
    addWork: ({commit}, work) => {
        commit('ADD_WORK', work)
    },
    deleteWork:({commit}, work) => {
        commit('DELETE_WORK', work)
    },
    tasks:({commit}) => {
        commit('TASKS')
    },
    update:({commit}, work) => {
        if (!work) return
        commit('UPDATE', work)
    },
    addNote:({commit}, note) => {
        commit('ADD_NOTE', note)
    },
    updateNote:({commit}, note)=>{
        commit('UPDATE_NOTE', note)
    }
}

const getters={
    works(state){
        return state.works.filter(x => !x.done);
    },
    dones(state){
        return state.works.filter(x => x.done);
    },
    notes(state){
        return state.notes
    },
    myynote(state){
        return state.myynote
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}