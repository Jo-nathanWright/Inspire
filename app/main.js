import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TodosController from "./Controllers/TodosController.js";
import WeatherController from "./Controllers/WeatherContoller.js";

class App {
  quotesContoller = new QuotesController
  imagesController = new ImagesController
  weatherController = new WeatherController
  todosController = new TodosController
}

window["app"] = new App();

function startTime() {
  let date = new Date()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  let period = "AM"
  if (hour == 0) {
    hour = 12
  } else if (hour >= 12) {
    hour = hour - 12
    period = "PM"
  }
  // @ts-ignore
  hour = hour < 10 ? "0" + hour : hour;
  // @ts-ignore
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let time = `
  <div class="text-center">
  <h1>${hour}:${minutes} ${period}</h1>
  </div>
  `
  document.getElementById('txt').innerHTML = time
  setTimeout(startTime, 1000)
}

startTime()