const { PreviewLinks } = require('@previewlinks/node-previewlinks')

const previewlinks = new PreviewLinks({ apiToken: process.env.PREVIEWLINKS_API_KEY })

export { previewlinks }