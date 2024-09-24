# Requirements

## Software requirements

- JDK 21.0 or later - Download it from [Adoptium](https://adoptium.net/)
- A key for OpenAI API (provided by the workshop organizer)
- Podman or Docker - See [Podman installation](https://podman.io/getting-started/installation) or [Docker installation](https://docs.docker.com/get-docker/)
  - If you use Podman, Podman Desktop provides a great user experience to manage your containers: [Podman Desktop](https://podman-desktop.io/docs/installation)
- Git (not mandatory) - See [Git installation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- An IDE with Java support (IntelliJ, Eclipse, VSCode with the Java extension, etc.)
- A terminal

## AI Model Requirements

Before actually starting the workshop, make sure you have set the OpenAI API key as an environment variable, eg:

```bash
export OPENAI_API_KEY=<your-key>
```

```powershell
$Env:OPENAI_API_KEY = <your-key>
```

## Good to know

You can run a Quarkus application in _dev mode_ by running the following command in the project directory:

### Quarkus dev mode

```bash
./mvnw quarkus:dev
```

This will start the application in dev mode, which means that the application will be recompiled automatically on every change in the source code.
Just refresh the browser to see the changes.
The application serves the application at [http://localhost:8080/](http://localhost:8080/).

!!! warning "Stopping the application"
    When switching steps, make sure to stop the running application before starting the next step. 
    You can exit the application by pressing `Ctrl+C` in the terminal where the application is running.

### Dev UI

Quarkus ships with a Dev UI, which is available in dev mode only at [http://localhost:8080/q/dev/](http://localhost:8080/q/dev/).
The Dev UI can be seen as your toolbox when building Quarkus application.
It is only available when the application is running in dev mode.

### Debugging

For debugging a Quarkus application running in dev mode, put your breakpoints and select `Run > Attach to Process`, then select the Quarkus process (in IntelliJ)

## Let's get started

It's time to get started with the workshop.

### Getting the workshop material

Either use `git` or download the repository as a zip file.

#### With Git

If you haven't already, clone the repository and checkout the `main` branch.

```shell
git clone https://github.com/cescoffier/quarkus-langchain4j-workshop.git
```

Then navigate to the directory:

```shell
cd quarkus-langchain4j-workshop
```

#### Direct Download

If you didn't use the `git` approach, you can download the repository as a zip file from the [GitHub repository](https://github.com/cescoffier/quarkus-langchain4j-workshop/archive/refs/heads/main.zip):

```shell
curl -L -o workshop.zip https://github.com/cescoffier/quarkus-langchain4j-workshop/archive/refs/heads/main.zip
```

Then unzip the file and navigate to the directory:

```shell
unzip workshop.zip
cd quarkus-langchain4j-workshop-main
```

### Warming the caches

This workshop needs to download all sorts of Maven artifacts and Docker images.
Some of these artifacts are large, and because we have to share the internet connection at the workshop location, it is better to download them before the workshop.

If you’re getting ready for a workshop, you might find it helpful to pre-download some of these artifacts.
This can save strain on shared bandwidth.
If, however, you’re already attending a workshop, don’t worry about warming anything up.

### Warming up Maven

To warm up Maven, you can run the following command in the root directory of the project:

```shell
./mvnw verify
```

### Warming up Docker images

To download the Docker images, you can run the following command:

```shell
# With Podman:
podman pull pgvector/pgvector:pg16
# With Docker:
docker pull pgvector/pgvector:pg16
```

### Import the project in your IDE

Then, open the project from the `step-01` directory in your IDE and use that directory throughout the workshop.

Once done, you can move on to the next step: [Step 1](step-01.md).
