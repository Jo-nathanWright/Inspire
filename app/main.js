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
