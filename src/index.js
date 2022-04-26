const express = require( 'express' )
const { Server: HttpServer } = require( 'http' )
const { Server: IOServer } = require( 'socket.io' )
const productsRouter = require( './routes/product.js' )

const app = express()
const httpServer = new HttpServer( app )
const io = new IOServer( httpServer )

app.set( 'views', 'src/views' )
app.use( express.static( 'public' ) )
app.use( express.urlencoded( { extended: true } ) )
app.use( express.json() )

app.get( '/', ( req, res ) =>
{
  res.send( 'estamos en el index' )
} )
const PORT = 8080
const server = app.listen( PORT, () =>
{
  console.log( `Listening on port ${ PORT }` )
} )
server.on( 'error', ( err ) => console.error( err ) )
