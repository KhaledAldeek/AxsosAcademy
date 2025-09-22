def count_down(num):
    list = []
    while num >= 0:
        list.append(num)
        num -= 1
    return list

print(count_down(5))

def print_and_return(list):
    print(list[0])
    return list[1]

print(print_and_return([1,2]))

def first_plus_length(list):
    return list[0] + len(list)

print(first_plus_length([1,2,4,3,6]))


def values_greater_than_second(list):
    new_list = []
    if len(list) < 2:
        return False
    else:
        counter = 0
        for i in range(len(list)):
            if list[i] > list[1]:
                new_list.append(list[i])
                counter += 1
        print(counter)
    return new_list

print(values_greater_than_second([5,2,3,2,1,4]))
print(values_greater_than_second([3]))


def length_and_value(size, value):
    if size < 1:
        return False
    else:
        list = []
        for i in range(size):
            list.append(value)
        return list

print(length_and_value(4,7))
print(length_and_value(6,2))
