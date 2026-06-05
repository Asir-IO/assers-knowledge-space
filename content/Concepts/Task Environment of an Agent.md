---
title: Task Environment of an Agent
date: 2026-04-03
tags:
  - type/concept
  - course/AI313
  - domain/ai
draft: false
thumbnail:
comments: true
related-notes:
---
An agent is created to do (a) specific task/s within an environment; Each environment and goal is different and may require agents of very <u>different capabilities</u>.   

The Task Environment of an agent is defined as the world in which the agent operates, the tasks it performs to satisfy goal/s, and the agent itself.

---
# PEAS Framework
PEAS is a framework that *attempts* to describe the Task Environment of an Agent, and it does so by defining,
- an agent's goal/s, <span style="float: right;">(<b>P</b>erformance Measure)</span>
- what environment it knows it operates in, <span style="float: right;">(<b>E</b>nvironment)</span>
- *using what* can the agent act on what's around it, <span style="float: right;">(<b>A</b>ctuators)</span>
- and *using what* can the agent sense what's around it. <span style="float: right;">(<b>S</b>ensors)</span>

## Example
> [!two-column]
>
> > [!left]
> > 
> > Below is an example of a PEAS description of the task environment of a Robot Vaccum agent,
>
> > [!right]
> > 
> > >[!with-desc]
> > >
> > >![](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*r30XB5vYOQrYlnL2CfgBZQ.png)
> > >>[!desc]
> > >>
> > >>(Cite: [Rachael Ferguson](https://medium.com/@cluelessrae/peas-how-to-describe-task-environments-for-agents-in-ai-4aef238f3514))
- cleanliness, battery life, efficiency. <span style="float: right;">(<b>P</b>erformance Measure)</span>
- carpet, hard flooring, table, stairs (edge). <span style="float: right;">(<b>E</b>nvironment)</span>
- brushes, wheels, suction. <span style="float: right;">(<b>A</b>ctuators)</span>
- camera, dirt detection, edge detection, wall sensor. <span style="float: right;">(<b>S</b>ensors)</span>


> [!warning] This is NOT a complete description
> Again, this is only an *attempt* to describe the task environment of the vaccum cleaner, there could be a 5th environment that the agent may need to operate in in a real-world scenario (like dirt), but I simply wasn't aware of it when making that list.

---
# Further Specification
## Environment Types
After defining what environment the agent knows it'll operate in, it's helpful to also characterize each environment; if you know an environment is partially observable, mention it; if you know that a state is affected by every state before it, mention that.

The complete list of Environment types is below.
%% ![[Task Environment of an Agent 2026-04-03 18.07.50.excalidraw]]    %%
1. {i} Observability
	- Fully   
		the agent's sensors always provide <u>complete</u> access to the entire state of the environment. the agent doesn't need to guess, remember, or predict missing information.   
		*(e.g., Chess)*
	- Partial   
		the agent can only perceive a subset of the environment at a time.   
		*(e.g., Driving)*
2. State Transitions' Predictability
	- Deterministic   
		next state is fully determined only by the current action.   
		*(e.g., Chess)*   
	- Stochastic   
		next state needs to take randomness into account.   
		*(e.g., Weather Prediction)*   
3. Dependency of States
	- Episodic   
		no need to later remember the current state, since upcoming states do not depend on it.   
		*(e.g., Spam Filter)*   
	-  Sequential   
		must save the current state, since upcoming states do depend on it.   
		*(e.g., Driving)*   
4. Environment Variability/Evolution
	-  Static   
		the world does not change as the agent operates   
		*(e.g., Crossword Puzzle)*   
	-  Dynamic   
		the world does change as the agent operates   
		*(e.g., Driving)*   
5. Continuity of States and Actions
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
## [[Agent Architectures|Agent Architectures]]
Defining the actuators and sensors of an agent is not enough to describe it.

An agent's ultimate goal is to be rational, and different environments require the agent to have different architectures to achieve this.

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->

---
# Sources
- [PEAS Description of Task Environment - GeeksforGeeks](https://www.geeksforgeeks.org/machine-learning/peas-description-of-task-environment/)
- [PEAS: How to Describe Task Environments for Agents in AI | by Rachael Ferguson | Medium](https://medium.com/@cluelessrae/peas-how-to-describe-task-environments-for-agents-in-ai-4aef238f3514)
- [Task Environment - an overview | ScienceDirect Topics](https://www.sciencedirect.com/topics/computer-science/task-environment)
- 
