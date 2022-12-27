echo -n  "Write word "
read word
echo -n "Write filename "
read file

while read -r line; do
	for i in $line; do
		if [  $word = $i ]; then
 			echo $line
		fi
	done
done <$file



