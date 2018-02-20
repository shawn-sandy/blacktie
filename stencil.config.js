exports.config = {
  srcDir: "src/stencil",
  generateDistribution: true,
  namespace: "btw",
  buildDir: "./build",
  distDir: "./dist/components",
  generateWWW: false,
  indexHtmlSrc: "src/index.html",
  hashFileNames: false,
  bundles: [
    { components: ["my-first-component"] },
    { components: ["btw-card-elm", "btw-card-elm-content", "btw-card-elm-header", "btw-top-anchor", "btw-svg-elm", 'btw-confirm-actions'] }
  ]
}
