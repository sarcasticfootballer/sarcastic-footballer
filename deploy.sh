#!/bin/bash
rm -r dist
cd sf-angular
ng build
cp -r dist ../
cd ..
gcloud app deploy --version=1