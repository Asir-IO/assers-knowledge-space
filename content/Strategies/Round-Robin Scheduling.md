---
isNote: true
title: Round-Robin Scheduling
date: 2026-01-26
tags:
  - type/strategy
  - topic/
  - course/CS341
  - domain/cs-theory
draft: false
thumbnail: "[[Round-Robin Scheduling 2026-01-26 02.26.55.excalidraw.svg]]"
comments: true
related-notes:
---
## What is the problem
You'll be given a list of processes (P1, P2, P3, ...), their arrival time, and burst time, and the RR time quantum (Q).

You'll be expected to figure out the sequence in which each process runs.

Based on that, you'll be asked questions about a process.<br>
*(Ex): What's the turnabout time for P2?*
## Before you begin
>[!example] I'll demonstrate on this example
>$$\begin{array}{|c|c|c|} \hline \text{Process} & \text{Arrival Time} & \text{Burst Time} \\ \hline P1 & 0 & 6 \\ \hline P2 & 2 & 8 \\ \hline P3 & 5 & 7 \\ \hline P4 & 7 & 2 \\ \hline \end{array}$$
>
>*Time Quantum* ($Q$) = 2

^49aece

1. draw a straight line that'll act as the time axis, and place [[Quickly placing ticks Evenly on a line|ticks]] on it in multiples of Q and until the scheduling ends (the sum of the burst time of each process). <br>
(`Q=2` | `ends at t=6+8+7+3=23`)<br>
![[Round-Robin Scheduling 2026-01-26 01.26.27.excalidraw.svg]]
>[!warning] Note
>Make sure u leave *generous* space between each tick.

2. for every process, add it below the timestamp at which it arrived. (add ticks when needed) <br>
![[Round-Robin Scheduling 2026-01-26 01.42.15.excalidraw.svg]]
3. initialize an empty queue at time 0. <br>
![[Round-Robin Scheduling 2026-01-26 01.52.01.excalidraw.svg]]
4. follow the strategy below.
## The keys
> [!abstract] Symbols Key
> ...

> [!abstract] Notation Key
> ...
## The Strategy
([[#Before you begin|I'm still using that example in the demonstration]])
1. starting with the process that arrived first (P1), run it and indicate that below the timeline.<br>
![[Round-Robin Scheduling 2026-01-26 02.02.10.excalidraw.svg]]
*(it'll run for Q=2)* <br>
(as it runs, if a new process arrived, add it to the bottom of the queue and also indicate how much burst time is left for it) <br>
*(P2 arrived at t=2)*
![[Round-Robin Scheduling 2026-01-26 01.56.06.excalidraw.svg]]
2. As the Q runs out (t=2), if P1 still didn't finish, add it to the bottom of the queue with its remaining time, and then pop P2 out of the queue (do this in your head) and run it.
![[Round-Robin Scheduling 2026-01-26 02.00.47.excalidraw.svg]]
3. It's t=4, Q ran out again and P2 didn't finish: add P2 back to the queue and run P1.
![[Round-Robin Scheduling 2026-01-26 02.11.43.excalidraw.svg]]
*(P3 arrived at t=5)*
![[Round-Robin Scheduling 2026-01-26 02.14.26.excalidraw.svg]]
4. It's t=6, Q ran out and P1 didn't finish: add P1 back to the queue and run P2.
![[Round-Robin Scheduling 2026-01-26 02.18.46.excalidraw.svg]]
*(P4 arrived at t=7)*
![[Round-Robin Scheduling 2026-01-26 02.22.03.excalidraw.svg]]
5. It's t=8, Q ran out and P2 didn't finish: add P2 back to the queue and run P3.
![[Round-Robin Scheduling 2026-01-26 02.24.24.excalidraw.svg]]
6. keep doing this until no process remains in the queue...
(this how the final diagram should look like)
![[Round-Robin Scheduling 2026-01-26 02.26.55.excalidraw.svg]]


---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->

