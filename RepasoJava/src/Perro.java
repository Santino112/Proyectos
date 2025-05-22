//Clase hija que hereda los atributos de animal, clase padre, pero tiene sus atributos y metodos propios tambien.
public class Perro extends Animal{
    String raza;

    public Perro(String ubicacion, int añosQueViven, float tamaño, String raza){
        super(ubicacion, añosQueViven, tamaño);
        this.raza = raza;
    }

    public void info(){
        System.out.println("La raza del " + raza + " se ubica en " + ubicacion + ", vive " + añosQueViven + " años y tienen un tamaño promedio de " + tamaño + "cm.");
    }
}
