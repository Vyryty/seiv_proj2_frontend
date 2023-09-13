<script setup>
import { ref, onMounted } from "vue";
import CourseServices from "../services/courseServices";
import Utils from "../config/utils.js";
import { useRouter } from "vue-router";


const router = useRouter();
const valid = ref(false);
//const user = Utils.getStore("user");
const course = ref({
  id: null,
  name: "",
  description: "",
  hours: "",
  level: "",
  dept: "",
  courseNo: "",
  //published: false,
});

const message = ref("Enter data and click save");

const saveCourse = () => {
  const data = {
    name: course.value.name,
    description: course.value.description,
    hours: course.value.hours,
    level: course.value.level,
    dept: course.value.dept,
    courseNo: course.value.courseNo
  };
  CourseServices.create(data)
    .then((response) => {
      course.value.id = response.data.id;
      console.log("add " + response.data);
    })
    .catch((e) => {
      message.value = e.response.data.message;
      
    });
    router.push({ name: "courses" });

};

const cancel = () => {
  router.push({ name: "courses" });
};

onMounted(() => {
  //user.value = Utils.getStore("user");
});
</script>

<template>
  <div>
    <v-container>
      <v-toolbar>
        <v-toolbar-title>Course Add</v-toolbar-title>
      </v-toolbar>

      <br />
      <h4>{{ message }}</h4>
      <br />
      <v-form ref="form" v-model="valid" lazy validation>
        <v-text-field
          v-model="course.name"
          id="title"
          :counter="50"
          label="Title"
          required
        ></v-text-field>
        <v-text-field
          v-model="course.description"
          id="description"
          :counter="50"
          label="Description"
          required
        ></v-text-field>
        <v-text-field
          v-model="course.hours"
          id="hours"
          :counter="50"
          label="Hours"
          required
        ></v-text-field>
        <v-text-field
          v-model="course.level"
          id="level"
          :counter="50"
          label="Level"
          required
        ></v-text-field>
        <v-text-field
          v-model="course.dept"
          id="dept"
          :counter="50"
          label="Department"
          required
        ></v-text-field>
        <v-text-field
          v-model="course.courseNo"
          id="courseNo"
          :counter="50"
          label="Course Number"
          required
        ></v-text-field>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="saveCourse(course)">Save
        </v-btn>

        <v-btn color="error" class="mr-4" @click="cancel(course)">Cancel</v-btn>
      </v-form>
    </v-container>
  </div>
</template>
