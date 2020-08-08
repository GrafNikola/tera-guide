'use strict';

var child_process = require('child_process');
var path = require('path');
var voice = exports;
const { exec } = require('child_process');
voice.speak = function(message,rate) {
	message = message.replace(/<-/g, '|').replace(/->/g, '|').replace(/</g, '|').replace(/>/g, '|').toLowerCase();
	exec(`powershell.exe Add-Type -AssemblyName System.speech; $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; $speak.Rate = ${rate}; [Console]::InputEncoding = [System.Text.Encoding]::UTF8; $speak.Speak([Console]::In.ReadToEnd()); exit`).stdin.end(message);
};
