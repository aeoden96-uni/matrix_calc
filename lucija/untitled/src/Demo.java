
import jep.Jep;
import jep.JepException;

import java.io.IOException;

public class Demo {

    public static void main(String[] args) throws JepException, IOException {
        /*System.out.println("Hello");
        System.out.println("Hello again");

        try (Interpreter interp = new SharedInterpreter()) {
            interp.exec("from java.lang import System");
            interp.exec("s = 'Hello World'");
            interp.exec("System.out.println(s)");
            interp.exec("print(s)");
            interp.exec("print(s[1:-1])");
        }*/


       /* jep.eval("import sys");
        jep.eval("s = 'Hello World'");
        jep.eval("print(s)");
        String java_string = jep.getValue("s").toString();
        System.out.println("Java String:" + java_string);*/
 //------------------------------------------------------------------------------------
        //RADI
  /*      Jep jep = new Jep();
        jep.set("arg1", "lucija");
        jep.runScript("src/test.py");
        String java_string = jep.getValue("s").toString();
        System.out.println("Java String:" + java_string);
*/
///-------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------
       //RADI
        /*String pathPython = "src/myscript.py";
        String [] cmd = new String[4];
        cmd[0] = "python3";
        cmd[1] = pathPython;
        cmd[2] = "3";
        cmd[3] = "2";
        Runtime r = Runtime.getRuntime();

        Process p = r.exec(cmd);
        BufferedReader in = new BufferedReader(new InputStreamReader(p.getInputStream()));
        String s = in.readLine();
        while(s != null){
            System.out.println(s);
            s = in.readLine();
        }*/

//---------------------------------------------------------------------------------------------
       //RADI
        Jep jep = new Jep(false,"/home/lucija/IdeaProjects/untitled/src");
        jep.set("ulaz", "3+4*5.23");
        jep.runScript("src/aritmetikaBrojeva.py");
        String java_string = jep.getValue("s").toString();
        System.out.println("Java String:" + java_string);
    }
}
