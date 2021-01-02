/* Cria um objeto cache */
var cache = new LastFMCache();

/* Cria um objeto da LastFm */
var lastfm = new LastFM({
  apiKey    : 'cb5873017d844ca90043a3eae82f9055',
  apiSecret : '143ec827836cd124b698e684dd6e915f',
  cache     : cache
});

/* Carrega alguma informação sobre um artista */
lastfm.artist.getInfo({artist: 'The xx'}, {success: function(data){
  /* Usar informação. */
}, error: function(code, message){
  /* Mensagem de erro. */
}});