import { Router } from 'express';
import {getCommunes} from '../controllers/communes.controller.js';

const router = Router();

router.get("/communes", getCommunes);
  
export default router;