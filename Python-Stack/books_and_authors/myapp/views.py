from django.shortcuts import render, redirect
from . import models

# Create your views here.
def index(request):
    if request.method == "POST":
        title = request.POST['title']
        desc = request.POST['description']
        models.add_book(title, desc)
        return redirect('/')
    return render(request, "books.html", context = { 'books' : models.get_all_books()})      

def view(request):
    if ('title' not in request.session) and ('id' not in request.session) and ('desc' not in request.session) :
        request.session['title'] = ""
        request.session['id'] = ""
        request.session['desc'] = ""
    if request.method == "POST":
        book_id = int(request.POST['book_view'])
        book = models.get_book(book_id)
        request.session['title'] = str(book.title)
        request.session['id'] = str(book.id)
        request.session['desc'] = str(book.desc)
        
        return redirect('/view')
    curr_title = request.session['title']
    curr_id = request.session['id']
    curr_desc = request.session['desc']
    book = models.get_book(curr_id)
    authors = book.authors.all()
    return render(request, "book_view.html", context={'title': curr_title,
                                                        'id' : curr_id,
                                                        'desc' : curr_desc,
                                                        'authors' : authors,
                                                        'book' : book,
                                                        'all_authors' : models.get_all_authors()})
    
    
def view2(request):
    if ('selected_author' not in request.session) and ('hidden_book' not in request.session):
        request.session['selected_author'] = 0
        request.session['hidden_book'] = 0
    if request.method == "POST":
        request.session['selected_author'] = request.POST['selection_author']#id is the valueeeee
        request.session['hidden_book'] = request.POST['hidden_book']#id is the valueeeee
        author = models.get_author(id = request.session['selected_author'])
        book = models.get_book(id = request.session['hidden_book'])
        models.add_author_to_book(author, book)
        return redirect('/view')
    
    
def authors(request):
    if request.method == "POST":
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        notes = request.POST['notes']
        models.add_author(first_name, last_name)
        return redirect('/authors')
    return render(request, "authors.html", context = { 'authors' : models.get_all_authors()})     


def authors_view(request):
    if (('first_name' not in request.session) and ('a_id' not in request.session) and
    ('last_name' not in request.session) and ('notes' not in request.session)) :
        request.session['first_name'] = ""
        request.session['a_id'] = ""
        request.session['last_name'] = ""
        request.session['notes'] = ""
    if request.method == "POST":
        author_id = int(request.POST['author_view'])
        author = models.get_author(author_id)
        request.session['first_name'] = str(author.first_name)
        request.session['a_id'] = str(author.id)
        request.session['last_name'] = str(author.last_name)
        request.session['notes'] = str(author.notes)
        return redirect('/authors_view')
    curr_first_name = request.session['first_name']
    curr_id = request.session['a_id']
    curr_last_name = request.session['last_name']
    curr_notes = request.session['notes']
    author = models.get_author(curr_id)
    books = author.books.all()
    return render(request, "author_view.html", context={'first_name': curr_first_name,
                                                        'a_id' : curr_id,
                                                        'last_name' : curr_last_name,
                                                        'notes' : curr_notes,
                                                        'books' : books,
                                                        'author' : author,
                                                        'all_books' : models.get_all_books()})
    
    
def author_view2(request):
    if (('selected_book' not in request.session) and ('hidden_author' not in request.session)):
        request.session['selected_book'] = 0
        request.session['hidden_author'] = 0
    if request.method == "POST":
        request.session['selected_book'] = request.POST['selection_book']#id is the valueeeee
        request.session['hidden_author'] = request.POST['hidden_author']#id is the valueeeee
        author = models.get_author(id = request.session['hidden_author'])
        book = models.get_book(id = request.session['selected_book'])
        models.add_author_to_book(author, book)
        return redirect('/authors_view')