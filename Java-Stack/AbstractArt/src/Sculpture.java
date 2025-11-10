public class Sculpture extends Art{

    private String material;

    public Sculpture(String author, String description, String title, String material) {
        super(author, description, title);
        this.material = material;
    }

    @Override
    public void viewArt() {
        System.out.println("Sculpture Title: " + getTitle());
        System.out.println("Author: " + this.getAuthor());
        System.out.println("Description: " + getDescription());
        System.out.println("Material: " + material);
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }
}
