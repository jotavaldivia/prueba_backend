import { Router } from 'express';
import { getProteins } from '../controllers/protein.controller.js';

const router = Router();

router.get("/proteins", getProteins);
  

export default router;