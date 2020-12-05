const {Router} = require('express')
const router = Router();
const RoutesController = require('../controller/routesController')

router.get('/',RoutesController.list)
router.post('/add',RoutesController.add)
module.exports = router;