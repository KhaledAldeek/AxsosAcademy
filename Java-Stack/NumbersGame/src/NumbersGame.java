import java.util.Random;
import java.util.Scanner;

public class NumbersGame {
    static Scanner in = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Hello, human. I am thinking of a number between 0 and 10.");
        System.out.println("*********************************************************");
        System.out.println("You have 3 attempts per game. Type 'q' anytime to quit.");

        while (true) {
            int answer = new Random().nextInt(11);
            int attempts = 0;

            while (attempts < 3) {
                System.out.print("Enter your guess: ");
                String guessedNumber = in.next();

                if (guessedNumber.equalsIgnoreCase("q")) {
                    System.out.println("I knew you didn't have it in you.");
                    System.out.println("Shutting down...");
                    return;
                }

                int guess;
                try {
                    guess = Integer.parseInt(guessedNumber);
                } catch (NumberFormatException e) {
                    System.out.println("That's not a valid number! Try again.");
                    continue;
                }

                if (guess < 0 || guess > 10) {
                    System.out.println("Your guess must be between 0 and 10. Try again.");
                    continue;
                }

                attempts++;

                if (guess == answer) {
                    System.out.println("Lucky guess! You got it!");
                    break;
                } else if (attempts < 3) {
                    System.out.println("Wrong guess! Try again. (" + (3 - attempts) + " attempts left)");
                } else {
                    System.out.println("Ran out of attempts, The correct number is " + answer + ".");
                }
            }

            System.out.print("Would you like to play again? (yes/no): ");
            String response = in.next();
            while (!response.equals("yes") && !response.equals("no")) {
                System.out.print("Invalid input. Please type 'yes' or 'no': ");
                response = in.next();
            }
            if (response.equals("no")) {
                System.out.println("Thanks for playing! Goodbye!");
                break;
            }
            System.out.println("---------------------------------------------------------");
            System.out.println("New round! I’m thinking of another number between 0 and 10...");
        }

        System.out.println("Game over. Shutting down...");
    }
}
