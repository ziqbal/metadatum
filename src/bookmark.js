
( function( ) {

	var w = window ;
	var d = document ;

	var y  = { } ;

	y[ 'l' ] = w.location.href ;
	y[ 'r' ] = d.referrer ;
	y[ 't' ] = d.title ;

	y[ 'd' ] = ( new Date ).toString( ) ;

	y[ 'i' ] = "__UID__" ;
	y[ 'z' ] = Math.random( ) ;
	y[ 'v' ] = "20170213" ;

	y[ 'w' ] = w.innerWidth || d.documentElement.clientWidth || d.body.clientWidth ;
	y[ 'h' ] = w.innerHeight || d.documentElement.clientHeight || d.body.clientHeight ;		

	//console.log( y ) ;

	var e = y[ "l" ].split( "." ).pop( ).toLowerCase( ) ;

	if( e == "jpg" || e == "png" ) {

		//w.location.href = "http://127.0.0.1/_craft_/metadatum/dist/editor.html?" + encodeURIComponent( JSON.stringify( y ) ) ;
		w.location.href = "https://igwfband.github.io/editor.html?" + encodeURIComponent( JSON.stringify( y ) ) ;

	} else {

		alert( "URL must be image only. Right Click to view image and try again." ) ;

	} ;

} )( ) ;
