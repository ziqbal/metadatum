


function _pointerEnd( evt ) {

	//console.log( "pointerend" ) ;

	pointerdown = false ;
	pointerposlast = false ;

	if( x.length > 0 ) {

		var lastStrokePos = strokes[ strokes.length-1 ] ;

		if( lastStrokePos != x.length ) {

			strokes.push( x.length ) ;

		} ;

	} ;

} ;

function _pointerStart( evt ) {

	//console.log( "pointerstart" ) ;

	pointerdown = true ;	

} ;

function _pointerMove( evt ) {

	//console.log( "pointermove" ) ;

	if( pointerdown ) {

		var mousePos = getMousePos( maincanvas , evt ) ;
	
		if( pointerposlast !== false ) {

			drawAndAddLine( pointerposlast.x , pointerposlast.y , mousePos.x , mousePos.y ) ;

		} else {

			addPoint( mousePos.x , mousePos.y ) ;

		} ;
		
		pointerposlast = mousePos ;

	} ;

} ;


