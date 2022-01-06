// Removed settings menu for the enhanced Anton clock

(function(back) {
  var FILE = "antwsclk.json";
  // Load settings
  var settings = Object.assign({
    secondsOnUnlock: false,
  }, require('Storage').readJSON(FILE, true) || {});

  function writeSettings() {
    require('Storage').writeJSON(FILE, settings);
  }

  var mainmenu = {
    "": {
      "title": "Anton clock WS"
    },
    "< Back": () => back(),
    "N/A": {
      value: (settings.weekDay !== undefined ? settings.weekDay : true),
      format: v => v ? "On" : "Off",
      onchange: v => {
        settings.weekDay = v;
        writeSettings();
      }
    }
  };

  // Actually display the menu
  E.showMenu(mainmenu);

})(load);

// end of file
