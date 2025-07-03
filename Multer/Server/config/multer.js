const multer = require('multer');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('File upload request received:', req);
    console.log('File upload destination:', file);
      // Specify the directory to store uploaded files
    cb(null, 'uploads/');
    
  },
  filename: (req, file, cb) => {
      // Append timestamp to the original file name
      const UniqueSuffix = new Date().getDay().getMinutes().getSeconds()+file.originalname
    cb(null, UniqueSuffix);
   
  }
});

const upload = multer({ storage})
module.exports = upload;