const express = require("express");
const adminRouter = require("./routes/admin/admin.routes");
const imagekitAuthRouter = require("./routes/imagekit/imagekit.routes");
const cors = require("cors");
const mailRouter = require("./routes/mail/mail.route");
const path = require("path");
const errorMiddleware = require("./middlewares/errors");
const app = express();
  
app.use(express.json());
app.use(cors());
app.use(express.static("public/images"));
app.use(express.urlencoded({ extended: false }));

app.use("/admin", adminRouter);
app.use("/imagekit", imagekitAuthRouter);

app.use("/mail", mailRouter);

//Middleware for errors
app.use(errorMiddleware)




module.exports = app;
