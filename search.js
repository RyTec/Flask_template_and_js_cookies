 or give us feedback
function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + ";path=/kereses";
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function deleteCookie(cname) {
    var d = new Date(); //Create an date object
    d.setTime(d.getTime() - (1000*60*60*24)); //Set the time to the past. 1000 milliseonds = 1 second
    var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
    window.document.cookie = cname+"="+"; "+expires;//Set the cookie with name and the expiration date

}

function county_change() {
    var county_change = $('#county')[0].value;
    if (county_change != "0") {
        setCookie("search_county", county_change, 1);
    } else { setCookie("search_county", "0", 1);}
}

function species_change() {
    var species_change = $('#species')[0].value;
    if (species_change != "0") {
        setCookie("search_species", species_change, 1);
    } else { setCookie("search_species", "0", 1); }
}

function age_change() {
    var age_change = $('#age')[0].value;
    if (age_change != "0") {
        setCookie("search_age", age_change, 1);
    } else { setCookie("search_age", "0", 1); }
}

function size_change() {
    var size_change = $('#size')[0].value;
    if (size_change != "0") {
        setCookie("search_size", size_change, 1);
    } else { setCookie("search_size", "0", 1); }
}

function hair_change() {
    var hair_change = $('#hair')[0].value;
    if (hair_change != "0") {
        setCookie("search_hair", hair_change, 1);
    } else { setCookie("search_hair", "0", 1);  }
}
/*
function spayed_check() {
    var hair_change = $('#hair')[0].value;
    if (hair_change.is(":checked")) {
        setCookie("search_spayed", "true", 3);
    } else { setCookie("search_spayed", "0", 3);  }
}
*/
function set_spayed(proceed) {
    var proceed_opt = proceed.value;
    if (set_spayed.is(":chacked")) {
        setCookie("search_spayed", proceed_opt, 1);
    } else {
        setCookie("search_spayed", "0", 1);
    }
}

$(document).ready(function() {
    if (getCookie("search_county") != ""){
        $('#county')[0].value = getCookie("search_county");
    }
    if (getCookie("search_species") != ""){
    	$('#species')[0].value = getCookie("search_species");
    }

	$('#age')[0].value = getCookie("search_age");
	$('#size')[0].value = getCookie("search_size");
	$('#hair')[0].value = getCookie("search_hair");
	$('#spayed')[0].value = getCookie("search_spayed");
	document.saveSearch.county.value = getCookie("search_county");
	document.saveSearch.species.value = getCookie("search_species");
	document.saveSearch.age.value = getCookie("search_age");
	document.saveSearch.size.value = getCookie("search_size");
	document.saveSearch.hair.value = getCookie("search_hair");
	document.saveSearch.spayed.value = getCookie("search_spayed");
})
