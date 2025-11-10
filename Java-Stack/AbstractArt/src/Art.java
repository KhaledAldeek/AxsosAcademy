public abstract class Art {

    String title;
    String author;
    String description;

    public Art(String author, String description, String title) {
        this.author = author;
        this.description = description;
        this.title = title;
    }

    public abstract void viewArt();

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}