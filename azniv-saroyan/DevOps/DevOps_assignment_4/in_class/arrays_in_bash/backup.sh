LOGFILE="/home/$USER/{3:-log.txt}"
BACKUP_LOC="${1:-/usr/bin/*}"
BACKUP_TARGET="/home/$USER/${2:-backup}"

function init {
        echo "Creating backup directory" && mkdir $BACKUP_TARGET 2> /devnull ||         echo "Directory already exists"
        echo "Copying files" && cp -v $BACKUP_LOG $BACKUP_TARGET > $LOGFILE 2>$1
}
init

tail () {
	command tail -n $1
}

grep -i denied $LOGFILE |tail  5
exit 123

