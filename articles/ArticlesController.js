const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
    res.send('Página de articles')
})


module.exports = router;