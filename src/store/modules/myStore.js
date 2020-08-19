


const state={
    books:[],
    buys:[], 
    buy:"", 
    money:400000
}

const mutations={
    ['ADD_BOOK']:(state, book)=>{
        const bookWithId = [book].map(b => {
            b.id = ++state.lastId
            return b
        })
        state.books = state.books.concat(bookWithId)

    }, 
    ['DELETE_BOOK']:(state, book)=>{
        state.books = state.books
            .filter(b => b.id !== book.id)
    },
    ['BUY_BOOK']:(state, book)=>{
        book.booknum--; 
        if(book.booknum==0){
            state.books = state.books
            .filter(b => b.id !== book.id)
        }
        state.money-=book.bookprice;
        if(state.money>=0){
            book.bought++
        }

        // state.buy = state.books
        //     .filter(b => b.id == book.id)

        const buyWithId = [book].map(bu => {
            bu.id = ++state.lastIdb
            return bu
        })
        state.buys = state.buys.concat(buyWithId)
    
    },
    ['PLUS']:(state, book)=>{
        return book.booknum++
    },
    ['MINUS']:(state, book)=>{
         book.booknum--;
        if(book.booknum<=0){
            state.books = state.books
            .filter(b => b.id !== book.id)
        }
        return book.booknum

    },
    ['DELETE_BUY_BOOK']:(state, book)=>{
        state.buys = state.buys
            .filter(b1 => b1.id !== book.id)
    },

}

const actions={
    addBook({commit}, book){
        commit('ADD_BOOK', book)
    },
    deleteBook({commit}, book){
        commit('DELETE_BOOK', book)
    }, 
    buyBook({commit}, book){
        commit('BUY_BOOK', book)
    }, 
    plus({commit}, book){
        commit('PLUS', book)
    },
    minus({commit}, book){
        commit('MINUS', book)
    },
    deleteBuyBook({commit}, book){
        commit('DELETE_BUY_BOOK', book)
    },
}

const getters={
    books(state){
        return state.books
    }, 
    money(state){
        return state.money
    }, 
    buys(state){
        return state.buys
    },
}


export default{
    state, 
    getters,
    actions,
    mutations
}
