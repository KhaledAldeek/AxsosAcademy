public class Main {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();
        calculator.setOperandOne(10.5);
        calculator.setOperandTwo(9.5);
        calculator.setOperation('+');
        calculator.performOperation();
        System.out.println(calculator.getResult());
        System.out.println("--------------------------------------");


    }
}
