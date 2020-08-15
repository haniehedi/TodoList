
import addWork from "./components/logedIn/addWork";
import Dones from "./components/logedIn/Dones";
import Notes from "./components/logedIn/Notes";

// import Home from "./components/mainPages/Home";
// import Register from "./components/mainPages/Register";
// import Login from "./components/mainPages/Login";


export const routes =[
     {path:'/mypage', component: addWork},
     {path: '/dones', component: Dones},
     {path: '/notes', component: Notes},

     // {path: '/', component: Home},
     // {path: '/register', component: Register},
     // {payh: '/login', component: Login}
]