
var currentMusic;
var currentPhoto = 0;
var currentAlbum = 0;

function initialize(){
	addSongs();
	
	$('.feathers').css('background-color','#A884AA');
	
	if(poemList[currentPhoto] != null && poemList[currentPhoto] != ""){$('.photo_poem').html('"'+poemList[currentPhoto]+'"'); $('.photo_poem').css('display','block');} else if(poemList[currentPhoto] == null || poemList[currentPhoto] == ""){$('.photo_poem').html(''); $('.photo_poem').css('display','none');}

	//console.log(photoNames.length);
}

function introRemove(){
	$('.intro_screen').animate({left:'-100%'},5000,removeAct);
}

function removeAct(){
	$('.intro_screen').remove();
}

function addSongs(){
	var musicLength = musicList.length;
	
	for(var i = 0; i < musicLength; i++){
		$('.core_screen').append($('<p onClick=setupAudio("'+musicList[i]+'") id="music" class='+musicList[i]+'>'+musicNames[i]+'</p>'));
	}
}

function coverFadeInOut(){
	$('.photo_cover').fadeIn(2000, function(){ $('.photo_cover').fadeOut(2000); $('.photo').attr('src','images/slideshow/album/foto'+currentPhoto+'.png'); })
	$('.photo_display').html(currentPhoto);
	if(poemList[currentPhoto] != null && poemList[currentPhoto] != ""){$('.photo_poem').html('"'+poemList[currentPhoto]+'"'); $('.photo_poem').css('display','block');} else if(poemList[currentPhoto] == null || poemList[currentPhoto] == ""){$('.photo_poem').html(''); $('.photo_poem').css('display','none');}
}

function changePhoto(direction){
	switch(direction){
		case "right":
		if(currentPhoto < (album.length-1)){
			currentPhoto++;
			console.log(currentPhoto);
			coverFadeInOut();
		}
		break;
		case "left":
		if(currentPhoto > 0){
			currentPhoto--;
			coverFadeInOut();
		}
		break;
	}
}

function setupAudio(songName){
	currentMusic = songName;
	
	$('.audio_system').attr('src','sound/'+songName+'.mp3')
	$('.core_screen p').css('background-color','#C884CC');
	$('.'+songName+'').css('background-color','#A884AA');
}

