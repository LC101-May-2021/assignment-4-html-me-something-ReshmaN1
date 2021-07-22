$('#searcInput').submit(function(){
	let val  = $("#searcInput input").val();
	val = $.trim(val);
	val = val.replace(/ /g, "_");
	if(val.length > 2){
	window.location.pathname = '/outlooktraveller/search/'+val;
	}
	return false;
});


$('#headerSearch').submit(function(){
	let val  = $("#headerSearch input").val();
	val = $.trim(val);
	val = val.replace(/ /g, "_");
	if(val.length > 2){
	window.location.pathname = '/outlooktraveller/search/'+val;
	}
	
	return false;
});

$('#askmarcoSearch').submit(function(){
	let val  = $("#askmarcoSearch input").val();
	
	val = $.trim(val);
	val = val.replace(/ /g, "_");
	if(val.length > 2){
	window.location.pathname = '/outlooktraveller/search/askmarco/'+encodeURI(val);
	}
	return false;
});


//console.log('search loaded');

$("#searchField").keyup(function(){
	
	
		var query = $(this).val();
		if(query==''){
			$('.reslutSuggestion').fadeOut();
		}else{
			$('.reslutSuggestion').fadeIn();
		}
		if(query.length > 2){
		GetArticleSearch(query);	
		jQuery.ajax({
		type: "POST",
		url: '/outlooktraveller/search/gettagsearch',
		data: {query:query},
		success: function (data) {
			var obj = jQuery.parseJSON(data);
			var objTag = obj['tag'];
			var objAuthor = obj['author'];
		 
		 let tagsData = '';
		 
		 $.each(objTag, function() {
			 if(objAuthor !=''){
			 if(objAuthor.indexOf(this['tag_name']) > -1){
				tagsData += '<div class="tag"><a href="/outlooktraveller/authors/'+this['slug']+'">'+this['tag_name']+' In Author</a></div>'; 
				tagsData += '<div class="tag"><a href="/outlooktraveller/tag/'+this['slug']+'">'+this['tag_name']+' - in Tag</a></div>'; 
			}else{
			 tagsData += '<div class="tag"><a href="/outlooktraveller/tag/'+this['slug']+'">'+this['tag_name']+'</a></div>';
			}
				}else{
					tagsData += '<div class="tag"><a href="/outlooktraveller/tag/'+this['slug']+'">'+this['tag_name']+'</a></div>';
				}
	  
			});	
			
			$('.tagSuggestion').html('<small>Search Suggestions</small>'+tagsData);
		}
		});
		$('.reslutSuggestion span').html("Search Result for <strong>'"+query+"'</strong>");
		}
	});

//======================================
function GetArticleSearch(query){
	jQuery.ajax({
		type: "POST",
		url: '/outlooktraveller/search/getarticlesearch',
		data: {query:query},
		success: function (data) {
			$('.articleSuggestion').html(data);
		}
		});
}


/*
$(document).ready(function(){
	
}); 
*/
