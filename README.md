Create a recursive function `fibo` that returns n'th element of Fibonacci sequence.

---

fibo(0) = 0

fibo(1) = 1

fibo(n) = fibo(n-1) + fibo(n-2)

Example:
fibo(4) = fibo(3) + fibo(2)

---

Replace fibo(x) call with their respective values :

fibo(4) = (fibo(2) + fibo(1)) + (fibo(1) + fibo(0))

fibo(4) = ((fibo(1) + fibo(0)) + 1) + (1 + 0)

fibo(4) = ((1 + 0) + 1) + (1 + 0)

fibo(4) = 3

---

This function must be recursive: you can't use a loop.
