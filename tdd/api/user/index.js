//라우팅 설정에 대한 로직
const express = require('express')
const router = express.Router();
const ctrl = require('./user.ctrl')

router.get('/', ctrl.index)

router.get('/:id', ctrl.show)

router.delete('/:id', ctrl.destory)

router.post('/', ctrl.create)

router.put('/:id', ctrl.update)

module.exports = router;