---
path: "/blog/make-sprints-great-again"
date: "2017-07-12T17:12:33.962Z"
title: "Make Sprints Great Again"
---

When I was first exposed to Scrum, I fell in love.

The process was straight forward. The team agrees on a prioritized list of tasks to complete in a consistent block of time. A **sprint**. You meet daily to touch base, ensuring everything is on track. By the time the sprint is complete, some product functionality has been shipped. The client is happy. Finally, you regroup for a retrospective, discussing what went well and what went poorly. Then you start all over again. It just _made sense_.

I’ve been fortunate enough to come across some great opportunities throughout my career, exposing myself to diverse development environments and teams across disparate industries. I’ve built in-house line of business applications, campaign/content sites for a variety of clients and currently (at the time of writing) the core platform at a mid-sized startup. Though my experiences in these roles have had many differences, one sobering fact seems to hold true across teams and organizations:

> Deadlines are missed. Often.

Yes, estimation is hard. Yes, software project planning is hard. But why, as an industry, do we seem unable to achieve _any_ level of certainty in our project plans? Agile methodologies have brought us leagues ahead of “waterfall” development, and we have a plethora of industry-vetted estimation techniques (ie. poker points, t-shirt sizing, relative mass, etc) at our disposal, yet dependable roadmaps continue to elude us. I can’t seem to shake the feeling that this _should_ be working. What have we been doing wrong? What am I missing here?

After much reflection (and frustration), I’ve come to a realization.

### Time-Boxed Sprints are Problematic

During one of my team’s feature planning sessions, a colleague expressed his dislike of Scrum. He called it “artificial hustle”. His reasoning, and I’m paraphrasing here (my memory is not as sharp as some), was that it's needless “process” inhibiting our work. We have a prioritized backlog. We know how to group and tackle the tasks best. We know that our estimates will inevitably change and tasks will evolve as we work. Why time-box us into uniform segments of work? We can keep daily stand-ups, but run our own retros after a milestone has been reached (ie. a critical feature has been shipped), not after some arbitrary amount of time has passed. It feels _forced_.

I have to say, I didn’t agree with this sentiment at first, but the focus on **value** got me thinking…

Looking back at our recent sprints (and most sprints I’ve been a part of, really), I can’t help but feel as though there was never enough time to ship _real value_ in the course of a single sprint. By value, I don’t mean stable code or singular components. I mean business value (ie. user stories), a working piece of end-to-end product that can immediately be operationalized and put to use.

I figured this was a problem with the way our tasks were defined, and perhaps there is some blame to be placed there. However, some stories are simply too large to reasonably break down any further, lest you sacrifice that end-to-end completeness. Even so, a story that is estimated to be around 3 days worth of effort can _still_ be missed in a weekly sprint, and (at least from my experience) often is. Something’s got to give.

I forced myself to take a step back and remove my rose-coloured Scrum glasses to objectively scrutinize this process, attempting to pinpoint potential reasons for our lack of efficiency.

Here’s what I came up with.

### Too Much Churn

I narrowed down what I believe to be Scrum’s biggest “time-sinks” to the following, un-ordered list. Keep in mind, this is all from personal experience. While I’m sure the processes followed by my previous organizations weren’t perfect (what process truly is?), I feel that these issues are not unique to me and that many of you have had similar gripes with your team’s software planning process.

