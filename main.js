/// main.js
/// Modified by JackTheFlap 04/01/2020 17:46
/// Version v0.1.0
///

const {app, shell, Menu, BrowserWindow} = require('electron');
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // Load Discord Web
  mainWindow.loadURL('http://discord.com/app')

  const template = [
    {label: app.name, submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'close'},
      { role: 'quit' }
    ]},
    {label: 'Edit', submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { type: 'separator' },
      { role: 'selectAll' }
    ]},
    {label: 'View', submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]},
    {label: 'Help', submenu: [
      { label: 'Project Page', click: async () => { 
        await shell.openExternal('https://github.com/JackTheFlap/Discord-ARM')
      }},
      { label: 'Issues', click: async () => { 
        await shell.openExternal('https://github.com/JackTheFlap/Discord-ARM/issues')
      }}
    ]}
  ];
  
  // Open all links externally
  mainWindow.webContents.on("new-window", function(event, url) {
    event.preventDefault();
    shell.openExternal(url);
  });

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu);
}

// When Electron has finished initializing one window is created.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Discord-ARM stays open to mimic other macOS applications.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
