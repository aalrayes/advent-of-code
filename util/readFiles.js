const fs = require("fs");
module.exports = function readFromFile(fileRoute,sperator) {
  try {
    const data = fs.readFileSync(fileRoute, "utf8");

    return data.split(sperator);
  } catch (err) {
    console.error(err);
  }
};
