$('.ask_question').click(function(){
	if(isLogin()=='logIn'){
		$('.closePopup h4').html('Outlook Traveller - Ask Marco');
		$('.rest').html('<p>Ask a Question</p><form action="/outlooktraveller/search/askmarco/" id="askmarco_question" autocomplete="off"><textarea name="question"></textarea><a href="ajvascript:void();" class="btn btn-default btn-more post_question">Submit</a></form><small></small></div>');
		$('#popUp').show();
		submitQuestion();
	}
	
});
function submitQuestion(){
$('.post_question').click(function(){
	let val  = $("#askmarco_question textarea").val();
	let userName = atob(getCookie(encodedUserName));
	let userEmail = atob(getCookie(encodedUserEmail));	
	console.log(val+userEmail+userName);
	if(val.length > 10){
		jQuery.ajax({
			type: "POST",
			url: '/outlooktraveller/askmarco/savequestion',
			data: {question:val,userName:userName,userEmail:userEmail},
			success: function (data) {
			//
			if(data=='1'){
				$('.rest').html('<img src="/outlooktraveller/images/like.png"><h2>Congratulations!</h2><strong>Your question has been submitted</strong><p>Your question is submitted and will be under review, once answered you will receive notification via mail.</p><a href="/outlooktraveller/askmarco/" class="btn btn-default btn-more marco">Continue to Ask Marco</a>');
			console.log('submit');
			}else{
				location.reload(true);
			}
			}
			});
	
	}else{
		$('.rest small').html('Minimum 20 charactor');
		console.log('length should be more than 10 charactor');
	}
	
});
}
//===============================================
	$('.bookmark_button').each(function(){
		$(this).find('img').attr('title','Add Bookmark');	
		});
	
	$('.remove_bookmark_button').click(function(){
		var dataUrl = $(this).attr('data-url');
		deleteBookmark(dataUrl);
		$(this).parent('.travelThumb').fadeOut();
	});
	
	$('.bookmark_button').click(function(){
		if(isLogin()=='logIn'){
		var dataUrl = $(this).attr('data-url');
		dataUrl = dataUrl.replace('http://new.outlooktraveller.com','');
		dataUrl = dataUrl.replace('https://www.outlookindia.com','');
		updateBookmark(dataUrl);
		$(this).find('img').attr('src','/outlooktraveller/images/bookmarked.png');
		$(this).find('img').attr('title','Bookmarked');	
		}
		});
	
		function updateBookmark(dataUrl) {
		let userEmail = atob(getCookie(encodedUserEmail));	
		jQuery.ajax({
		type: "POST",
		url: '/outlooktraveller/user/bookmark',
		data: {dataUrl:dataUrl,userEmail:userEmail},
		success: function (data) {
		return data;
		}
		});
		}

		function deleteBookmark(dataUrl) {
		let userEmail = atob(getCookie(encodedUserEmail));	
		jQuery.ajax({
		type: "POST",
		url: '/outlooktraveller/user/deletebookmark',
		data: {dataUrl:dataUrl,userEmail:userEmail},
		success: function (data) {
		return data;
		}
		});
		}
		
		function getSetBookmark(){
		let userEmail = atob(getCookie(encodedUserEmail));
		jQuery.ajax({
		type: "POST",
		url: '/outlooktraveller/user/bookmarked',
		data: {userEmail:userEmail},
		success: function (data) {
		var urlList = JSON.parse(data);	
			for(var i=0;i < urlList.length;i++){
				$('.bookmark_button').each(function(){
				var dataUrl = $(this).attr('data-url');
				dataUrl = dataUrl.replace('http://new.outlooktraveller.com','');
				dataUrl = dataUrl.replace('https://www.outlookindia.com','');
				if(dataUrl==urlList[i]['url']){	$(this).find('img').attr('src','/outlooktraveller/images/bookmarked.png');$(this).find('img').attr('title','Already Bookmarked');	}
				});	
			}	
		}
		});	
		
		}
		getSetBookmark();

//========================Comments==========================//
 
	$('#feedBack').click(function(){
	isLogin();
	});

	$('.btn_comment').click(function(){
		
	var dataUrl = window.location.pathname;	
	dataUrl = dataUrl.replace('/outlooktraveller','');
	var comment = $('#feedBack').val();
		if(comment !=''){
			jQuery.ajax({
			type: "POST",
			url: '/outlooktraveller/user/saveComments',
			data: {dataUrl:dataUrl,comment:comment},
			success: function (data) {
			location.reload(true);
			}
			});
		}
	});
//===============================Share==============================//	
$('.shareClose').click(function(){
$('#share_box').fadeOut();	
});
$('.share_article').click(function(){
$('#share_box').fadeIn();
let url = window.location.href;
let txt = $(document).find("title").text();
let title = txt;
if (navigator.share) {
	 shareNative(title,txt,url);
	 return false;
 }else{
	 shareOld(title,txt,url);
 }		
});

function shareNative(title,txt,url){
	navigator.share({
      title: title,
      text: txt,
      url: url,
	})
    .then(() => console.log('Successful share') )
    .catch((error) => console.log('Error sharing', error));
	}


function shareOld(title,txt,url){
	let  shareBunch = [];
	shareBunch['share_fb'] = "https://www.facebook.com/sharer/sharer.php?u="+url;
	shareBunch['share_tw'] = "https://twitter.com/intent/tweet?original_referer="+url+"&text="+title+' '+url;
	shareBunch['share_gplus'] = "https://plus.google.com/share?url="+url;
	shareBunch['share_whatsapp'] = "whatsapp://send?text="+url;
	for(let key in shareBunch){
		$('#'+key).attr('href', shareBunch[key]);
	}
	
	$('.shareContainer h2 small').html(title.substring(0, 35)+'...');
}

//==============================
var userCommentEmail = atob(getCookie(encodedUserEmail));
if(userCommentEmail !='' ){
	$('.btn_comment').fadeIn().css("display","inline-block");
}