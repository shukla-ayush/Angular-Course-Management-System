export class ModuleServiceClient {
  MODULE_URL = 'http://fathomless-brook-39975.herokuapp.com/api/course/COURSE_ID/module';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
