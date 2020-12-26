#!/bin/bash


check_for_mlocate() {
# Checking if the locate function is installed
LOCATE_PATH=$(which mlocate)

if ! [[ $LOCATE_PATH == "" ]]; then
	echo "Locate if stored at: $LOCATE_PATH"
else
	echo "Locate does not exist on the computer"
fi
}

launch_website() {
WEBSITE_PATH=$(locate Raspberry-pi-calendar | grep "index.html")
firefox $WEBSITE_PATH
}

check_for_mlocate
launch_website check_for_firefox
