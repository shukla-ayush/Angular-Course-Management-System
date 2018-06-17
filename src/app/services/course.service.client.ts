export class CourseServiceClient {
  // COURSE_URL = 'http://localhost:8085/api/course';
  COURSE_URL = 'http://fathomless-brook-39975.herokuapp.com/api/course';
  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
}
