import java.util.ArrayList;
import java.util.Collections;

public class Museum {



    public static void main(String[] args) {
        Painting p1 = new Painting("Leonardo da Vinci", "A portrait of a woman with a mysterious smile.", "Mona Lisa", "Oil");
        Painting p2 = new Painting("Vincent van Gogh", "A painting of a night sky filled with swirling clouds and stars.", "Starry Night", "Oil");
        Painting p3 = new Painting("Claude Monet", "A landscape capturing the beauty of water lilies on a pond.", "Water Lilies", "Acrylic");

        Sculpture s1 = new Sculpture("Michelangelo", "A marble statue of the Biblical hero David.", "David", "Marble");
        Sculpture s2 = new Sculpture("Auguste Rodin", "A bronze sculpture representing deep thought.", "The Thinker", "Bronze");

        ArrayList<Art> museum = new ArrayList<>();
        museum.add(p1);
        museum.add(p2);
        museum.add(p3);
        museum.add(s1);
        museum.add(s2);
        Collections.shuffle(museum);
        for (Art art : museum) {
            art.viewArt();
            System.out.println("-----------------------------");
        }
    }
}
