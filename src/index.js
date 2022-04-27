const Server = require("./models/server");
/* 
const { Server: HttpServer } = require( 'http' )
const { Server: IOServer } = require( 'socket.io' )
const productsRouter = require( './routes/product.js' )


const httpServer = new HttpServer( app )
const io = new IOServer( httpServer )

app.set( 'views', 'src/views' )

app.use( express.urlencoded( { extended: true } ) )
app.use( express.json() ) */

const server = new Server();

server.listen();
