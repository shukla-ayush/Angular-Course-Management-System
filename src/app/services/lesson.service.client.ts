export class LessonServiceClient {
  findLessonsForModule(courseId, moduleId) {
    return fetch('http://fathomless-brook-39975.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
