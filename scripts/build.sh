#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/..
APP=${PWD##*/}     

####################################

php src/gen-bookmarklet.php
php src/gen-index.php

cp cache/bookmarklet.html bookmarklet.html
cp cache/index.html index.html


wc -ml bookmarklet.html
wc -ml index.html
