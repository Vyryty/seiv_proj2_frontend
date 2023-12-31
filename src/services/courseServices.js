import apiClient from "./services.js";

export default {
  getAll() {
    return apiClient.get("/courses");
  },
  //getAllForUser(userId) {
  //  return apiClient.get("/tutorials/userTut/" + userId);
  //},
  get(id) {
    return apiClient.get(`/courses/${id}`);
  },
  create(data) {
    return apiClient.post("/courses", data);
  },
  update(id, data) {
    return apiClient.put(`/courses/${id}`, data);
  },
  delete(id) {
    return apiClient.delete(`/courses/${id}`);
  },
  deleteAll() {
    return apiClient.delete(`/courses`);
  },
  findByName(name) {
    return apiClient.get(`/courses?name=${name}`);
  },
};
