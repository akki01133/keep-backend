import dotenv from 'dotenv';
dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || 5000,
  MONGOOSE_URI: process.env.NODE_ENV == 'production' ? process.env.MONGOOSE_URI :"mongodb://0.0.0.0:27017/googlenotes",
  BCRYPT_ROUNDS: Number(process.env.BCRYPT_ROUNDS) || 10,
  JWT_SECRET:process.env.JWT_SECRET,
  JWT_REFRESH_SECRET:process.env.JWT_REFRESH_SECRET,
  MULTER_MEDIA_DESTINATION: process.env.MULTER_MEDIA_DESTINATION,
};

export default CONFIG;
