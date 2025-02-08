# Retype - Daily Word Game

Retype is a web application that challenges players to form words using a set of 7 letters that are updated daily. Developed as a portfolio project, this application demonstrates a range of technical skills in full-stack development, deployment, and database management.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies and Skills Demonstrated](#technologies-and-skills-demonstrated)
- [Installation and Setup](#installation-and-setup)
- [Running the Application](#running-the-application)
- [Deployment and System Service](#deployment-and-system-service)
- [Nginx Reverse Proxy Configuration](#nginx-reverse-proxy-configuration)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Overview

The project is built using [Reflex](https://reflex.dev/) and Python. It includes both the frontend and backend of the application, as well as the complete control logic of the game. Although not intended as a commercial product, Retype serves as a consolidation project for practicing and showcasing my data science skills and the ability to deploy final solutions in the form of webapps.

## Features

- **Daily Updated Game**: The game generates a new set of 7 letters every day.
- **Word Validation**: Utilizes an open-source dictionary API (credit to Free Dictionary API) to check the validity of words entered by players.
- **User Experience Enhancements**:
  - Cookies are used to remember the player's name and session information.
  - A brand kit generated by the Brand Kit Generator web tool ensures a consistent design across the site.
- **Responsive Design**: The web app provides a seamless experience on both desktop and mobile devices.

## Technologies and Skills Demonstrated

- **Web App Development (UI)**
  - Frontend and backend built with Reflex.
  - Game control logic implemented in Python.
- **Deployment on a VPS**
  - Server configuration using Linux, Nginx, MySQL, and Python.
  - Nginx is set up as a reverse proxy with WebSockets to facilitate communication between the frontend and backend.
  - Reflex is configured as a system service to run continuously in the background.
- **Database Management with MySQL**
  - Database design (including structure, tables, columns, and data types).
  - Connection to the web app via MySQLConnector/Python.
  - Comprehensive SQL queries to serve data to the application.
- **Additional Aspects**
  - Integration of an open-source dictionary API for word validation.
  - Use of cookies for session persistence.
  - Visual design enhancements via the Brand Kit Generator.

## Installation and Setup

Follow these steps after cloning the repository:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/lopezrbn/retype.git
    cd retype
    ```

2. **Configure Reflex Settings**

    - Create a new file called `rxconfig.py` by copying `rxconfig-example.py`:

      ```bash
      cp rxconfig-example.py rxconfig.py
      ```

    - Edit `rxconfig.py` to include your custom settings. This file is essential for configuring Reflex (e.g., server settings, ports, environment variables).

3. **Set Up Database Connection**

    - Similarly, create `db-connection.py` from the provided example:

      ```bash
      cp db-connection-example.py db-connection.py
      ```

    - Update `db-connection.py` with your MySQL credentials. The project assumes that MySQL is installed on your system.
    To install MySQL on a Debian/Ubuntu-based system:

      ```bash
      sudo apt update
      sudo apt install mysql-server
      ```

    - Then secure your installation:

      ```bash
      sudo mysql_secure_installation
      ```

4. **Initialize the Database**

    - Run the `db_creation.py` script to create the necessary database and tables:

      ```bash
      python db_creation.py
      ```

## Running the Application

To run the web application, use the Reflex command:

```bash
reflex run [--env dev|prod] [--loglevel debug]
```

- **Options:**
  - `--env`: Specify the environment (development or production).
  - `--loglevel`: Set the log level (e.g., debug) for detailed output.

## Nginx Reverse Proxy Configuration

Reflex by default serves the frontend on port 3000 and the backend on port 8000. These ports can be modified via the configuration files. To make your web app accessible through a domain or IP address, you need to set up Nginx as a reverse proxy that handles WebSocket connections.

This configuration ensures that incoming HTTP and WebSocket traffic is properly forwarded to the frontend and backend. Below is a sample Nginx configuration:

```nginx
server {
  listen  80;
  server_name yourdomain.com or IP_address;

  # Frontend - served on port 3000
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
  }

  # Backend - served on port 8000
  location /_event {
    proxy_pass http://localhost:8000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
  }
}
```

In this example:
- Requests to the root URL (%) are forwarded to the frontend (port 3000).
- Requests to `/_event` are routed to the backend (port 8000).

Make sure to replace `yourdomain.com` or `IP_address` with your actual domain or server IP.

**Steps to Configure Nginx**

1. **Copy the provided Nginx configuration file** to the correct location:
    ```bash
    sudo cp nginx-retype.conf /etc/nginx/sites-available/retype.conf
    ```

2. **Create a symbolic link** in `sites-enabled` to activate the configuration:
    ```bash
    sudo ln -s /etc/nginx/sites-available/retype.conf /etc/nginx/sites-enabled/
    ```

3. **Test the Nginx configuration** to ensure there are no syntax errors:
    ```bash
    sudo nginx -t
    ```

4. **Reload Nginx** to apply the new configuration:
    ```bash
    sudo systemctl reload nginx
    ```

5. **Ensure Nginx is running and enabled at startup**:
    ```bash
    sudo systemctl enable nginx
    sudo systemctl start nginx
    ```

## Deployment and System Service

The application remains active only while the `reflex run` process is executing. Stopping this process will make the web app unavailable.

For a production-ready deployment, it is recommended to run Reflex as a background system service. This can be achieved by creating a systemd service file (e.g., `reflex-bg-retype.service`).

A basic example of a systemd service file:

```ini
[Unit]
Description=Retype Reflex Background Service
After=network.target

[Service]
User=your_username
WorkingDirectory=/path/to/retype
ExecStart=/usr/local/bin/reflex run --env prod --loglevel info
Restart=always

[Install]
WantedBy=multi-user.target
```

To enable and start the service:

```bash
sudo cp reflex-bg-retype.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable reflex-bg-retype.service
sudo systemctl start reflex-bg-retype.service
```

## Acknowledgements

Special thanks to Javi López <mail@javilopezg.com> for giving me the idea of developing the game as a consolidation project to all the additional knowledge needed to deploy a data science solution, but especially for acting as my mentor during this time, guiding both the professional and the personal path. Thanks, buddy!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.