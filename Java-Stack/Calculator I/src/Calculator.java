public class Calculator {
    private double operandOne = 0;
    private double operandTwo = 0;
    private char operation = '+';
    private double result = 0;



    public void performOperation(){
        if(getOperation() == '+'){
            System.out.println("operandOne = "+getOperandOne());
            System.out.println("operandTwo = "+getOperandTwo());
            setResult(getOperandOne() + getOperandTwo());
            return;
        }
        setResult(getOperandOne() - getOperandTwo());
    }



    public double getOperandOne() {
        return operandOne;
    }

    public void setOperandOne(double operandOne) {
        this.operandOne = operandOne;
    }

    public double getOperandTwo() {
        return operandTwo;
    }

    public void setOperandTwo(double operandTwo) {
        this.operandTwo = operandTwo;
    }

    public char getOperation() {
        return operation;
    }

    public void setOperation(char operation) {
        this.operation = operation;
    }

    public double getResult() {
        return result;
    }

    public void setResult(double result) {
        this.result = result;
    }


}
