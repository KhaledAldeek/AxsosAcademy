from django.db import models

class CourseManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['name']) < 5:
            errors['name'] = "Name must bo at least 5 characters"
        if len(postData['description']) < 15:
            errors['description'] = "Description must bo at least 15 characters"
        return errors

class Course(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CourseManager()

def get_all_courses():
    return Course.objects.all()

def get_course(x):
    return Course.objects.get(id = x)

def add_course(name, description):
    Course.objects.create(name = name, description = description)

def delete_course(course):
    course.delete()
