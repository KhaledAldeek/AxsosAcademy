import java.util.ArrayList;
import java.util.Scanner;

public class CoffeeKiosk {
    private Scanner in = new Scanner(System.in);
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public CoffeeKiosk(){
        menu = new ArrayList<>();
        orders = new ArrayList<>();
    }

    public ArrayList<Item> getMenu() {
        return menu;
    }

    public void setMenu(ArrayList<Item> menu) {
        this.menu = menu;
    }

    public ArrayList<Order> getOrders() {
        return orders;
    }

    public void setOrders(ArrayList<Order> orders) {
        this.orders = orders;
    }
    //---------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------
    public void addMenuItem(String name, double price){
        Item item = new Item(name, price);
        menu.add(item);
    }

    public void displayMenu(){
        for (int i = 0 ; i < menu.size() ; i++){
            System.out.printf(i+" "+menu.get(i).getName()+" - $"+"%.2f%n", menu.get(i).getPrice());
        }
    }


    //Check the exceptions
    public void newOrder (){
        System.out.println("Please Enter customer name for a new order:");
        String name = in.next();
        Order order = new Order(name);
        System.out.println("Please enter a menu item index or q to quit:");
        displayMenu();
        String itemNumber = in.next();
        while (!itemNumber.equals("q")){
            int index = Integer.parseInt(itemNumber);
            order.addItem(menu.get(index));
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = in.next();
        }
        System.out.println(order.toString());
        orders.add(order);
    }

    public void getOrdersList(){
        orders.forEach(System.out::println);
    }

}
