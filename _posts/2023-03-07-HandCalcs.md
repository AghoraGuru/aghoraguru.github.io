---
layout: post
title: HandCalcs
feature-img: "assets/img/Handcalcs/code.png"

---
<h1 align="center">Handcalcs: The Ultimate Tool for Simplifying Your Jupyter Notebooks</h1>

Have you become weary of composing intricate equations in LaTeX within your Jupyter notebooks? Do you wish there was a less complicated way to clearly and concisely communicate your calculations and formulae? You are in luck if so! With the help of the robust Python module Handcalcs, you can speed up your computations and improve the appearance of your Jupyter notebooks. In this blog post, we'll look at the advantages of utilising Handcalcs and how it can help you complete data analysis jobs faster and with less effort. So let's get started and learn how Handcalcs can make your life as a data scientist easier!
### First Things First: What is Handcalcs?
Handcalcs is a library to render Python calculation code automatically in Latex, but in a manner that mimics how one might format their calculation if it were written with a pencil: write the symbolic formula, followed by numeric substitutions, and then the result.

Because handcalcs shows the numeric substitution, the calculations become significantly easier to check and verify by hand.

PS : Copied from [here](https://github.com/connorferster/handcalcs#readme) 😅

### Installaion
```bash
pip install handcalcs
```
### Importing Handcalcs
```py
from handcalcs import handcalc
```
### How it Works?
In order to extract the math expressions from the input and analyse the Python code, Handcalcs first employs a parser. The SymPy library, a Python library for symbolic mathematics, serves as the foundation for this parser.

The retrieved mathematical expressions are then transformed by Handcalcs into SymPy expressions, which are symbolic expressions that represent mathematical formulas in a format that is simple to use and understand.

Handcalcs applies a set of formatting guidelines to transform the math expressions from SymPy expressions into LaTeX style. These guidelines include arranging the equations for easier reading, providing annotations, units, and variable descriptions, as well as formatting the math expressions using LaTeX syntax.
The prepared equations are then displayed in a LaTeX output that Handcalcs produces. The package includes built-in LaTeX rendering capabilities that may be used to show this output in a Jupyter notebook or copy it and paste it into a LaTeX document.

<img align="center" src="/assets/img/Handcalcs/step1.png" style="zoom:100%;" alt="step1" />

### How to Use Handcalcs?

### Default Render
```py
import handcalcs.render
from math import sqrt
```
```py
%%render
a = 1
b = -31/3
c = 3
```
<img align="center" src="/assets/img/Handcalcs/out1._1.png">

### Symbolic Render

```py
%%render symbolic
x_pos = -b + sqrt(b**2 - 4*a*c) / (2*a) -b + sqrt(b**2 - 4*a*c)/(2*a)
```
This will give only the symbolic output without values

<img align="center" src="/assets/img/Handcalcs/out2.png">

### Truncating Output

We can also add Override tags which will truncate the output which visually looks small like this:
```py
%%render params
a = 1
b = -31/3
c = 3
```
<img align="center" src="/assets/img/Handcalcs/out4.png">

```py
%%render params 6 
a = 1
b = -31/3
c = 3
```
This will truncate the output 

<img align="center" src="/assets/img/Handcalcs/out1.png">


```py
%%render 
# matrix calulations
A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
B = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
C = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
#adding matrices
X = [[A[i][j] + B[i][j] for j in range(len(A[0]))] for i in range(len(A))]
#multiplying matrices
Y = [[sum(a*b for a,b in zip(A_row,B_col)) for B_col in zip(*B)] for A_row in A]
```py
<img align="center" src="/assets/img/Handcalcs/out3.png">


We can force a render to be long(rendering in a multiple line) or short(rendering in a single line) by using the following tags:
```py
%%render long
x_pos = -b + sqrt(b**2 - 4*a*c) / (2*a) -b + sqrt(b**2 - 4*a*c)/(2*a)
```

<img align="center" src="/assets/img/Handcalcs/output5.png">

```py
%%render short
x_pos = -b + sqrt(b**2 - 4*a*c) / (2*a) -b + sqrt(b**2 - 4*a*c)/(2*a)
```
<img align="center" src="/assets/img/Handcalcs/output6.png">

### LATEX Render

We can also get the LATEX equivalent of the output by using the following tag:
```py
%%tex
x_pos = -b + sqrt(b**2 - 4*a*c) / (2*a) -b + sqrt(b**2 - 4*a*c)/(2*a)
```
<img align="center" src="/assets/img/Handcalcs/output7.png">

### Subscripting and Superscripting

We can go on adding subscripts using `_` and superscripts using `**` like this:
```py
%%render
#subscripting look at x_pos
x_pos = -b + sqrt(b**2 - 4*a*c) / (2*a) -b + sqrt(b**2 - 4*a*c)/(2*a)
```
<img align="center" src="/assets/img/Handcalcs/output8.png">

```py
%%render
#subperscipting , look at b
x_pos = b**2 - 4*a*c
```
<img align="center" src="/assets/img/Handcalcs/output9.png">

### Greek Symbols
They have a support for a list of greek symbols :
<img align="center" src="/assets/img/Handcalcs/table.png">

### It supports for comment rendering too! 
```py
%%render short params 6
x_pos = -b + sqrt(b**2 - 4*a*c) / (2*a) -b + sqrt(b**2 - 4*a*c)/(2*a) #comments
```

<img align="center" src="/assets/img/Handcalcs/comments.png">

### Conditional Rendering
```py
%%render 
#conditional statements
x = 1
if x > 0: b = 2*x
elif x < 0: b=y
```
<img align="center" src="/assets/img/Handcalcs/conditional.png">

Overall this is a good package to use for rendering your calculations in a more readable format. It is a good alternative to using LaTeX in your Jupyter notebooks. It is also a good package to use for teaching students as it makes the calculations more readable and understandable.

Their GitHub repo is [here](https://github.com/connorferster/handcalcs)