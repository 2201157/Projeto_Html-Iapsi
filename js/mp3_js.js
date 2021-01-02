// Seleciona todos os elementos do HTML
// e atribui variaveis 
let now_playing = document.querySelector(".now-playing"); 
let track_art = document.querySelector(".track-art"); 
let track_name = document.querySelector(".track-name"); 
let track_artist = document.querySelector(".track-artist"); 

let playpause_btn = document.querySelector(".playpause-track"); 
let next_btn = document.querySelector(".next-track"); 
let prev_btn = document.querySelector(".prev-track"); 

let seek_slider = document.querySelector(".seek_slider"); 
let volume_slider = document.querySelector(".volume_slider"); 
let curr_time = document.querySelector(".current-time"); 
let total_duration = document.querySelector(".total-duration"); 

// Valores especificos usados globalmente
let track_index = 0; 
let isPlaying = false; 
let updateTimer; 

// Cria um elemento "audio" para o player
let curr_track = document.createElement('audio'); 

// Define lista de musicas que serão tocadas 
let track_list = [ 
{ 
	name: "The drug in me is reimagined", 
	artist: "Falling in Reverse", 
	image: "img/mp3_musica/falling.png", 
	path: "musica/Falling.mp3"
}, 
{ 
	name: "Lithium", 
	artist: "Evanescence", 
	image: "img/mp3_musica/evanescence.png", 
	path: "musica/Evanescence.mp3"
}, 
{ 
	name: "Hero", 
	artist: "Nickelback", 
	image: "img/mp3_musica/nickelback.png", 
	path: "musica/Nickelback.mp3", 
},
{ 
	name: "Beautiful Day", 
	artist: "U2", 
	image: "img/mp3_musica/u2.png", 
	path: "musica/U2 .mp3"
},
{ 
	name: "Paradise", 
	artist: "ColdPlay", 
	image: "img/mp3_musica/coldplay.png", 
	path: "musica/Paradise.mp3"
},
{ 
	name: "Há sempre um amanhã", 
	artist: "IRIS", 
	image: "img/mp3_musica/iris.png", 
	path: "musica/IRIS.mp3"
},
{ 
	name: "Slow Down", 
	artist: "Maverick Sabre", 
	image: "img/mp3_musica/slowdown.png", 
	path: "musica/Maverick Sabre.mp3"
},
{ 
	name: "Lemonade", 
	artist: "Internet Money", 
	image: "img/mp3_musica/lemonade.png", 
	path: "musica/Internet Money .mp3"
},
{ 
	name: "P DE PABLITO", 
	artist: "X-TENSE", 
	image: "img/mp3_musica/xtense.png", 
	path: "musica/X-TENSE .mp3"
},
{ 
	name: "You and I", 
	artist: "Scorpions", 
	image: "img/mp3_musica/scorpions.png", 
	path: "musica/Scorpions.mp3"
},       

]; 

function loadTrack(track_index) { 
// Limpa o antigo contador
clearInterval(updateTimer); 
resetValues(); 

// Carrega uma nova musica
curr_track.src = track_list[track_index].path; 
curr_track.load(); 

// Atualiza os detalhes da musica
track_art.style.backgroundImage = 
	"url(" + track_list[track_index].image + ")"; 
track_name.textContent = track_list[track_index].name; 
track_artist.textContent = track_list[track_index].artist; 
now_playing.textContent = 
	"PLAYING " + (track_index + 1) + " OF " + track_list.length; 

// Define um intervalo de 1000ms
// para fazer update 
updateTimer = setInterval(seekUpdate, 1000); 

// Move para a proxima musica se a atual já tiver terminado
// Usa o evento "ended" 
curr_track.addEventListener("ended", nextTrack); 


}
// Função para resetar os valores para os originais 
function resetValues() { 
	curr_time.textContent = "00:00"; 
	total_duration.textContent = "00:00"; 
	seek_slider.value = 0; 
} 

function playpauseTrack() { 
	// Troca entre tocar e parar
	// dependendo do estado atual
	if (!isPlaying) playTrack(); 
	else pauseTrack(); 
} 

function playTrack() { 
	// Tocar a musica carregada}
	curr_track.play(); 
	isPlaying = true; 

	// Troca o icone pelo icone de pausa
	playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>'; 
} 

function pauseTrack() { 
	// Pausa a musica carregada
	curr_track.pause(); 
	isPlaying = false; 

	// Troca o icone pelo icone de tocar 
	playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';; 
} 

function nextTrack() { 
	// Volta na primeira musica
	// se a musica atual for a ultima da lista 
	if (track_index < track_list.length - 1) 
		track_index += 1; 
	else track_index = 0; 

	// carrega e toca a musica seguinte
	loadTrack(track_index); 
	playTrack(); 
} 

function prevTrack() { 
	// Vai para a ultima musica 
	// se a atual for a primeira da lista
	if (track_index > 0) 
		track_index -= 1; 
	else track_index = track_list.length; 
		
	// Carrega e toca a musica
	loadTrack(track_index); 
	playTrack(); 
} 


function seekTo() { 
	// Obter a duração da musica
	seekto = curr_track.duration * (seek_slider.value / 100); 

	// Define a posição atual da trilha
	curr_track.currentTime = seekto; 
	} 

function setVolume() { 
	// Muda o volume de acordo com o volume no slide
	// 
	curr_track.volume = volume_slider.value / 100; 
	} 

function seekUpdate() { 
	let seekPosition = 0; 

	// Verifica se a duração da musica é um numero legivel
	if (!isNaN(curr_track.duration)) { 
		seekPosition = curr_track.currentTime * (100 / curr_track.duration); 
		seek_slider.value = seekPosition; 

		// Calcula a duração total e quanto falta para terminar
		let currentMinutes = Math.floor(curr_track.currentTime / 60); 
		let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60); 
		let durationMinutes = Math.floor(curr_track.duration / 60); 
		let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60); 

		// Add um 0 a cada digito dos numeros
		if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; } 
		if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; } 
		if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; } 
		if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; } 

		// Mostra a atualição da duração 
		curr_time.textContent = currentMinutes + ":" + currentSeconds; 
		total_duration.textContent = durationMinutes + ":" + durationSeconds; 
	} 
} 

// Carrega a primeira musica
loadTrack(track_index); 
