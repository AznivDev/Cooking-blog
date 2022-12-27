file="test.txt"

while read -r line; do
	echo -e "$line\n"
done <$file



