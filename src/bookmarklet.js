
( function( ) {

	var y  = { } ;

	y[ 'l' ] = window.location.href ;
	y[ 'r' ] = document.referrer ;

	y[ 't' ] = Date.now( ) ;
    y[ 'z' ] = new Date( ).getTimezoneOffset( ) ;

    // Check if bookmarklet clicked on editor page
    if( window.location.href.split( "?" )[ 0 ] == "__EDITORURL__" ) {

        console.log("ZZZ YEA! Editor Mode!");

    } else {

        // Check if clicked bookmarklet link
        if( (y[ "l" ].indexOf( "bookmarklet.html" ) !=-1 ) && ( typeof window._bookmarkletdragdone === "undefined" ) ) {

            alert( "Please use this link to your bookmarks toolbar and use it from there." ) ;

        } else {

            // Test valid url matches
            if( [ "jpeg" , "jpg" , "png" ].some( function( z ) {

                return( y[ "l" ].toLowerCase( ).indexOf( z ) !== -1 ) ;

            } ) ) {

                // redirect to editor page
                window.location.href = "__EDITORURL__?" + encodeURIComponent( JSON.stringify( y ) ) ;

            } else {

                alert( "Right click and select view image and try again." ) ;

            } ;

        } ;

    } ;

} )( ) ;
