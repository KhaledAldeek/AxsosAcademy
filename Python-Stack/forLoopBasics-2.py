def biggie_size(list):
    for num in range(len(list)):
        if list[num] > 0:
            list[num] = 'big'
    return list

print(biggie_size([-1, 3, 5, -5]))


def count_positives(list):
    count = 0
    for num in range(len(list)):
        if list[num] > 0:
            count += 1
    list[len(list)-1] = count
    return list

print(count_positives([-1,1,1,1]))

def sum_total(list):
    total = 0
    for num in range(len(list)):
        total += list[num]
    return total

print(sum_total([1,2,3,4]))


def average(list):
    total = 0
    for num in range(len(list)):
        total += list[num]
    return total/len(list)

print(average([1,2,3,4]))

def length(list):
    return len(list)

print(length([]))
print(length([1,2,3,4]))


def minimum(list):
    if list == []:
        return False
    else:
        return min(list)
print(minimum([]))

def maximum(list):
    if list == []:
        return False
    else:
        return max(list)

print(maximum([]))

def ultimate_analysis(list):
    my_dict = {}
    my_dict['sum_total'] = sum_total(list)
    my_dict['average'] = average(list)
    my_dict['minimum'] = minimum(list)
    my_dict['maximum'] = maximum(list)
    my_dict['length'] = length(list)
    return my_dict

print(ultimate_analysis([37,2,1,-9]))


def reverse(list):
    l = 0
    r = len(list) - 1
    while l < r:
        list[l], list[r] = list[r], list[l]
        l += 1
        r -= 1
    return list
print(reverse([1,2,3,4,5,6,7,8,9]))