$(document).ready(function(){

    art();
    alb();   

 
    
})


function alb (){

    $.ajax({
        method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=album.search&album=The+Drug+In+Me+Is+Reimagined&api_key=cb5873017d844ca90043a3eae82f9055&format=json"
    }).done(function(album){

        $.each(album, function(key, value){

            $('#album_foto').html('<img src="' + value.albummatches.album[0].image[2]['#text'] + '""/>')

            });

       })


}



function art(){


     $.ajax({
        method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=The+Drug+In+Me+Is+Reimagined&api_key=cb5873017d844ca90043a3eae82f9055&limit=5&format=json"
    }).done(function(detalhes){
        
        

        $.each(detalhes, function(key, value){

       
        $('#banda').html(value.trackmatches.track[0].artist)
        $('#musica').html(value.trackmatches.track[0].name)
        $('#foto1').html('<img src="' + value.trackmatches.track[0].image[2]['#text'] + '""/>')  

        


        });


    })
}