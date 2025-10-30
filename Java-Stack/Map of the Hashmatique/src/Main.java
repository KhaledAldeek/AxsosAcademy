import java.util.HashMap;

public class Main {
    public static void main(String[] args){
        HashMap<String, String> trackList = new HashMap<>();
        trackList.put("A Sky Full of Stars", "Cause you're a sky, full of stars, I'm gonna give you my heart...");
        trackList.put("Believer", "First things first, I'ma say all the words inside my head...");
        trackList.put("Counting Stars", "Lately I've been, I've been losing sleep, dreaming about the things that we could be...");
        trackList.put("Demons", "When the days are cold and the cards all fold, and the saints we see are all made of gold...");

        System.out.println(trackList.get("Believer"));

        trackList.forEach((key, value) ->{
            System.out.println("'"+key+" : "+value+"'");
        });
    }
}
