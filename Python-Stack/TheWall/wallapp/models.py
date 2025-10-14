from django.db import models
from myapp.models import User

# Create your models here.
class MessageManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['message']) < 10:
            errors['message'] = "Message Must be at least 10 characters"
        return errors
class Message(models.Model):
    message = models.TextField(1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    users = models.ForeignKey(User, related_name="messages", on_delete=models.CASCADE)
    objects = MessageManager()
    # comments
    
    
class CommentManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['comment']) < 10:
            errors['comment'] = "comment Must be at least 10 characters"
        return errors

class Comment(models.Model):
    comment = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    messages = models.ForeignKey(Message, related_name="comments", on_delete=models.CASCADE)
    users = models.ForeignKey(User, related_name="comments", on_delete=models.CASCADE)
    objects = CommentManager()


def cretae_message(message, user_id):
    user = User.objects.get(id = user_id)
    return Message.objects.create(message=message , users = user)

def create_comment(comment, user_id, message_id):
    user = User.objects.get(id=user_id)
    message = Message.objects.get(id = message_id)
    return Comment.objects.create(comment=comment, users = user, messages = message)