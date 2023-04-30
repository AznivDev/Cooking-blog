# Assignment

## Assignment 1:
### Approximate Duration: _2 hour_
### Description
Using Bash flow control methods, modify the script to trap if a user hits Ctrl+C to cancel the script and remove all backed up files if that happens. Additionally, add logic to determine if no parameters are passed to the script. If there were no parameters passed, print a help statement instead of attempting to run the script.

Once complete, ensure it runs and successfully backs up the required files. Use the sleep command to verify that a Ctrl+C is trapped correctly.

### Objectives: 
* _In this lab, we'll integrate Bash flow control into an existing backup script._

### Task:

* _Modify the backup script to add the requested trap_
    * _Modify the backup script so that attempts to cancel the script while running will clean up all copied files and directories, but still log that the signal occurred._
* _Modify the Backup Script to Contain the Requested Logic for Parameters_
    * _Using an if statement, ensure that the script errors out without copying files if the log file parameter isn't passed._
* _Run the Script and Verify That Files Are Backed Up and Trapping and Parameter Logic Work as Requested_
    * _Mark the script as executable and run it, then verify that all files are backed up to the required directory._
---

## Assignment 2.1:
### Approximate Duration: _20 minutes_
### Description:
You have a text file called test.txt in assesment-2 directory.
### Objectives: 
* _be able to create simple script to back up files from a directory.

### Task:

* _Write a script that takes the file as an argument, reads the file and prints out all the lines it contains._
* _Use the while loop for reading lines._
* _Your script should be named solution-a2.1.sh_


## Assignment 2.2:
### Approximate Duration: _20 minutes_
### Description:
You have a text file called test.txt in assesment-2 directory.
### Objectives: 
* _be able to create simple script to back up files from a directory.

### Task:

* _Modify your previous script that it additionally takes one random
word as an argument. Loop over the file and print out only the lines that contain the given word. You cannot use grep for this. Your script should be named solution-a2.2.sh, the given word has to be the first argument and the input file._

## Assignment 2.3:
### Approximate Duration: _20 minutes_
### Description:
You have a text file called test.txt in assesment-2 directory.
### Objectives: 
* _be able to create simple script to back up files from a directory.

### Task:

* _Modify your previous script that it first prints the line number where
the given word was found and then the line itself._
    > For example:
    > ```bash
    > 32 This here is a test sentence
    >```
* _You cannot use grep in your code. Your script should be named solution-a2.3.sh, the given word has to be the first argument and the input file the second argument._

## Assignment 2.4:
### Approximate Duration: _20 minutes_
### Description:
You have a text file called test.txt in assesment-2 directory.
### Objectives: 
* _be able to create simple script to back up files from a directory.

### Task:

* _Modify your script that it could take several text files as arguments.
You can use test.txt and test2.txt for testing._

    > The script should print
in which file it is currently searching as follows:
    > ```bash
    > ------------------------------
    > Searching in file test.txt:
    > ------------------------------
    > 32 This here is a test sentence
* _You cannot use grep in your code. Your script should be named solution-a2.4.sh, the given word has to be the first argument like before_