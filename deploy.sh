#!/bin/bash

# Navigate to the directory containing your extension
cd /path/to/habitbreaker

# Zip the directory
zip -r habitbreaker.zip *

# Print a message indicating the next steps
echo "Extension packaged as habitbreaker.zip!"
echo "Now, manually upload habitbreaker.zip to https://chrome.google.com/u/2/webstore/devconsole."
