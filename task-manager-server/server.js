const app = require("./app.js");

const port = 5000;
app.listen(port, () => {
  console.log(`Server started at localhost:${port}`);
});