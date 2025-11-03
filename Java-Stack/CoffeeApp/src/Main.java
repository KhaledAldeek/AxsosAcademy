public class Main {
    public static void main(String[] args){
        CoffeeKiosk ck = new CoffeeKiosk();
        ck.addMenuItem("moz", 10.5);
        ck.addMenuItem("Battekh", 10.5);
        ck.addMenuItem("Bortoqal", 10.5);


        ck.displayMenu();
        ck.newOrder();
        ck.getOrdersList();
    }
}
