package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.AritmetickiIzraz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AritmetickiIzrazRepository extends JpaRepository<AritmetickiIzraz, Long> {

}
