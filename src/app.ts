import express from "express";
import path from "path";
import sharp from "sharp";

const app = express();

app.get("/", (req, res) =>
  res.send("<h1>welcome to my image resizer app</h1>")
);

app.get("/resize", async (req, res) => {
  const { filename, width, height } = req.query;
  if (!filename) {
    return res.status(404).send("please fill the filename");
  }
  if (!width || !height) {
    return res.status(404).send("please fill the dimensions");
  }
  await sharp(path.resolve("./") + "/images/" + filename + ".jpg")
    .resize({
      width: +width,
      height: +height,
    })
    .toFile(path.resolve("./") + "/output/" + "new-" + filename + ".jpg");
  res.sendFile(path.resolve("./") + "/output/" + "new-" + filename + ".jpg");
});

app.listen(3000);
