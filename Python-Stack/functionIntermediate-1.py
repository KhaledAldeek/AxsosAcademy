import random

def randInt(min = 0 , max = 100):
    return random.randint(min,max)

print(randInt())
print(randInt(min = 90))
print(randInt(max = 10))
print(randInt(10,20))

def rand():
    num = random.random() * 50 + 10 # from 10 - 60
    return round(num)

print(rand())




