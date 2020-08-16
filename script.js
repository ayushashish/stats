var count = 0;

function getData() {
    fetch("https://www.googleapis.com/youtube/v3/videos?id=Iot0eF6EoNA&key=AIzaSyDSEjovQe4QWFMHKKRccc5ZTXYvhIZFKxU&part=statistics")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    document.querySelector("#dislikes-count").innerHTML = myJson.items[0].statistics.dislikeCount;
    document.querySelector("#likes-count").innerHTML = myJson.items[0].statistics.likeCount;
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

  count = count+1;

  if (count==5) {
    clearInterval(myVar);
  }
}

fetch("https://www.googleapis.com/youtube/v3/videos?id=Iot0eF6EoNA&key=AIzaSyDSEjovQe4QWFMHKKRccc5ZTXYvhIZFKxU&part=statistics")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    document.querySelector("#dislikes-count").innerHTML = myJson.items[0].statistics.dislikeCount;
    document.querySelector("#likes-count").innerHTML = myJson.items[0].statistics.likeCount;
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

var myVar = setInterval(getData, 5000);
