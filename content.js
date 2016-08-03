'use strict';

console.log('content.js');

var template = "## Steps to reproduce:\n1. \n2. \n3. \n\n## What should happen:\n\n\n## What actually happens:\n";

// Get the text box that's in focus and fill in the bug report template
var textBox = document.activeElement;
textBox.innerHTML = template;
