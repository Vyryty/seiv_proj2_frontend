<script setup>
import CourseServices from "../services/courseServices";
//import LessonServices from "../services/lessonServices";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const course = ref({});
//const lessons = ref([]);
const message = ref("Add, Edit or Delete Courses");

const props = defineProps({
  id: {
    required: true,
  },
});

//const retrieveLessons = () => {
//  TutorialServices.get(props.id)
//    .then((response) => {
//      tutorial.value = response.data;
//      LessonServices.getAllLessons(props.id)
//        .then((response) => {
//          lessons.value = response.data;
//        })
//        .catch((e) => {
//          message.value = e.response.data.message;
//        });
//    })
//    .catch((e) => {
//      message.value = e.response.data.message;
//    });
//};


const retrieveCourse = async () => {    
  CourseServices.get(props.id)
    .then((response) => {
      course.value = response.data;
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};


const editCourse = () => {
  router.push({ name: "edit", params: { id: props.id } });
};

const deleteCourse = () => {
  CourseServices.delete(props.id)
    .then(() => {
      router.push({ name: "courses" });
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

//const editLesson = (lesson) => {
//  router.push({
//    name: "editLesson",
//    params: { tutorialId: props.id, lessonId: lesson.id },
//  });
//};

//const addLesson = () => {
//  router.push({ name: "addLesson", params: { tutorialId: props.id } });
//};

//const deleteLesson = (lesson) => {
//  LessonServices.deleteLesson(lesson.tutorialId, lesson.id)
//    .then(() => {
//      retrieveLessons();
//    })
//    .catch((e) => {
//      message.value = e.response.data.message;
//    });
//};


onMounted(() => {
  //retrieveLessons();
  retrieveCourse();
  console.log(course.value);
});
</script>

<template>
  <div>
    <v-container>
      <v-toolbar>
        <v-toolbar-title>Course View</v-toolbar-title>
      </v-toolbar>
      <br />
      <v-card>
        <v-card-title>
          {{ course.name }}
          
          <!--
            <v-btn class="mx-2" color="success" @click="addLesson"
              >Add Lesson</v-btn
            >
          -->
        </v-card-title>
        <v-card-text>
          <b>{{ message }}</b>
        </v-card-text>
        <v-table>
          <thead>
            <tr><!-- Include course information from database -->
              <th class="text-left">Title</th>
              <th class="text-left">Description</th>
              <th class="text-left">Hours</th>              
              <th class="text-left">Level</th>
              <th class="text-left">Department</th>
              <th class="text-left">Course Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <!--<tr v-for="item in course" :key="item.title">-->
              <td>{{ course.name }}</td>
              <td>{{ course.description }}</td>
              <td>{{ course.hours }}</td>
              <td>{{ course.level }}</td>
              <td>{{ course.dept }}</td>
              <td>{{ course.courseNo }}</td>
                  
                 <!-- <v-icon small class="mx-4" @click="editLesson(item)">
                  mdi-pencil
                </v-icon> 
                 <v-icon small class="mx-4" @click="deleteLesson(item)">
                  mdi-trash-can
                </v-icon> -->                
            </tr>
            <!--</tr>-->
          </tbody>
        </v-table>
        <!-- <v-icon small class="mx-4" @click="editCourse(course.id)">
                  mdi-pencil
                </v-icon>
                <v-icon small class="mx-4" @click="deleteCourse(course.id)">
                  mdi-trash-can
                </v-icon> -->
      </v-card>
      <br> 
      <v-btn class="mx-2" color="primary" @click="editCourse">Edit</v-btn>
      <v-btn  class="mx-2" color="primary" @click="deleteCourse">Delete Course</v-btn>
    </v-container>
  </div>
</template>
