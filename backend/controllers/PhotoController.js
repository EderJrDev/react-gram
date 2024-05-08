const Photo = require("../models/Photo")
const User = require("../models/User")

const mongoose = require("mongoose")

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.fileName;

  const reqUser = req.reqUser

  const user = await User.findById(reqUser._id)

  // create a photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user.id,
    userName: user.name,
  })

  // if user was created successfully , retur data

  if (!newPhoto) {
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    })
  }

  res.status(201).json(newPhoto)

  res.send("Photo insert")
}

module.exports = {
  insertPhoto
}