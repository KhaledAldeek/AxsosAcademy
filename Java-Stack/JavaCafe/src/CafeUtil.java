import java.util.ArrayList;
import java.util.Scanner;

public class CafeUtil {
    Scanner in = new Scanner(System.in);

        int getStreakGoal(){
            int sum = 0;
//            sum = (10*(10+1)/2);
            for(int i = 0 ; i <= 10 ; i++) {
                sum += i;
            }
            return sum;
        }

        double getOrderTotal(double [] prices){
            double sum = 0;
//   prices = [1,2,3,4,5]
//         i = 0,1,2,3,4
            for (double price : prices) {//like the for each
                sum += price;
            }
            return sum;
        }

    void displayMenu(ArrayList<String> menuItems){
        for (int i = 0 ; i < menuItems.size() ; i++){
//            System.out.printf("%d "+menuItems.get(i) +"\n", i);
////            System.out.println();
            System.out.print(i+" ");
            System.out.println(menuItems.get(i));
        }
    }

    void addCustomer(ArrayList<String> customers){
        System.out.println("Enter your name please:");
        String name = in.nextLine();
        System.out.println("Hello "+name);
        customers.add(name);
        System.out.println("There are "+ (customers.size() - 1) +" people in front of you");
        System.out.println(customers);
    }


}
