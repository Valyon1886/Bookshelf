package com.spring.security.postgresql;

import com.spring.security.postgresql.models.ERole;
import com.spring.security.postgresql.models.Role;
import com.spring.security.postgresql.repository.RoleRepository;
import com.spring.security.postgresql.repository.UserRepository;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;


@SpringBootApplication
public class SpringBootSecurityPostgresqlApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootSecurityPostgresqlApplication.class, args);
	}

	@Bean
	public CommandLineRunner demoData(RoleRepository roleRepository, UserRepository userRepository) {
		if (roleRepository.findAll().size() == 0) {
			roleRepository.saveAll(Arrays.asList(
					new Role(ERole.ROLE_ADMIN),
					new Role(ERole.ROLE_USER)
			));
		}
		return args -> {
		};
	}

}
