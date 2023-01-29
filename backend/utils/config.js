import dotenv from 'dotenv';
dotenv.config();

const CONFIG = {
  PORT: process.env.PORT,
  MONGOOSE_URI: "mongodb://localhost:27017/googlenotes",
  BCRYPT_ROUNDS: Number(process.env.BCRYPT_ROUNDS),
  JWT_SECRET:process.env.JWT_SECRET,
  JWT_REFRESH_SECRET:process.env.JWT_REFRESH_SECRET,
  MULTER_MEDIA_DESTINATION: process.env.MULTER_MEDIA_DESTINATION,
};

export default CONFIG;
