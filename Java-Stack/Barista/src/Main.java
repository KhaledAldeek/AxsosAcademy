import java.util.HashMap;

public class Main {

    public static void main(String[] args){
        Item dripCoffee = new Item("drip coffee", 1.50);
        Item latte = new Item("latte", 4.50);
        Item capuccino = new Item("capuccino", 3.50);
        Item mocha = new Item("mocha", 2.50);

        Order order1 = new Order();
        Order order2 = new Order();

        Order order3 = new Order("Khaled");
        Order order4 = new Order("Ahmed");
        Order order5 = new Order("Ibrahim");

        order1.addItem(dripCoffee);
        order1.addItem(latte);
        order2.addItem(dripCoffee);
        order2.addItem(mocha);
        order3.addItem(capuccino);
        order3.addItem(dripCoffee);
        order4.addItem(capuccino);
        order4.addItem(latte);

        System.out.println(order1.getStatusMessage());

        order2.setReady(true);
        System.out.println(order2.getStatusMessage());

        System.out.println(order3.getStatusMessage());

        order4.setReady(true);
        System.out.println(order4.getStatusMessage());

        System.out.println("Total of your order is : $"+order1.getOrderTotal());

        System.out.println("---------------------------------------------------------");
        order1.display();
        System.out.println("---------------------------------------------------------");
        order2.display();
        System.out.println("---------------------------------------------------------");
        order3.display();
        System.out.println("---------------------------------------------------------");
        order4.display();
    }

}
