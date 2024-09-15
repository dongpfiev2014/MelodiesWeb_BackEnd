import { createApp } from "./createApp";
import { AppDataSource } from "./data-source";

const app = createApp();

const PORT = process.env.PORT || 4000;

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
