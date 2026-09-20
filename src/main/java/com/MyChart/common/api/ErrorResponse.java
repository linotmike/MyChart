package com.MyChart.common.api;

import java.time.Instant;
import java.util.Map;

public record ErrorResponse(
        boolean success,
        String message,
        Map<String, String> errors,
        Instant timestamp
) {
    public static ErrorResponse of(String message, Map<String, String> errors) {
        return new ErrorResponse(false, message, errors, Instant.now());
    }
}
