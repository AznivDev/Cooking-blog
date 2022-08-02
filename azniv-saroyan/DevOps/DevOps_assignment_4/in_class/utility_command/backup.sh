echo "Creating backup directory" && mkdir ~/backup 2> /dev/null || echo "Directoru already exists"
echo "Copying files" && cp -v /usr/bin/* ~/backup > log_file 2>&1
grep -i denied log_file | tail -n 5
exit 127
