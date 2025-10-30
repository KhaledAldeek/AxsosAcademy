import java.util.ArrayList;

public class Order {
    private String name;
    private double total;
    private boolean ready;
    private ArrayList<Item> items;
//    private String

    public Order() {
        this.name = "Guest";
        this.total = 0.0;
        this.ready = false;
        this.items = new ArrayList<>();
    }

    public Order(String customerName){
        this.name = customerName;
        this.items = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public boolean isReady() {
        return ready;
    }

    public void setReady(boolean ready) {
        this.ready = ready;
    }

    public ArrayList<Item> getItems() {
        return items;
    }

    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }

    public void addItem(Item item){
        this.items.add(item);
        this.total += item.getPrice();
    }

    public String getStatusMessage(){
        if(isReady()){
            return "Your order is ready.";
        }else{
            return "Thank you for waiting. Your order will be ready soon.";
        }
    }

    public double getOrderTotal(){
        double totalAmount = 0.0;
        for(Item item : items){
            totalAmount += item.getPrice();
        }
        return totalAmount;
    }

    public void display(){
        System.out.println("Customer Name: "+getName());
        for(Item item : items){
            System.out.printf(item.getName()+" - $"+"%.2f%n", item.getPrice());
//            System.out.println(+item.getPrice());
        }
    }

    @Override
    public String toString() {
        return "Order{" +
                "name='" + name + '\'' +
                ", total=" + total +
                ", ready=" + ready +
                ", items=" + items +
                '}';
    }
}
