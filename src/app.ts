import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/module/user/user.route'
const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', UserRoutes)

// app.get('/', async (req: Request, res: Response, next:NextFunction) => {
//   Promise.reject(new Error('Unhandle Promise Rejection'))
// });

//global error handler
app.use(globalErrorHandler)

export default app
