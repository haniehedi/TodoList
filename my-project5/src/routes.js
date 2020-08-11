
import addWork from "./components/addWork";
import Dones from "./components/Dones";
import Notes from "./components/Notes";


export const routes =[
     {path:'', component: addWork},
     {path: '/tasks', component: Dones},
     {path: '/notes', component: Notes}
]