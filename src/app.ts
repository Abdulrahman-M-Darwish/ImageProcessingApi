import express from "express";
import resize from "./utils/resize";

const app = express();

app.get(
  "/",
  (req: express.Request, res: express.Response): express.Response =>
    res.send("<h1>welcome to my image resizer app</h1>")
);

app.get(
  "/resize",
  async (
    req: express.Request,
    res: express.Response
  ): Promise<express.Response | undefined> => {
    const { filename, width, height } = req.query;
    try {
      if (!width || !height) {
        throw new Error("please fill the dimensions");
      }
      const imagePath = await resize(filename as string, +width, +height);
      res.sendFile(imagePath);
    } catch (err) {
      if ((err as Error).message.includes("Input file is missing")) {
        return res
          .status(404)
          .send(
            `there is no image with name: ${filename}.jpg, please make sure you wrote the right name`
          );
      }
      res.status(404).send((err as Error).message);
    }
  }
);

app.use((req: express.Request, res: express.Response): void => {
  res.status(404).send("<h1>Oops >_<, 404 page not found</h1>");
});

app.listen(3000);
