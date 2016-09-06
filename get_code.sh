#!/bin/sh

cd api
git clone git@github.com:N-Thomas/CSynapse.git code
cd ..
cd tasks
git clone git@github.com:N-Thomas/CSynapse.git code
cd ..
cd web
git clone git@github.com:SamCallister/frontend.git
cd ..