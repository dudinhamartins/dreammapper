const clientController = require("../model/model");

const userController = {

    //route root 
    getRoot: async (req, res) => {
        res.status(200).json({ msg: "The API is running!!!" })
    },

    //tabela usurio
    listAllUsers: async (req, res) => {
        try {
            const clients = await clientController.getAllUsers();
            res.status(200).json(clients);
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao obter a lista de usuários" })
        }
    },

    listByEmail: async (req, res) => {
        try {
            const sql = await clientController.getByEmail(req.params.email);

            if (sql.length > 0) {
                res.status(200).json(sql)
            }
            else {
                res.status(401).json({ msg: "Não existe registro no banco com este email" })
            }
        }
        catch (error) {
            return error
        }
    },

    createNewUser: async (req, res) => {
        const { id, nome, sobrenome, email, senha } = req.body;

        console.log(req.body);
        

        try {
            const sql = await clientController.getByEmail(email);

            if (sql.length > 0) {
                res.status(401).json({ msg: "O usuário já está cadastrado" })
            }
            else {
                await clientController.registerUser( id, nome, sobrenome, email, senha);
                res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
            }
        }
        catch (error) {
            return error
        }
    },

    deleteUser: async (req, res) => {
        try {
            const sql = await clientController.getByEmail(req.params.email);

            if (sql.length > 0) {
                await clientController.deleteUser(req.params.email);
                res.status(200).json({ msg: "Usuário deletado com sucesso!!" })
            }
            else {
                res.status(401).json({ msg: "O usuário não existe no bd" })
            }
        }

        catch (error) {
            res.status(500).json({ error: "Erro ao tentar deletar usuário" })
        }
    },

    //Login

    Login:async (req, res) => {
        const {email, senha } = req.body;
        try{
            const sql = await clientController.validateLogin(email,senha);

            console.log(sql);

            if(sql.length > 0 && sql[0].senha === senha){
                res.status(200).json(sql[0])
            }
            else{
                res.status(401).json({msg:"email ou senha incorretos"});
            }
        }
        catch(error){
            console.log(error);
            if(error){
                res.status(500).json(error);
            }
        }
    },


    
      //controller para reset
      getEmailReset: async (req,res) =>{
        let {email} = req.body

        email = email.toLowerCase();

        try{
            const sql = await clientController.getByEmail(email);

            console.log(sql);

            if(sql.length > 0){
                res.status(200).json({msg:'succes'})
            }
            else{
                res.status(404).json({msg:"email nao esta cadastrado no db"})
            }
        }
        catch(error){
            if(error){

            }
        }
     },

     resetPassword: async (req,res) =>{
        let {email,senha} = req.body
        //email = email.toLowerCase();

        const sql = await clientController.getByEmail(email);
        
        try{
            if(sql.length > 0){
                await clientController.updatePassword(email,senha);
            res.status(200).json({msg:"senha atualizada com sucesso"});
            }
            else{
                res.status(401).json({msg: "O email não existe na base de dados"})
            }          
        
        }
        catch(error){
            console.log("erro ao redefinir a senha");
            res.status(500).json({msg:"erro no servidor"})
        }
     },

     //tabela sono
     
    
};

module.exports = userController;
