

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

	  x : Math.round( evt.clientX - rect.left ) ,
	  y : Math.round( evt.clientY - rect.top )

	} ;

} ;


function _pointerEnd( evt ) {

	if( _pointerdown ) {

		var mousePos = _pointerPos( evt ) ;
		addPoint( "E" , mousePos.x , mousePos.y ) ;

	} ;

	_pointerdown = false ;

} ;

function _pointerStart( evt ) {

	_pointerdown = true ;

	_pointerstrokes.push( 0 ) ;	

	var mousePos = _pointerPos( evt ) ;
	addPoint( "S" , mousePos.x , mousePos.y ) ;

} ;

function _pointerMove( evt ) {

	if( _pointerdown ) {

		var mousePos = _pointerPos( evt ) ;

        var x1 = _pointerx[ _pointerx.length - 1 ] ;
        var y1 = _pointery[ _pointery.length - 1 ] ;
        var x2 = mousePos.x ;
        var y2 = mousePos.y ;

        var d = Math.pow( x2 - x1 , 2 ) + Math.pow( y2 - y1 , 2 ) ;

        if( d > 100 ) {
    	
    		drawLine( x1 , y1 , x2 , y2 ) ;

    		addPoint( "M" , x2 , y2 ) ;
            
	   } ;

	} ;

} ;


