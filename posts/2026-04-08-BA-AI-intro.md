---
title: What happens when you apply AI to real business analysis?
date: 2026-04-08
tags:
  - posts
  - ai
  - business-analysis
  - build-in-public
layout: post.html
excerpt: Business analysis is about making sense of messy processes, conflicting perspectives, and unclear problems, to drive effective change. What happens when you let AI have a go at that?
---

It's difficult to cut through the noise with AI right now. You've got startup founders claiming to wield entire org structures of agents - sales, marketing, product - automated businesses where the only human input is decision making. You've got skeptics who decry the efficiencies it can bring, obsessing over how LLMs once struggled to tell you how many 'r's are in 'strawberry'. Somewhere between those two extremes is the reality, and I'm interested in exploring that reality in business analysis.

There's no denying that generative AI has changed how we work. What I'm not yet clear on is *just how well it can cope with ambiguity* - the kind you constantly run into with in business analysis: messy, contradictory, half-articulated problems. (**NB:** Whether they *need* to grapple with these ambiguous inputs will be discussed another time.)

## But what is business analysis?

Some will tell you it's about documenting requirements or writing user stories, and by extension argue 'AI can do that'. That's never really been the job.  Those are *documented outputs* - business analysis is what happens **before** you produce those outputs.

In practice, business analysis looks like being asked to improve an undocumented process that exists in three versions, depending on who you ask. Two people doing the same role describe it differently. Their manager describes a third version that doesn’t quite match either. The data in systems of record doesn't line up with any of those versions - neither does what's in the data warehouse or being reported in PowerBI. 

The problem you're actually trying to help solve is only loosely-defined ("our scheduling process doesn't work, we need a fix"), and while you're untangling it someone is already pressing ahead with a solution, making everything a moving target. Building an accurate enough picture of the problem space in order to enable the best solution (if it's even worth solving) *has always been the job*. "User Stories", if you write them, are the easy bit.

This has always been the domain of human judgement:
- deciding who or what to trust
- spotting what's missing from your knowledge of the domain
- challenging long-held assumptions
- reframing the problem entirely
<br>
<br>

## What if that's no longer true? 

[A recent research article by Anthropic](https://www.anthropic.com/research/labor-market-impacts) suggests AI could be more capable at these sorts of tasks than we may expect, and rather than speculate, I want to see it for myself. 

This blog series will be my attempt to do exactly that - test how it performs across real, messy business analysis to understand:
- where it helps
- where it gets it wrong 
- where it just causes absolute chaos
<br><br>
and document what I learn along the way.
<br><br>

## Letting AI loose on mess

I'm going to start with the kinds of messy inputs BAs work with: scattered notes, partial conversations, conflicting views of the same process. I'll give an agent access to it, and see if it can produce anything useful - a coherent, structured understanding of reality. But why stop at documented output? If we’re in an agentic era, the real question is how far this can go, from making sense of the problem, through to shaping data models and building sensible solutions?

Baby steps though - I still need to learn to wield these tools myself. Part 1 starts at the beginning: can agents make sense of the mess?