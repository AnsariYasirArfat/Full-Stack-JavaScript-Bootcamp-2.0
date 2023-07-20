const ideaController = require("../Controllers/idea.controller");

/*
 * Define route for the calls like
 *
 * GET 127.0.0.1:8080.ideaApp/v1/ideas
 */

module.exports = (app) => {
  app.get("/ideaApp/v1/ideas", ideaController.fetchAllIdeas);

  // Post Call
  app.post("/ideaApp/v1/ideas", ideaController.creteIdeas);

  // Put Call
  app.put("/ideaApp/v1/ideas/:id", ideaController.updateIdea);

  // Delete Call
  app.delete("/ideaApp/v1/ideas/:id", ideaController.deleteIdea);
};
