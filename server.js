import app from "./app.js";
import connectDB from "./config/database.js";
import userRouter from "./routes/userRouter.js";

connectDB();
app.use("/api/v1", userRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening to port ${process.env.PORT}`)
);
