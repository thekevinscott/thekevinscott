---
path: "/we-moved-to-a-services-based-architecture-while-building-our-bot-and-it-is-awesome/"
date: "2016-07-12T07:00:00.000Z"
description: "Arguments for using microservices"
title: "We moved to a services-based architecture while building our Bot and it is awesome"
tags: ["chatbots", "microservices", "node.js"]
description: "Building a bot using a set of microservices."
---

The first draft of Emoji Salad, our Emoji Pictionary bot, was a monolithic
Node.js app. The server would respond only when a request came in via SMS. If
there was a critical error, the whole server would fall on our heads, making it
difficult to diagnosis the error and impossible to continue conversations. On
top of that, deployments were nightmares that brought the possibility of
disrupted conversations, if messages were received during a deployment.

Our current implementation uses a microservice based approach:

![A diagram of our architecture](diagram.png)

Moving to a services-based architecture has brought some big wins for us:

#### Separation of concerns

Isolating each service to its core functionality has made it easier to reason
about what each one does. Since each service must interact through a defined
API, we can drastically refactor one service without affecting any of the
others.

For example, our first draft used an HTTP-like model, where server routes would
be matched via regex against incoming messages. At a certain point in
development, we realized we wanted the bot to be able to initiate messages to
users, things like

> Hey, we’re still waiting on that clue submission!

and gentle encouragements like:

> This clue’s a doozy! Don’t forget, the emojis are 📽🤖❤️🤖

With a service-oriented architecture, we were able to rebuild how the Bot
service processed messages, so it could spin itself to initiate messages to
users, without affecting the other services (or even having to redeploy them).

Also, since we’ve done the work of defining how exactly the Bot expects to
receive incoming messages, adding support for other messaging platforms (like
Facebook Messenger) is a cinch.

#### Improved Testability

With isolated services, it’s easier to write targeted tests.

By requiring each service to have a well-designed API for interaction, it
becomes easier to make sure you’re testing the right things. Smaller services
should have fewer dependencies, too. And as an added bonus, service-only test
suites should take less time to run, which means you can run them more often.

We do have extension integration tests across all the services, which is a topic
for another article.

#### Easier Deployments

It’s easier to deploy individual services, and fix them when they go down. For
instance, our message queues rarely change; we have the confidence to know that
if the Bot itself goes down, we’ll still be collecting incoming messages from
users, and we’ll be able to handle those messages once the Bot comes back
online.

Services do introduce overhead around managing multiple services and their
dependencies, but Vagrant and Docker go a long way towards smoothing out that
process.

---

There’s plenty more refactoring we could do; for instance, we’re eager to break
apart our Bot service further, which is currently handling both the message
parsing and the logic of the script driving the bot interactions.

Overall, moving to a services-based architecture has allowed us to iterate
faster with much more overall stability, meaning a better bot experience from
start to finish.
