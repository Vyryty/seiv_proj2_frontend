import { createRouter, createWebHistory } from "vue-router";

//import Login from "./views/Login.vue";

import CourseList from "./views/CourseList.vue";
import EditCourse from "./views/EditCourse.vue";
import AddCourse from "./views/AddCourse.vue";
import ViewCourse from "./views/ViewCourse.vue";
//import AddLesson from "./views/AddLesson.vue";
//import EditLesson from "./views/EditLesson.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //{
    //  path: "/",
    //  alias: "/login",
    //  name: "login",
    //  component: Login,
    //},
    {
      path: "/",
      name: "courses",
      component: CourseList,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditCourse,
      props: true,
    },
    {
      path: "/add",
      name: "add",
      component: AddCourse,
    },
    {
      path: "/view/:id",
      name: "view",
      component: ViewCourse,
      props: true,
    },
    //{
    //  path: "/addLesson/:tutorialId",
    //  name: "addLesson",
    //  component: AddLesson,
    //  props: true,
    //},
    //{
    //  path: "/editLesson/:tutorialId/:lessonId",
    //  name: "editLesson",
    //  component: EditLesson,
    //  props: true,
    //},
  ],
});

export default router;
