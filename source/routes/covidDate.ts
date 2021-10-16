import express from 'express';
import controller from '../controllers/covidDate';
const router = express.Router();

router.get('/infosCovid/', controller.getInfosCovid);

export = router;
