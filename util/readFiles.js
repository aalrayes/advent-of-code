const fs = require("fs");
module.exports = function readFromFile(file,sperator) {
  try {
    const data = fs.readFileSync(file, "utf8");

    return data.split(sperator);
  } catch (err) {
    console.error(err);
  }
};
