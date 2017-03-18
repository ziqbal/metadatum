
var _img = new Image( ) ;   

var _imageFit = function( canvas , imageObj ) {

    var imageAspectRatio = imageObj.width / imageObj.height;
    var canvasAspectRatio = canvas.width / canvas.height;
    var renderableHeight, renderableWidth, xStart, yStart;

    if( imageAspectRatio < canvasAspectRatio ) {
        renderableHeight = canvas.height ;
        renderableWidth = imageObj.width * ( renderableHeight / imageObj.height ) ;
        xStart = ( canvas.width - renderableWidth ) / 2 ;
        yStart = 0;
    } else if( imageAspectRatio > canvasAspectRatio ) {
        renderableWidth = canvas.width
        renderableHeight = imageObj.height * ( renderableWidth / imageObj.width ) ;
        xStart = 0 ;
        yStart = ( canvas.height - renderableHeight ) / 2 ;
    } else {
        renderableHeight = canvas.height ;
        renderableWidth = canvas.width ;
        xStart = 0 ;
        yStart = 0 ;
    } ;
    _canvasctx.drawImage( imageObj , xStart , yStart , renderableWidth , renderableHeight ) ;
};

_img.addEventListener( "load" , function( ) {

    _imageInit( ) ;

} , false ) ;

function _imageInit( ) {

    _imageFit( _canvas , _img ) ;

    if( query[ "editor" ] != null ) {

        fromData( query[ "editor" ] ) ;
        redraw( ) ;

    } ; 
} ;

_img.src = query[ "l" ] ;