// Removes bold and italic markdown syntax (**) from the text.
const removeBoldItalic = (text) => text.replace(/(\*\*|__)/g, '')

// Removes blockquote markdown syntax (>) from the text.
const removeBlockQuote = (text) => text.replace(/(^>)/gm, '')

// Removes strikethrough markdown syntax (~~) from the text.
const removeStrikethrough = (text) => text.replace(/(~~)/g, '')

// Removes headers markdown syntax (#) from the text. Uses recursion to remove all levels of headers.
const removeHeaders = (text, i = 6) =>
  i < 1 ? text : removeHeaders(text.replace(new RegExp(`^#{${i}} `, 'gm'), ''), i - 1)

// Removes link and image markdown syntax (![...](...)) from the text.
const removeLinksImages = (text) => text.replace(/(!?\[.*?\]\(.+?\))/g, ' ')

// Removes inline code and code block markdown syntax (`...` and ```...```) from the text.
const removeInlineCodeAndCodeBlock = (text) => text.replace(/(`.*`|```[\s\S]*?```)/g, ' ')

// Removes list identifiers markdown syntax (* , -, 1. ) from the text.
const removeListIdentifiers = (text) => text.replace(/^(\* | - |1. )/gm, '')

// Escapes special characters in the text.
const escapeString = (text) => text.replace(/[\\"]/g, '\\$&')

// Removes new lines from the text.
const removeNewLines = (text) => text.replace(/\n/g, '')

/**
 * Strips markdown syntax from the input markdown string, escapes special characters, and removes new lines.
 * @param {string} markdown - The input markdown string.
 * @returns {string} - The markdown string with all markdown syntax removed, special characters escaped, and new lines removed.
 */
module.exports = (markdown) =>
  [
    removeBoldItalic,
    removeBlockQuote,
    removeStrikethrough,
    removeHeaders,
    removeLinksImages,
    removeInlineCodeAndCodeBlock,
    removeListIdentifiers,
    //escapeString,
    removeNewLines,
  ].reduce((text, fn) => fn(text), markdown)
