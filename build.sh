echo "Starting Discord-ARM Build"
electron-packager . --overwrite --platform=darwin --arch=arm64 --icon=assets/icons/icon.icns --prune=true --out=release-builds
