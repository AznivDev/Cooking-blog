echo -n  "Write word "
read word
echo -n "Write filename "
read file
count=0

while read -r line; do
	let count++
	for i in $line; do
		if [  $word = $i ]; then
			 echo $count  $line
		fi
	done
done <$file

