export class SectionServiceClient {

  SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'http://localhost:4000/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'http://localhost:4000/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  unEnrollFromSection(sectionId) {
    const url = 'http://localhost:4000/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  deleteSection(section1, sectionId) {
    const url = 'http://localhost:4000/api/section/' + sectionId;
    const section = {
      name: section1.name,
      seats: section1.seats
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
    return fetch('http://localhost:4000/api/section',
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

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
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
