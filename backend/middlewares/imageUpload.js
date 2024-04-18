const multer = require("multer");
const path = require("path")

// Destination to store image
const imageStore = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = ""

    if (req.baseUrl.includes("user")) {
      folder = "users"
    } else if (req.baseUrl.includes("photos")) {
      folder = "photos"
    }

    cb(null, `uploads/${folder}`)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))

  }
})

// const imageUpload = multer({

// })