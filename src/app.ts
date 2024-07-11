import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import notFound from './app/middlewares/notFound'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import config from './app/config'

const app: Application = express()

//parsers
app.use(express.json())

const allowDomainList = [
  'http://localhost:5173',
  'https://sports-sphere-client.vercel.app',
]
/* app.use(
  cors({
    origin: allowDomainList,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  }),
) */

app.use(
  cors({
    origin: allowDomainList,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    // optionsSuccessStatus: 200,
  }),
)

// application routes
app.use('/api/v1', router)

const test = async (req: Request, res: Response) => {
  res.send(`Server is running on port: ${config.port}`)
}

app.get('/', test)

app.use(globalErrorHandler)

//Not Found
app.use(notFound)

export default app
