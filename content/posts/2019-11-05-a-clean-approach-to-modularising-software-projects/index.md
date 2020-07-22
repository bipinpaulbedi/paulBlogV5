---
title: Clean architecture in functional programming
author: Bipin Paul Bedi
date: '2019-11-05'
hero: ./images/CleanArchitecture.jpg
excerpt: a clean approach to modularising software projects
---

All the design principles and design patterns that we’ve identified over the last several decades apply only to OO; and that Functional Programming reduces them all down to: functions. Quoting from clean coders blog look at the comparison chart below;

<div className="Image__Small">
  <img src="./images/oovsfp.jpg" alt="oovsfp" />
</div>

In object-oriented architecture, we often struggle towards the ideal of the Ports and Adapters architecture, although we often call it something else: layered architecture, onion architecture, hexagonal architecture, and so on. The goal is to decouple the business logic from technical implementation details, so that we can vary each independently.

This creates value because it enables us adapt to changing business or technology.

Comparing to Clean Coder Clean Architecture : [https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

* Entities ~ Domain  
* Use Cases ~ Ports  
* Controllers/Gateways/Presenters ~ Adaptors  

Thus a functional programming architecture can be modelled in three elements viz:  
**Domain:** the core, the functionality that models the domain behaviours and data.  
**Ports:** entry \(or exit\) points to the domain. It shall be composed by only pure functions. It will provide the predictability and testability we need for the most important part of the system and we can reason about it more easily due to its deterministic nature.  
**Adaptors:** shall contain all the functions that will access the external systems, i.e. that will perform side effects. So the impure \(non-deterministic\) functions will be enclosed in the boundaries of the application.

_Side tip for code reviewers_  
_If a function name contains "and", then it is a code smell; violation of single responsibility  
e.g. CreateXAndManageY\(\) should be CreateX\(\) + ManageY\(\)  
then function composition can be used to create a higher order domain functionality._

\#functional-programming \#design-patterns \#technology \#clean-architecture