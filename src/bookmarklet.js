
( function( ) {

	var w = window ;
	var d = document ;

////////////////////////////////////////////////////////

	var y  = { } ;

	y[ 'l' ] = w.location.href ;
	y[ 'r' ] = d.referrer ;
	//y[ 't' ] = d.title ;

    // FIXME TODO use shorter format and include timezone
	y[ 'd' ] = ( new Date ).toString( ) ;

	y[ 'i' ] = "__UID__" ;
	y[ 'z' ] = Math.random( ) ;
	y[ 'v' ] = "__FILETIME__" ;

	console.log( y ) ;

////////////////////////////////////////////////////////

    var f = 0 ;
    [ "jpeg" , "jpg" , "png" ].forEach( function( z ) {
        if( y[ "l" ].toLowerCase( ).indexOf( z ) !== -1 ) {
            f = 1 ;
        } ;
    } ) ;

////////////////////////////////////////////////////////

    if( f == 1 ) {

        console.log( "OK" ) ;

		//w.location.href = "http://127.0.0.1/_craft_/metadatum/?" + encodeURIComponent( JSON.stringify( y ) ) ;
		//w.location.href = "https://igwfband.github.io/?" + encodeURIComponent( JSON.stringify( y ) ) ;

	} else {

		console.log( "ERR" ) ;

		alert( "URL must be image only. Right Click to view image and try again." ) ;

	} ;

} )( ) ;
