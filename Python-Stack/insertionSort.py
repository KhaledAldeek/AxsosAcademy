
def insertion_sort(list):
    for i in range(1, len(list)):
        to_swap = list[i]
        j = i - 1
        while j >= 0 and to_swap < list[j]:
            list[j + 1] = list[j]
            j -= 1
            list[j + 1] = to_swap
    return list;

print(insertion_sort([5, 4, 3, 2, 1,6,3,4,7,8,9,2,4,6,7]))\


