# Docker-React-Node-Mysql

Built on linux ubuntu

1) Unzip the file.

2) Open the file where you can see folders (app_container, db_container, and docker-compose.yml).

3) Open up the terminal within the folder location (For example in linux os ~/production-app/metigy-assignment$ )

4) Make sure you have docker environment already setup. To check type "docker" without quotes from your terminal

4) Then type "docker-compose up" without quotes then wait for some time to download all the required files and let it build the environment to run the app.
	Make sure the docker environment is not running any instance of mysql otherwise the app will not build.
	To check the container type "docker ps -a" and "docker images"

5) If problem persists please run "docker-compose up --build" without quotes.

6) After this if everything goes well, there will be a log message with 
	App is running on port 3000 | on production port 8080
	Database connection successful!

7) Open browser and type http://localhost:8080/ and hit enter

Happy coding...
