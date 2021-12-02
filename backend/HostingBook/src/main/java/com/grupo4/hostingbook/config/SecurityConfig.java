package com.grupo4.hostingbook.config;

import com.grupo4.hostingbook.auth.JWTRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Qualifier("UsuarioService")
    private final UserDetailsService usuarioService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final JWTRequestFilter jwtRequestFilter;

    @Autowired
    public SecurityConfig(UserDetailsService usuarioService, JWTRequestFilter jwtRequestFilter, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.usuarioService = usuarioService;
        this.jwtRequestFilter = jwtRequestFilter;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(usuarioService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .httpBasic().disable()
                .csrf().disable()
                .authorizeRequests()
                    .antMatchers(
                            "/reservas",
                            "/usuarios/{\\d+}/favoritos",
                            "/productos/agregar/{^[\\d]$}/usuarios/{^[\\d]$}",
                            "/productos/eliminar/{^[\\d]$}/usuarios/{^[\\d]$}"
                    ).authenticated()
                    .antMatchers(HttpMethod.POST, "/usuarios").hasRole("ADMIN")
                    .antMatchers(
                            "/categorias**",
                            "/ciudades**",
                            "/productos**",
                            "/usuarios/login",
                            "/usuarios/signup",
                            "/usuarios/{^[\\d]$}"
                    ).permitAll()
                .and()
                    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}