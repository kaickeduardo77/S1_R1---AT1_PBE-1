import multer from 'multer';
import mysql from 'mysql2';
import path from 'path';
import crypto from 'crypto';
import fs from 'fs';


 
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'projetopbe'
});





const baseUploadDir = path.resolve(process.cwd(), 'uploads');

const verificaDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive:true })
  }
}

const createMulter = ({ folder, allowedTypes, fileSize }) => {

  const uploadDir = path.join(baseUploadDir, folder);

  verificaDir (uploadDir);

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir)
    },
    filename: (req, file, cb) => {
      const hash = crypto.randomBytes(12).toString('hex');
      cb(null, `${hash}-${file.originalname}`);
    }

  });

  const fileFilter = (req, file, cb) => {
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Tipo de arquivo nao permitido'));
    }
    cb(null, true)
  }
  
  console.log('criadooooooo')
  return multer({
    storage,
    limits: { fileSize },
    fileFilter


    
  })

}

export default createMulter




