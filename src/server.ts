import app from './app'
import mongoose from 'mongoose'
import config from './config'
import { logger, ErrorLogger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('database is connect successfully')
    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    ErrorLogger.error('database is not found ', err)
  }
}

main()
