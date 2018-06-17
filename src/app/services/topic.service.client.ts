export class TopicServiceClient {
  findTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch('http://fathomless-brook-39975.herokuapp.com/api/course/' +
      courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }
}
