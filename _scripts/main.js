var $showSocials,
	$socials;

function initVars() {
	$showSocials 	= $('#connect');
	$socials 	= $('#socials');
}

function showSocials(){
	$showSocials.click(function(){
		$socials.toggleClass('expanded');
		return false;
	});
}

function firstLoad() {
	initVars();
	showSocials();
}

$(function() {
	firstLoad();
});
