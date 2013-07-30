
var currentMusic;
var currentPhoto = 0;
var currentAlbum;
var chooserStatus = 'CLOSED';

function initialize(){
	
	addSongs();
	
	addAlbumChoices();
	
	addMusicAlbum();
	
	$('.feathers').css('background-color','#A884AA');
	
	currentAlbum = album1;
	currentAlbumName = 'album1';
	currentPoemList = poemList1;
	
	$('.photo_display').html(currentAlbumName);
	$('.current_photo_display').html(currentPhoto);

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
		$('.music_list').append($('<li onClick=setupAudio("'+musicList[i]+'") id="music" class='+musicList[i]+'>'+musicNames[i]+'</li>'));
	}
}

function coverFadeInOut(){
	$('.photo_cover').fadeIn(2000, function(){ $('.photo_cover').fadeOut(2000); $('.photo').attr('src','images/slideshow/'+currentAlbumName+'/foto'+currentPhoto+'.jpg'); })
}

function changePhoto(direction){
	switch(direction){
		case "right":
		if(currentPhoto < (currentAlbum.length-1)){
			currentPhoto++;
			console.log(currentPhoto);
			coverFadeInOut();
			$('.current_photo_display').html(currentPhoto);
		}
		break;
		case "left":
		if(currentPhoto > 0){
			currentPhoto--;
			coverFadeInOut();
			$('.current_photo_display').html(currentPhoto);
		}
		break;
	}
}

function fadeChoice(){
	$('.album_chooser').fadeOut('slow');
	chooserStatus = 'CLOSED';
}

function addAlbumChoices(){
	for(var i = 0; i < albumList.length; i++){
		$('.album_chooser').append($('<button id=album_choices onClick=chooseAlbum("'+albumList[i]+'")>'+albumList[i]+'</button>'));
	}
}

function albumChoiceSystem(){
	switch(chooserStatus)
	{
		case 'OPEN':
		$('.album_chooser').fadeOut('slow');
		chooserStatus = 'CLOSED';
		break;
		case 'CLOSED':
		$('.album_chooser').fadeIn('slow');
		chooserStatus = 'OPEN';
		break;
	}
}

function addMusicAlbum(){
	for (var i = 0; i < albumChoices.length; i++){
		$('.music_albuns').append($('<button id=albumlist_choices>'+albumChoices[i]+'</button>'));
	}
}

function closeMusic(){
	$('.music_albuns').fadeOut('slow');
}

function chooseAlbum(gotoAlbum){
	switch(gotoAlbum){
		case 'album1':
		currentAlbumName = gotoAlbum;
		currentAlbum = album1;
		currentPhoto = 0;
		currentPoemList = poemList1;
		$('.photo_display').html(currentAlbumName);
		$('.photo_cover').fadeIn(2000, function(){ $('.photo_cover').fadeOut(2000); $('.photo').attr('src','images/slideshow/'+currentAlbumName+'/foto'+currentPhoto+'.jpg'); })
		$('.current_photo_display').html(currentPhoto);
		break;
		case 'album2':
		currentAlbumName = gotoAlbum;
		currentAlbum = album2;
		currentPhoto = 0;
		currentPoemList = poemList2;
		$('.photo_display').html(currentAlbumName);
		$('.photo_cover').fadeIn(2000, function(){ $('.photo_cover').fadeOut(2000); $('.photo').attr('src','images/slideshow/'+currentAlbumName+'/foto'+currentPhoto+'.jpg'); })
		$('.current_photo_display').html(currentPhoto);
		break;
	}
}

function setupAudio(songName){
	currentMusic = songName;
	
	$('.audio_system').attr('src','sound/'+songName+'.mp3')
	$('.core_screen li').css('background-color','#C884CC');
	$('.'+songName+'').css('background-color','#A884AA');
}

