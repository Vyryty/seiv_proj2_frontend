<script setup>
import CourseServices from "../services/courseServices";
//import Utils from "../config/utils.js";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const courses = ref([]);
const message = ref("Edit or Delete Courses");

const editCourse = (course) => {
  router.push({ name: "edit", params: { id: course.id } });
};

const viewCourse = (course) => {
  router.push({ name: "view", params: { id: course.id } });
};

const addCourse = (course) => {
  router.push({ name: "add", params: { id: course.id } });
};

const addByCSV = () => {
  router.push({ name: "addCSV" });
}

const deleteCourse = (course) => {
  CourseServices.delete(course.id)
    .then(() => {
	  location.reload();
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

const retrieveCourses = () => {
	CourseServices.getAll()
		.then((response)=>{
			courses.value = response.data;
		})
		.catch((e) => {
			message.value = e.response.data.message;
		})
};

onMounted(() => {
  retrieveCourses();
});
</script>

<template>
	<v-container>
		<v-toolbar>
			<v-toolbar-title>Course Listings</v-toolbar-title>
		</v-toolbar>
		<p><br></p>
		<div class="container">
			<v-btn class="mx-2" color="primary" @click="addCourse">Add Course</v-btn>
      <v-btn class="mx-2" color="primary" @click="addByCSV">Add Courses From CSV</v-btn>
			<p><br></p>
			<v-table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Department</th>
						<th>Course Number</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="course in courses" :key="course.id">
						<td>{{course.name}}</td>
						<td>{{course.dept}}</td>
						<td>{{course.courseNo}}</td>
						<td><v-icon small class="mx-4" @click="viewCourse(course)">
							mdi-format-list-bulleted-type</v-icon>
							<v-icon small class="mx-4" @click="editCourse(course)">
							mdi-pencil</v-icon>
							<v-icon small class="mx-4" @click="deleteCourse(course)">
							mdi-trash-can</v-icon>
						</td>
					</tr>
				</tbody>
			</v-table>
		</div>
	</v-container>
</template>

<!-- <template>
  <div>
    <v-container>
      <v-toolbar>
        <v-toolbar-title
          >Hello!</v-toolbar-title
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
