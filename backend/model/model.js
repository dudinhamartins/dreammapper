const connection = require("../config/db");

const userModel = {
    
    //model usuario
    getAllUsers: async () =>{
        const [result] = await connection.query("SELECT * FROM usuarios")
        .catch(erro => console.log(erro));
        return result
    },

    getByEmail: async (email) =>{
        const [result] = await connection.query("SELECT * FROM usuarios WHERE email =?",[email])
        .catch(erro => console.log(erro));
        return result
    },


    registerUser: async (id,nome, sobrenome, email, senha) =>{
        const [result] = await connection.query("INSERT INTO usuarios values(?,?,?,?,?)",[id,nome, sobrenome, email, senha])
        .catch(erro => console.log(erro));
        return result
    },

    deleteUser: async(email)=> {
        const [result] = await connection.query("DELETE FROM usuarios WHERE email=?", [email])
        .catch(erro => console.log(erro));
        return result
    },


    validateLogin: async(email,senha) =>{
        const [result] = await connection.query("SELECT * FROM usuarios WHERE email=? AND senha=?",[email,senha])
        .catch(erro => console.log(erro));
        return result;
    },

     
    updatePassword: async(email,senha) =>{
        const [result] = await connection.query("UPDATE usuarios SET senha=? WHERE email=?", [senha,email])
        .catch(error => console.log(error))
        return result;
    },

    //model sono
    
};

module.exports = userModel;