<?php

$bookmarkJS = file( "src/bookmark.js" , FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES ) ;

$buff = "" ;

foreach( $bookmarkJS as $line ) {

	$l = trim( $line ) ;

	if( substr( $l , 0 , 1 ) == "/" ) continue ;

	$l = str_replace( "( ) " , "()" , $l ) ;
	$l = str_replace( "{ }" , "{}" , $l ) ;
	$l = str_replace( "( " , "(" , $l ) ;
	$l = str_replace( " )" , ")" , $l ) ;
	$l = str_replace( "[ " , "[" , $l ) ;
	$l = str_replace( " ]" , "]" , $l ) ;
	$l = str_replace( " =" , "=" , $l ) ;
	$l = str_replace( " + " , "+" , $l ) ;
	$l = str_replace( " , " , "," , $l ) ;
	$l = str_replace( "= " , "=" , $l ) ;
	$l = str_replace( " {" , "{" , $l ) ;
	$l = str_replace( "} " , "}" , $l ) ;
	$l = str_replace( " }" , "}" , $l ) ;
	$l = str_replace( " ;" , ";" , $l ) ;
	$l = str_replace( " += " , "+=" , $l ) ;
	$l = str_replace( " || " , "||" , $l ) ;

	$t = substr( $l , -1 ) ;

	if( $t != ";" && $t != "{" ) {

		$l .= "\n" ;

	}

	$buff .= $l ;

}

$bookmarkJSBlob = 'javascript:'.rawurlencode( $buff ) ;

$bookmarkHTML = file( "src/bookmark.html" , FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES ) ;

$bookmarkHTMLBlob = implode( "\n" , $bookmarkHTML ) ;


$bookmarkHTMLBlob = str_replace( "__BOOKMARKJS__" , $bookmarkJSBlob , $bookmarkHTMLBlob ) ;
$bookmarkHTMLBlob = str_replace( "__UID__" , md5(uniqid( 'METADATUM' , true )) , $bookmarkHTMLBlob ) ;

file_put_contents("cache/bookmark.html",$bookmarkHTMLBlob);