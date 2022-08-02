LOGFILE="/home/$USER/log_file"
BACKUP_LOC="/usr/bin/*"
BACKUP_TARGET="/home/$USER/backup-veriables"

function init {
	echo "Creating backup directory" && mkdir $BACKUP_TARGET 2> /devnull || 	echo "Directory already exists"
	echo "Copying files" && cp -v $BACKUP_LOG $BACKUP_TARGET > $LOGFILE 2>$1
}
init

grep -i denied $LOGFILE |tail -n 5
exit 127


init ()  {
        echo "Creating backup directory" && mkdir $BACKUP_TARGET 2> /devnull ||         echo "Directory already exists"
        echo"Copying files" && cp -v $BACKUP_LOG $BACKUP_TARGET > $LOGFILE 2>$1
}
init

tail(){
	command tail -n $1
}	

grep -i denied $LOGFILE |tail 1
exit 127


