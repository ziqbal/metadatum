#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/..
APP=${PWD##*/}     

####################################

php src/gen-bookmark.php

cp cache/bookmark.html dist/bookmark.html


