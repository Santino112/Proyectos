//Creacion basica de una clase que instancia usuarios a traves de un constructor con parametros, los cuales esperan los argumentos del main.
public class Usuario {
    String nombre;
    String apellido;
    int edad;
    String email;
    String ciudad;

    public Usuario(String nombre, String apellido, int edad, String email, String ciudad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.ciudad = ciudad;
    }

    public Usuario(String nombre, String apellido){
        this(nombre, apellido, 0, "Desconocido", "Desconocida");
    }

    public void saludar () {
        System.out.println("Hola, mi nombre es " + nombre + " " + apellido + ", tengo " + edad + ", mi email es " + email + " y soy de la ciudad de " + ciudad + ".");
    }
}
