//importar models necessários
import User from '../models/User';

//Importar pacote para fazer o hash, escolhemos o bycrypt(nome do algoritmo) a biblioteca é bcryptjs
import bcrypt from 'bcryptjs'

module.exports = class AuthController {

    static login(req, res) {
        res.render('auth/login');
    }

    static async loginPost(req, res) {
        
        const { email, password } = req.body

        //find user
        const user = await User.findOne({where: {email: email}});
        if(!user) {
            req.flash('message', 'Nenhum usuario cadastrado com esse email');
            res.render('auth/login');
            return;
        }

        //check if passwords match
        const  passwordMatch = bcrypt.compareSync(password, user.password); //
        // don't equals
        if(!passwordMatch) {
            req.flash('message', 'Senha incorreta');
            res.render('auth/login');
            return;
        }

        //agora se passar por isso td tá tudo correto. Vamos iniciar sessão
        req.session.userId = user.id
        //console.log(req.session.userId);
        req.flash('message', 'Autenticado com sucesso!');
        req.session.save(() => {
            res.redirect('/');
            return;
        })

    }

    static register(req, res) {
        res.render('auth/register');
    }

    static async createUser(req, res) {
        const { name, email, password, confirmpassword } = req.body;

        //password match validation
        if(password != confirmpassword) {
            // vem dentro da requisição. Passe uma chave seguida de um valor (mensagem)
            // estamos mandando esse obj la para a view, como se mandassemos um dado com o res render
            req.flash('message', 'As senhas não conferem, tente novamente!'); 
            //pesquisar como enviar classe de erro. Mandar message class como error, e ativa uma classe baseada nele
            res.render('auth/register'); 
            return;
        }

        //password lenght validation
        if(password.length < 7) {
            req.flash('message', 'Insira uma senha maior que 7');
            res.render('auth/register');
            return;
        }

        //validation email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regex.test(email)) {
            req.flash('message', 'email em formato inválido');
            res.render('auth/register');
            return;
        } 

        //check if user exists  
        const checkIfUserExists = await User.findOne({ where: {email: email }}); // retorna obj, se tiver avalia true

        if(checkIfUserExists) {
            req.flash('message', 'O email já está cadastrado');
            res.render('auth/register');
            return;
        }

        //create a password
        const salt = bcrypt.genSaltSync(10); //gera valor aleatorio('salt'/sal') para combinar com a sneha antes do hash
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = {
            name,
            email,
            password: hashedPassword
        }

        try {
            const createdUser = await User.create(user);

            //Initialize sesion após cadastrar vamos deixar o usuario logado
            req.session.userId = createdUser.id;

            req.flash('message', 'Cadastro realizado com sucesso');
                
            req.session.save(() => {
                res.redirect('/');
                return;
            })

        }catch(err) {
            console.log(err);   
        }
    }

    static logout(req, res) {
        //vamos destuir a sessão do usuario removendo do sistema.
        req.session.destroy();
        res.redirect('/login');
        return;
    }
}


