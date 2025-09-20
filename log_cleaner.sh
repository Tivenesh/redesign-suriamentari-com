#!/bin/bash

LOG_DIR=~/Documents

find "$LOG_DIR" -name "*.log" -type f -mtime +7 -exec rm -f {} \;

echo "old log file cleaned from $LOG_DIR"
