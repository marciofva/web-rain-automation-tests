# pull image
FROM cypress/included:9.4.1

# make directory inside container
RUN mkdir /app
WORKDIR /app

# copy cypress code from host to container
COPY . /app

# install package
RUN npm install

ENTRYPOINT [ "npm",  "run" ]
