const {Router} = require('express')
const router = Router();
const RoutesController = require('../controller/routesController')

router.get('/',RoutesController.list)
router.post('/add',RoutesController.add)
router.get('/delete/:id',RoutesController.delete)
router.get('/turn/:id',RoutesController.turn)
router.get('/edit/:id',RoutesController.edit)
router.post('/editp/:id',RoutesController.editp)
module.exports = router;