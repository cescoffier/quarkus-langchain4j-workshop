# quarkus-openshift-workshop
A workshop combining DevSpaces, Quarkus, Backstage, OpenShift, Trusted Application Pipeline, and OpenShift.ai


## Running the application in dev mode (locally)

_Prerequisites:_

* Java 21
* Podman or Docker


Open 4 terminals and run the following commands:

* Terminal 1
```bash
cd fight-ui
./mvnw quarkus:dev
```

* Terminal 2 (variant OpenShift AI)
```bash
cd fight-service
export LLM_API_ENDPOINT=https://<your-openshift-ai-endpoint>/v1
export LLM_MODEL=granite-7b-instruct
./mvnw quarkus:dev
```

* Terminal 2 (variant Open AI)
```bash 
cd fight-service
export OPENAI_API_KEY=your_api_key
./mvnw quarkus:dev 
```

* Terminal 3
```bash
cd hero-service
./mvnw quarkus:dev
```

* Terminal 4
```bash
cd villain-service
./mvnw quarkus:dev
```

Then, open your browser and navigate to `http://localhost:8080` to see the application running (fight-UI).

## Deployment on OpenShift

1. In a terminal, run the following commands:

```bash
kubectl apply -f kubernetes/frontend-route.yaml -f kubernetes/hero-database.yaml -f kubernetes/villain-database.yaml
```

2. You need to choose between OpenAI or OpenShift AI variant:

* To deploy the OpenAI variant, edit the kubernetes/openai.yaml and add your OpenAI API key.

    ```bash
    echo -n $YOUR_KEY | base64
    ```

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      labels:
        app: llm
      name: llm-config
    data:
      LLM_ENDPOINT: aHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS8=
      MODEL_NAME: Z3B0LTRvLW1pbmk=
      OPENAI_API_KEY: Copy output here
    type: Opaque
    ```

    Then apply the secret:

    ```bash
    kubectl apply -f kubernetes/openai.yaml
   git update-index --assume-unchanged kubernetes/openai.yaml # to make sure you do not leak the key
    ```

* To deploy the OpenShift AI variant:

    ```bash
    kubectl apply -f kubernetes/openshift-ai.yaml
    ```
  
3. Deploy the application:

```bash
kubectl apply -f fight-ui/kubernetes.yml -f hero-service/kubernetes.yml -f villain-service/kubernetes.yml -f fight-service/kubernetes.yml
```

4. Retrieve the URL of the frontend:

```bash
echo "Route: https://`oc get routes -o json --field-selector metadata.name=fight-ui | jq -r '.items[0].spec.host'`"
```