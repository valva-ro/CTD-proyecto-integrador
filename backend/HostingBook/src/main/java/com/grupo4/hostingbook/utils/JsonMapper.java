package com.grupo4.hostingbook.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

public class JsonMapper {

    public static <T> String mapObjectToJson(T t) throws JsonProcessingException {
        return getObjectMapper().writeValueAsString(t);
    }

    public static <T> T mapJsonToObject(String json, Class<T> targetClass) throws JsonProcessingException {
        return getObjectMapper().readValue(json, targetClass);
    }

    private static ObjectMapper getObjectMapper(){
        return new ObjectMapper()
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .registerModule(new JavaTimeModule());
    }
}
