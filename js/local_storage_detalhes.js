'use strict'



const configs = {
  PLAYLIST_KEY: "playlist",
};

function addMusicToPlaylist(data) {
  let musics = new Array();

  if (localStorage.hasOwnProperty(configs.PLAYLIST_KEY)) {
    musics = JSON.parse(localStorage.getItem(configs.PLAYLIST_KEY));
  }

  musics.push(data);

  localStorage.setItem(configs.PLAYLIST_KEY, JSON.stringify(musics));
}

$(".add-music-button").on("click", function () {
  let musicRef = $(this).data("ref");

  let musicObject = {
    author: $(`#${musicRef} .music-author`).html(),
    title: $(`#${musicRef} .music-title`).html(),
  };

  addMusicToPlaylist(musicObject);
});

$(document).ready(function () {

  if ($("#playlist-table").length > 0) {
    if (localStorage.hasOwnProperty(configs.PLAYLIST_KEY)) { // testa se o objecto tem a propriedade especificada

      JSON.parse(localStorage.getItem(configs.PLAYLIST_KEY)).map(
        (music, index) => {
          $("#playlist-table").append(`
          <tr id="music-${index}">
            <td class="music-author">${music.author}</td>
            <td class="music-title">${music.title}</td>
          </tr>
          <tr><td><p class="textoFav"></p></td> musica<td><button class="favBotao" onclick="apagar(${index})" ><i class="fa fa-remove"></i></button></td></tr>
        `);
        }
      );
    }
  }
});



function apagar (index){

	
	let musics = new Array();
   musics = JSON.parse(localStorage.getItem(configs.PLAYLIST_KEY));

   musics = musics.filter((_, i) => i !== index);

   localStorage.setItem(configs.PLAYLIST_KEY, JSON.stringify(musics));
   location.reload();

}


