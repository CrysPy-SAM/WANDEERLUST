//const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Wanderlust_DEV',
    allowerdformat: async (req, file) => ["png", "jpg", "jpeg"],
    //public_id: (req, file) => 'computed-filename-using-request',
  },
});


module.exports = {
    cloudinary,
    storage
};
