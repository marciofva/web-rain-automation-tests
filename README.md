# Cypress 
---

E2E testing project using Cypress


### Install Cypress

```
npm install cypress --save-dev
```


### Install all dependencies

```
npm install
```


### Running the tests

- Open cypress dashboard:
```
npm run cy:open
```

- Chrome browser:
```
npm run cy:chrome
```

- Firefox browser:
```
npm run cy:firefox
```


### Run all tests in Docker

Cypress provides public [docker images](https://hub.docker.com/u/cypress) to run the tests. So, The docker image that will be used is "_cypress/included_"


- Dockerfile
```
docker build -t cypress-docker-image-e2e-tests .
```

- Docker Compose - It will run the tests on _chrome_ and _firefox_ browsers in parallel
```
docker-compose up
```

- Docker Compose - To run the tests in a specific browser pass the service name, such as:
```
docker-compose up chrome
docker-compose up firefox
```

- List all docker containers
```
docker image ls
```