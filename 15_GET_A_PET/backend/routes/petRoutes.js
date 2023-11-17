import express from 'express';
const router = express.Router();
import PetController from '../controllers/PetController';

router.post('/createPet', PetController.createPet);

export default router;