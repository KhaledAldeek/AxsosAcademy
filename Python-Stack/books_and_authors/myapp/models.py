from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=30)
    desc = models.TextField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Author(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    books = models.ManyToManyField(Book, related_name="authors")
    notes = models.TextField(max_length=30)
    

def add_book(title, desc):
    Book.objects.create(title = title ,desc = desc)

def get_book(id):
    return Book.objects.get(id = id)

def get_all_books():
    return Book.objects.all()

def add_author(first_name, last_name, notes="No notes yet"):
    Author.objects.create(first_name = first_name, last_name = last_name, notes = notes)
    
def get_author(id):
    return Author.objects.get(id = id)

def get_all_authors():
    return Author.objects.all()

def add_author_to_book(author, book):
    author.books.add(book)