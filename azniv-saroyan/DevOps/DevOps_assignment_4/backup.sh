echo "Creating backup directory" >> backup_logs
mkdir work_backup

echo "Copying Files" >> backup_logs
cp -v work/*  work_backup/ >>  backup_logs
echo "Finished Copying Files" >>  backup_logs
