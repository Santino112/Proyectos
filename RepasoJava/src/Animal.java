//Clase padre que hereda sus atributos y metodos a sus clases hijas
public class Animal {
    protected String ubicacion;
    protected int añosQueViven;
    protected float tamaño;

    public Animal(String ubicacion, int añosQueViven, float tamaño){
        this.ubicacion = ubicacion;
        this.añosQueViven = añosQueViven;
        this.tamaño = tamaño;
    }

    public void DatosAnimal(){
        System.out.println("Este animal se ubica en " + ubicacion + ", vive " + añosQueViven + " años y tienen un tamaño de " + tamaño + ".");
    }

}
