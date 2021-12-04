import app from "./app";

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
