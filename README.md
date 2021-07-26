#How to run this application
This application uses HTML+JS+CSS for the frontend and Python for backend.

You must run the app.py file to start a server on your localhost. It will run on http://localhost:5000/

Before running the server, you must make a few modifications to some of the Python files inside /metric and /utils. Most of these files rely on external classes from other python files. In each of these files I append a system path to the folder that I need the class from. To run the server you must change the path so that it corresponds to the folder path on your local machine.

Once these modifications have been made, you can run the server and then open initial.html which will redirect you to the front page.
