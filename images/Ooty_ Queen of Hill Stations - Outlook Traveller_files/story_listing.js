
function checkUncheck(section,setciont_type){
$(section).click(function(){
var type = $(this).attr('data');
var check = '/outlooktraveller/images/check.png';
var uncheck = '/outlooktraveller/images/uncheck.png';
var thisStatus = $(this).find('img').attr('src');

console.log(type);
if(setciont_type=='explore'){
forExplore(type);
}

if(setciont_type=='search'){
	forSearch(type);
}

if(setciont_type=='travelnews'){
forTravelnews(type);
}

if(setciont_type=='experience'){
	console.log(setciont_type);
	forExplore(type);
}

if(setciont_type=='see'){
	console.log(setciont_type);
	forSee(type);
}


if(type=='all' && thisStatus==uncheck){
	// cehck data all 
	$(this).find('img').attr('src',check);
	// Uncehck all 
	$(section).each(function(){
	var alltype = $(this).attr('data');
	if(alltype!='all'){	
	$(this).find('img').attr('src',uncheck);	
	}
	});
}

if(type!='all'){
	$(section).each(function(){
	var alltype = $(this).attr('data');
	if(alltype=='all'){	
	$(this).find('img').attr('src',uncheck);	
	}
	});
	
if(thisStatus==uncheck){
$(this).find('img').attr('src',check);
}else{
	$(this).find('img').attr('src',uncheck);
}
}







});
}
$(document).ready(function(){
	var path = window.location.pathname;
		path = path.split('/');
		themes = path[4];
		path = path[2];
		if(path=='explore'){
			checkUncheck('#experience_list li','explore');
		}else if(path=='experience'){
			checkUncheck('#experience_list li','experience');
			setCheck('#experience_list li',themes);
		}else if(path=='tag'){
			checkUncheck('#experience_list li','explore');
		}
		
		if(path=='see'){
			checkUncheck('#category_list li','see');
			setCheck('#category_list li',themes);
		}
		if(path=='travelnews'){
			checkUncheck('#category_list li','travelnews');
			setCheck('#category_list li',themes);
		}
		if(path=='search'){
			checkUncheck('#experience_list li','search'); 
			setCheck('#experience_list li',window.location.pathname);
		}
			//checkUncheck('#category_list li','explore');	

});

function setCheck(section,themes){
	var uncheck = '/outlooktraveller/images/uncheck.png';
	var check = '/outlooktraveller/images/check.png';
	$(section).each(function(){
	var type = $(this).attr('data');
	console.log(themes);
	if(themes !='' || themes=='undefined'){
	if(type !=themes){
	$(this).find('img').attr('src',uncheck);	
	}else{
		$(this).find('img').attr('src',check);	
	}
	}
	});
	
}

function forSee(themes){
		
		switch(themes){
	case 'video':
        window.location.pathname = "/outlooktraveller/see/listing/video";
        break;
    case 'podcast':
        window.location.pathname = "/outlooktraveller/see/listing/podcast";
        break;
    case 'photoessay':
        window.location.pathname = "/outlooktraveller/see/listing/photoessay";
        break;
		}
}


function forTravelnews(themes){
		
		switch(themes){
	case 'people':
        window.location.pathname = "/outlooktraveller/travelnews/listing/people";
        break;
    case 'gearbox':
        window.location.pathname = "/outlooktraveller/travelnews/listing/gearbox";
        break;
    case 'books':
        window.location.pathname = "/outlooktraveller/travelnews/listing/books";
        break;
		case 'all':
        window.location.pathname = "/outlooktraveller/travelnews/listing/";
        break;
		}
}


function forExplore(themes){
		
		switch(themes){
    case 'adventure':
        window.location.pathname = "/outlooktraveller/experience/listing/adventure";
        break;
	case 'all':
        window.location.pathname = "/outlooktraveller/experience/listing/";
        break;
    case 'food-and-drink':
        window.location.pathname = "/outlooktraveller/experience/listing/food-and-drink";
        break;
    case 'nature':
        window.location.pathname = "/outlooktraveller/experience/listing/nature";
        break;
    case 'city-breaks':
        window.location.pathname = "/outlooktraveller/experience/listing/city-breaks";
        break;
    case 'weekend-breaks':
        window.location.pathname = "/outlooktraveller/experience/listing/weekend-breaks";
        break;
    case 'culture':
        window.location.pathname = "/outlooktraveller/experience/listing/culture";
        break;
    case 'hills':
        window.location.pathname = "/outlooktraveller/experience/listing/hills";
        break;
    case 'beaches-and-islands':
        window.location.pathname = "/outlooktraveller/experience/listing/beaches-and-islands";
        break;
    case 'inspiration':
        window.location.pathname = "/outlooktraveller/experience/listing/inspiration";
        break;
    case 'travel-style':
        window.location.pathname = "/outlooktraveller/experience/listing/travel-style";
        break;
		}
}


function forSearch(themes){
		let uri = themes.split('/');
		if($.isNumeric(uri[uri.length-1])){
			uri.pop();
		}
		
		themes = '';
		for(let i = 1; i<uri.length;i++){
			themes += '/'+uri[i];
		}
		
		window.location.pathname = themes;
}


