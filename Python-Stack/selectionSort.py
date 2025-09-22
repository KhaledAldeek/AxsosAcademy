def selection_sort(list):
    if len(list) == 0:
        return "the List is empty"
    else:
        for i in range(len(list)):
            min = list[i]
            index_of_min = i
            for j in range(i + 1, len(list)):
                if list[j] < min:
                    min = list[j]
                    index_of_min = j

            list[i], list[index_of_min] = list[index_of_min], list[i]
        return list


print(selection_sort([5, 4, 3, 2, 1]))


