import multer from "multer";
import path from "path";
import fs from "fs";


if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const nomeArquivo = Date.now() + ext;
        cb(null, nomeArquivo);
    }
});

const fileFilter = (req, file, cb) => {
    const tiposPermitidos = /jpg|jpeg|png/;
    const extname = tiposPermitidos.test(path.extname(file.originalname).toLowerCase());
    const mimetype = tiposPermitidos.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error("Tipo de arquivo não permitido"));
    }
};

const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter
});

export default upload;