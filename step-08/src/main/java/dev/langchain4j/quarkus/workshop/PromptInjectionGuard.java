package dev.langchain4j.quarkus.workshop;

import dev.langchain4j.data.message.UserMessage;
import io.quarkiverse.langchain4j.guardrails.InputGuardrail;
import io.quarkiverse.langchain4j.guardrails.InputGuardrailResult;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@ApplicationScoped
public class PromptInjectionGuard implements InputGuardrail {

    @Inject
    PromptInjectionDetectionService service;

    @Override
    public InputGuardrailResult validate(UserMessage userMessage) {
        double result = service.isInjection(userMessage.singleText());
        if (result > 0.7) {
            return failure("Prompt injection detected");
        }
        return success();
    }
}
