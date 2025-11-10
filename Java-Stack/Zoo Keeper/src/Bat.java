public class Bat extends Mammal{

    public Bat(){
        super();
        this.setEnergy(300);
    }

    public void fly(){
        this.setEnergy(this.getEnergy() - 50.0);
        System.out.println("the bat is now airborne");
        if(this.getEnergy() < 0.0){
            this.setEnergy(0.0);
        }
    }

    public void eatHumans(){
        this.setEnergy(this.getEnergy()+25.0);
        if(this.getEnergy() > 100.0){
            this.setEnergy(100.0);
        }
        if(this.getEnergy() > 50){
            System.out.println("The Bat is happy");
        }else{
            System.out.println("The Bat is not happy");
        }
    }

    public void attackTown(){
        this.setEnergy(0.0);
        System.out.println("the bat's attack.");
    }
}
