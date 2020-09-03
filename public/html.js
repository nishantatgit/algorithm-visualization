function html(content,scriptName){
  return `<html dir="ltr" lang="en">
    <head>
      <meta charset="utf-8">
    </head>
    <body>
    <h1>Animating algorithms</h1>
      <div id="main">${content || ''}</div>
      
      <script src=${scriptName}.js></script>
    </body>
   </html>`
}

module.exports = html;