<script setup>
import CourseServices from "../services/courseServices";
import Utils from "../config/utils.js";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const courses = ref([]);
//const user = Utils.getStore("user");
const message = ref("Edit or Delete Courses");

const editCourse = (course) => {
  router.push({ name: "edit", params: { id: course.id } });
};

const viewCourse = (course) => {
  router.push({ name: "view", params: { id: course.id } });
};

const deleteCourse = (course) => {
  CourseServices.delete(course.id)
    .then(() => {
      //retrieveTutorials();
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

const displayCourse = (course) => {
	CourseServices.getAll;
};

//const retrieveTutorials = () => {
//  CourseServices.getAllForUser(user.userId)
//    .then((response) => {
//      tutorials.value = response.data;
//    })
//    .catch((e) => {
//      message.value = e.response.data.message;
//    });
//};

//retrieveTutorials();
const title = ref('This is the course listings page');
onMounted(() => {
  //courses = CourseServices.getAll();
  console.log(courses.value.name);
});
</script>

<template>
	<p><br></p>
	<h1>{{ title }}</h1>
	<p><br></p>
	<div class="container">
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
					<th>Hours</th>
					<th>Level</th>
                    <th>Course Number</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="course in courses" :key="course.id">
					<router-link :to="{ name: 'courselisting_db', params: { id: course.id}}">
						<td>{{course.name}}</td>
						<td>{{course.dept}}</td>
						<td>{{course.hours}}</td>
						<td>{{course.level}}</td>
						<td>{{course.courseNo}}</td>
					</router-link>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<!---<script>
import axios from 'axios'

export default {
	data() {
		return {
			courses: []
		}
	},
	mounted() {
		this.get();
	},
	method: {
		get(){
			axios.get('http://localhost:3013/course-t3/courses/').then(res => {
				console.log(res)
			});
		}
	}
}
</script> -->
<!-- <template>
  <div>
    <v-container>
      <v-toolbar>
        <v-toolbar-title
          >Hello, {{ user.fName }} {{ user.lName }}!</v-toolbar-title
        >
      </v-toolbar>
      <br /><br />
      <v-card>
        <v-card-title> Tutorials </v-card-title>
        <v-card-text>
          <b>{{ message }}</b>
        </v-card-text>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Title</th>
              <th class="text-left">Description</th>
              <th class="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in courses" :key="item.title">
              <td>{{ item.title }}</td>
              <td>{{ item.description }}</td>
              <td>
                <v-icon small class="mx-4" @click="editCourse(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small class="mx-4" @click="viewCourse(item)">
                  mdi-format-list-bulleted-type
                </v-icon>
                <v-icon small class="mx-4" @click="deleteCourse(item)">
                  mdi-trash-can
                </v-icon>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-container>
  </div>
</template> -->
