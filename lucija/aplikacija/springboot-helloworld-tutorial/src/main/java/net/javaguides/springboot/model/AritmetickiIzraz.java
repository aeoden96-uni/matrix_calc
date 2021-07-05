package net.javaguides.springboot.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "aritmetickiIzraz")
public class AritmetickiIzraz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "izraz_upit")
    private String izrazUpit;

    @Column(name = "izraz_rezultat")
    private String izrazRezultat;

    public long getId() {
        return id;
    }

    public String getIzrazUpit() {
        return izrazUpit;
    }

    public String getIzrazRezultat() {
        return izrazRezultat;
    }

    public void setIzrazUpit(String izrazUpit) {
        this.izrazUpit = izrazUpit;
    }
}
