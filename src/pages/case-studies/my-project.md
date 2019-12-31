---
templateKey: case-studies
title: Improving Construction Documentation
date: 2019-12-28T00:13:17.394Z
description: 'PlanGrid (Autodesk) Case Study '
project-details:
  client: 'PlanGrid, an AutoDesk Company'
  role: Product Design Intern
  team: Field Reports
featuredimage: /img/img_2637.jpg
tags:
  - case-studies product-strategy user-interviews visual-design
---
# Background

My experience as a product design intern at PlanGrid was quite different than previous design internships I’ve had. I was working on making improvements to an already established product on the app called _Field Reports_, which involved more user research and feature prioritization than I had been exposed to in the past. This case study will walkthrough a few features that I worked on, and why it improved the overall Field Reports experience on the app. 

## Discovery and Goals

One of the primary goals in addition to improving the overall usability of Field Reports is to increase the use of Native Field Reports among customers, rather than them choosing to upload a PDF of their own. This allows for more data collection and cross integration for other PlanGrid products. 

Zendesk is a common ticketing tool used to gage what customers request for Field Reports product. It was discovered that one of the most requested feature items to be improved on since its initial release in 2017 is weather on Field Reports. An image of the old weather on Field Reports is shown below. 

![Old Weather on Field Reports Web](/img/weatherwebold.png)

Users asked for more detailed information on how Weather impacted a construction site, specifically for “three time a day” weather on Field Reports. 

> If you could notate the weather throughout the day….. so if its sunny in the morning when you start your day, and turned to rain in the afternoon, it would be helpful to be able to log in and update weather…..
>
> Can you input multiple weather snapshots into a daily report…like at different times during the day
>
> Hi, is there a way to get a three time a day weather report?

# Design Process

Collecting user comments and feedback allowed us to define a general problem statement: 

**How might we better show the impact of weather on a construction site on a daily basis?** 

This question became the lens through which I looked at my designs, and expanded into other questions that began my user research. 

## Research

Being relatively new to the construction problem space, I wanted to gain a background on how weather can impact a construction site. I began my research through existing documents already found on PlanGrid or online on the impacts of weather. Some of the impacts I found were:

* By decreasing productivity and sometimes halting construction 
* By ruining unprotected and exposed constructed elements 
* By disrupting communications and/or blocking access to site locations 
* Moreover, weather-related claims are a frequent source of dispute between contractors and project owners
* By providing poor conditions and concerns for safety for crew members

Source: <https://www.tandfonline.com/doi/full/10.1080/01446193.2018.1478109>

After gaining some background knowledge, I decided to interview Customer Advocates (CA’s). CA’s  are people employed by PlanGrid with a construction background that can provide more in- depth knowledge on what the practices and pain points a user may go through on the field.

After gaining some background knowledge, I decided to interview Customer Advocates (CA’s). CA’s  are people employed by PlanGrid with a construction background that can provide more in- depth knowledge on what the practices and pain points a user may go through on the field.

![Screenshot ](/img/screen-shot-2019-10-01-at-10.43.12-pm-1.png)

During a site visit, I also got the opportunity to talk to a Field Manager on who frequently checks Field Reports during the end of a work day. Some of the most notable things mentioned were:

* Yes they need progress of weather throughout the day
* Temperature – is important. For example there is a specific temperature range needed for grout. Safety concerns is a priority if weather is too hot. 
* Rain/precipitation: Can cause delays, no work gets done (it is needed on the feature) 
* Wind conditions can also be very important since they can impact material handling and crane picks greatly on the job site.

![](/img/img_2637.jpg)

Many ideas came to mind after hearing the requests and concerns by customer advocates, but I knew it was important to check with the engineering team to determine the feasibility of some of their requests. For example, the API e were planning to use was DarkSky, so I began my research on what weather statistics the API was able to provide. This lead to the following chart created below:
---

| Weather Statistic Type | Previous Weather                                                                            | Current Weather                                                              | Future Weather                                                                                | Other                                                   |
|------------------------|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Temperature            | Provides temperature at every time                                                          | Provides current temperature                                                 | Provides predicted <br>temperature (not just<br>Highs and Lows, but the <br>forecast as well) |                                                         |
| Precipitation          | Provides:<br>- precipitation probability<br>- total accumulated precipitation<br>  that day | Provides <br>- precipitation probability<br>- estimated accumulation<br><br> | Provides<br>probability <br>percentage                                                        | Rain has total<br>amount of predicted<br>inches per day |
| Wind                   | Provides wind in mph at each <br>point in time                                              | Provides wind in mph                                                         | Provides predicted<br>wind in mph                                                             |                                                         |
| Humidity               | Provides percentage                                                                         | Provides humidity in percentage                                              | Provides percentage                                                                           |                                                         |

This allowed me to come to the conclusion that precipitation should be shown as estimated accumulation followed by actual accumulation on a Field Report, as it was not simple or practical to show accumulation in chunks of time as the API does not support it.

## Synthesize

I then synthesized all the feedback I received from customer advocates and the engineering team into the following table which highlights the feature requirements, things that were considered but not included, and items that customers would want but were too complex to implement for this new iteration of weather on Field Reports. This table allowed everyone on the team to better understand the scope of the project, and gave me a clear plan as I began the UI mockups.

![](/img/screen-shot-2019-10-02-at-3.00.54-pm.png)

## Design Iterations

When designing UI mock-ups, these are the four steps I took:

**_Step 1: Look at what competitors are doing for our feature, and other similar UI patterns_** 

![](/img/screen-shot-2019-10-03-at-6.30.37-am.png)