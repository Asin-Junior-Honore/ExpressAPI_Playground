import { Router } from 'express';
import { createGreeting, deleteGreeting, getAllGreetings, getGreetingById, updateGreeting } from '../controllers/greetingsController';

const router = Router();

router.get('/', getAllGreetings);
router.get('/:id', getGreetingById);
router.post('/', createGreeting);
router.put('/:id', updateGreeting);
router.delete('/:id', deleteGreeting);

export default router;
