import { Router } from 'express';
import * as controller from './controller';

const router = Router();

router.get('/', controller.index);
router.post('/create', controller.create);
router.get('/read/:id', controller.read);
router.post('/update/:id', controller.update);
router.delete('/destroy/:id', controller.destroy);

export default router;