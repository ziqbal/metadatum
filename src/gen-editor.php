<?php



$editorFile = file( "src/editor.html" , FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES ) ;

$editorBlob = implode( "\n" , $editorFile ) ;

////////////////////////////////////////////


$includedFiles = array( ) ;

$srcfiles = scandir( "src" ) ;

$files = array ( ) ;

foreach ( $srcfiles as $sfv ) {

    if ( $sfv == "." || $sfv == ".." || substr($sfv,0,1) != "_" ) continue ;

	$incFile = file( "src/$sfv" , FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES ) ;
	$incFileBlob = implode( "\n" , $incFile ) ;


	if(substr($sfv,-3)==".js"){
		$incFileBlob="<script>$incFileBlob</script>";
	}
	if(substr($sfv,-4)==".css"){
		$incFileBlob="<style>$incFileBlob</style>";
	}

	$includedFiles[$sfv]=$incFileBlob;

}

//print_r( $includedFiles) ;
$includedFilesBlob = implode( "\n" , $includedFiles ) ;

$editorBlob = str_replace( "__INCLUDES__" , $includedFilesBlob , $editorBlob ) ;
////////////////////////////////////////////



file_put_contents("cache/editor.html",$editorBlob);

