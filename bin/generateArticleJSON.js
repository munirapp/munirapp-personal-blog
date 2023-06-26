const fs = require('fs')
const path = require('path')

const matter = require('gray-matter')
const algoliasearch = require('algoliasearch/lite')

const stripMarkdown = require('./stripMarkdown')

// Article base path
const articleDir = path.join(process.cwd(), 'src/content')

// check required environment variable
const ALGOLIA_APP_ID = process.env?.ALGOLIA_APP_ID
const ALGOLIA_API_KEY = process.env?.ALGOLIA_API_KEY
if (!ALGOLIA_API_KEY || !ALGOLIA_APP_ID) {
  console.error('api key or app id not provided')
  process.exit(1)
}

// Initialize algolia clients
const algoClient = algoliasearch.default(ALGOLIA_APP_ID, ALGOLIA_API_KEY)
const algoIndex = algoClient.initIndex('munirapp_blog')

/**
 * Checks if an item is a directory.
 *
 * @param {string} item - The item to check.
 * @returns {boolean} Returns true if the item is a directory, false otherwise.
 */
const getOnlyDirectory = (item) => fs.lstatSync(path.join(articleDir, item)).isDirectory()

/**
 * Maps and processes an article JSON file.
 *
 * @param {string} dirItem - The directory item.
 * @param {string} fileItem - The file item.
 * @returns {object} The processed article JSON.
 */
const mapArticleJSON = (dirItem, fileItem) => matter(fs.readFileSync(path.join(articleDir, dirItem, fileItem)))

/**
 * Iterates over directory items and maps them to processed article JSON.
 *
 * @param {string} dirItem - The directory item.
 * @returns {Array<object>} An array of processed article JSON objects.
 */
const iterateMapArticleJSON = (dirItem) =>
  fs.readdirSync(path.join(articleDir, dirItem)).map((fileItem) => mapArticleJSON(dirItem, fileItem))

/**
 * Formats and sanitizes an article item.
 *
 * @param {object} articleItem - The article item object.
 * @returns {object} The formatted and sanitized article object.
 */
const formatAndSanitizeArticle = (articleItem) => ({
  title: articleItem?.data?.title, // Extracts the title property from the article item data
  description: articleItem?.data?.description, // Extracts the description property from the article item data
  date: articleItem?.data?.date, // Extracts the date property from the article item data
  year: new Date(articleItem?.data?.date).getFullYear(), // Extracts the year from the article item date using the Date object
  content: stripMarkdown(articleItem?.content), // Sanitizes the content property of the article item by stripping Markdown formatting
})

/**
 * Reduces an array of article JSON into a single array.
 *
 * @param {Array} prev - The previous accumulated array.
 * @param {Array} curr - The current array to be reduced.
 * @returns {Array} The reduced array containing formatted and sanitized article objects.
 */
const reduceArticleJSON = (prev, curr) => (curr?.length ? [...prev, ...curr.map(formatAndSanitizeArticle)] : prev)

const main = async () => {
  try {
    const articleList = fs
      .readdirSync(articleDir)
      .filter(getOnlyDirectory)
      .map(iterateMapArticleJSON)
      .reduce(reduceArticleJSON, [])

    await algoIndex.saveObjects(articleList, { autoGenerateObjectIDIfNotExist: true })

    console.log('success replace index search')
    process.exit(0)
  } catch (error) {
    if (error?.transporterStackTrace?.length) {
      console.error(error.message)
      console.error('\nstacktrace error request', JSON.stringify(error.transporterStackTrace[0]?.request))
      console.error('\nstacktrace error response', JSON.stringify(error.transporterStackTrace[0]?.response))
      process.exit(1)
    }

    console.error(error)
    process.exit(1)
  }
}

main()
