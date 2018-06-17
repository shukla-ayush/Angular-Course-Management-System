export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    console.log(topicId)
    return fetch('http://fathomless-brook-39975.herokuapp.com/api/widget/' + topicId)
      .then(response => response.json());
  }
}
