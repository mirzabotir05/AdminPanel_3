const fs = require('fs')
const path = require('path')

const filePath = path.join(require.main.filename)
<<<<<<< HEAD

module.exports = async (fileName) => {
    await fs.unlink(filePath + '/../../public/images/' + fileName, (err) => {
        if (err) {
            console.log(err);
        }
    })
=======
// console.log(filePath);

module.exports = async (fileName) => {
    if (fileName) {
        await fs.unlink(filePath + '/../../public/images/' + fileName, (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
>>>>>>> f9d8a4169c9614cf2dc2b24fb47f820cb3ae5fa8
}