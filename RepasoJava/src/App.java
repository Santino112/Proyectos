import java.lang.reflect.Array;
import java.text.NumberFormat;
import java.util.Arrays;
import java.util.Locale;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        // Variables y tipos de datos
        /*
         * byte edad = 22;
         * int numeroGrande = 1000;
         * float tiempoCumpleaños = 8.5f;
         * //Forma de printear en general
         * System.out.println("Mi edad es de: " + edad);
         * System.out.println("Voy a vivir " + numeroGrande);
         * System.out.println("Falta para mi cumpleaños " + tiempoCumpleaños +
         * " meses.");
         * String text = "Hola Hola Hola Hola a todos yo soy el leona";
         * //Metodos de strings
         * System.out.println("La cantidad de caracteres en text son: " +
         * text.length());
         * String textoNuevo = text.replace("Hola", "Holas");
         * System.out.println(textoNuevo);
         * //Arrays y sus metodos
         * int[] numeros = {0, 1, 2, 3, 4};
         * numeros[0] = 5;
         * numeros[4] = 7;
         * System.out.println(Arrays.toString(numeros));
         * Arrays.sort(numeros);
         * System.out.println(Arrays.toString(numeros ));
         * //Variables constantes que no se pueden cambiar
         * final String empresa = "Hola empresa";
         * final int numero = 5;
         * System.out.println(empresa + numero);
         * //Operaciones aritmetricas
         * int s = 2 + 2;
         * int r = 2 - 2;
         * int m = 2 * 2;
         * int p = 2 % 2;
         * float a = 10f / 3f;
         * System.out.println(a);
         * int x = 5;
         * x *= 5;
         * System.out.println(x);
         * 
         * Ejercicio con scanner
         * Scanner scanner = new Scanner(System.in);
         * System.out.
         * println("Crea una calculadora que reciba 2 numeros y luego imprima el resultado de la suma de estos 2 numeros"
         * );
         * System.out.println("Ingrese un número");
         * byte numero1 = scanner.nextByte();
         * System.out.println("Ingrese otro número");
         * byte numero2 = scanner.nextByte();
         * byte suma = (byte) (numero1 + numero2);
         * System.out.println("El resultado de la suma de estos 2 numeros es: " + suma);
         * int edad = 17;
         * String movieClassification = "R18";
         * 
         * boolean isRestricted = movieClassification.contains("R");
         * 
         * if (edad >= 18 && isRestricted) {
         * System.out.println("Puede ver la pelicula");
         * } else {
         * System.out.println("No puede ver la pelicula");
         * 
         * Chequear si un numero es par o impar
         * Scanner scanner = new Scanner(System.in);
         * System.out.println("Ingrese un numero");
         * int numero = scanner.nextInt();
         * String resultado = numero % 2 == 0 ? "Es par" : "Es impar";
         * System.out.println(resultado);
         * 
         * String[] textos = {"Hola mundo", "Usuario 1", "Chanchito feliz"};
         * for (int i = 0; i < textos.length; i++) {
         * System.out.println(textos[i]);
         * };
         
        //Clase normal
        Usuario usuario1 = new Usuario("Santino", "Scampone", 22, "santinoscampone1@gmail.com", "Villa Maria");
        usuario1.saludar();
        
        //Clase por herencia
        Perro perro = new Perro("Todo el mundo", 15, 20.6f, "Perro" );
        perro.DatosAnimal();
        perro.info();

        //Polimorfismo por sobrecarga de metodos
        Operaciones calculo = new Operaciones();
        int resultado = calculo.sumar(5,5);
        System.out.println("La suma del calculo1 es: " + resultado);

        Operaciones calculo2 = new Operaciones();
        int resultado2 = calculo2.sumar(10, 20, 5, 2);
        System.out.println("La suma del calculo2 es: " + resultado2);

        Operaciones calculo3 = new Operaciones();
        double resultado3 = calculo3.sumar(3.554, 3.6545); 
        System.out.println("La suma del calculo3 es: " + resultado3);
        */

        //Arrays
        int[] myArray = new int[5];
        int[] otroArray = new int[5];
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese los numeros en el array");

        for (int i = 0; i < myArray.length; i++){
             myArray[i] = scanner.nextInt();
            System.out.println("El numero " + myArray[i] + " a sido ingresado en la posición " + i);
        }
        System.out.println("Finalizado, el array tiene el siguiente contenido: " + Arrays.toString(myArray));
        Arrays.sort(myArray);
        Arrays.fill(otroArray, 5);
        int indiceNumero = Arrays.binarySearch(myArray, 10);
        System.out.println("El numero 10 esta en la posicion " + indiceNumero);
        System.out.println(Arrays.toString(myArray));
        System.out.println(Arrays.toString(otroArray));

    }

}