- **Tasks are too vague** — Insufficient information is provided in the ticket to guide the implementer down the right path. This is not uncommon, as most clients don’t really know what they want in the first pass. Often times, they need something tangible to have that “ah ha“ moment. However, time-boxing these tasks could lead to squabble and back-and-forth on implementation details.
- **Tasks aren’t familiar** — When a task involves unfamiliar tech, new or undocumented APIs or if the domain is inherently complex, original estimates might not hold true throughout the sprint. Letting these tasks slide until your scheduled retrospective before re-estimating and planning could cause needless “trashing” and future rework.
- **Task dependencies within the sprint**  — Team members become immediately blocked when tasks have dependencies or require further input. There is an illusion that all tasks are “up for grabs” at any time. In reality, what you end up with is contributors tripping over each other trying to glue coupled tasks together between their branches.
- **Tasks aren’t related** — The sprint is full of disparate tasks that require constant context switching. Some teams insist on planning sprint tasks by type (ie. feature, bug, enhancement, tech debt, etc), only allocating a certain percentage of each task type per sprint. This seemingly “even” distribution of work might sound nice to the client/board, but its a constant cognitive juggle for the team. This fragmentation causes a compounding loss of efficiency that is often untracked and poorly reflects on the team’s ability to deliver.
- **Research tasks create additional work**  — Investigation, if fruitful, leads to the creation of implementation tasks. Deferring said implementation work till a later sprint to avoid “scope creep” costs the team that immediate knowledge they’ve built up during their investigation, only to be ramped up again when approaching the problem a second time.
- **Research tasks continue forever**  — When investigative work is not contained in some way, it becomes very easy for the assignee to get stuck down a rabbit hole. [Parkinson’s law](https://en.wikipedia.org/wiki/Parkinson%27s_law) might drag them on until the sprint retrospective.
- **Implementing another person’s estimate**  — Regardless of your estimation method of choice, there will always be some discrepancy between contributors. The larger the gap, the further your sprint commitment is from reality.
- **Unable to truly maximize effectiveness**  — When you know you only have a limited time to complete your work, you’ll always shy away from grabbing large tasks near the end of the sprint. This holds especially true if the remaining larger tasks are unfamiliar. What you end up with is most team members grabbing one or two larger tasks, followed by a few small ones near the end, leaving the rest.

### The Cost of Time-Boxed Sprints

While these issues clearly cause a loss of time and efficiency, there are other potentially more damaging costs that are not immediately apparent.

- **Planning**  — When contributors are forced to “guesstimate” complex issues in unknown domains for the sake of plugging numbers into a spreadsheet, no real value or certainty is provided to anyone. Not the board, the clients, the Product Manager and definitely not the development team.
- **Quality**  — When the team is scrambling to get tasks done before their “time is up”, especially if there is a minimum quota enforced, quality is inevitably sacrificed. Focus is placed on shipping tasks, not valuable working software.
- **Credibility**  — Continually missing release dates and shipping faulty software will degrade your credibility with your clients and ultimately your team.
- **Burnout** — The stress from rushed work and constant jumping between contexts is unnecessary load that taxes your team’s psychological wellbeing.
- **Morale** — At some point the consistent lack of quality, missed deadlines and never-ending burnout will ultimately crush the team’s morale.

Looking at the list above, you should be wondering… Aren’t efficiency, quality and timely delivery the very qualities that Scrum (and more generally Agile, for that matter) claims to facilitate? Is this really the best we can do?

I think we can do better.

### Value-Based Sprints

In my search to improve my team’s process, I read through Ken Schwaber and Mike Beedle’s [Agile Software Development with Scrum](https://www.amazon.ca/Agile-Software-Development-SCRUM-Schwaber/dp/0130676349). The book conveys an understanding of why thinking of software development as “new product” development is necessary, filled with detailed descriptions of the Scrum process backed by plenty of real world success stories. While the book is a bit dated (published 2001), we still follow many of its steps today. However, the following 2 characteristics stood out from what I’ve been used to:

> 1. Sprints should have a clear goal that the team agrees on.> 2. Sprints should run for a month.

These points may seem small, but they can have a significant impact. First, setting a goal for your sprints immediately shifts the focus from closing tickets to reaching some milestone, to achieving **value**. Second, extending sprint time to a month gives your team a lot more breathing room to see entire features through till the end. While I’m not advocating we all extend our sprints (time-boxing in a bigger box doesn’t solve the real issue), you wouldn’t feel encouraged to “shrink” your stories when time isn’t such a constraint.

The point I’m trying to make is that our focus should be on delivering valuable, working software to our customers and our processes should encourage and facilitate the attainment of that goal.

I propose we make the following additions/modifications to our sprints:

- **Clear sprint goal**  — A sprint should have a purpose. Hone in on critical features/stories and identify what should be delivered first. A good starting point might be 3 critical deliverables. Everyone on the team should be briefed and understand and agree on what you’re all trying to accomplish at the start of every sprint. Listen to your team and adjust if needed. The sole focus of the group should be to deliver on that goal as efficiently as possible.
- **Don’t time-box**  — As we shift our focus from time to value, we lose the constraint to fit as much work as possible into a set amount of time (see [The Spanish Theory of Value](https://blog.bryanbibat.net/2009/08/31/spanish-theory-of-value/)). That being said, you should still aim for short cycles. A fast feedback loop is key and should be considered when planning each sprint, without constricting it.
- **Group related tasks**  — Fragmentation is a huge productivity killer and so often overlooked. Its understandable, as a product manager, that you want to move your initiatives along while addressing any critical bugs or enhancements that inevitably pop up. The reality is that a sprint full of small tasks that cover a large application footprint kill efficiency. Every time you bounce from task to task you have to wind down and ramp up on the relevant context, dig into a brand new area of code and zone in. It may seem small, but understanding the psychological dynamics of [flow](https://medium.com/@stackenterprise/getting-into-the-developer-flow-state-7b0e5c98eb8a) will make it clear that it adds up. This doesn’t need to be hard. If you are trying to deliver a feature that affects a view in the application, try to get some high-value bugs in the sprint that touch that same view. If an urgent bug pops up with your login flow, maybe its a good time to tackle some pesky long-lived tech debt to optimize that flow. When your contributors are in a flow state, they can fly through these auxiliary tasks much more efficiently then when they’re scattered.
- **Size stories, don’t estimate** — Attaching time based estimates to stories gives off a false sense of certainty that a task will be completed in that time from the moment it is started. Anyone who has been an engineer or managed them long enough will know this is never the case. Concentration will always be broken to some extent. Use an effort based estimation technique, such as t-shirt sizing or points (if measurements equate to time, you’re cheating), to provide a sense of scale for the deliverable. This is what should be used when planning sprints.
- **Break stories down in detail** — Granularity is your friend. The more vague a task’s description, the greater the possibility for error during implementation. There is a balance though, as you don’t want your contributors to feel like code monkeys. Your tasks should be clear, with enough information and supporting links to documentation to guide contributors down the right path. No more, and definitely no less.
- **Stop if needed**  — If blockers (ie. design errors, vague requirements, implementation discrepancies, etc) emerge that cannot be resolved quickly then don’t be afraid to stop the sprint. I find this is harder to do when sprints are time-boxed, likely because the team is focused on reaching that deadline. The reality is, these disagreements and surprises end up costing more if ignored, rushed, resolved ad hoc or overlapped with concurrent implementations that end up getting re-written or tossed. Take time to regroup and align, then continue or plan an altered sprint if necessary.

### Conclusion

At the end of the day, this is all speculative. I’ve never worked at an organization that adopted all or even most of these concepts. There might be some Kanban influence in my thinking, although I’m not knowledgeable enough in the practice to say for sure. What I’m trying to create is a way of thinking that moves focus away from “precise” estimates and process for the sake of (ultimately inaccurate) project planning over to efficiency. To quote [The Agile Manifesto](http://agilemanifesto.org/principles.html):

> Working software is the primary measure of progress.

Don’t track time, track progress. The question you must continue to ask yourself is:

> “Are we delivering value to the best of our abilities?”

If the answer isn’t a confident “Yes”, perhaps its time to approach your process more critically.
