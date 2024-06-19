from django.db import models
import datetime

class Entrega(models.Model):
    quantidade = models.IntegerField()
    tipo = models.CharField(max_length=50)
    data = models.DateTimeField()
    

    def __str__(self):
        return f"{self.tipo} - {self.quantidade} - {self.data}"

