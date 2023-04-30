#!/bin/bash

echo "Creating backup directory" >> /home/user/backup_logs
mkdir /home/user/work_backup

echo "Copying Files" >> /home/user/backup_logs
cp -v /home/user/work/* /home/user/work_backup/ >> /home/user/backup_logs
echo "Finished Copying Files" >> /home/user/backup_logs