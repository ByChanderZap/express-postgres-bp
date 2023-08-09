[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](mailto:alexander.herrerain@gmail.com)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


# getting started 🚀

# express-postgress-typescript-bp
## Overview
This project provides a solid foundation for creating APIs using Node.js and Express, along with PostgreSQL as the database and Sequelize as the ORM. It includes a development setup with Docker Compose, allowing you to easily set up your development environment.


# Prerequisites
- Node.js 18.15.0+
- Docker (for development environment)
- PostgreSQL server (for production)
- Set up .env file (use .env.example to know what to add)


# Recomendations
- Use nvm, the project includes a .nvmrc 


# Features
- Express.js framework
- Integration with PostgreSQL
- Validation using Joi
- Error handling using Boom
- CORS support 
- Security enhancements using helmet
- JSON Web Token Based authentication
- Basic authentication using basic-auth and bcrypt
- Code formatting with ESLint and Prettier
- Unit testing with Jest
- Auto-reloading with Nodemon
- Docker (for development environment)

# Getting Started
- update/create .env file with your credentials
- to run the project with docker the "POSTGRES_HOST" in the .env should be 'db'

## Setting Up Node.js Version using nvm
This project uses the Node Version Manager (nvm) to manage the Node.js version. To ensure you're using the correct version of Node.js, follow these steps:

1. Install Node Version Manager (if not already installed) by following the instructions at nvm repository.

2. Once nvm is installed, navigate to the project directory and run the following command to use the recommended Node.js version for this project:
``` 
nvm use
```
This command will automatically select and use the Node.js version specified in the .nvmrc file in the project root.

1. Verify that the correct Node.js version is being used:

```
node -v
```


## Configuration
Before running the project, configure the necessary environment variables. Create a .env file in the project root and define the following variables:

```.env
NODE_ENV=dev
POSTGRES_DB=dbname
POSTGRES_PASSWORD=password
POSTGRES_USER=dbuser
POSTGRES_HOST=dbhost # use 'db' if you are dockerizing the app within the included docker-compose
POSTGRES_PORT=5432
# POSTGRES_HOST='http://yourhost/'

# env variables that docker-compose will use to build the PostgreSQL image
DB_USER=myuser
DB_PASSWORD=password
DB_NAME=dbname

```

## Installation
```
npm install
```

## Development mode
```
npm run dev
```

## Running with Docker Compose
```
npm run dockerize
```

## Running tests
```
npm run test
```

# Contact
For questions or feedback, contact Alexander Herrera at alexander.herrerain@gmail.com.