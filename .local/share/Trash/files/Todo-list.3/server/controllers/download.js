const { Parser } = require("json2csv");
const jsons2csvParser = new Parser();
const { Todos } = require("../db.js");

const download = async (req, res) => {
  try {
    let todos = await Todos.findAll();
    if (!todos) {
      return res.status(404).json({ message: "Todos not found" });
    }
    const csv = jsons2csvParser.parse(todos);
    res.attachment("todos.csv");
    res.status(200).send(csv);

    //JSON format
    // res.status(200).send(JSON.stringify(todos))
  } catch (e) {
    console.error(e);
  }
};
module.exports = download;
