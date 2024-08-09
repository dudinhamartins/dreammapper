const express = require("express");
const clientController = require("../controller/controller");
const router = express.Router();

router.get('/', clientController.getRoot); //rota raiz

//router user
router.get('/user/listar', clientController.listAllUsers); //Listar todos os usuários
router.get('/user/listar/:email',clientController.listByEmail); //Listar usuário por id
router.post('/user/cadastrar', clientController.createNewUser); //deletar  usuário
router.delete('/user/deletar/:email', clientController.deleteUser); //deletar  usuário
router.post('/user/login', clientController.Login); //login dos alunos

//rota reset 
router.post('/user/reset', clientController.getEmailReset)
router.put('/user/resetsenha', clientController.resetPassword); 

//rota sono





module.exports = router;