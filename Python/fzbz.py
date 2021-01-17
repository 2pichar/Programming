def fzbz(max):
	for i in range(1, max + 1):
		if i % 15 == 0:
			n = "fzbz"
		elif i % 3 == 0:
			n = "fz"
		elif i % 5 == 0:
			n = "bz"
		else:
			n = i
		print(f"{i}: {n}")
fzbz(30)