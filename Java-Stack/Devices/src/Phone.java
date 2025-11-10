public class Phone extends Device{

    public Phone(){
        super();
    }

    public void makeCall(){
        this.setBattery(this.getBattery()-5.0);
        System.out.println("you made a call");
    }
    public void playGame(){
        this.setBattery(this.getBattery()-20.0);
        System.out.println("You played a game");
    }
    public void charge(){
        if (!(this.getBattery() + 50.0 > 100.0)) {
            this.setBattery(this.getBattery() + 50.0);
        } else {
            this.setBattery(100.0);
        }
        System.out.println("you charged you phone");
    }
}
