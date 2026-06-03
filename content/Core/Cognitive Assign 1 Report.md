---
isNote: true
title: Cognitive Assign 1 Report
date: 2026-03-28
tags:
  - course/
  - domain/
  - type/
draft: false
thumbnail:
comments: true
related-notes:
---
# Gaussian Naive Bayes
## Data Preprocessing
The Abalone dataset consists of continuous numerical measurements.
#### How it was done
1. Target Variable Transformation
    - The raw `Rings` target variable was grouped into three distinct classification categories: `Young` ($\le 8$ rings), `Adult` ($9 \le \text{rings} \le 11$), and `Old` ($\ge 12$ rings).
    - This transformed the problem from a continuous regression task into a discrete multi-class *classification* task.
## Classifier Implementation
Given an input matrix of continuous features (`X_train`) and their corresponding labels (`y_train`), the model assigns new samples to a class using Bayes' theorem adapted for continuous variables via the Gaussian Probability Density Function (PDF).
### How it was done
##### Training
(for every class $c$)
1. Computing Class Prior
    - Calculated as the total number of occurrences of class $c$ divided by the total number of samples.
2. Feature Mean and Variance
    - Because the features are continuous, we assume they follow a normal (Gaussian) distribution.
    - We computed the gaussian pdf parameters: mean ($\mu$) and variance ($\sigma^2$), for every single feature column within each class.
    - A small epsilon value (`1e-9`) was added to the variance to ensure numerical stability and prevent division-by-zero errors during prediction.
##### Predicting
The model was built to predict using either standard probabilities or log probabilities.
1. Via Regular Probabilities (`num_data_rule`)
    - The likelihood of a feature value $x$ belonging to class $c$ is calculated using the standard Gaussian PDF:
	    $$P(x|c) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x - \mu)^2}{2\sigma^2}\right)$$
    - For a given sample, the probabilities of all features are multiplied together (`np.prod`) and multiplied by the class prior.
2. Via Log Probabilities (`log_data_rule`)
    - To prevent numerical underflow when multiplying small fractions, the natural logarithm of the Gaussian PDF is used:
        $$\log P(x|c) = -0.5 \log(2\pi\sigma^2) - \frac{(x - \mu)^2}{2\sigma^2}$$
    - The log-likelihoods of all features are summed together (`np.sum`) and added to the log prior.
## Visuals
Feature distributions for the first 4 features.   

![[abalone (1).png]]

---
# Multinomial Naive Bayes
## Text Preprocessing and Bag-of-Words
The text processing pipeline was implemented from scratch to transform 50,000 raw IMDB movie reviews into a numerical format suitable for the Multinomial Naive Bayes classifier.   
#### How it was done
1. Loading a cleaned training dataset
	- `load_and_clean())`
    - a review may contain html tags or words with different casing and punctuation, we're only interested in the occurrence of *words*, and thus we removed tags, lowercased everything, and removed punctuation
2. Creating a vocab. that doesn't contain stopwords (fillers)
    - Vocab = $\{w \mid w \in \text{training dataset} \text{ and } w \notin \text{stop\_words}\}$
    - stopwords do not add meaning to our sentiment analysis.
    - each word in vocab was then mapped to an index, indices are easier to refer to, esp. to a matrix.
3. Bag-of-Words (BoW) Representation
    - `BoW[review_idx, word_idx] = the frequency of the word within the reivew`
    - created a BOW to store the frequency of each word appearing in each review
    - since each review contains only a tiny subset of our total vocab., we decided to use a *sparse* matrix.

## Classifier Implementation
Given an input X_train (BoW matrix) and y_train (a list of labels), it assigns new review to a label using baye's theorem.   
We first separate review of a label, since we later build the probabilities based on that.   

![[Cognitive Assign 1 Report 2026-03-28 15.55.53.excalidraw.svg]]
### How it was done
##### Training
(for every class c)
1. Computing Class Prior
    - it's the total # of occurrences of class c against all the occurrences.
    - also computed its log version.
2. Word Probabilities & Laplace Smoothing
    - how the count of each word across reviews is computed,   
        ![[Cognitive Assign 1 Report 2026-03-28 16.08.30.excalidraw.svg]]   
	- how  `p(w_i|c)` is computed for each word,
        ![[Cognitive Assign 1 Report 2026-03-28 16.17.18.excalidraw.svg]]
    - Laplace smoothing (+1 to numerator and + vocab_size to denominator) was added to ensure that if a word appears in the test set but was never seen in the training set for a given class, its probability doesn't drop to absolute zero and ruin the entire equation.
    - also computed their log version.
##### Predicting
1. via the log probabilities.
    - `log_prob_neg = X_test.dot(log_word_probs[0]) + log_priors[0]`
        this results in a vector containing `log(p(0 | rev_i))` for every review.   
        ![[Cognitive Assign 1 Report 2026-03-28 17.15.56.excalidraw.svg]]   
        we do the same for class 1: compute `prob_pos`, and then the class of `rev_i` is whichever had the larger probability: `p(0|rev_i)` vs `p(1|rev_i)`.
2. via regular probabilities.
	- for a review i, we compute`p(0|rev_i) = priors[0] * p(w0|0) * p(w1|0) * ...`
		we do the same for class 1: compute `p(1|rev_i)`, and then compare.

<div style="page-break-after: always;"></div>

## Visuals
![[imdb_0 (1).png]]   
![[imdb_1 (1).png]]