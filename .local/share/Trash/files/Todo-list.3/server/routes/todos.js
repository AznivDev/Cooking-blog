const express = require("express");
const {
  addTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} = require("../controllers/todos.js");
const router = express.Router();
const checkToken = require("../middleware/middleware.js");

router.post("/todos", addTodo);
router.get("/todos", getTodos);
router.get("/todos/:id", getTodo);
router.delete("/todos/:id", checkToken, deleteTodo);
router.put("/todos/:id", checkToken, updateTodo);

module.exports = router;
