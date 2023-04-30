# Assignment

## Assignment 1:
### Approximate Duration: _1 hour_
### Objectives: 
* _be able to create simple script to back up files from a directory.

### Task:

* _Write the Script to Back Up the Requested Files_
    * _Write a Bash backup script that will copy work directory files to the work_backup directory._
    * _Remember that we should create the directory with the script so it always exists when copying files._
    * _The script should also log all actions to a log file stored in the working directory._
* _Run the Script and Verify the Files are Backed Up as Requested_
    * _Mark the script as executable and run it, then verify that all files are backed up to the required directory_

# Assignment

## Assignment 2:
### Approximate Duration: _1 hour_
### Description
We have already existion backup script for user "user". There's been a request from two other users — aram and ani — to have the same script made available.
Modify backup.sh to include using bash variables for the user directories and user names. Feel free to include variables for anything else you'd like.
Once complete, copy the script to the other user directories, and ensure it runs and successfully backs up the required files.
### Objectives: 
* _be able to use variable in the script.
* _be able to use parameter in the script._

### Task:

* _To first work create two users and names "aram" and "ani"_
* _Modify the Backup Script to Use Variables That Would Allow Other Users to Successfully Run the Script_
    * _Ensure that any references to "user" are replaced by a variable that will reference the username of the user running the script._
* _Run the Script in Each User's Home Directory to Ensure That It Works._
    * _Mark the script as executable and run it, then verify that all files are backed up to the required directory._
* _Add a Parameter to Determine the Name of the Log File_
    * _Add a variable for the log file that will be populated by a parameter passed on the command line._