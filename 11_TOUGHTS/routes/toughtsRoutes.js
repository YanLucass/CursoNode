import express from 'express';
const router = express.Router();
//controller 
import ToughtController from '../controllers/ToughtController'

//importar helpers
import { checkAuth } from '../helpers/auth';

router.get('/dashboard', checkAuth, ToughtController.dashboard);
//rotas para adicionar pensamentos
router.get('/add', checkAuth, ToughtController.createTought)
router.post('/add', checkAuth, ToughtController.createToughtSave)
//deletar pensamentos
router.post('/delete', checkAuth, ToughtController.toughtsDelete);
//editar pensamentos
router.get('/edit/:id', checkAuth, ToughtController.updateTought);
router.post('/edit', checkAuth, ToughtController.editPost);
//adicionar comentários
router.post('/addComment', checkAuth, ToughtController.addComment);
router.get('/', ToughtController.showToughts)

//exportar
module.exports = router;
