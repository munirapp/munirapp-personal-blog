import { visit } from 'unist-util-visit'
import dedent from 'dedent'

const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

const escapeHtml = (str) => str.replace(/[&<>"']/g, (c) => escapeMap[c])

export const mermaid = () => (tree) => {
  visit(tree, 'code', (node) => {
    if (node.lang !== 'mermaid') return

    // @ts-ignore
    node.type = 'html'
    node.value = dedent`
      <div class="mermaid" data-content="${escapeHtml(node.value)}">
        <p>Loading graph...</p>
      </div>
    `
  })
}
