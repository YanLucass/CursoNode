import express from "express";
const exphbs = require('express-handlebars');
import session from "express-session";
const FileStore = require("session-file-store")(session); // dizer que queremos salvar as sessões nas pastas sessions
import flash from "express-flash";
import conn from "../db/conn";

//Models
import Tought from '../models/Tought';
import User from '../models/User';
import Comment from '../models/Comment';

//Importar rotas
import toughtsRoutes from '../routes/toughtsRoutes'
import ToughtController from '../controllers/ToughtController';
import authRoutes from '../routes/authRoutes'

const app = express();

//template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//receber resposta do body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//session middleware - diz onde o express vai salvar as seções. Configuração de sessão e seu cookie
app.use(
  session({
    name: "session",
    secret: "nosso_secret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: require("path").join(require("os").tmpdir(), "sessions"),
    }),

    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true,
    },
  })
);

// flash messages - Status do sistema, pequenas mensagens como "Cadastro feito". São feedbacks apos alteração no BD
app.use(flash());

// Salvar compartilhar sessao caso user esteja logado
app.use((req, res, next) => {
  //vamos criar uma logica para o andamento do sistema, dependendo do que queremos fazer
  //Verificar se o usuario tá logado.
  if (req.session.userId) {
    //Mandamos dados da sessão dele para outras. 
    res.locals.session = req.session;
  }
  // caso o usuario não está logado
  next();
});

//arquivos estaticoss
app.use(express.static("public"));

//configurar Rotas
app.use('/toughts', toughtsRoutes);
app.use('/', authRoutes);

// '/'. Isso impede de termos q acessar '/toughts' smp para mostrar os pensamentos e resolve o erro cannot get '/'
app.get('/', ToughtController.showToughts) 

conn
  //.sync(})
  .sync()
  .then(() => {
    app.listen(3001);
  })
  .catch((err) => {
    console.log(err);
  });
