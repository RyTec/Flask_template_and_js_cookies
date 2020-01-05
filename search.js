További információ vagy visszajelzés
funkció  setcookie ( c_name , érték , exdays ) {
    var exdate =  új  dátum ();
    lejár . setDate ( exdate . getDate () + exdays);
    var c_value =  escape (érték) + ((exdays ==  null ) ?  " "  :  " ; lejár = "  +  exdate . toUTCString ());
    dokumentum . cookie  = c_name +  " = "  + c_value +  " ; path = / kereses " ;
}

 getCookie ( c_name ) függvény {
    var i, x, y, ARRcookies =  dokumentum . süti . split ( " ; " );
    mert (i =  0 ; i <  ARRcookies . hossz ; i ++ ) {
        x = ARRcookies [i]. substr ( 0 , ARRcookies [i]. indexOf ( " = " ));
        y = ARRcookies [i]. substr (ARRcookies [i]. indexOf ( " = " ) +  1 );
        x =  x . csere ( / ^ \ s + | \ s + $ / g , " " );
        if (x == c_name) {
            vissza  unescape (y);
        }
    }
}

 deleteCookie ( cname ) függvény {
    var d =  új  dátum (); // Dátum-objektum létrehozása
    d . setTime ( d . getTime () - ( 1000 * 60 * 60 * 24 )); // Állítsa be az időt a múltra. 1000 milliszekundum = 1 másodperc
    var expires =  " expires = "  +  d . toGMTString (); // Írja be a lejárati dátumot
    ablak . dokumentum . süti  = cname + " = " + " ; " + lejár; // Állítsa be a sütik nevét és a lejárat dátumát

}

function  county_change () {
    var county_change =  $ ( ' #county ' ) [ 0 ]. érték ;
    if (county_change ! =  " 0 " ) {
        setcookie ( " search_county " , county_change, 1 );
    } else { setCookie ( " search_county " , " 0 " , 1 );}
}

function  species_change () {
    var species_change =  $ ( ' #species ' ) [ 0 ]. érték ;
    if (species_change ! =  " 0 " ) {
        setcookie ( " search_species " , species_change, 1 );
    } Mást { setcookie ( " search_species " , " 0 " , 1 ); }
}

funkció  age_change () {
    var age_change =  $ ( ' #age ' ) [ 0 ]. érték ;
    if (age_change ! =  " 0 " ) {
        setcookie ( " search_age " , age_change, 1 );
    } Mást { setcookie ( " search_age " , " 0 " , 1 ); }
}

function  size_change () {
    var size_change =  $ ( ' #size ' ) [ 0 ]. érték ;
    if (size_change ! =  " 0 " ) {
        setcookie ( " search_size " , size_change, 1 );
    } Mást { setcookie ( " search_size " , " 0 " , 1 ); }
}

funkció  hair_change () {
    var hair_change =  $ ( ' #hair ' ) [ 0 ]. érték ;
    if (hair_change ! =  " 0 " ) {
        setcookie ( " search_hair " , hair_change, 1 );
    } Mást { setcookie ( " search_hair " , " 0 " , 1 ); }
}
/ *
funkció spayed_check () {
    var hair_change = $ ('# haj') [0] .érték;
    if (hair_change.is (": check")) {
        setCookie ("search_spayed", "true", 3);
    } else {setCookie ("search_spayed", "0", 3); }
}
* /
függvény  set_spayed ( folytassa ) {
    var Proce_opt =  folytassa . érték ;
    if ( set_spayed . is ( " : chacked " )) {
        setcookie ( " search_spayed " , proceed_opt, 1 );
    } egyéb {
        setcookie ( " search_spayed " , " 0 " , 1 );
    }
}

$ ( dokumentum ). kész ( function () {
    ha ( getCookie ( " search_county " ) ! =  " " ) {
        $ ( ' #county ' ) [ 0 ]. értéke  =  getCookie ( " search_county " );
    }
    if ( getCookie ( " search_species " ) ! =  " " ) {
    	$ ( ' #species ' ) [ 0 ]. value  =  getCookie ( " search_species " );
    }

	$ ( ' #age ' ) [ 0 ]. value  =  getCookie ( " search_age " );
	$ ( ' #size ' ) [ 0 ]. value  =  getCookie ( " search_size " );
	$ ( ' #hair ' ) [ 0 ]. value  =  getCookie ( " search_hair " );
	$ ( ' #spayed ' ) [ 0 ]. value  =  getCookie ( " search_spayed " );
	dokumentum . saveSearch . megye . értéke  =  getCookie ( " search_county " );
	dokumentum . saveSearch . fajok . value  =  getCookie ( " search_species " );
	dokumentum . saveSearch . életkor . value  =  getCookie ( " search_age " );
	dokumentum . saveSearch . méret . value  =  getCookie ( " search_size " );
	dokumentum . saveSearch . haj . value  =  getCookie ( " search_hair " );
	dokumentum . saveSearch . spaced . value  =  getCookie ( " search_spayed " );
})
