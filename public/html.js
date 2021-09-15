function html(content, scriptName) {
	return `<html dir="ltr" lang="en">
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="main.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap" rel="stylesheet">
    </head>
    <body>
      <h1 class="main-header">Animating algorithms</h1>
      <div id="main">${content || ''}</div>
      
      <script src=${scriptName}.js></script>
    </body>
   </html>`;
}

module.exports = html;
