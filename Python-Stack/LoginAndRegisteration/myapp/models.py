from django.db import models
import re
# Create your models here.
class UserManager(models.Manager):
    def basic_validator(self, postData, type):
        errors = {}
        email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if type == 'register':
            if len(postData['first_name']) < 2:
                errors['first_name'] = "First Name must be at least 2 characters"
            if len(postData['last_name']) < 2:
                errors['last_name'] = "Last Name must be at least 2 characters"
            if len(postData['email']) == 0:
                errors['email'] = "Please Fill the email"
            elif not re.match(email_pattern, postData['email']):
                errors['email'] = "Email must be valid"
            elif User.objects.filter(email = postData['email']).exists():
                errors['email'] = "Email already registered"
            if len(postData['password']) < 8 or len(postData['password_confirmation']) < 8:
                errors['password_length'] = "Password must be at least 8 characters"
            elif postData['password'] != postData['password_confirmation']:
                errors['password'] = "Password is not repeated successfully"
        
        else:
            if len(postData['email']) == 0:
                errors['email'] = "Please Fill the email"
            elif not re.match(email_pattern, postData['email']):
                errors['email'] = "Email must be valid"
            if len(postData['password']) < 8:
                errors['password_length'] = "Password must be at least 8 characters"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    email = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

def create_user(first_name, last_name, email, password):
    return User.objects.create(first_name=first_name, last_name=last_name, email=email, password=password)

def get_user_by_email(email):
    print(User.objects.all())
    print(User.objects.filter(email=email))
    if email !=  User.objects.filter(email=email)[0].email:
        print("batata")
        return None
    return User.objects.filter(email=email)[0]

