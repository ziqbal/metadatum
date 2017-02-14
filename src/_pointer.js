

var _pointerdown = false ;

var _pointere = [ ] ;
var _pointerx = [ ] ;
var _pointery = [ ] ;
var _pointerstrokes = [ ] ;

function _pointerReset( ) {

	_pointerdown = false ;

	_pointere = [ ] ;
	_pointerx = [ ] ;
	_pointery = [ ] ;
	_pointerstrokes = [ ] ;

} ;

function _pointerPos( evt ) {

	var rect = maincanvas.getBoundingClientRect( ) ;

	//console.log(rect);

	return {

	  x : Math.floor( evt.clientX - rect.left ) ,
	  y : Math.floor( evt.clientY - rect.top )

	} ;

} ;


function _pointerEnd( evt ) {

	//console.log( "pointerend" ) ;

	if( _pointerdown ) {

		var mousePos = _pointerPos( evt ) ;
		addPoint( "E" , mousePos.x , mousePos.y ) ;


		//_pointerstrokes.push( 0 ) ;


	}

	_pointerdown = false ;
	/*

	if( _pointerx.length > 0 ) {

		var lastStrokePos = strokes[ strokes.length-1 ] ;

		if( lastStrokePos != _pointerx.length ) {

			_pointerstrokes.push( _pointerx.length ) ;

		} ;

	} ;
	*/

} ;

function _pointerStart( evt ) {

	//console.log( "pointerstart" ) ;

	_pointerdown = true ;

	_pointerstrokes.push( 0 ) ;	

	var mousePos = _pointerPos( evt ) ;
	addPoint( "S" , mousePos.x , mousePos.y ) ;


} ;

function _pointerMove( evt ) {

	//console.log( "pointermove" ) ;

	if( _pointerdown ) {

		var mousePos = _pointerPos( evt ) ;
	
		drawLine( _pointerx[ _pointerx.length - 1 ] , _pointery[ _pointery.length - 1 ]  ,  mousePos.x , mousePos.y ) ;

		addPoint( "M" , mousePos.x , mousePos.y ) ;
		
	} ;

} ;


