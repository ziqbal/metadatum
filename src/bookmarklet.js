

( function( ) {


	var y  = { } ;

	y[ 'l' ] = window.location.href ;
	y[ 'r' ] = document.referrer ;

	y[ 't' ] = Date.now( ) ;
    y[ 'z' ] = new Date( ).getTimezoneOffset( ) ;

	//console.log( y ) ;


    var flagDragDone = true ;
    if( typeof dragDone != 'undefined' ) {
        flagDragDone = dragDone ;
    } ;
    var flagIsEditor = false ;
    if( typeof isEditor != 'undefined' ) {
        flagIsEditor = true ;
    } ;


    function editorMode( ) {

        console.log("YEA! Editor Mode!");

    } ;

    if(flagIsEditor){
        editorMode();
    }else{


        if( y[ "l" ].indexOf( "bookmarklet.html" ) && !flagDragDone ) {

            alert( "Please drag this link to your bookmarks toolbar and use it from there." ) ;

        } else {

            if( [ "jpeg" , "jpg" , "png" ].some( function( z ) {

                return( y[ "l" ].toLowerCase( ).indexOf( z ) !== -1 ) ;

            } ) ) {

                window.location.href = "http://127.0.0.1/_craft_/metadatum/?" + encodeURIComponent( JSON.stringify( y ) ) ;

            } else {

                alert( "Right click and select view image and try again." ) ;

            } ;

        } ;

    };

} )( ) ;
