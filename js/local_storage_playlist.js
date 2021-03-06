'use strict'

const configs = {

  PLAYLIST_KEY: "playlist",

}

function addMusicToPlaylist(data) {

  let musics = new Array();

  if (localStorage.hasOwnProperty(configs.PLAYLIST_KEY)) {

    musics = JSON.parse(localStorage.getItem(configs.PLAYLIST_KEY));

  }

  musics.push(data);

  localStorage.setItem(configs.PLAYLIST_KEY, JSON.stringify(musics));

}


$(document).ready(function () {


  if ($("#playlist-table").length > 0) {

    if (localStorage.hasOwnProperty(configs.PLAYLIST_KEY)) { 


      JSON.parse(localStorage.getItem(configs.PLAYLIST_KEY)).map(

        (music, index) => {

          $("#playlist-table").append(`

            <tr id="music-${index}">

              <td class="music-author">${music.author}</td>

              <td class="music-title">${music.title}</td>

              <td><p class="textoFav"></p></td> musica<td><button class="favBotao" onclick="apagar(${index})" ><i class="fa fa-remove"></i></button></td>

            </tr>`
          );
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

function add_to_storage(obj){

let musicRef = $(obj).data("ref");


  let musicObject = {
    author: $(`#banda${musicRef}`).html(),
    title: $(`#musica${musicRef}`).html(),
  };

  addMusicToPlaylist(musicObject);



}

function add_to_playlist(obj){
  let musicRef = $(obj).data("ref");


  let musicObject = {
    author: $(`#${musicRef} .music-author`).html(),
    title: $(`#${musicRef} .music-title`).html(),
  };

  addMusicToPlaylist(musicObject);
};
