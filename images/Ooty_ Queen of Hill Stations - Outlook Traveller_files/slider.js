let totalcampaignsItem = $('.campaignsItem').length;
let numberCampaignd = '';
for(var i =0; (totalcampaignsItem)>i;i++){
	numberCampaignd += '<a href="javascript:void(0)" id="a'+i+'" onclick="gotoCampaign('+i+');">'+(i+1)+'</a>';
	console.log(i+1);
	}
$('#numberCampaignd').html(numberCampaignd);
let campaignsItem = $('.campaignsItem').width();
 campaignsItem = campaignsItem+20;
let campaignsItemCounter = 0;
$('.campaignsInner').width(totalcampaignsItem*campaignsItem);
$('.campaignsNext').click(function(){
	if(campaignsItemCounter>0){
	campaignsItemCounter--;
	$('.campaignsInner').css('margin-left', -(campaignsItem*campaignsItemCounter)+'px');
}
	
});

$('.campaignsPrev').click(function(){
	if((totalcampaignsItem-2)>campaignsItemCounter){
	campaignsItemCounter++;
	$('.campaignsInner').css('margin-left', -(campaignsItem*campaignsItemCounter)+'px');
	}
});

function gotoCampaign(num){
	$('#numberCampaignd a').removeClass();
	$(this).addClass('active');
	num = (campaignsItem*(num));
	 $('.campaignsWrapper').animate({scrollLeft: num}, 300);
}

$('#numberCampaignd #a0').addClass('active');
$('.campaignsWrapper').scroll(function() {
	var scrollLeft = $(this).scrollLeft();
	$('#numberCampaignd a').removeClass();
		console.log(scrollLeft);	
	if(scrollLeft >= 0 && scrollLeft < 240){
	$('#numberCampaignd #a0').addClass('active');
	}else if(scrollLeft >= 240 && scrollLeft < 490){
	$('#numberCampaignd #a1').addClass('active');
	}else if(scrollLeft >= 490 && scrollLeft < 740){
	$('#numberCampaignd #a2').addClass('active');
	}else if(scrollLeft >= 740 && scrollLeft < 1010){
	$('#numberCampaignd #a3').addClass('active');
	}else if(scrollLeft >= 1010 && scrollLeft < 1400){
	$('#numberCampaignd #a4').addClass('active');
	}else if(scrollLeft >= 1400 && scrollLeft < 1650){
	$('#numberCampaignd #a5').addClass('active');
	}else if(scrollLeft >= 1650 && scrollLeft < 1950){
	$('#numberCampaignd #a6').addClass('active');
	}else if(scrollLeft >= 1950 && scrollLeft < 2200){
	$('#numberCampaignd #a7').addClass('active');
	}
});

//==========================================


let totalVideoGalleryItem = $('.vItem').length;
let vItem = $('.vItem').width()+70;
$('.videoGallery').width(totalVideoGalleryItem*vItem);
//$('.videoGallery').css('margin-left', '-40px');


//==========================================

let totalVideoItemDesktop = $('.videoItem').length;
let videoItem = $('.videoItem').width();
let videoDesktopCounter = 0;
$('#videoDesktop').width(totalVideoItemDesktop*videoItem);
$('.videoNext').click(function(){
	if(videoDesktopCounter>0){
	videoDesktopCounter--;
	$('#videoDesktop').css('margin-left', -(videoItem*videoDesktopCounter)+'px');
}
	
});

$('.videoPrev').click(function(){
	if((totalVideoItemDesktop-1)>videoDesktopCounter){
	videoDesktopCounter++;
	$('#videoDesktop').css('margin-left', -(videoItem*videoDesktopCounter)+'px');
	}
});

//==========================================

let totalseeItem = $('.seeItem').length;
let seeItem = 313;
let seeCounter = 0;
$('#seeSlider').width(totalseeItem*seeItem);

$('.seeNext').click(function(){
	if(seeCounter>0){
	seeCounter--;
	$('#seeSlider').css('margin-left', -(seeItem*seeCounter)+'px');
}
	
});

$('.seePrev').click(function(){
	if((totalseeItem-3)>seeCounter){
	seeCounter++;
	$('#seeSlider').css('margin-left', -(seeItem*seeCounter)+'px');
	}else{
		$('#seeSlider').css('margin-left', '0px');
		seeCounter = 0;
	}
});

//===============================

let totalthemesItem = $('.themes_item').length;
let themes_item = 265;
let themesCounter = 0;
$('#themeSlider').width(totalthemesItem*themes_item);
$('.themes_item').css('opacity','1');
//themes_item
$('.themeLeft').click(function(){
	if(themesCounter>0){
	themesCounter--;
	$('#themeSlider').css('margin-left', -(themes_item*themesCounter)+'px');
}
	
});

$('.themeRight').click(function(){
	if((totalthemesItem-4)>themesCounter){
	themesCounter++;
	$('#themeSlider').css('margin-left', -(themes_item*themesCounter)+'px');
	}else{
		$('#themeSlider').css('margin-left', '0px');
		themesCounter = 0;
	}
});
//=============

[].forEach.call(document.querySelectorAll('.lazyLoad'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
   $('.lazyLoad').addClass('loaded');
  };
});


//=============
let totalTravelItem = $('#travelSlider .travelThumb').length;
let travels_item = 285;
let travelsCounter = 0;
$('#travelSlider').width(totalTravelItem*travels_item);
$('.travelLeft').click(function(){
	if(travelsCounter>0){
	travelsCounter--;
	$('#travelSlider').css('margin-left', -(travels_item*travelsCounter)+'px');
}
	
});


$('.travelRight').click(function(){
	if((totalTravelItem-4)>travelsCounter){
	travelsCounter++;
	$('#travelSlider').css('margin-left', -(travels_item*travelsCounter)+'px');
	}
});

//=============
let totalinsiItem = $('#insiSlider .seeItem').length;
let insi_item = 285;
let insiCounter = 0;
$('#insiSlider').width(totalinsiItem*insi_item);
$('.insiNext').click(function(){
	if(insiCounter>0){
	insiCounter--;
	$('#insiSlider').css('margin-left', -(insi_item*insiCounter)+'px');
}
	
});


$('.insiPrev').click(function(){
	if((totalinsiItem-4)>insiCounter){
	insiCounter++;
	$('#insiSlider').css('margin-left', -(insi_item*insiCounter)+'px');
	}
});

//=============
