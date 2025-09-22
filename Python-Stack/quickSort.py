import sys

list = [8,2,4,7,1,3,9,6,5]
def quickSort(list, left, right):
    if list == []:
        return "The List is Empty"
    else:
        if left == right:
            return list
        else:
            i = left - 1
            pivot = list[right-1]
            for j in range(left, right):
                if list[j] < pivot:
                    i = i + 1
                    list[j], list[i] = list[i], list[j] # swapping
                    j += 1
                elif list[j] > pivot:
                    j = j + 1
                else:
                    i = i + 1
                    list[i], list[right-1] = list[right-1], list[i] # swapping
            quickSort(list, left, i)
            quickSort(list, i+1, right)

quickSort(list, 0, len(list))
print(list)




