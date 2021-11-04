package com.grupo4.hostingbook.exceptions;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionsHandler {

    //TODO Refactorizar código, si queda tiempo, usando @ResponseStatusException
    private final Logger logger = Logger.getLogger(GlobalExceptionsHandler.class);

    @ExceptionHandler({BadRequestException.class})
    public ResponseEntity<String> procesarErrorBadRequest(BadRequestException e) {
        logger.error(e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }

    @ExceptionHandler({ResourceNotFoundException.class})
    public ResponseEntity<String> procesarErrorNotFound(ResourceNotFoundException e) {
        logger.error(e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }

    @ExceptionHandler({NotImplementedException.class})
    public ResponseEntity<String> procesarErrorNotImplemented(NotImplementedException e) {
        logger.error(e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(e.getMessage());
    }
}
