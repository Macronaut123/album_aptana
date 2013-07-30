
var currentMusic;
var currentPhoto = 0;
var currentAlbum;
var chooserStatus = 'CLOSED';
var musicStatus = 'CLOSED';
var currentMusicAlbum;
var currentMusicNames;
var currentMusicAlbumName;

function initialize(){
	
	$('.feathers').css('background-color','#A884AA');
	
	currentAlbum = album1;
	currentAlbumName = 'album1';
	currentMusicAlbum = corrs;
	currentMusicNames = corrsNames;
	currentMusicAlbumName = albumNames[0];
	
	$('.photo_display').html(currentAlbumName);
	$('.current_photo_display').html(currentPhoto);

	//console.log(photoNames.length);
	
	addSongs();
	
	addAlbumChoices();
	
	addMusicAlbum();
}

function introRemove(){
	$('.intro_screen').animate({left:'-100%'},5000,removeAct);
}

function removeAct(){
	$('.intro_screen').remove();
}

function addSongs(){
	var musicLength = currentMusicAlbum.length;
	
	for(var i = 0; i < musicLength; i++){
		$('.music_list').append($('<li onClick=setupAudio("'+currentMusicAlbum[i]+'") id="music" class='+currentMusicAlbum[i]+'>'+currentMusicNames[i]+'</li>'));
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
		$('.music_albuns').append($('<button id=albumlist_choices onclick=changeMusicAlbum("'+albumNames[i]+'")>'+albumChoices[i]+'</button>'));
	}
}

function musicSystem(){
	switch(musicStatus){
		case 'CLOSED':
		$('.music_albuns').fadeIn('slow');	
		musicStatus = 'OPEN';
		break;
		case 'OPEN':
		$('.music_albuns').fadeOut('slow');
		musicStatus = 'CLOSED';
		break;
	}
}


function changeMusicAlbum(albumChoice){
	
	$('video, audio').each(function () {
    	$(this).get(0).pause();
	});
	
	$('.audio_system').attr('src','');
	
	switch(albumChoice){
		case "eyed":
			currentMusicAlbum = eyed;
			currentMusicNames = eyedNames;
			currentMusicAlbumName = albumNames[1];
		break;
		case "corrs":
			currentMusicAlbum = corrs;
			currentMusicNames = corrsNames;
			currentMusicAlbumName = albumNames[0];
		break;
	}
	
	var musicLength = currentMusicAlbum.length;
	
	$('.music_list').remove();
	$('.core_screen').append($('<ul class="music_list"> </ul>'));
	$('.music_list').css('z-index', 0);
	for(var i = 0; i < musicLength; i++){
		$('.music_list').append($('<li onClick=setupAudio("'+currentMusicAlbum[i]+'") id="music" class='+currentMusicAlbum[i]+'>'+currentMusicNames[i]+'</li>'));
	}
}

function chooseAlbum(gotoAlbum){
	switch(gotoAlbum){
		case 'album1':
		currentAlbumName = gotoAlbum;
		currentAlbum = album1;
		currentPhoto = 0;
		$('.photo_display').html(currentAlbumName);
		$('.photo_cover').fadeIn(2000, function(){ $('.photo_cover').fadeOut(2000); $('.photo').attr('src','images/slideshow/'+currentAlbumName+'/foto'+currentPhoto+'.jpg'); })
		$('.current_photo_display').html(currentPhoto);
		break;
		case 'album2':
		currentAlbumName = gotoAlbum;
		currentAlbum = album2;
		currentPhoto = 0;
		$('.photo_display').html(currentAlbumName);
		$('.photo_cover').fadeIn(2000, function(){ $('.photo_cover').fadeOut(2000); $('.photo').attr('src','images/slideshow/'+currentAlbumName+'/foto'+currentPhoto+'.jpg'); })
		$('.current_photo_display').html(currentPhoto);
		break;
	}
}

function setupAudio(songName){
	currentMusic = songName;
	
	$('.audio_system').attr('src','sound/'+currentMusicAlbumName+'/'+songName+'.mp3')
	$('.core_screen li').css('background-color','#C884CC');
	$('.'+songName+'').css('background-color','#A884AA');
}

