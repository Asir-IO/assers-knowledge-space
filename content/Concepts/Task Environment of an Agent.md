---
isNote: false
title: Task Environment of an Agent
date: 2026-04-03
tags:
  - type/concept
  - topic/
  - course/AI313
  - domain/ai
draft: false
thumbnail:
---
# Its Pillars
![[Task Environment of an Agent 2026-04-03 18.07.50.excalidraw]]   
# Environment Types
1. Observability
	- Fully
		agent doesn't need to guess anything about it, it can sense it fully.
	- Partial
		agent must guess, it has missing information.
2. State Transitions
	- Deterministic
		next state is fully determined only by the current action.   
		*(e.g., Chess)*   
	- Stochastic
		next state needs to take randomness into account.
		*(e.g., Weather Prediction)*   
3. Previous States Effect
	- Episodic
		no need to later remember the current state, since upcoming states do not depend on it.   
		*(e.g., Spam Filter)*   
	-  Sequential
		must save the current state, since upcoming states do depend on it.   
		*(e.g., Driving)*   
4. Environment Variability
	-  Static
		the world does not change as the agent operates  
		*(e.g., Crossword Puzzle)*   
	-  Dynamic
		the world does change as the agent operates   
		*(e.g., Driving)*   
5. States Frequency
	- Discrete
		their amount is limited, and thus are captured in discrete snapshots.   
		*(e.g., Chess)*   
	- Continuous
		their amount is infinite and must continuously be captured.
		*(e.g., Robot arm movement)*   
6. Amount of Agents needed
	- Single
		only a single agent is needed.   
		*(e.g., solving Sodoku)*   
	- Multiagent
		multiple agents are *required* to interact together.   
		*(e.g., playing Soccer)*   
---
## Connections
-  [[]]