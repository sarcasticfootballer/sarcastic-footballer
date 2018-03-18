rm -r dist
cd sf-angular
ng build
cp -r dist ../
cd ..
dev_appserver.py .