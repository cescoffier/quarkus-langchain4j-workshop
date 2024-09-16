# Quarkus OpenShift + OpenShift AI Workshop

Welcome to the Quarkus OpenShift Workshop! This workshop is designed to help you get started with Quarkus and OpenShift and OpenShift.ai.
You are going to learn about:

- **Red Hat Developer Hub** - the developer portal to initiate and maintain application development
- **Quarkus** - the Kubernetes Native Java stack tailored for Kubernetes and OpenShift
- **Red Hat OpenShift** - the Kubernetes platform for enterprise applications
- **Red Hat Trusted Application Pipelines** - the CI/CD pipeline enhancing security with automatic, integrated checks that catch vulnerabilities early in the software supply chain.
- **Red Hat OpenShift AI** - the AI/ML platform for OpenShift

## The system

![The fight user interface, showing a sample fight](images/fight-ui.png)

In this workshop, we will be working on a very simple system composed of four services:

- a `hero service` - a simple REST service that returns superheroes. It uses a `PostgreSQL` database to store the heroes.
- a `villain service` - the `hero service` alter-ego storing super villains . It uses a `PostgreSQL` database to store the villains.
- a `fight service` - a service that orchestrates the fight between heroes and villains. It relies on AI to predict the outcome of the fight and generate a narration of the fight.
- a `fight ui` - a simple UI to interact with the `fight service`. This service is provided and already deployed in the OpenShift cluster.

## The development

All the development is done in _codespaces_, so you only need a recent web browser. 
There is no need to install anything on your machine!

You will get access to an OpenShift cluster where you will deploy the services that you will develop.

## Let's get started! 

Go to the [overview](./overview.md) page to start the workshop.