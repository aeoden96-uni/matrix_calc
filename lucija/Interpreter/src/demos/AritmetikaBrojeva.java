package demos;

import jep.Jep;
import jep.JepException;

public class AritmetikaBrojeva {

    public static void main(String[] args) throws JepException {
        Jep jep = new Jep(false,"/home/lucija/IdeaProjects/Interpreter/src/python_scripts");
        jep.set("ulaz", "3+4*5.23");
        jep.runScript("src/python_scripts/aritmetikaBrojeva.py");
        String java_string = jep.getValue("s").toString();
        System.out.println("Java String:" + java_string);
    }
}
