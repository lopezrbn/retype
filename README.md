# Rety.pe - A words game
> Rety.pe is a browser words finding game given seven letters that change every day.

![](screenshot.png)

Rety.pe is a words finding game but it was originally developed as a project to be exposed in my personal portfolio as a Data Scientist, to demonstrate key abilities and knowdledge in this field.

Specifically, Rety.pe project gathers all the parts sorrounding the deployment of any data science project that needs to be distributed to the public after its development.

These parts are:

- Development of a web app as UI
   - Front and back-end developed using [Reflex](https://reflex.dev/), a new technology that allows building web apps in pure Python.
   - Development of the full control logic of the game using Python.
- Deployment of the web page via self hosting in a VPS
   - Configuration of the server with a stack using Linux (Ubuntu 23.10), Nginx, MySQL and Python.
   - Configuration of Nginx as web server using reverse proxy and websockets to communicate front with back-end.
   - Configuration of Reflex as a system service to run indefinitely as a background process.
- Creation of a database using MySQL
   - Creation of the database, designing structure, tables, columns and data types.
   - Hosting of the database in the VPS.
   - Configuration of the communication between database and web app using MySQLConnector/Python.
   - Design of all the SQL queries needed to serve the data to the web app.


Previous versions of the project also used:

- Flask/Python for the back-end.
- Google Cloud Platform for the deployment.


## Installation

OS X & Linux:

```sh
npm install my-crazy-module --save
```

Windows:

```sh
edit autoexec.bat
```

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```

## Release History

* 0.1.0
    * First release of the game
      
## Meta

Rubén López – lopezrbn@gmail.com

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/lopezrbn/words](https://github.com/lopezrbn/words/)
