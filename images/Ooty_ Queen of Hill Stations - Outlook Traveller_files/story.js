
$(document).ready(function() {
var articleImage = 1;
$('.content img').each(function(){
		var path = window.location.pathname;
		path = path.split('/');
		console.log(path);
		
		
		if(path[4] > 56802 && path[4] < 68962 && path[2] != 'see'){
		var imgID = jQuery(this).attr('class');
		var imgClass = jQuery(this);
		if(imgID){
		imgID = imgID.split('-');
		imgID = imgID.pop();
		getOldPhotoCredit(imgID,imgClass);
		}
		}
		
		if(path[4] > 56802 || path[2] == 'see'){
		var caption = $(this).attr('alt');		
		var credit = $(this).attr('title');
		if(credit){
		credit = 'Photo Credit: '+credit;
		}else{
			credit = '';
		}
		
		$(this).before('<div class="photoCredit">'+credit+'</div>');
		$(this).after('<div class="photoCC">'+caption+'</div>');
		$(this).removeAttr('title');
		}
		$(this).before('<div class="articleImage" id="articleImage_'+articleImage+'"><div class="zoomImage"></div></div>');
		$(this).appendTo('#articleImage_'+articleImage);
		articleImage++;
		
});
//=========================
 
$('.zoomImage').click(function(){
	let img = $(this).next().attr('src');  
	$('.zoomBox img').attr('src',img);
	$('#zoom').fadeIn();
	let imgHeight = $('.zoomBox img').height();
	let boxHeight = $(window).height();
	let topMargin = '';
	if(imgHeight < boxHeight){
		topMargin = ((boxHeight-imgHeight)/2)+20;
		$('.zoomBox img').css('margin-top',topMargin);
	}else{
		$('.zoomBox img').css('margin-top','0px');
	}
});


//=========================
$('#zoom .closeButton').click(function(){
$('#zoom').fadeOut();
}); 



});

		function getOldPhotoCredit(imgID,imgClass) {
		jQuery.ajax({
		type: "POST",
		 async: false,
		url: '/outlooktraveller/explore/photocreditold',
		data: {imgID:imgID},
		success: function (data) {
		imgClass.attr('title',data);
		}
		});
		}
		
		
//=========================
