#!/bin/bash 

#WID=71304404
WID=`xdotool search --name "amigo-UDOO-x86-4: ~/amigomated"| tail -1`


xdotool windowfocus $WID 
xdotool key z
xdotool key z
xdotool key z
xdotool key z
xdotool key z
xdotool key i
sleep 1
xdotool key BackSpace

