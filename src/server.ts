import app from './app'
import mongoose from 'mongoose'
import config from './config'
import { logger, ErrorLogger } from './shared/logger'
import { Server } from 'http'

let server: Server
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('database is connect successfully')

    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    ErrorLogger.error('database is not found ', err)
  }

  process.on('unhandleRejection', error => {
    if (server) {
      server.close(() => {
        ErrorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

main()

process.on('uncaughtException', error => {
  ErrorLogger.error(error)
  process.exit(1)
})

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
