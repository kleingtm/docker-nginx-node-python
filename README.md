## Dockerizing Angular 2, Flask, NodeJS, and MongoDB With Docker-Compose and Docker-Machine - From Localhost to the Cloud

**Featuring:**

- Docker v1.11.1
- Docker Compose v1.7.1
- Docker Machine v0.7.0
- Nginx
- MongoDB
- Python API -> Flask / Flask-RESTful behind Nginx reverse-proxy for data science (Python 2.7 for PyLucene integration)
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
    - http://<docker-machine ip>/
- Flask API REST end-point:
    - http://<docker-machine ip>/flask-api/user
    - http://<docker-machine ip>/flask-api/users
- NodeJS API REST end-point:
    - http://<docker-machine ip>/flask-api/user
    - http://<docker-machine ip>/flask-api/users

Cheers!
