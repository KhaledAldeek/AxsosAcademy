public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";

        double mochaPrice = 3.5;
        double dripCoffeePrice = 2.0;
        double lattePrice = 4.5;
        double cappuccinoPrice = 4.0;

        String customer1 = "Shatha";
        String customer2 = "Ahmad";
        String customer3 = "Sali";
        String customer4 = "Adam";

        boolean isReadyOrder1 = false; // Shatha
        boolean isReadyOrder2 = true;  // Ahmad
        boolean isReadyOrder3 = false; // Sali
        boolean isReadyOrder4 = true;  // Adam

        System.out.println(generalGreeting + customer1);

        //Sali ordered a coffee
        System.out.println(generalGreeting + customer3);
        if (isReadyOrder3) {
            System.out.println(customer3 + readyMessage);
        } else {
            System.out.println(customer3 + pendingMessage);
        }

        // Ahmad ordered a cappuccino
        System.out.println("\n" + generalGreeting + customer2);
        if (isReadyOrder2) {
            System.out.println(customer2 + readyMessage);
            System.out.println(displayTotalMessage + cappuccinoPrice);
        } else {
            System.out.println(customer2 + pendingMessage);
        }

        //Sali just ordered 2 lattes
        double saliTotal = lattePrice * 2;
        System.out.println("\n" + displayTotalMessage + saliTotal);
        if (isReadyOrder3) {
            System.out.println(customer3 + readyMessage);
        } else {
            System.out.println(customer3 + pendingMessage);
        }

        //Adam was charged for a coffee but ordered a latte
        double priceDifference = lattePrice - dripCoffeePrice;
        System.out.println("\n" + customer4 + ", there was a mistake in your order.");
        System.out.println(displayTotalMessage + priceDifference + " more to make up the difference.");
    }
}
