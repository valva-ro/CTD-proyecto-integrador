package com.grupo4.hostingbook.event;

import com.grupo4.hostingbook.model.UsuarioDTO;
import com.grupo4.hostingbook.service.IUsuarioService;
import com.grupo4.hostingbook.service.impl.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class RegistrationListener implements ApplicationListener<OnRegistrationCompleteEvent> {

    private final IUsuarioService service;
    private final EmailService emailService;

    @Autowired
    public RegistrationListener(IUsuarioService service, EmailService emailService) {
        this.service = service;
        this.emailService = emailService;
    }

    @Override
    public void onApplicationEvent(OnRegistrationCompleteEvent event) {
        this.confirmRegistration(event);
    }

    private void confirmRegistration(OnRegistrationCompleteEvent event) {
        UsuarioDTO user = event.getUsuario();
        String token = UUID.randomUUID().toString().replace("-", "");
        service.createVerificationToken(user, token);

        final String email = user.getMail();
        final String subject = "Confirma tu cuenta en HostingBook";
        final String confirmationUrl = "http://hostingbook.one/confirmAccount/" + token;
        final String message = "¡Gracias por sumarte a HostingBook!\n\nPara completar tu registro por favor accedé al siguiente link:\r\n"
                + confirmationUrl + "\n\nEste link es válido por 24hs, luego de ese plazo deberá volver a registrarse.";
        emailService.sendSimpleMessage(email, subject, message);
    }
}
