---
title: The Issue-First Approach to Data Science
date: 2026-06-16
tags:
  - type/strategy
  - baby
  - course/gci-world-2026
  - domain/ai
draft: true
thumbnail:
comments: true
related-notes:
---
The fundamental first step in any data science project is to clearly identify a core issue. It is highly recommended to avoid starting with the solution or the data itself; instead, the focus must be on defining a problem, setting clear goals, and establishing a hypothesis for each goal.

# The PDCA Problem-Solving Cycle 
This is an iterative process and requires regular...
## <span style="float: right;">(1)</span>Plan: Frame the Issue & Hypothesis
> What needs fixing? (issue)... What fixes it? (goals) ... How does it fix it? (hyopthesis) ... Was the implication correct? (Success Metrics)

1. (**Identify the Issue**): The size of the issue dictates the size of the business impact. A good issue must be fundamental, have a large impact, and be clearly answerable. ^902279
2. (**Define the Goals**): Establish clear, quantifiable objectives to solve the identified issue.
3. (**Develop a Hypothesis**): Formulate a deep, suggestive, and testable claim detailing "how" to achieve each goal.
4. (**Set Success Metrics**): Define clear success metrics (KPIs/KGIs) before taking action.
	- (e.g., conversion rates, repeat purchases, or customer lifetime value)

## <span style="float: right;">(2)</span>Do: Run Data-Informed Actions
> ... I'll commit to the hypothesis and test it.

1. (**Implement Campaigns**): Execute targeted strategies using segmentation methods like RFM or decile analysis. ^902279
2. (**Deploy Systems**): Launch recommendation engines using methods like collaborative filtering.
3. (**Test Hypotheses**): Conduct A/B tests or randomized controlled trials (RCTs) to gather reliable data.

## <span style="float: right;">(3)</span>Check: Evaluate Results via Metrics & Methods
> How do I know if Satisfying Hypothesis really implies Reaching Goal? How do I even know if Reaching Goal implies Solving Issue?

1. (**Measure Impact**): Evaluate the campaign using A/B testing and causal inference methods. ^902279
2. (**Visualize**): Present results clearly using advanced visualizations or dashboards.
3. (**Validate**): Check outcomes against your established KPIs using statistical significance tests or regression models.

## <span style="float: right;">(4)</span>Act: Refine Strategy & Update
1. (**Identify the Issue**): The size of the issue dictates the size of the business impact. A good issue must be fundamental, have a large impact, and be clearly answerable. ^902279
2. (**Define the Goals**): Establish clear, quantifiable objectives to solve the identified issue.
3. (**Develop a Hypothesis**): Formulate a deep, suggestive, and testable claim detailing "how" to achieve each goal.
## To Verify a Solution
1. (**Establish KPIs**): Define exact, measurable metrics (like conversion rates or retention) to evaluate whether the executed solution successfully resolved the initial issue.


# Questions, to Verify
1. Does this issue have a large impact on the business?[[#^902279]]
2. Is my hypothesis falsifiable with data?
3. Can I define a clear "yes/no" answer for this problem?

---
# Example
...

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC -->

| Thumbnail | Note | Type |
| --------- | ---- | ---- |

<!-- SerializedQuery END -->

---
# Sources
-  I was introduced to information here in the GCI World 2026 course.


---
# Raw

> [!question] Please enter what you learned from today's lecture in at least 30 words.
> I learnt the 1st thing i should look for when trying to solve a problem in data science: identify the issue. I also learnt that it's highly recommended to define goals that will help solve each identified issue, and developing a hypothesis of "how" to reach every single goal. this seems like a clear, structured approach i'd feel comfortable implementing =)
