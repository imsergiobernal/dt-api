# dt-api
DailyTends Backend API service

# Daily Trends API Backend

This API is responsible for managing articles incoming from El País, El Mundo and own mades.

## Getting Started

For development, we use docker-compose [overriding configuration](https://docs.docker.com/compose/extends/#adding-and-overriding-configuration).

More about [sharing Compose configurations between files and projects](https://docs.docker.com/compose/extends/)
### Prerequisites

Install lastest Docker version for your computer. Do not install Docker Toolbox, it won't work properly.

### Installing

To get development environment, run the following docker-compose command

```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

## Running the tests

This is not implemented yet.


### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Maintainer

* **Sergio Bernal** - *Initial work* - [Imsergiobernal](https://github.com/imsergiobernal)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
