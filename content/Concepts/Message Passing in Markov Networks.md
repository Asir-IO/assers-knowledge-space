---
isNote: true
title: Message Passing in Markov Networks
date: 2026-04-05
tags:
  - type/concept
  - topic/
  - course/AI332
  - domain/ai
draft: false
thumbnail: "[[Message Passing in Markov Networks 2026-04-05 21.38.13.excalidraw.svg]]"
---
## Mental Model
Fully connected nodes in a network (cliques) have their own atomic compatibility table.   
![[Message Passing in Markov Networks 2026-04-05 20.48.48.excalidraw.svg]]    
Whenever a clique gets connected to another one, the comp. table of the resulting structure can be constructed in 2 ways.   
![[Message Passing in Markov Networks 2026-04-05 21.01.15.excalidraw.svg]]    
You either:
- link the 2 tables together by the node that connects both cliques (B).   
	![[Message Passing in Markov Networks 2026-04-05 21.11.26.excalidraw.svg]]    
	and whenever we want to calculate a probability across both cliques, u just multiply the correct rows in both tables.   
	![[Message Passing in Markov Networks 2026-04-05 21.38.13.excalidraw.svg]]    
- merge the 2 tables into a composite one that will include *redundant* calculations%%, since..%%.   
	![[Message Passing in Markov Networks 2026-04-05 21.20.46.excalidraw.svg]]   

Given those 2 methods, which one do u think is easier in figuring out the summation of all the compatibility scores (*Z*) across all rows?  
## Using the Merged Table method
We will need to sum every single score in every single row within that incredibly long table, *good luck with that.*
![[Message Passing in Markov Networks 2026-04-06 00.03.00.excalidraw.svg]]
# Using the Linked Tables method
The sum of all scores (Z) is equivalent to summing all scores when B=0 + when B=1, that is, 
$$
Z = Z_{B=0} + Z_{B=1}
$$
### When B=0
A can either be 0 or 1, summing all the scores for both possibilities will give us $Z_{B=0}$, that is, 
$$
Z_{B=0} = Z_{B=0, A=0} + Z_{B=0, A=1}
$$
The Summation when A=0:   
![[Message Passing in Markov Networks 2026-04-05 22.09.03.excalidraw.svg]]    
The Summation when A=1:   
![[Message Passing in Markov Networks 2026-04-05 22.26.23.excalidraw.svg]]    

![[Message Passing in Markov Networks 2026-04-05 23.01.31.excalidraw.svg]]   
Since both $Z_{B=0, A=0}$ and $Z_{B=0, A=1}$ multiply the same (D, E) rows, we can factor the summation of all the (D, E) rows out of the summation.   
![[Message Passing in Markov Networks 2026-04-05 22.51.49.excalidraw.svg]]   
This is a *huge* shortcut, since we now know we can compute $Z_{B=0}$ by multiplying the <mark style="background: #ADCCFFA6;">summation of scores in the (A, B) table</mark> when B=0, with the <mark style="background: #D2B3FFA6;">summation of scores in the (B, D, E) table</mark> when B=0.   
![[Message Passing in Markov Networks 2026-04-05 23.07.31.excalidraw.svg]]   
The notation for the <mark style="background: #ADCCFFA6;">(A, B) table summation</mark> is $m_{{\color{skyblue}A}\rightarrow B}(0)$.   
> The 0 stands for "when B=0"

The notation for the <mark style="background: #D2B3FFA6;">(B, D, E) table summation</mark> is $m_{{\color{mediumpurple}D, E}\rightarrow B}(0)$.   
$$
Z_{B=0} = m_{{\color{skyblue}A}\rightarrow B}(0) * m_{{\color{mediumpurple}D, E}\rightarrow B}(0) = ({\color{SkyBlue}12})*({\color{mediumpurple}13}) = 156
$$
### When B=1
We can do the exact same shortcut when B=1.   
![[Message Passing in Markov Networks 2026-04-05 23.28.10.excalidraw.svg]]   
$$
Z_{B=1} = m_{{\color{skyblue}A}\rightarrow B}(1) * m_{{\color{mediumpurple}D, E}\rightarrow B}(1) = ({\color{SkyBlue}11})*({\color{mediumpurple}13}) = 143
$$
### The Total Sum
Now that we have both $Z_{B=0}$ and $Z_{B=1}$, sum them both to get the overall $Z$.   
$$
Z = Z_{B=0} + Z_{B=1} = 156 + 143 = 299
$$
Or in the more compact form,
$$
Z = \sum_{B=0, 1} Z_B = \sum_{B=0, 1}m_{{\color{skyblue}A}\rightarrow B}(B) * m_{{\color{mediumpurple}D, E}\rightarrow B}(B)
$$
---
## Connections
-  [[]]