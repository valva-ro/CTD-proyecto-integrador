package com.grupo4.hostingbook.auth;

public class AuthenticationRequest {

    private String mail;
    private String contrasenia;

    public AuthenticationRequest() {
    }

    public AuthenticationRequest(String mail, String contrasenia) {
        this.mail = mail;
        this.contrasenia = contrasenia;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getContrasenia() {
        return contrasenia;
    }

    public void setContrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }
}
