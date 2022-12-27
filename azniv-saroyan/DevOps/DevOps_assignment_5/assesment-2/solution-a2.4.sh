echo -n  "Write word "
read word
echo -n  "Write filenames "
read file1 file2

function findWord1 {
	while read -r line; do
		let file1Count++
		for i in $line; do
			if [ $word = $i ]; then
 				echo $file1Count  $line
			fi
		done
	done <$file1

	function findWord2 {
        	while read -r line; do
			let file2Count++
			for i in $line; do
				if [  $word = $i ]; then
 					echo $file2Count  $line
				fi
			done
		done <$file2
		exit
	}
	findWord2

	exit
}


findWord1
