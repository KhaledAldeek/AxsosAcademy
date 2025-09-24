import unittest

def reverseList(list):
    if len(list) == 0:
        return []
    else:
        left = 0
        right = len(list) - 1
        while left < right:
            list[left], list[right] = list[right], list[left]
            left += 1
            right -= 1
    return list

def isPalindrome(str):
    if len(str) == 0:
        return False
    else:
        left = 0
        right = len(str) - 1
        while left < right:
            if str[left] != str[right]:
                return False
            left += 1
            right -= 1
    return True

def coin(amount):
    if amount == 0 or amount < 0:
        return []
    else:
        quarters = round(amount / 25)
        amount -= quarters * 25
        dimes = round(amount / 10)
        amount -= dimes * 10
        nickel = round(amount / 5)
        amount -= nickel * 5
        pennies = round(amount / 1)
        amount -= pennies * 1
        return [quarters, dimes, nickel, pennies]

def factorial(n):
    if n == 0:
        return 1
    elif n < 0:
        return 0
    else:
        return n * factorial(n - 1)

def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    elif n < 0:
        return 0
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
# print(factorial(5))
# print(reverseList([1,2,3,4,5]))

class TestReverseList(unittest.TestCase):
    pass
    def test_reverse_list(self):
        self.assertEqual(reverseList([1,2,3,4,5]), [5,4,3,2,1])

    def test_reverse_empty_list(self):
        self.assertEqual(reverseList([]), [])

    def test_reverse_list_with_empty_list(self):
        self.assertEqual(reverseList([[123,123,110],[123,123,110],[123,123,111]]), [[123,123,111],[123,123,110],[123,123,110]])

    def test_reverse_list_has_text(self):
        self.assertEqual(reverseList([1,2,'s','g',5]), [5,'g','s',2,1])

    def test_isPalindrome(self):
        self.assertEqual(isPalindrome(''), False)

    def test_isPalindrome2(self):
        self.assertTrue(isPalindrome('abba'))

    def test_isPalindrome3(self):
        self.assertFalse(isPalindrome('abbaabbsiadhiuasda'))
    def test_isPalindrome4(self):
        self.assertTrue(isPalindrome('lamayamal'))

    def test_positive_coin(self):
        self.assertEqual(coin(100), [4,0,0,0])

    def test_negative_coin(self):
        self.assertEqual(coin(-100), [])

    def test_zero(self):
        self.assertEqual(coin(0), [])

    def test_factorial(self):
        self.assertEqual(factorial(0), 1)

    def test_factorial2(self):
        self.assertEqual(factorial(-21), 0)

    def test_factorial3(self):
        self.assertEqual(factorial(5), 120)

    def test_fibonacci(self):
        self.assertEqual(fibonacci(0), 0)

    def test_fibonacci2(self):
        self.assertEqual(fibonacci(-1), 0)

    def test_fibonacci3(self):
        self.assertEqual(fibonacci(2), 1)




# if __name__ == '__main__':
#     unittest.main()





