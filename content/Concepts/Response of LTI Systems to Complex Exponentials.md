---
isNote: true
title: Response of LTI Systems to Complex Exponentials
date: 2026-01-22
tags:
  - type/concept
  - topic/
  - domain/systems
  - course/IT341
draft: true
---
## Intuition
**Why are these special?**
Usually, systems are messy. If you feed a square wave into a circuit, you might get a weird, curvy, shark-fin shape out. The system fundamentally changes the _nature_ of the signal.

But **Complex Exponentials** ($e^{st}$) are the "chosen ones" of LTI systems. They are the only signals that pass through an LTI system without changing their shape.

- If you put a square wave in, you don't get a square wave out.
- But if you put an exponential in ($e^{st}$), you get the **exact same** exponential out ($e^{st}$), just scaled by a constant.

In Linear Algebra terms, they call this an **Eigenfunction**.
- **Vector world:** $A v = \lambda v$ (Matrix $A$ just stretches vector $v$).
- **Signal world:** System $\{ e^{st} \} = H(s) \cdot e^{st}$ (System just stretches signal $e^{st}$).
    

The system doesn't change _how_ the signal moves (the frequency $s$ stays the same); it only changes _where_ it starts (the amplitude and phase).

> [!info] The Eigenfunction Property
> 
> If input $x(t) = e^{st}$, then output $y(t)$ is simply:
> 
> $$y(t) = H(s) \cdot e^{st}$$
> 
> Where **$H(s)$** is the Transfer Function (or the "Eigenvalue").
> 
> - **$H(s)$** tells you "How much the system likes the frequency $s$."
>     
> - It is a complex constant determined by the system's impulse response: $H(s) = \int_{-\infty}^{\infty} h(\tau)e^{-s\tau} d\tau$.
>	This complex constant basically stores the 
>     

## The Mechanism: "Same Movement, New Position"

Your note breaks down the signal into two parts: The **Position** and the **Movement**.

$$x(t) = \underbrace{C}_{\text{Initial Position}} \cdot \underbrace{e^{st}}_{\text{Movement Rule}}$$

- **$s = \sigma + j\omega$**: This defines the "movement."
    
    - $\omega$ controls the spin speed.
        
    - $\sigma$ controls the growth/decay rate.
        
    - **Crucial Rule:** LTI systems **cannot touch $s$**. If 5 Hz goes in, 5 Hz comes out.
        
- **$C = r e^{j\phi}$**: This defines the "initial position" (Start).
    
    - $r$ is the starting length.
        
    - $\phi$ is the starting angle.
        

When the signal goes through the system, the system applies its "opinion" $H(s)$ to the initial position:

$$y(t) = \underbrace{(H(s) \cdot C)}_{\text{New Initial Position}} \cdot e^{st}$$

The system acts as a complex scaler. It stretches the length by $|H(s)|$ and rotates the angle by $\angle H(s)$.

## The Visual

Imagine the signal as a clock hand rotating (and possibly growing/shrinking).

- **The Input ($x$)**: A vector of length $|C|$ starting at angle $\angle C$.
    
- **The System ($H(s)$)**: A machine that grabs that vector, stretches it, and twists it.
    
- **The Output ($y$)**: The exact same clock motion, but the hand is now longer/shorter and set to a different time zone.
    

![[LTI Response to Complex Exponential.excalidraw.svg|100%]]

_(Note: In your Excalidraw, you can draw two circles side-by-side. The left one has a vector $C$. The right one has a vector $C \cdot H(s)$, which is longer and rotated by $\phi_H$. The "spin" arrow $\omega$ remains identical on both.)_
## Intuition
...

## Visual
...

## Formal Definition
...


---
## Connections
- **Related to:** [[...]]