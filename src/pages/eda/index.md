---
path: "/eda/"
date: "2018-02-25T09:00:00.000Z"
title: "EDA meta-analysis"
image: "cover.png"
tags: []
---

1. Intro
  1. I am learning AI. I am working through a couple Kaggle competitions to stretch my wings.
  2. Toxic competition is cool. Great EDA kernel.
2. What is EDA
  1. Exploratory Data Analysis. When you have a dataset, it can help to do a bit of exploratory analysis first.
  2. Great overviews exist.
  3. This is a run down to popular EDAs on Kaggle, and what they have in common.

# How I selected the EDAs

The fast.ai course lays out four types of ML problems: image classification, structured data, NLP, and recommendation engines. I'm going to combine recommendations and structured data since they can be kind of the same thing.

NLP datasets have some overlap with structured datasets, in that the NLP data often contains structured data. Because text has specific things I'm going to consider them separately.

I went through Kaggle and sorted by number of teams, a rough heuristic for popularity; I then pulled the top 4 for structured data, images, and NLP.

# Structured Data

For structured data, I went with [Titanic](https://www.kaggle.com/c/titanic), Seguro, Santder, and House Prices.

## Titanic
[There's tons of EDAs](https://www.kaggle.com/c/titanic/kernels?sortBy=relevance&group=everyone&search=eda&page=1&pageSize=20&competitionId=3136). And because this is rolling, I think over time these disappear. Is that true?


### https://www.kaggle.com/ash316/eda-to-prediction-dietanic
First they import the csv. Then they look at the head.

Look at the total null values. In this case, age, cabin, and embarked have null values.

There's nice charts about how many survived. Pie chart, and bar chart. Nice for visualizing.

Look at grouped data. For instance, survived by sex. First, he gets a raw count, then he builds a bar chart. He first plots what percentrage of each gender survived, and then shows a bar chart of raw numbers of males and females who survived. He draws some nice conclusions: "This looks interesting. The number of men on the ship is lot more than the number of women. Still the number of women saved is almost twice the number of males saved. The survival rates for a women on the ship is around 75% while that for men in around 18-19%."

He does a cross tab for PClass. Shows number of survivors / non survivors for a particular class of ticket. Charts of number of pchart, and then survivors per pchart.

Now he does a cross tab for Pclass, survied, and gender. And then he does a factorplot. so it becomes easy to see the relationships.

For age, he looks at the minimum and maximum. And the average.

A violin plot! That's purty. And shows that by pclass, by age, survival rate.

Now he's talking about null values. Argues against just assigning a random number. Says we can look at the name! Pretty smart! Splits out the names using a regex to get the salutation and then plots the number of times that appears by gender. Then he cleans the misspelled salutations and recombines. Then groups them. Then fills in appropriate ages for each salutation. Then again looks at survival per age and charts it. Draws observations based on that.

Looks at a factor plot for salutation, survival and ticket type.

Looks into embarkation (which port they boarded at). Similar kinds of charts as before.

For missing embarkations, since max number of passengers were from S, he replaces missings with S.

SibSip - does a crosstab to see if correlation between a sibling being present and survival. bar plots it and factor plots it. Does something similar for parents on board.

For fare (continuous variable), he pulls min, max, and average, then charts them. He bins them a bit

Finally, he draws some conclusions.

https://www.kaggleusercontent.com/kf/2154073/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..1AgOKgZWB-lDTx8IkFVTAQ.9buiIhsHOlO9mQ05LomfeqES6q54TeUd2i2aGrvHG1Y6NXyg9hMClld9G2oiBkWkl6X7Of8_HpckPGiw8dYg8xHuFUFoy2wco07-_aoFQFNUhR97-wmddsFsMJhNeXZZ.AJaTWNbej9CeIJhlbYoing/__results__.html#Observations-in-a-Nutshell-for-all-features:

"Sex: The chance of survival for women is high as compared to men.

Pclass:There is a visible trend that being a 1st class passenger gives you better chances of survival. The survival rate for Pclass3 is very low. For women, the chance of survival from Pclass1 is almost 1 and is high too for those from Pclass2. Money Wins!!!.

Age: Children less than 5-10 years do have a high chance of survival. Passengers between age group 15 to 35 died a lot.

Embarked: This is a very interesting feature. The chances of survival at C looks to be better than even though the majority of Pclass1 passengers got up at S. Passengers at Q were all from Pclass3.

Parch+SibSp: Having 1-2 siblings,spouse on board or 1-3 Parents shows a greater chance of probablity rather than being alone or having a large family travelling with you."

Next comes a heatmap for all features, to see correlations between features. Notes tht this is only good for numeric features.

### Feature Engineering

Not sure whether to include this but I'll analyse it.

He bins the ages.



https://www.kaggle.com/dejavu23/titanic-survival-for-beginners-eda-to-ml
https://www.kaggle.com/astandrik/journey-from-statistics-eda-to-prediction
https://www.kaggle.com/stephaniestallworth/titanic-eda-classification-end-to-end
https://www.kaggle.com/kueipo/super-guide-eda-of-titanic-updated-tree-digraph
https://www.kaggle.com/neviadomski/titanic-data-exploration-starter
https://www.kaggle.com/jkokatjuhha/in-depth-visualisations-simple-methods
https://www.kaggle.com/headsortails/pytanic
https://www.kaggle.com/omarelgabry/a-journey-through-titanic

I picked a number at random that were highly rated / had a number of comments.



## Images

For images, I went with icebergs, the nature conservancy, lung cancer, and leaves.

## NLP

For the NLP ones, I chose Toxic, NYTimes, Spooky author, and rotten tomatoes.
