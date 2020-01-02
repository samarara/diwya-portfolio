---
templateKey: case-studies
title: Designing Onboarding Flows
date: 2017-09-01T00:56:07.727Z
description: Scotiabank case study
project-details:
  client: Scotiabank
  role: UX/UI Designer
  team: Scotia iTrade
featuredimage: /img/case_study_cover_1.jpg
tags:
  - case-studies
  - user-flows
---
# Background

Over the summer, I worked on Scotia iTRADE’s on-boarding platform where clients apply for an investment account. There are 3 different new client user flows that we were designing for: 

1. Direct Client flow
2. Financial Advisor assisted flow
3. Call Centre assisted flow

Below are the information architecture flows that I helped organize and design. These flows gave a better understanding for developers and stakeholders of what was planned for the new on-boarding interface. The information architecture displayed in these flows were changed several times, and were updated accordingly:

![](/img/direct_client_image.png)

## 

![](/img/fa_image.png)

![](/img/call_center_image.png)

# The Problem

In each flow, there is a _Client Expectations_ section where we advise the user of what is needed in the online application process for a Scotia iTrade account. The old client expectations interface is shown below:

![](/img/old_client_expectations.png)

The problem with this client expectations interface is that it's too easy to skim over for something that communicates important information on what the user should have to quickly complete the application process. When I first looked at this screen, I told my mentor/the UX lead that the client expectations screen should be more highlighted compared to what is currently displayed. Knowing that a change should be made, we asked ourselves two questions:

1. **Should client expectations be a modal or a separate page in the process?**
2. **Should it be before the user selects their account they wish to create or after?**

For the first question, much of our decision making came from looking at what other online application processes (and specifically what other financial institutions) are doing. 

![](/img/td_client_expectations.png)

As seen in the image above, most of them have a separate page for what to expect/bring before beginning the online application. In the context of our Scotia iTrade platform, modal dialogs are used to interrupt the flow in case of an error and to bring immediate attention to that action item. To be consistent, we decided that a modal at the beginning of the process would inappropriate, especially considering we want the users to feel ‘welcomed’ as they begin the application.
