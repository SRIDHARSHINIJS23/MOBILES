package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Gadgets;
@EnableJpaRepositories
@Repository
public interface GadgetsRepository extends JpaRepository<Gadgets,Integer> {

}
