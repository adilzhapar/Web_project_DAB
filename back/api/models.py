from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=10)
    last_name = models.CharField(max_length=15)
    age = models.IntegerField()
    city = models.CharField(max_length=15, default='Almaty')
    university = models.CharField(max_length=50, default='Kazakh-British Technical University')
    faculty = models.CharField(max_length=50, default='Faculty of Information Technologies')
    year_of_enter_uni = models.IntegerField(default=2020)
    year_of_exit_uni = models.IntegerField(default=2024)
    speciality = models.CharField(max_length=30, default='Computer Systems and Software')

    def to_json(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'age': self.age,
            'city': self.city,
            'university': self.university,
            'faculty': self.faculty,
            'year_of_enter_uni': self.year_of_enter_uni,
            'year_of_exit_uni': self.year_of_exit_uni,
            'speciality': self.speciality
        }
