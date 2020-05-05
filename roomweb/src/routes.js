import searchresult from './searchresult.vue';
import home from './home.vue';
import detail from './detail.vue';
import portal from './portal.vue';
import OTPBox from './OTPBox.vue';
import login from './login.vue';

export default [
    // {path:'/' ,component:app },
    {path:'/result',name:'result',component: searchresult,props: true},
    {path:'/',component: home},
    {path:'/detail:id',component: detail},
    {path:'/portal',component: portal},
    {path:'/OTPBox', name:'OTPBox',component: OTPBox},
    {path:'/login', name:'login',component: login},
]