package app.demo.student;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;


@Service //same as @Component
public class StudentService {


    public List<Student> getStudents(){
        return List.of(
                new Student(
                        1L,
                        "Mariam",
                        "mar@gmail.com",
                        LocalDate.of(2000, Month.JANUARY,5)
                ),
                new Student(
                        2L,
                        "Alex",
                        "alex@gmail.com",
                        LocalDate.of(2005, Month.MAY,1)
                )
        );
        }

    public void addNewStudent(Student student) {
        System.out.println("Adding new student over POST:");
        System.out.println(student);

    }

    public void deleteStudent(Long id) {
        System.out.println("Deliting student with id: " + id);

    }

    public void updateStudent(Long studentId, String name, String email) {
        System.out.println("Updating student with id: " + studentId);
    }
}
