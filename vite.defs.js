import process from 'node:process'
import { now } from '@abw/badger-timestamp'

const SITE_VERSION = JSON.stringify(process.env.npm_package_version)
const SITE_DATE    = JSON.stringify(now().date())

export default {
  SITE_VERSION,
  SITE_DATE
}
