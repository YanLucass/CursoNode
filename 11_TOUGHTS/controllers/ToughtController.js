//importar models necessários
import Tought from '../models/Tought';
import User from '../models/User';
import Comment from '../models/Comment'

import { Op } from 'sequelize';

module.exports = class ToughtController {

    static async showToughts(req, res) {

        //Começando com query params vazios ?
        let search = '';
        // Se tiver parametros nas querys params
        if(req.query.search) {
            search = req.query.search;
        }

        // Ordernação
        let order = 'DESC' // por padrão dos mais recentes pros mais antigos.
        // mas caso venha
        if(req.query.order === 'old') {
            order = 'ASC' // dos mais antigos para mais novos
        } else {
            order = 'DESC'
        }

        const toughtsData = await Tought.findAll({
            include: [
                { model: User},
                { model: Comment},
            ],

            where: {
                title: { [Op.like]: `%${search}%`},
            },
            order: [['createdAt', order]]
            
        });
        // console.log(toughtsData)
        const allToughtsQty = await Tought.count();
        const toughts = toughtsData.map(result => result.get({plain: true}));
        // console.log(toughts);
        let toughtsQty = toughts.length;

        //handlebars não reconhece 0 como false.
        if(toughtsQty === 0) {
            toughtsQty = false;
        }
        //console.log(toughts);
        res.render('toughts/home', { toughts, search, toughtsQty, allToughtsQty});
    }

    //listar pensamentos prorpios
    static async dashboard(req, res) {

        const userId = req.session.userId;
        if(!userId) {
            res.redirect('/login')
        }
     try {
        const user = await User.findOne( { where: { id: userId }, include: Tought, plain: true });
            if(!user) {
                res.redirect('/login');
                return;
             }
            //Vamos limpar o array de pensamentos
             const toughts = user.Toughts.map((result) => result.dataValues); // Retorna um array so com o datavalues.

             let empytToughts = false;
             if(toughts.length === 0) {
                empytToughts = true;
             }
            res.render('toughts/dashboard', { toughts, empytToughts});    
         } 
         catch(err) {
            console.log(err);
         }   
    }

    static createTought(req, res) {
        res.render('toughts/create');
    }

    static async createToughtSave(req, res) {
        //tente checar se o usuario realmente existe  
        const tought = {
            title: req.body.tought,
            //com o msm nome do bd UserId
            UserId: req.session.userId
        }
        try {
           
            await Tought.create(tought);
            req.flash('message', 'Pensamento criado com sucesso');
            
            //garanta que a sessão foi salva antes de redirecionar
            req.session.save(() => {
                res.redirect('/toughts/dashboard');
                return;
            });
         
        } catch(err) {
            console.log('Aconteceu um erro' + err);
        }
    }
    // deletar pensamento
    static async toughtsDelete(req, res) {

        const id = req.body.id;
        const UserId = req.session.userId;
        try {
            await Tought.destroy({where: {id: id, UserId: UserId}});
            req.flash('message', 'Pensamento removido com sucesso!'); 
            req.session.save(() => {
                res.redirect('/toughts/dashboard');
                return;
            })
        } catch(err) {
            console.log('Aconteceu um erro' + err);
        } 
    }

    // Editar pensamento:
    static async updateTought(req, res) {
        const id = req.params.id;
        try {
            const tought = await Tought.findOne({ where: { id: id }, raw: true});
            res.render('toughts/update', { tought });
        } catch(err) {
            console.log(err);   
        }
    }

    static async editPost(req, res) {
        
        const id = req.body.id;
        const title = req.body.tought;
        console.log(id, title);

        try {
            await Tought.update({title}, { where: {id: id}});
            req.flash('message', 'Pensamento criado');
            req.session.save(() => {
                res.redirect('/toughts/dashboard');
                return;
            })

        } catch(err) {
            console.log('Ocorreu um erro:' + err);
        }
    }

    static async addComment(req, res) {

        const userId = req.session.userId;
        const user = await User.findOne({where: { id: userId}});
        
        console.log(user.name);
        const content = {
            content: req.body.content,
            ToughtId: req.body.toughtId,
            UserId: req.body.userId,
            userName: user.name
        }

        console.log(content);
        try {
            
           
            if(!userId) {
                return;
            }
            await Comment.create(content);
            req.flash('message', 'Comentário adiocionado com sucesso');
            req.session.save(() => {
                res.redirect('/');
                return;
            })
            
            
        } catch(err) {
            console.log('Ocorreu um erro' + err);
        }
    }
}