---
isNote: true
title: Recurrent Neural Networks
date: 2026-05-07
tags:
  - type/concept
  - topic/
  - course/
  - domain/
draft: true
thumbnail:
comments: true
related-notes:
---
# Mental Model
![[Recurrent Neural Networks 2026-05-07 02.55.52.excalidraw]]

---
# Example
...

## Mental Model
Regular neural networks are great at mapping static inputs to outputs, but they have no concept of *time* or *sequence*. If u want to predict tomorrow's value based on yesterday and today's values, a regular network treats each day like an isolated event.   
![[Recurrent Neural Networks 2026-05-07 18.49.27.excalidraw]]

You need a network with a memory. 

An RNN achieves this by introducing a loop into the network. It's often visualized in a *folded* state.   

but to really understand it, u just have to *unfold* it across time. 
![[RNN Unfolded 2026-05-07 18.50.12.excalidraw.svg]]
>[!note] Note
> Unfolding simply means looking at the same network across different time steps. [cite_start]It uses the **same network architecture** and the **same weights** for every single step[cite: 457, 492].

---
## How it works
At any given time step ($t$), the output of the activation function ($a_t$) doesn't just depend on the current input ($X_t$). [cite_start]It depends on BOTH the current input and the previous activation output ($a_{t-1}$)[cite: 601, 602, 603].

Here is the exact forward calculation flow:
1. [cite_start]**Calculate the state:** Multiply the current input by its weight ($W_{ax}$), add the previous activation multiplied by its weight ($W_{aa}$), and add a bias ($b_1$)[cite: 468].
	[cite_start]$S_t = X_t W_{ax} + a_{t-1} W_{aa} + b_1$ [cite: 468]
2. [cite_start]**Apply activation:** Pass that state through an activation function (practically, this is usually $\tanh$)[cite: 469, 494].
	[cite_start]$a_t = \tanh(S_t)$ [cite: 469]
3. [cite_start]**Generate prediction:** Multiply the new activation by the output weight ($W_{ya}$)[cite: 469].
	$\hat{Y}_t = a_t W_{ya}$ [cite: 469]

[cite_start]Because it shares the same weights ($W_{ax}$, $W_{aa}$, $W_{ya}$) across all steps, the network learns a generalized rule for how sequences progress, rather than just memorizing absolute positions[cite: 457, 492].

---
## The Evolution: GRU and LSTM
Basic RNNs are cool, but they struggle to hold onto information across very long sequences. To fix this, we introduce more complex internal mechanisms (gates) to strictly *control* what the network remembers and what it discards.

### 1. GRU (Gated Recurrent Unit)
[cite_start]We upgrade the standard RNN by adding an <mark style="background: #BBFABBA6;">Update Gate</mark> ($G_u$)[cite: 644, 645]. 
[cite_start]The value of this gate is determined based on the current Input ($X^{<t>}$) and the Previous Memory Cell value ($C^{<t-1>}$)[cite: 646]. It essentially acts as a filter deciding how much of the past memory should be updated with new candidate values.

### 2. LSTM (Long Short-Term Memory)
LSTMs take the GRU concept a step further:
- [cite_start]**Splitting the Gates:** It splits the GRU's single "Update Gate" into two distinct gates: an <mark style="background: #ADCCFFA6;">Update Gate</mark> and a <mark style="background: #FF5582A6;">Forget Gate</mark>[cite: 670, 671, 672]. 
- [cite_start]**Decoupling Memory & Output:** Unlike GRUs, LSTMs strictly differentiate between the internal Cell Memory value ($C^{<t>}$) and the actual Cell Output ($a^{<t>}$)[cite: 697]. 
- To get the final output, the memory is squashed to a range between $[-1, 1]$ using $\tanh$: 
	[cite_start]$a^{<t>} = \tanh(C^{<t>})$[cite: 698].

---
## What can u build with them?
[cite_start]Because RNN architectures handle sequences so well, u can map inputs and outputs in several flexible ways depending on the problem[cite: 547]:
- [cite_start]**One to Many:** Image captioning (one image -> sequence of words)[cite: 549, 554, 555].
- [cite_start]**Many to One:** Sequence classification, like Sentiment Analysis (sequence of words -> one sentiment score)[cite: 551, 553, 556].
- [cite_start]**Many to Many:** Encoder-Decoder setups like Language translation, Predicting Stock Prices, or Named Entity Recognition[cite: 550, 557, 558, 559].

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->

---
# Sources
1. (context)
	- [Recurrent Neural Networks (RNNs) - Studyopedia](https://studyopedia.com/deep-learning/recurrent-neural-networks/)
	- [Long Short Term Memory (LSTM) - Deep Learning Model - Studyopedia](https://studyopedia.com/deep-learning/lstm-deep-learning-model/)
2. (context)
	- [Visualizing memorization in RNNs](https://distill.pub/2019/memorization-in-rnns/)
	- [Attention and Augmented Recurrent Neural Networks](https://distill.pub/2016/augmented-rnns/)
	- [Understanding LSTM Networks -- colah's blog](https://colah.github.io/posts/2015-08-Understanding-LSTMs/)
	- [The Unreasonable Effectiveness of Recurrent Neural Networks](https://karpathy.github.io/2015/05/21/rnn-effectiveness/)
