const ideas = require("../Models/idea.model");

/**
 * Search all idea
 */

exports.fetchAllIdeas = (req, res) => {
  res.status(200).send(ideas);
};

/**
 * Create new idea
 */
let idCount = 1;
exports.creteIdeas = (req, res) => {
  // Read the request
  const idea = req.body;
  // Need to generate the next idea id
  idea.id = ++idCount;
  // Save it in the list of existing idea
  ideas[idCount] = idea;
  // Return the response
  res.status(201).send(ideas[idCount]);
};

/**
 * Update idea
 */
exports.updateIdea = (req, res) => {
  // I need to read the id passed in the path
  //127.0.0.1:8080/ideaApp/v1/ideas/1
  const ideaId = req.params.id;

  // If  the idea is present - modify else return error
  if (ideas[ideaId]) {
    ideas[ideaId] = req.body;
    res.status(200).send(ideas[ideaId]);
  } else {
    res.status(400).send({ message: "idea Id passed was not correct" });
  }
};

/**
 * Delete idea
 */
exports.deleteIdea = (req, res) => {
  // Check if present delete, no return error message
  if (ideas[req.params.id]) {
    delete ideas[req.params.id];
    res.status(200).send({ message: " Successfully Deleted the idea" });
  } else {
    res.status(400).send({ message: "idea Not found" });
  }
};
