#!/bin/bash
cd sf-angular
ng build
cd ..
gcloud app deploy --version=1
