import unittest

class MathDojo:
    def __init__(self):
        self.result = 0

    def add(self, num, *nums):
        self.result += num
        for num in nums:
            self.result += num
        return self
    def subtract(self, num, *nums):
        self.result -= num
        for num in nums:
            self.result -= num
        return self




md = MathDojo()
class TestMathDojo(unittest.TestCase):
    def test_add(self):
        md2 = MathDojo()
        self.assertEqual(md2.add(2).result,2)

    def test_subtract(self):
        md3 = MathDojo()
        self.assertEqual(md3.subtract(2, 2).result,-4)


    def test_add2(self):
        md3 = MathDojo()
        self.assertEqual(md3.add(2).result,2)

    def test_both(self):
        md = MathDojo()
        self.assertEqual(md.add(2).add(2, 5, 1).subtract(3, 2).result,5)

if __name__ == '__main__':
    unittest.main()