function html(content){
  return `<html dir="ltr" lang="en">
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <div id="main">${content || ''}</div>
      <h1>Animating algorithms</h1>
      <script src="animations.js"></script>
    </body>
   </html>`
}

module.exports = html;