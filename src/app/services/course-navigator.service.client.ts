export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('http://fathomless-brook-39975.herokuapp.com/api/course')
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch('http://fathomless-brook-39975.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
