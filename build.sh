nodeInitDir=./node_modules
if [ ! -d "$nodeInitDir" ]; then
    #Install electron-packager
    echo "Error: node_modules not found: Electron-packager required!"
    read -p "Install electron-packager?" -n 1 -r
    echo    # (optional) move to a new line
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
        npm install electron-packager -g
    fi
fi

echo "Starting Discord-ARM Build"
electron-packager . --overwrite --platform=darwin --arch=arm64 --icon=assets/icons/icon.icns --prune=true --out=release-builds
