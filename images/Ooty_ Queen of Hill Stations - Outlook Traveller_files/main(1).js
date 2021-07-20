			var encodedUserName = btoa('userName');
			var encodedUserEmail = btoa('userEmail');
			var encodedUserPhoto = btoa('userPhoto');
jQuery('.videoClose').click(function(){
	$('#videopopUp').fadeOut();
	var video = $(this).attr('data');
	$('#videopopUp #ytPlayer').attr('src','https://www.youtube.com/embed/'+video+'?rel=0&autoplay=0&mute=1&fs=1&modestbranding=1&showinfo=0&controls=1');
});
$('.playInpopup').click(function(){
	if(detectDevice=='mobile'){
    var e = document.getElementById("ytPlayer");
    if (e.requestFullscreen) {
        e.requestFullscreen();
    } else if (e.webkitRequestFullscreen) {
        e.webkitRequestFullscreen();
    } else if (e.mozRequestFullScreen) {
        e.mozRequestFullScreen();
    } else if (e.msRequestFullscreen) {
        e.msRequestFullscreen();
    }
	}
	$('#videopopUp').fadeIn();
	var video = $(this).attr('data');
	$('#videopopUp #ytPlayer').attr('src','https://www.youtube.com/embed/'+video+'?rel=0&autoplay=1&mute=1&modestbranding=1&showinfo=0&controls=1');
	
});


//=========================
function shwoThumbVideo(){
	$('.thumbVideo').fadeIn();
	$('.thumbVideo').css('opacity','1');
}
//=========================

$('.closeNext').click(function(){
	$('.thumbVideo').fadeOut();
	
});
//=========================

var menuStatus = true;
window.onscroll = function(e) {
	var  negative  =  $(window).scrollTop() < 0 ;
 
		if(menuStatus==true){
		var status = this.oldScroll > this.scrollY;
		if(status==true){
		$('.navbar-fixed-top').css('margin-top','0px');
		}else{
		$('.navbar-fixed-top').css('margin-top','-80px');
		}
		this.oldScroll = this.scrollY;
		//$('.navbar-fixed-top').css('margin-top','0px');
		}

			if(negative==true){
			$('.navbar-fixed-top').css('margin-top','-80px');
			}
			if(negative==false && $(window).scrollTop() ==0){
			$('.navbar-fixed-top').css('margin-top','0px');
			}
			if($(window).scrollTop() < 50){
			setNav(false);
			}else{
			setNav(true);
			}
			
			if($(window).scrollTop() < 100){
				$('.btn-back-to-top').fadeOut('slow'); 
				$('.desktop_floater').fadeOut('slow'); 
				$('.askmarco_hanging').fadeOut();
			}else if($(window).scrollTop() > 100 && $(window).scrollTop() < 400){
				$('.btn-back-to-top').fadeIn('slow'); 
				$('.desktop_floater').fadeIn('slow'); 
				$('.askmarco_hanging').fadeIn();
				$('.am_floater').removeClass('mobile_floater');
			} else{
				$('.am_floater').addClass('mobile_floater');
			} 
		
			 

}
//============================
function setNav(status){
	if(status==true){
	$('.navbar-default').css('background-color','rgba(255,255,255,1)');
	$('.navbar-default').css('box-shadow','0px 3px 9.2px 0.8px rgba(0, 0, 0, 0.23)');
	$('.navbar-nav>li>a').css('color','#000000');
	$('.magnifying-glass').attr('src','/outlooktraveller/images/magnifying-glass_black.png');
	$('.header_logo').attr('src','/outlooktraveller/images/olt_logo_black.png');
	$('.navbar-toggle .icon-bar').css('background-color', '#ff043f');
	$('.btn-login').css('color', '#ff043f');
	$('.btn-login').css('background-color', 'transparent');
	$('#user strong').css('color', '#000000');
	}else{
	$('.navbar-default').css('background-color','rgba(255,255,255,0)');
	$('.navbar-default').css('box-shadow','0px 3px 9.2px 0.8px rgba(0, 0, 0, 0)');
	$('.navbar-nav>li>a').css('color','#ffff');
	$('.magnifying-glass').attr('src','/outlooktraveller/images/magnifying-glass_white.png');
	$('.header_logo').attr('src','/outlooktraveller/images/olt_logo.png');
	$('.navbar-toggle .icon-bar').css('background-color', '#ffffff');
	$('.btn-login').css('color', '#ffffff');
	$('#user strong').css('color', '#ffffff');
	//$('.btn-login').css('background-color', '#ff043f');
	
	}
}

//============================
$('#top_menu li a').each(function(){
		var path = window.location.pathname;
		path = path.split('/');
		var href = $(this).attr('href');
		href = href.split('/');
		//console.log(href[4]+'-'+path[2]);
		if(href[4]==path[2]){
		$(this).parent('li').addClass('active');
		}
		
			if(checkPhotoPages(path[2],path[3]) == 'true' || path[2] == 'about-us' || path[2] == 'contact-us' || path[2] == 'terms-and-conditions' || path[2] == 'privacy-policy' || path[2] == 'search' || path[2] == 'rssfeed'){
			setNav(true);
			window.onscroll = function(e) {
			setNav(true);
			
			var status = this.oldScroll > this.scrollY;
			if(status==true){
			$('.navbar-fixed-top').css('margin-top','0px');
			}else{
			$('.navbar-fixed-top').css('margin-top','-80px');
			}
			this.oldScroll = this.scrollY;
			}
			}
});

