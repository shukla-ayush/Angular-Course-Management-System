export class SectionServiceClient {

  SECTION_URL = 'http://shielded-waters-68947.herokuapp.com/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'http://shielded-waters-68947.herokuapp.com/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'http://shielded-waters-68947.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  unEnrollFromSection(sectionId) {
    const url = 'http://shielded-waters-68947.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  deleteSection(section1, sectionId) {
    const url = 'http://shielded-waters-68947.herokuapp.com/api/section/' + sectionId;
    const section = {
      name: section1.name,
      seats: section1.seats,
      _id:  sectionId
    };
    return fetch(url, {
      method: 'delete',
      credentials: 'include',
      body: JSON.stringify(section),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateSection(sectionName, seats, courseId, sectionId) {
    console.log(sectionName)
    console.log(seats)
    console.log(courseId)
    console.log(sectionId)
    const section = {
      name: sectionName,
      seats: seats,
      _id: sectionId,
      courseId: courseId
    };
    return fetch('http://shielded-waters-68947.herokuapp.com/api/section',
      {
        method: 'put',
        body: JSON.stringify(section),
        credentials: 'include', // include, same-origin, *omit
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json());
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats, courseName) {
    const section = {courseId, name, seats, courseName};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
