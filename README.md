## Obtenci�n de audios en MP3 y caption autogenerados desde Youtube


1. MP3 desde Youtube
    * npm install (horizon-youtube-mp3)
    * brew install ffmpeg
    * getMP3.js -> Agregar la url del video del cual espera obtener el audio en la linea 8.
    * Obtener audio en MP3: `node getMP3.js > example.txt`

2. Caption desde Youtube
    * yarn (nightmare, cheerio, htmlEntities)
    * getCaption.js -> Agregar la url del video del cual esperan obtener los caption en la linea 7 (dependiendo del idioma modificar linea 8 y 9 de 'M�s acciones' a 'More actions').
    * Obtener video: `node getCaption.js`
  