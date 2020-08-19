
import addWork from "./components/logedIn/addWork";
import Dones from "./components/logedIn/Dones";
import Notes from "./components/logedIn/Notes";
import Store from "./components/logedIn/Store";
import  Buy from "./components/logedIn/Buy";

import Home from "./components/mainPages/Home";
import Register from "./components/mainPages/Register";
import Login from "./components/mainPages/Login";
import Secure from "./components/mainPages/Secure";
import About from "./components/mainPages/About"


export const routes =[
     


     {path:'/mypage', component: addWork},
     {path: '/dones', component: Dones},
     {path: '/notes', component: Notes},
     {path: '/store', component: Store},
     {path: '/buy' , component: Buy},

     {path: '/', component: Home},
     {path: '/reg', component: Register},
     {path: '/log'  ,  component: Login}, 
     {path: '/secure', component: Secure,  meta: {   requiresAuth: true }  },
     {path: '/about',  component: About }
]