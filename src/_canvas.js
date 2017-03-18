

var _canvas = document.getElementById( "maincanvas" ) ;
var _canvasctx = _canvas.getContext( "2d" ) ;

_canvas.style.width = window.innerWidth + "px" ;
_canvas.style.height = window.innerHeight + "px" ;

_canvas.width = window.innerWidth ;
_canvas.height = window.innerHeight ;

_canvas.addEventListener( "mousedown" , _pointerStart, false ) ;
_canvas.addEventListener( "mousemove" , _pointerMove, false ) ;
_canvas.addEventListener( "mouseup"   , _pointerEnd , false  ) ;
_canvas.addEventListener( "mouseout"  , _pointerEnd, false   ) ;



function _canvasResize( ) {

    var oldw = maincanvas.width ;
    var oldh = maincanvas.height ;
    var neww = window.innerWidth ;
    var newh = window.innerHeight ;

    console.log( oldw + "," + oldh + " -> " + neww + "," + newh ) ;

    maincanvas.width = window.innerWidth;
    maincanvas.height = window.innerHeight;
    maincanvas.style.width = window.innerWidth + 'px';
    maincanvas.style.height = window.innerHeight + 'px';

    drawPattern();
    fitImageOn( maincanvas , img ) ;

    var iw = img.width ;
    var ih = img.height ;

    //console.log( iw + "," + ih ) ;

    redraw( ) ;

}


function _canvasDrawLine( x1 , y1 , x2 , y2 ) {

    //y1=100;

    var w1 = 7 ;
    var w2 = 3 ;

    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    ctx.lineWidth = w1 ;
    ctx.beginPath( ) ;
    ctx.moveTo( x1 , y1 ) ;
    ctx.lineTo( x2 , y2 ) ;
    ctx.stroke( ) ;
    ctx.closePath( ) ;

    ctx.lineWidth = w2 ;
    ctx.strokeStyle = '#FFFFFF' ;
    ctx.beginPath( ) ;
    ctx.moveTo( x1 , y1 ) ;
    ctx.lineTo( x2 , y2 ) ;
    ctx.stroke( ) ;
    ctx.closePath( ) ;

    ctx.beginPath( ) ;
    ctx.fillStyle = '#FFFFFF' ;
    ctx.arc( x1 , y1 , w2 - 1 , 0 , 2 * Math.PI , false ) ;
    ctx.fill( ) ;
    ctx.closePath( ) ;

    ctx.beginPath( ) ;
    ctx.fillStyle = '#FFFFFF' ;
    ctx.arc( x2 , y2 , w2 - 1 , 0 , 2 * Math.PI , false ) ;
    ctx.fill( ) ;
    ctx.closePath( ) ;

} ;

function _canvasDrawPattern( ) {

    var i,j ;

    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = 1 ;

    j=Math.round(maincanvas.width/20);

    for(i=0;i<maincanvas.width;i+=j){

        ctx.beginPath( ) ;
        ctx.moveTo( i  , 0 ) ;
        ctx.lineTo( i , maincanvas.height) ;
        ctx.stroke( ) ;
        ctx.closePath( ) ;

    };

    j=Math.round(maincanvas.height/20);
    for(i=0;i<maincanvas.height;i+=j){

        ctx.beginPath( ) ;
        ctx.moveTo( 0  , i ) ;
        ctx.lineTo( maincanvas.width , i ) ;
        ctx.stroke( ) ;
        ctx.closePath( ) ;

    }

}

