# Requirements


## Software requirements

- JDK 21.0 or later
- A key for OpenAI API (provided by the workshop organizer)
- Podman or Docker
- Git (not mandatory)
- An IDE with Java support (IntelliJ, Eclipse, VSCode with the Java extension, etc.)
- A terminal

## Requirements

Before actually starting the workshop, make sure you have set the OpenAI API key as an environment variable:

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
The application severs the application at http://localhost:8080/.

!!! warning "Stopping the application"
    
    When switching steps, make sure to stop the running application before starting the next step. 
    You can exit the application by pressing `Ctrl+C` in the terminal where the application is running.


### Dev UI

Quarkus ships with a Dev UI, which is available in dev mode only at http://localhost:8080/q/dev/.
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
curl -L -o workshop.zip https://github.com/langchain4j/quarkus-langchain4j-uphill-workshop/archive/refs/heads/main.zip
```

Then unzip the file and navigate to the directory:

```shell
unzip workshop.zip
cd quarkus-langchain4j-workshop-main
```

### Import the project in your IDE

Then, open the project from the `step-01` directory in your IDE and use that directory throughout the workshop.


Once done, you can move on to the next step: [Step 1](step-01.md).

