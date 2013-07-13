
var currentMusic;
var currentPhoto = 0;
var currentAlbum;

function initialize(){
	
	addSongs();
	
	addAlbumChoices();
	
	$('.feathers').css('background-color','#A884AA');
	
	currentAlbum = album1;
	currentAlbumName = 'album1';
	
	$('.photo_display').html(currentAlbumName);
	
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
		$('.music_list').append($('<p onClick=setupAudio("'+musicList[i]+'") id="music" class='+musicList[i]+'>'+musicNames[i]+'</p>'));
	}
}

function coverFadeInOut(){
	$('.photo_cover').fadeIn(2000, function(){ $('.photo_cover').fadeOut(2000); $('.photo').attr('src','images/slideshow/'+currentAlbumName+'/foto'+currentPhoto+'.png'); })
	if(poemList[currentPhoto] != null && poemList[currentPhoto] != ""){$('.photo_poem').html('"'+poemList[currentPhoto]+'"'); $('.photo_poem').css('display','block');} else if(poemList[currentPhoto] == null || poemList[currentPhoto] == ""){$('.photo_poem').html(''); $('.photo_poem').css('display','none');}
}

function changePhoto(direction){
	switch(direction){
		case "right":
		if(currentPhoto < (currentAlbum.length-1)){
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

function fadeChoice(){
	$('.album_chooser').fadeOut('slow');
}

function addAlbumChoices(){
	for(var i = 0; i < albumList.length; i++){
		$('.album_chooser').append($('<button id=album_choices onClick=chooseAlbum("'+albumList[i]+'")>'+albumList[i]+'</button>'));
	}
}

function openAlbumChoice(){
	$('.album_chooser').fadeIn('slow');
}

function chooseAlbum(gotoAlbum){
	switch(gotoAlbum){
		case 'album1':
		currentAlbumName = gotoAlbum;
		currentAlbum = album1;
		$('.photo_display').html(currentAlbumName);
		$('.photo_cover').fadeIn(2000, function(){ $('.photo_cover').fadeOut(2000); $('.photo').attr('src','images/slideshow/'+currentAlbumName+'/foto'+currentPhoto+'.png'); })
		break;
		case 'album2':
		currentAlbumName = gotoAlbum;
		currentAlbum = album2;
		$('.photo_display').html(currentAlbumName);
		$('.photo_cover').fadeIn(2000, function(){ $('.photo_cover').fadeOut(2000); $('.photo').attr('src','images/slideshow/'+currentAlbumName+'/foto'+currentPhoto+'.png'); })
		break;
	}
}

function setupAudio(songName){
	currentMusic = songName;
	
	$('.audio_system').attr('src','sound/'+songName+'.mp3')
	$('.core_screen p').css('background-color','#C884CC');
	$('.'+songName+'').css('background-color','#A884AA');
}

