<?php



$editorFile = file( "src/editor.html" , FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES ) ;


$editorBlob=implode("\n",$editorFile);

file_put_contents("cache/editor.html",$editorBlob);

