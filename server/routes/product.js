const express = require('express');
const multer = require('multer')
const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

var upload = multer({ storage: storage }).single('file')

router.post('/image', (req, res) => {
    //가져온 이미지를 저장
    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, file: res.req.file, filePath: res.req.file.path, fileName: res.req.file.filename })
    })
})


module.exports = router