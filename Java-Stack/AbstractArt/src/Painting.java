public class Painting extends Art{

    private String paintType;

    public Painting(String author, String description, String title, String paintType) {
        super(author, description, title);
        this.paintType = paintType;
    }

    @Override
    public void viewArt() {
        System.out.println("Painting Title: " + getTitle());
        System.out.println("Author: " + getAuthor());
        System.out.println("Description: " + getDescription());
        System.out.println("Paint Type: " + paintType);
    }

    public String getPaintType() {
        return paintType;
    }

    public void setPaintType(String paintType) {
        this.paintType = paintType;
    }
}
