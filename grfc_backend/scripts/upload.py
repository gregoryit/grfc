from csv import DictReader
from users.models import Subdivision, Position

with open('scripts/subdivisions.csv') as f:
    dict_reader = DictReader(f)
    l = list(dict_reader)
    for row in l:
        par = row['parent']
        del row['parent']
        s = Subdivision(**row)
        if par:
            par_o = Subdivision.objects.get(pk=par)
            s.parent = par_o
        s.save()

with open('scripts/position.csv', 'r', encoding='utf-8-sig') as f:
    dict_reader = DictReader(f)
    l = list(dict_reader)
    for row in l:
        p = Position(**row)
        p.save()
