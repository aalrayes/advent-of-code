const fs = require("fs");
module.exports = function readFromFile(file) {
  try {
    const data = fs.readFileSync(file, "utf8");

    return data.split("\n");
  } catch (err) {
    console.error(err);
  }
};
