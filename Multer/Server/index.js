const express = require("express");
const cors = require("cors");
const upload = require("./config/multer");
const { ConnectToDB, File } = require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./uploads"));

app.get("/", (req, res) => {
  res.send(" Api Server is running");
});

app.post("/api/file/upload", upload.single("file"), async (req, res) => {
  console.log(req.file.filename);

  try {
    // Add any additional fields you want to save

    // Save the file information to the database
    const fileData = await File.create({
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
      mimetype: req.file.mimetype,
      createdAt: new Date(),
    });
    console.log("File information saved successfully:", fileData);
  } catch (error) {
    console.error("Error saving file information:", error);
    return res.status(500).send("Error saving file information");
  }

  // Handle file upload logic here
  res.send("File uploaded successfully");
});

app.get("/api/file/:filename", async (req, res) => {
  const { filename } = req.params;
  try {
    // Find the file in the database
    const file = await File.find({ filename });
    if (!file) {
      return res.status(404).send("File not found");
    }
    // Send the file as a response
    res.download(file.path, file.filename, (err) => {
      if (err) {
        console.error("Error sending file:", err);
        res.status(500).send("Error sending file");
      }
    });
  } catch (error) {
    console.error("Error retrieving file:", error);
    res.status(500).send("Error retrieving file");
  }
});

app.listen(8080, async () => {
  await ConnectToDB();
  console.log("Server is running on port 8080");
});

// ConnectToDB()
//   .then(() => {
//     app.listen(8080, () => {
//       console.log("Server is running on port 8080");
//     });
//   })
//   .catch((error) => {
//     console.error("Failed to connect to the database:", error);
//   });
