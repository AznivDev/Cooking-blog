echo "Creating backup directory" && mkdir ~/backup || echo "Directory already exists"
echo "Copying files" && cp /usr/bin/* ~/backup || echo "Someting went wrong"

echo "Copying files" && cp /usr/bin/* ~/backup || echo $?

