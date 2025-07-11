// //mongodb+srv://pramodrasanjana710:PWivIlSzToT9q7ZS@cluster0.1igw3jj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// import express from "express";
// import notesRoutes from "./routes/notesRoutes.js";
// import { connectDB } from "./config/db.js";
// //  import cors from "cors";

// //  app.use(cors());


// const app = express();

// //app.use("/api/notes", notesRoutes);




// app.use(express.json()); // Middleware to parse JSON bodies

// // app.use((req, res, next) => {
// //   console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
// //   next();
// // });


// app.use("/api/notes",notesRoutes); // Middleware to parse JSON bodies

// connectDB().then(() =>{
//   app.listen(5001, () =>{
//   console.log('Server started on PORT: 5001');
// });
// });


import express from "express";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import path from "path";

const app = express();
const __dirname = path.resolve();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS to allow requests from frontend
app.use(cors());

// Routes
app.use("/api/notes", notesRoutes);

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));   
});

// Connect to DB and start server
connectDB().then(() => {
  app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
  });
});


