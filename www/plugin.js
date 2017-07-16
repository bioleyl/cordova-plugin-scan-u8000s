
var exec = require('cordova/exec');

var PLUGIN_NAME = 'ScanPlugin';

var ScanPlugin = {
  register: function(arg0, success, error) {
    exec(success, error, PLUGIN_NAME, "register", [arg0]);
  },
  openScanner: function(arg0, success, error) {
    exec(success, error, PLUGIN_NAME, "openScanner", [arg0]);
  },
  closeScanner: function(arg0, success, error) {
    exec(success, error, PLUGIN_NAME, "closeScanner", [arg0]);
  },
  startDecode: function(arg0, success, error) {
    exec(success, error, "ScanPlugin", "startDecode", [arg0]);
  },
  stopDecode: function(arg0, success, error) {
    exec(success, error, "ScanPlugin", "stopDecode", [arg0]);
  },
  start_continue: function(arg0, success, error) {
    exec(success, error, "ScanPlugin", "start_continue", [arg0]);
  },
  stop_continue: function(arg0, success, error) {
    exec(success, error, "ScanPlugin", "stop_continue", [arg0]);
  },
  output_EditTextBox: function(arg0, success, error) {
    exec(success, error, "ScanPlugin", "output_EditTextBox", [arg0]);
  },
  output_EditTextBox: function(arg0, success, error) {
    exec(success, error, "ScanPlugin", "output_EditTextBox", [arg0]);
  }
};

module.exports = ScanPlugin;
