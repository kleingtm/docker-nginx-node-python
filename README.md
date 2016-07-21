## Dockerizing Angular 2, Flask, NodeJS, and MongoDB With Docker-Compose and Docker-Machine

**Goal:**

The goal of this repository is to have a quickly sharable, deployable docker setup for Python and Node web services adhering to best-practices. Nginx serves the static content and reverse proxies to Python/Flask and NodeJS/Express web service apis. Since Nginx, Python, and NodeJS are in separate (linked) docker containers, each service has a separate IP from the host docker-machine. Due to this, nginx reverse proxies over specific TCP ports between containers, as opposed to using a unix socket implementation. A benefit of this linked container implementation is that proxies do not go through the docker-machine host.


**Stack:**
- Docker v1.11.1
- Docker Compose v1.7.1
- Docker Machine v0.7.0
- Nginx
- MongoDB
- Python API -> Flask / Flask-RESTful behind Nginx reverse-proxy for data science (Python 2.7 for PyLucene integration)
- uWSGI -> Written in c, use of this uWSGI server runs the Python/Flask application very efficiently.
- NodeJS API -> Express behind Nginx reverse-proxy for high-performance http requests and json handling
- Angular 2 ->  SPA on a cutting-edge framework with native lazy loading

**Getting up and running:**
- Install Docker Toolbox - https://docs.docker.com/engine/getstarted/step_one/
- Run the following from a terminal within this project root:

    `docker-machine rm default`
    
    `docker-machine create -d virtualbox --virtualbox-hostonly-cidr "192.168.90.1/24" default`
    
    `eval "$(docker-machine env default)"`
    
    `docker-compose build --force-rm`
    
    `docker-compose up`
    
**Verify proper docker build from the browser:**
- Retrieve docker-machine ip address from the terminal/cmd prompt:

    `docker-machine ip`
    
    
- Static assets served from Nginx:
    - http://docker-machine-ip/
- Flask API REST end-point:
    - http://docker-machine-ip/flask-api/user
    - http://docker-machine-ip/flask-api/users
- NodeJS API REST end-point:
    - http://docker-machine-ip/flask-api/user
    - http://docker-machine-ip/flask-api/users
    
Reminder: "docker-machine-ip" above refers to the host IP of the docker-machine returned from the terminal on this command:

    docker-machine ip

Cheers!
