#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/..
APP=${PWD##*/}     

####################################

php src/gen-bookmark.php
php src/gen-editor.php

cp cache/bookmark.html dist/bookmark.html
cp cache/editor.html dist/editor.html


