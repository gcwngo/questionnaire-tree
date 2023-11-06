"use strict"
import data from './questions.json' assert {type: 'json'};

document.addEventListener("DOMContentLoaded", function() {
	questionnaireTree(data);
}, false);
