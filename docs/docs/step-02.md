# Step 02 - LLM configuration

In this step, we will play with various configurations of the language model (LLM) that we will use in the subsequent steps.

You can either use the code from the step-01 and continue from there, or check the final code of the step located in the `step-02` directory.

??? important "Do not forget to close the application"
    If you have the application running from the previous step and decide to use the `step-02` directory, make sure to stop it before continuing.

## The configuration

The application is configured from the `src/main/resources/application.properties` file:

```properties
quarkus.langchain4j.openai.api-key=${OPENAI_API_KEY}

quarkus.langchain4j.openai.chat-model.model-name=gpt-4o
quarkus.langchain4j.openai.chat-model.log-requests=true
quarkus.langchain4j.openai.chat-model.log-responses=true
```

The `quarkus.langchain4j.openai.api-key` property is the OpenAI API key.
The rest of the configuration indicates which model is used (`gpt-4o`) and whether to log the requests and responses to the model in the terminal.

!!! important "Reloading"
    After changing a configuration property, you need to force a restart the application to apply the changes. 
    Simply submitting a new chat message in the UI does not trigger it (it only sends a websocket message rather than an HTTP request), 
    so you have to refresh the page in  your browser.

!!! info 
    The precise meaning of most model parameters is described on the website of [OpenAI](https://platform.openai.com/docs/api-reference/chat/create).

## Temperature

`quarkus.langchain4j.openai.chat-model.temperature` controls the randomness of the model's responses. 
Lowering the temperature will make the model more conservative, while increasing it will make it more creative. 

Try asking "Describe a sunset over the mountains" while setting the temperature to 0.1 and then to, say, 1.5, and observe the different style of the response. 
With a too high temperature over 1.5, the model often starts producing garbage, or fails to produce a valid response at all.

Applications that requires deterministic responses should set the temperature to 0. 
Note that it will note guarantee the same response for the same input, but it will make the responses more predictable.

Applications that require a bit more creativity (like to generate text for a story) can set the temperature to 0.3 or higher.

## Max tokens

`quarkus.langchain4j.openai.chat-model.max-tokens` limits the length of the  response. 
Try setting it to 20 and see how the model cuts off the response after 20 tokens.

Tokens are not words, but rather the smallest units of text that the model can generate.
For example, "Hello, world!" has 3 tokens: "Hello", ",", and "world".
Each model has a different tokenization scheme, so the number of tokens in a sentence can vary between models.

## Frequency penalty

`quarkus.langchain4j.openai.chat-model.frequency-penalty` defines how much the model should avoid repeating itself. 
Try setting the penalty to 2 (which is the maximum for OpenAI models) and see how the model tries to avoid repeating words in a single response. 
For example, ask it to "Repeat the word hedgehog 50 times". 
While with frequency penalty around 0, the model gladly repeats the word 50 times, but with 2, it will most likely start producing garbage after repeating the word a few times.

## Final configuration

After playing with the configuration, you can set it to the following values:

```properties
quarkus.langchain4j.openai.api-key=${OPENAI_API_KEY}

quarkus.langchain4j.openai.chat-model.model-name=gpt-4o
quarkus.langchain4j.openai.chat-model.log-requests=true
quarkus.langchain4j.openai.chat-model.log-responses=true

quarkus.langchain4j.openai.chat-model.temperature=1.0
quarkus.langchain4j.openai.chat-model.max-tokens=1000
quarkus.langchain4j.openai.chat-model.frequency-penalty=0
```

Let's now switch to the next step!