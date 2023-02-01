//import
const {Router} = require('express');
const router = Router();

router.get('/test', (req , res) => {
    const data = {
        "name" : 'Altahir',
        "correo" : 'altahirains@hotmail.com'
    }
    res.json(data);
});

module.exports = router;