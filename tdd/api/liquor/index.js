//라우팅 설정에 대한 로직
const express = require('express')
const router = express.Router();
const ctrl = require('./liquor.ctrl')

// router.get('/img', ctrl.getImg)

router.get('/imgs', ctrl.getImg)

router.get('/', ctrl.index)

router.get('/:title', ctrl.show)

router.delete('/:title', ctrl.destory)

router.post('/', ctrl.create)

router.put('/:pTitle', ctrl.update)

module.exports = router;