let list = [8, 2, 4, 7, 1, 3, 9, 6, 5];

function quickSort(list, left, right) {
    if (list.length === 0) {
        return "The List is Empty";
    } else {
        if (left === right) {
            return list;
        } else {
            let i = left - 1;
            let pivot = list[right - 1];

            for (let j = left; j < right; j++) {
                if (list[j] < pivot) {
                    i++;
                    [list[j], list[i]] = [list[i], list[j]];
                } else if (list[j] > pivot) {
                    // j will increment by 1 by default in the loop j++
                } else {
                    i++;
                    [list[i], list[right - 1]] = [list[right - 1], list[i]];
                }
            }

            quickSort(list, left, i);
            quickSort(list, i + 1, right);
        }
    }
}

quickSort(list, 0, list.length);
console.log(list);
