import java.util.Arrays;
import java.util.Random;
public class Main {
    static Random random = new Random();

    public static void main(String [] args){
        System.out.println(Arrays.toString(getTenRolls()));
        System.out.println(getRandomLetter());
        System.out.println(generatePassword());
        System.out.println(Arrays.toString(getNewPasswordSet(10)));

    }

    public static int [] getTenRolls(){
        int [] arr = new int[10];
        for (int i = 0 ; i < arr.length ; i++){
            arr[i] = random.nextInt(20)+1;
        }
        return arr;
    }

    public static char getRandomLetter(){
        char[] letters = {
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        };
        int index = random.nextInt(25);
        return letters[index];
    }

    public static String generatePassword(){
        String password = "";
        for(int i = 0 ; i < 8 ; i++){
            password += getRandomLetter();
        }
        return password;
    }

    public static String [] getNewPasswordSet(int length){
        String [] arr = new String[length];
        for (int i = 0 ; i < length ; i++){
            arr[i] = generatePassword();
        }
        return arr;
    }

}
