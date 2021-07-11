package app.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(path="api/")
public class StudentController {

    private final StudentService studentService;

    @PostMapping("login")
    public boolean login(@RequestBody Student student){



        System.out.println("login");
        System.out.println(student);

        if(student.getEmail().equals("a@a.com"))
            return true;
        return false;
    }

    @PostMapping("lexString")
    public String lexString(@RequestBody String expression){

        System.out.println(expression);

        return "success";

    }

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("users")
    public List<Student> getStudents(){

        return studentService.getStudents();
    }




    @PostMapping("users")
    public void registerNewStudent(@RequestBody Student student){
        studentService.addNewStudent(student);
    }
    @DeleteMapping(path= "{studentId}")
    public void deleteStudent(@PathVariable("studentId") Long id){
        studentService.deleteStudent(id);
    }
    @PutMapping(path="{studentId}")
    public void updateStudent(
            @PathVariable("studentId")Long studentId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String email)
    {
        studentService.updateStudent(studentId,name,email);
    }

}