//==================

$('.btn-back-to-top').click(function(){
	$('body,html').animate({
    scrollTop: 0}, {
    easing: '',
    duration: 500,
    complete: function() { $('.btn-back-to-top').fadeOut('slow'); }
});
});

//==================
function checkPhotoPages(path1,path2){
	console.log(path1+'-'+path2);
	if((path2=='') && path1=='photos'){
		return 'false';
	}
	if((path2!=undefined) && path1=='photos'){
		return 'true';
	}
	
	
}
//==================
$('.closeButton').click(function (){
	$('#popUp').fadeOut();
	
});
//==================
$('.magnifying-glass').click(function (){
	$('#search').fadeIn();
	$('.searchInput input').focus();
	
});
//==================
$('#search .closeButton').click(function (){
	$('#search').fadeOut();
	
});
//=========================
$('.btn_login').click(function (){
	$('#popUp').fadeIn();
	
});
//==========================
$('.fb-login').click(function(){
	login();
});

			

				function onLoadGoogleCallback(){
				gapi.load('auth2', function() {
				auth2 = gapi.auth2.init({
				client_id: '586538493283-etudqh3d8l83h8pui25hitm79amns8mq.apps.googleusercontent.com',
				cookiepolicy: 'single_host_origin',
				scope: 'profile'
				});

				auth2.attachClickHandler(element, {},
				function(googleUser) {
				var profile = googleUser.getBasicProfile();
				var userName = profile.getName();
				var userEmail = profile.getEmail();
				var userPhoto = profile.getImageUrl();
				updateDB(userName,userEmail,userPhoto);
				console.log(userName+" - "+userEmail+" - "+userPhoto);        
				}, function(error) {
				console.log('Sign-in error', error);
				}
				);
				});

				element = document.getElementById('googleSingIn');
				}
	//==========================
		function signOut() {
		var auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function () {
		console.log('User signed out.');
		});
		}
	

//================================================

				window.fbAsyncInit = function() {
				FB.init({
				appId: '310000626229715',
				status: true,
				cookie: true,
				xfbml: true
				});
				};
				(function(d){
				var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
				if (d.getElementById(id)) {return;}
				js = d.createElement('script'); js.id = id; js.async = true;
				js.src = "//connect.facebook.net/en_US/all.js";
				ref.parentNode.insertBefore(js, ref);
				}(document));
		
				function login() {
				FB.login(function(response) {
				FB.api('/'+response.authResponse.userID,{fields: 'email,name'}, function(response) {
				var userName = response.name;
				var userEmail = response.email;
				var userPhoto = 'http://graph.facebook.com/'+response.id+'/picture?type=large';
				if(userEmail==undefined || userEmail=='' ){
					alert('Please use google log in. Your Email is private on facebook');
				}
				updateDB(userName,userEmail,userPhoto);
				console.log(userName+" - "+userEmail+" - "+userPhoto);
				});
				}, {scope: 'public_profile,email'});            
				}
				
				//===================
				
				function fbLogout() {
            FB.logout(function(response) {
            
			  
            });
        }

//=====================================================

				
			
			
			function validateEmail(email) {
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			return emailReg.test(email);
			}

			function updateDB(userName,userEmail,userPhoto) {
			jQuery.ajax({
			type: "POST",
			url: '/outlooktraveller/user/login',
			data: {userName:userName,userEmail:userEmail,userPhoto:userPhoto},
			success: function (data) {
			console.log(data);
			if(data==1) { 
			$('.error_message').html('<b>loggedIn</b>');
			
			
			setCookie(encodedUserName, btoa(userName), 365);
			setCookie(encodedUserEmail, btoa(userEmail), 365);
			setCookie(encodedUserPhoto, userPhoto, 365);
			location.reload(true);
			}else{
			$('.error_message').html('<b>Please try again! Or use google login</b>');
			}
			}
			});
			}
			
			function setUser(){
				
			let userName = atob(getCookie(encodedUserName));
			let userEmail = atob(getCookie(encodedUserEmail));	
			let userPhoto = getCookie(encodedUserPhoto);	
			if(userName !='' && userEmail !='' & userPhoto !=''){
			$('.btn_login').fadeOut();
			$('#user').fadeIn();
			$('#user img').attr('src',userPhoto);
			$('#user strong a').attr('href','/outlooktraveller/user/profile/');
			$('#user strong a').html(userName);
			$('#feedBack').attr("placeholder", "Leave a comment now");
			}
			}

			setUser();	
			function isLogin(){
			let userName = atob(getCookie(encodedUserName));
			let userEmail = atob(getCookie(encodedUserEmail));	
			let userPhoto = getCookie(encodedUserPhoto);	
			if(userName !='' && userEmail !='' & userPhoto !=''){
				return 'logIn';
			}else{
				$('#popUp').fadeIn();
			}
			}	
//==========================
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//========================================
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}	
//===============================================

