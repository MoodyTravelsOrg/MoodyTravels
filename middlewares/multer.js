
import multer from "multer";

let storage;
if (process.env.NODE_ENV === "development") {
  storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "frontend/public");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
    limits: { fileSize: 150000 }
  });
} else
  storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "frontend/dist");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
    limits: { fileSize: 150000 }
  });

const upload = multer({ storage: storage });

export default upload;
