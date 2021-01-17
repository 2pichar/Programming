import sys

args = sys.argv[1:]

class test(object):
	def __init__(self, a1, a2, a3):
		self.a1 = a1
		self.a2 = a2
		self.a3 = a3
	def __repr__(self):
		return "{" + f"a1: {self.a1}, a2: {self.a2}, a3: {self.a3}" + "}"
print(test(args[0], args[1], args[2]))