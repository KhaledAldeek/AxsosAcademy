from DVD import DVD
from Book import Book
from Magazine import Magazine
from library_system import Library

library = Library('Khaled')
book1 = Book("1984", "George Orwell", 10, 1949, "ISBN001", 328, "Dystopian classic")
book2 = Book("To Kill a Mockingbird", "Harper Lee", 12, 1960, "ISBN002", 281, "Civil rights & justice")
book3 = Book("The Great Gatsby", "F. Scott Fitzgerald", 11, 1925, "ISBN003", 180, "American dream")
book4 = Book("Moby Dick", "Herman Melville", 15, 1851, "ISBN004", 635, "Whale hunting adventure")
book5 = Book("Pride and Prejudice", "Jane Austen", 9, 1813, "ISBN005", 279, "Romantic classic")
book6 = Book("The Hobbit", "J.R.R. Tolkien", 14, 1937, "ISBN006", 310, "Fantasy adventure")
book7 = Book("War and Peace", "Leo Tolstoy", 20, 1869, "ISBN007", 1225, "Historical epic")
book8 = Book("Crime and Punishment", "Fyodor Dostoevsky", 13, 1866, "ISBN008", 671, "Psychological thriller")
book9 = Book("The Catcher in the Rye", "J.D. Salinger", 10, 1951, "ISBN009", 277, "Teen angst")
book10 = Book("Brave New World", "Aldous Huxley", 12, 1932, "ISBN010", 311, "Dystopian future")

library.add_item(book1)
library.add_item(book2)
library.add_item(book3)
library.add_item(book4)
library.add_item(book5)
library.add_item(book6)
library.add_item(book7)
library.add_item(book8)
library.add_item(book9)
library.add_item(book10)


dvd1 = DVD("Inception", "Christopher Nolan", 15, 2010, "PG-13", "Christopher Nolan")
dvd2 = DVD("The Matrix", "Wachowski Sisters", 12, 1999, "R", "Lana Wachowski")
dvd3 = DVD("The Godfather", "Mario Puzo", 18, 1972, "R", "Francis Ford Coppola")
dvd4 = DVD("The Dark Knight", "Christopher Nolan", 16, 2008, "PG-13", "Christopher Nolan")
dvd5 = DVD("Pulp Fiction", "Quentin Tarantino", 14, 1994, "R", "Quentin Tarantino")
dvd6 = DVD("Forrest Gump", "Winston Groom", 13, 1994, "PG-13", "Robert Zemeckis")
dvd7 = DVD("Fight Club", "Chuck Palahniuk", 12, 1999, "R", "David Fincher")
dvd8 = DVD("Interstellar", "Jonathan Nolan", 17, 2014, "PG-13", "Christopher Nolan")
dvd9 = DVD("Gladiator", "David Franzoni", 15, 2000, "R", "Ridley Scott")
dvd10 = DVD("The Shawshank Redemption", "Stephen King", 14, 1994, "R", "Frank Darabont")

library.add_item(dvd1)
library.add_item(dvd2)
library.add_item(dvd3)
library.add_item(dvd4)
library.add_item(dvd5)
library.add_item(dvd6)
library.add_item(dvd7)
library.add_item(dvd8)
library.add_item(dvd9)
library.add_item(dvd10)

magazine1 = Magazine("National Geographic", "Various", 5, 2021, "NatGeo", "ISSN001", 120)
magazine2 = Magazine("TIME", "Various", 6, 2022, "Time Inc.", "ISSN002", 90)
magazine3 = Magazine("Scientific American", "Various", 7, 2023, "Springer Nature", "ISSN003", 110)
magazine4 = Magazine("Forbes", "Various", 6, 2022, "Forbes Media", "ISSN004", 85)
magazine5 = Magazine("The Economist", "Various", 7, 2023, "The Economist Group", "ISSN005", 95)
magazine6 = Magazine("Wired", "Various", 6, 2021, "Condé Nast", "ISSN006", 100)
magazine7 = Magazine("Vogue", "Various", 8, 2022, "Condé Nast", "ISSN007", 130)
magazine8 = Magazine("Sports Illustrated", "Various", 5, 2021, "Maven", "ISSN008", 115)
magazine9 = Magazine("Popular Science", "Various", 6, 2020, "Bonnier", "ISSN009", 105)
magazine10 = Magazine("National Geographic Kids", "Various", 4, 2023, "NatGeo", "ISSN010", 70)

library.add_item(magazine1)
library.add_item(magazine2)
library.add_item(magazine3)
library.add_item(magazine4)
library.add_item(magazine5)
library.add_item(magazine6)
library.add_item(magazine7)
library.add_item(magazine8)
library.add_item(magazine9)
library.add_item(magazine10)

library.display_items()


book1.borrow()
print(book1.is_available)





