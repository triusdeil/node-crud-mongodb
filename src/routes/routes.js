const {Router} = require('express')
const router = Router();
const RoutesController = require('../controller/routesController')

router.get('/',RoutesController.list)
router.post('/add',RoutesController.add)
router.get('/delete/:id',RoutesController.delete)
router.get('/turn/:id',RoutesController.turn)
module.exports = router;