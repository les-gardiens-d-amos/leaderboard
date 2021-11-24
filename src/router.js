import LeaderBoard from "./components/screen/LeaderBoard.vue";
import Statistics from "./components/screen/Statistics.vue";

var routes = [
    { 
      path: "/", 
      name: "leaderboard",
      component: LeaderBoard,
    },
    {
      path: "/statistics",
      name: "statistics",
      component:Statistics
    }
     
];
  
export default routes;