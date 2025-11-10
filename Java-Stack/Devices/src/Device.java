public class Device {
    private double battery;

    public Device(){
        this.battery = 100.0;
    }

    public void displayRemainingBatteryLife(){
        System.out.println("Battery Remaining: "+this.battery);
    }

    public double getBattery() {
        return battery;
    }

    public void setBattery(double battery) {
        this.battery = battery;
    }
}
