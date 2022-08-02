USER=(ani aram) 

function addNewUser {
	useradd ${USER[0]} 
       	useradd ${USER[1]}
}

addNewUser

echo | id ${USER[0]} >> user_logs && id ${USER[1]} >> user_logs

echo cp -v -r home/${USER[0]}/tmp/* >> work_backup
echo cp -v -r home/${USER[1]}/tmp/* >> work_backup

echo "Creating backup directory" >> /home/${USER[0]}/backup_logs
echo "Creating backup direction" >> /home/${USER[1]}/backup_logs
mkdir /home/${USER[0]}/work_backup
mkdir /home/${USER[1]}/work_backup

echo "Copying files" >> /home/${USER[0]}/backup_logs
echo "Copying files" >> /home/${USER[0]}/backup_logs 

cp -v /home/${USER[0]}/work/* /home/${USER[0]}/work_backup/ >> /home/${USER[0]}/backup_logs
cp -v /home/${USER[1]}/work/* /home/${USER[1]}/work_backup/ >> /home/${USER[1]}/backup_logs


echo "Finished Copying Files" >> /home/${USER[0]}/backup_logs
echo "Finished Copying Files" >> /home/${USER[1]}/backup_logs



