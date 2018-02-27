---
path: "/exploratory-data-analysis-strategies/"
date: "2018-02-25T09:00:00.000Z"
title: "Common strategies for exploratory data analysis on Kaggle"
image: "cover.png"
tags: ["kaggle", "eda", "deep learning", "machine learning", "data science", "statistics"]
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



*Try to find 3 examples of EDA per competition*. Try to find 2 competitions per category.
Overview:
Structured: Titanic, and some crazy Car one I don't understand.
NLP: Toxic, and Spooky.
Images: Leaves and Lung cancer



# Structured Data

For structured data, I went with [Titanic](https://www.kaggle.com/c/titanic), [Seguro](https://www.kaggle.com/c/porto-seguro-safe-driver-prediction/data<Paste>), and [Santander](https://www.kaggle.com/c/santander-customer-satisfaction/data).

## Titanic
[There's tons of EDAs](https://www.kaggle.com/c/titanic/kernels?sortBy=relevance&group=everyone&search=eda&page=1&pageSize=20&competitionId=3136). And because this is rolling, I think over time these disappear. Is that true?


#### Other options:

https://www.kaggle.com/astandrik/journey-from-statistics-eda-to-prediction
https://www.kaggle.com/stephaniestallworth/titanic-eda-classification-end-to-end
https://www.kaggle.com/kueipo/super-guide-eda-of-titanic-updated-tree-digraph
https://www.kaggle.com/neviadomski/titanic-data-exploration-starter
https://www.kaggle.com/headsortails/pytanic
https://www.kaggle.com/omarelgabry/a-journey-through-titanic

I picked a number at random that were highly rated / had a number of comments. I did not look at final score.


[What is feature engineering?](https://www.quora.com/Does-deep-learning-reduce-the-importance-of-feature-engineering)



# https://www.kaggle.com/ash316/eda-to-prediction-dietanic
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

## Feature Engineering

Not sure whether to include this but I'll analyse it. The next one kind of interweaves FE with the analysis so maybe worth including.

He bins the ages. He creates a feature, family_size and alone (bool).
He bins fare prices.
He converts string values to numeric values.

He drops a number of features that are redundant or irrelevant.

# https://www.kaggle.com/dejavu23/titanic-survival-for-beginners-eda-to-ml

He looks at the training head.

He calls info on the dataframe. Draws some conclusions from it.

He then looks at the test head.

And he describes it. Graphs survived vs. not survived. Looks at gender breakdown of survivors. Percent and does pie charts.

Looks at survival by pclass. Gets percentage of survivals across each pclass, and factorplots it. And then does all three.

Looks at embarkments, looks at survivals. factorplots those.

Does a crosstab of survived, gender, pclass, and embarkment. Also submits models at each step with the accuracy - kinda cool!

## Feature engineering

Bins to 8 buckets. Why? Don't know. Factorplots the binned ages, survival, pclass and sex. crosstabs it.

Looks at siblings, parents. factorplots and crosstabs that.

*So what I'm taking away is they're taking one column, two columns, maybe more, and bar charting, factorplotting, and cross tabbing to look for correlations in the data.*

Bins the fares to 12 bins.

# https://www.kaggle.com/jkokatjuhha/in-depth-visualisations-simple-methods

She takes the info on the data frame, and then the head, and describes it.

She does describe(include=['O']) - what does this do? Maybe retunr object? *UNCLEAR*

She engineers a feature to pull out cabin letter.

She has a nice set of bar charts on survival vs each other data. Then draws conclusions.

She draws a nice combined chart that puts age with KDE, and survival / not survival. *What is KDE?*

She draws an interesting conclusion, and suggests that you could engineer a feature for "child" or "adult".

She draws a stacked chart which is kinda cool, showing pclass and embarked. Get a sense of what kind of passenger each port is.

Does a boxplot of pclass, fare, and survival rate. Violin plot too.

Does a factor plot for survival, family size, by gender.

Look at titles, plots them by pclass. Bins them in a similar way.

Looks at cabin (first letter), and looks at survival rates.

Does a heatmap of the various features.

Now she talks about imputation. She identifies the null columns - cabin and age. For embark she fills it with the max embarkment. She does a complicate technique to fill in age. Then she checks the disruption using kdeplot. Pretty nice!

## Takeaways

Everyone looks at the head, and describes the data frame. 2nd guy draws some conclusions from it. 2nd guy also looks at the test head.

First guy looks at the total null values. 3rd does that at the end.

Everyone starts with looking at the breakdown of survivors, and then the breakdown of survivors by gender. Cross tabs, factor plots, and violin plots are all popular. Look for correlations among the data.

3rd has some prettier graphs.

Feature engineering begins to diverge a bit more. Age binning can differ, as can title and fare binning. Only 3rd does child / adult.

Also, imputation differs. First recommends looking at existing data to predict imputation values. 3rd checks the disruption using a kde plot which seems really smart.

# House Prices

# https://www.kaggle.com/pmarcelino/comprehensive-data-exploration-with-python

Looks at all the columns. Divids columns up into type (numerical or categorical). Divides categories up by segment. By expectation. And the author's conclusion about that column. The author then comes up with a few columns warranted furhter study.

The author then `describe`s SalePrice (the target variable). Plots the sale price using a histogram. Draws conclusions, like:

"Deviate from the normal distribution.
Have appreciable positive skewness.
Show peakedness."

Gets skewness and kurtosis.

Does a scatter plot of sale price and `GrLivArea` and discovers a linear relationship. Does so with others too.

Does a box plot between a categorical variable (`OverallQual`) and `SalePrice`.

Looks at `YearBuilt` to `SalePrice`.

Finds some linear relationships in teh data, and some categorical relationships as well. Author writes:

"The trick here seems to be the choice of the right features (feature selection) and not the definition of complex relationships between them (feature engineering)."

Author acknowledges hte subjective approach.

Runs a correlation matrix (heatmap style). The author then drills down into the features most strongly correlated with SalePrice. Finds some highly correlated variables that can be thrown away.

Author builds a bunch of scatter plots that are correlated to `SalePrice`.

Author moves onto missing data.

"missing data can imply a reduction of the sample size. This can prevent us from proceeding with the analysis. Moreover, from a substantive perspective, we need to ensure that the missing data process is not biased and hidding an inconvenient truth."

Author plots number of missing data cells. Author chooses to delete columns where 15% or more of cells contain missing data. In fact the author mostly throws away missing variables instead of imputing them.

Author establishes a heuristic for identifying outliers. Finds that nothing is too crazy.

The author returns to the visual plots, and based on that and renewed knowledge, manually deletes outliers in the data.

The author explores normality of the data. Author then transforms the data, taking the log and gets a normalized result.

So this is a lot of transforming data, to get it normalized.

# https://www.kaggle.com/xchmiao/detailed-data-exploration-in-python

Head and describe data. Get columns, describe the saleprice.

Plot the saleprice in a histogram.

Does a heatmap of the numerical features.

Lists numerical features, descending by their correlation with `SalePrice`. Finds some good candidates, but then also looks for variables that are correlated with each other.

Does scatter plots for a few columns.

Then digs into categorical features. Plots neighborhood. Plots other categorical variables. Violin plot, other plots. Does a factorplot for fireplace. Crosstab.

Just plotting a ton of features against saleprice.

Ends with looking at missing values in alley.


# https://www.kaggle.com/caicell/fun-python-eda-step-by-step

Starts by looking at missing values.

Deletes rows where there are missing values and they only number a few.

Remove features with too high of a correlation.

Impute a value.

Find outliers and get rid of them.

Plot `GrLivArea` to `SalePrice`.

Looks at other variables - Basement, 2ndFlr, etc.

cross tab of bath.

Looks at season.

Look at skewness and kurtosis.

Ends with 3d plotting a few variables.


Other Kernels:

https://www.kaggle.com/skirmer/fun-with-real-estate-data

https://www.kaggle.com/dgawlik/house-prices-eda

https://www.kaggle.com/shaoyingzhang/data-exploration-and-prediction-of-house-price

https://www.kaggle.com/yassineghouzam/eda-introduction-to-ensemble-regression

https://www.kaggle.com/notaapple/detailed-exploratory-data-analysis-using-r

https://www.kaggle.com/tannercarbonati/detailed-data-analysis-ensemble-modeling


# Seguro
Next up - Seguro!

So the interesting thing here is these columns are totally anonymised.


"Features that belong to similar groupings are tagged as such in the feature names (e.g., ind, reg, car, calc).
Feature names include the postfix bin to indicate binary features and cat to indicate categorical features.
Features without these designations are either continuous or ordinal.
Values of -1 indicate that the feature was missing from the observation.
The target columns signifies whether or not a claim was filed for that policy holder."


# https://www.kaggle.com/headsortails/steering-wheel-of-fortune-porto-seguro-eda

Uses summary and glimpse tools to look at the data. Gets min, 1st quartile, median, mean, max, for each category. Identifies number of missing values.

Then he spends some time graphing:

"We start our exploration with overview distribution plots for the various features. In order to make this visualisation more comprehensive, we will create layouts for the specific groups of features. For the sake of readability we divide each group into multiple parts.

These plots will be one of the pillars of our analysis. They might not be particularly exciting in themselves, but whenever we find an interesting effect in one of the variables we can come back here and examine their distribution. It’s always an advantage to start with a clear view of the parameter space."

I don't fully understand this part. But his conclusion is interesting: Many more non-filed claims than claims, which means the problem is imbalanced.

He then goes through and charts whether an individual parameter lines up, and also plots a confidence interval. This is very extensive.

He does a correlation matrix plot to see if any features are related. He draws interesting finding: "Most features appear to be primarily correlated with others in their group. We can see this by studying the upper right region near where the diagonal would be and comparing it to the lower left area of the plot.

There is no obvious correlation with the target feature in the left-most column. This could be caused by the sparsity of the target == 1 values."

He does an alluvial diagram! HOly moly what the fuck is this thing! I have no idea what the hell I'm looking at.

This is some advanced stats shit. He examines one-to-one relations for all pairings.

He throws up some interactive bullshit what the fuck my man.

He does overlapping curves.

Based on what he saw in the previous section, he says:

"The previous section has revealed a notable amount of variation in the continuous feature ps_car_14 from interactions with correlated categorical features. This was something that we did not see based on the distribution of ps_car_14 alone. Therefore, it is reasonable to ask whether other features might interact in a similar way. That analysis is the subject of this section."

So the previous data analysis elucidated something that he did not see originally, that led him to ask whether other data might demonstrate the same correlations.
 
# Feature engineering

Looks at number of NAs per ID. He draws some real interesting conclusions here, and says: "The differences between 0-4 and 6-8 NAs suggests that we might have two distinct populations here which reflect differences in the policy holder’s characteristics. It will be well worth coming back to these distinctions during the course of our further analysis."

I'm pretty lost on this shit.

# https://www.kaggle.com/bertcarremans/data-preparation-exploration

Head and tail. It confirms how the data was talked about. Looks at shape. Checks duplicate rows in training set. Then checks shape of test data. Notes that the missing variable in test is the target variable.

So this guy talks about metadata, storing meta information about the variables in the data frame. That allows him to do something cool like meta[(meta.level == 'nominal') & (meta.keep)].index

Then he's able to look at variables by metadata, which is kinda cool. This also lets him describe the dataframe on non-categorical variables, which is cool. Looks at ranges, missing values.

He then describes ordinal variables. He then describes binary variables and notices that it is strongly imbalanced, just like the other guy said.

Talks about data cleaning, like checking for missing values, and then checking cardinality of categorical variables.

Now the dude graphs a bunch of stuff. Talks about how missing values should be kept as a separate category value.

He builds a heatmap, and finds strong correlations between a few variables. Bunch of nice plots here.

He calls pd.get_dummies - wtf does this do.

Ok now I'm totally lost again with this motherfucker.


Other Options:

https://www.kaggle.com/shaz13/beginner-friendly-eda-porto-s-safe-driver

https://www.kaggle.com/anuragmaravi/eda-porto-seguro-s-safe-driver-prediction

https://www.kaggle.com/peatle/eda-investigating-trends

https://www.kaggle.com/kueipo/simple-safe-driver-prediction-eda

https://www.kaggle.com/neviadomski/data-exploration-porto-seguro-s-safe-driver

https://www.kaggle.com/captcalculator/a-very-extensive-porto-exploratory-analysis

https://www.kaggle.com/asindico/porto-seguro-the-essential-kickstarter

https://www.kaggle.com/sudhirnl7/simple-logistic-model-porto






## NLP

For the NLP ones, I chose [Toxic](https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge), [Spooky Author](https://www.kaggle.com/c/spooky-author-identification).

# Toxic

# https://www.kaggle.com/jagangupta/stop-the-s-toxic-comments-eda

tail the data. Looks at total rows per each, and percentge. Looks at the class imbalance - many more clean comments than toxic. Checks for missing or null values. None.

Graphs number of comments per category. Notices that toxicity not spread evenly - could lead to class imbalance problems. Notices that, because the sum adds up to greater than 100%, this indicates the presence of multiple tags. So then he digs into a bar chart of number of tags per comment.

He does a heatmap of the categories, to see if there's correlation between the categories. He then does a crosstab. Does a confusion matrix to find correlation between toxic and severe_toxic. Looks at a few example comments.

He builds some word clouds.

Then he talks about his feature engineering ideas. He builds some indirect features; count_sent, count_word, etc. Builds some derived features too.

Builds a violin plot, to see if there is a pattern between length of comment and toxicity. Not really.

Looks at uniqueness vs toxicity. Discovers that spammers tend to be more toxic.

Talks about adding leaky features that will help in this specific example but not outside of it. Looks at unique IPs.

For count features, talks about cleaning the dataset. Converts to lower case, throw s away line breaks, various symbols, tokenizes, lemmatizes.

Finds top words per category. Then finds top bigrams per category.

# https://www.kaggle.com/rhodiumbeng/classifying-multi-label-comments-0-9741-lb

Describes the data, discovers no missing values. Discovers that there must be many clean comments. No need to clean up anything.

Looks at total rows. Looks at character length and does a histogram of those.

Looks at correlation between target vars. Discovers some patterns.

He then cleans up the data by replacing slang and comments and lower casing.

# https://www.kaggle.com/fcostartistican/don-t-mess-with-my-mothjer

He removes words with no meaning, and then groups to find their average score for ech category, and removes words not repeated 300 times.

Plots words that tend to correlate with a particular category. Uses a biplot.

Discovers that a word with a typo tends to indicate category. For instance, mother and mothjer. When spelled correctly it tends to be a threat.

After looking into the data he decides to delete words that are counted twice within the same comment, and rerun the analysis.

And he finds new words associated with categories!





https://www.kaggle.com/ambarish/toxic-comments-eda-and-xgb-modelling

https://www.kaggle.com/clinma/eda-toxic-comment-classification-challenge

https://www.kaggle.com/mamamot/finding-most-toxic-words



# Spooky Author

[Spooky Author](https://www.kaggle.com/c/spooky-author-identification).

What's cool about this dataset is there's very little unstructured data accompanying it, unlike the previous one. All there is is a snippet of text, an id, and one of three authors - Edgar Allan Poe, HP Lovecraft, or Mary Wollstonecraft Shelley.

# https://www.kaggle.com/arthurtok/spooky-nlp-and-topic-modelling-tutorial

First step: look at a couple rows. Look at the shape. Plots out the number of stories for each author.

Then, before cleaning the data, he takes the word frequencies in the dataset. Unsurprisingly its a lot of filler words:

"Notice anything odd about the words that appear in this word frequency plot? Do these words actually tell us much about the themes and concepts that Mary Shelley wants to portray to the reader in her stories?

These words are all so commonly occuring words which you could find just anywhere else. Not just in spooky stories and novels by our three authors but also in newspapers, kid book, religious texts - really almost every other english text. Therefore we must find some way to preprocess our dataset first to strip out all these commonly occurring words which do not bring much to the table."

Builds wordclouds for each of the authors.

Has a nice run down of text pre-processing steps:

Tokenization - Segregation of the text into its individual constitutent words.
Stopwords - Throw away any words that occur too frequently as its frequency of occurrence will not be useful in helping detecting relevant texts. (as an aside also consider throwing away words that occur very infrequently).
Stemming - combine variants of words into a single parent word that still conveys the same meaning
Vectorization - Converting text into vector format. One of the simplest is the famous bag-of-words approach, where you create a matrix (for each document or text in the corpus). In the simplest form, this matrix stores word frequencies (word counts) and is oft referred to as vectorization of the raw text.

He then talks about each of these steps. Basically, how to get from messy text to a format readable by a computer.

So then after preprocessing he looks at top 50 word frequencies, and they're different. Also looks at bottom 100 word frequencies, which is interesting.

# https://www.kaggle.com/ambarish/tutorial-detailed-spooky-fun-eda-and-modelling

He looks at the data.

Looks at median length of sentences by different authors, and plots that. Looks at number of words, by author.

Tokenizes, and removes stop words.

Looks at top ten most common words. Word clouds the common words. Word clouds each author and plots most common words.

Then he wants to find the most important words written by the authors. Explains how to do it. Finds them. Finds that common words have low TFIDF. Then charts the twenty most common words, per author. Word clouds those. Then looks at most common bigrams, and trigrams.

Author then looks at relationships between words. Which words are most likely to follow others.

Author performs sentiment analysis on the texts, and charts the positive / negative scores for each of the three authors. Then charts positive / negative words for each author.

Performs sentiment analysis to find: "fear", "surprise", "joy". Plots each author. Looks at gender words.

Now, the author adds features to the data. Those are:

"Number of commas

Number of semicolons

Number of colons

Number of blanks

Number of others

Number of words beginning with Capitals

Number of words with Capitals"

# https://www.kaggle.com/headsortails/treemap-house-of-horror-spooky-eda-lda-features

Digs into word clouds, and by author.

Does charts for word count / author, sentence length / author, word length / author.

Looks at the overall popular words, split by author.

Then looks at relative frequency of word use between authors. And compares authors together.

Also does TF-DIF, like the previous writer. Looks at the most author-specific words.

Looks at bigrams per author. Also looks at trigrams. Looks at positive vs. negative words.

Does a wordcloud of positive and negative words.

Builds a negativity index, per author. Looks at count, and then looks at fraction of negative words per sentence.

This author has the idea to look at babynames, and see if authors are more likely to use a given name. Charts the number of times a name is used, # of distinct first names, name being at the start of a sentence, and name at end of sentence.

Author looks at sentence topics. See correlation between a topic and an author.

Author looks at starting words per author, and last words.

Looks at gender pronouns, and word usages.

Looks at number of unique words, and fraction of distinct words per sentence.

Looks at dialogue markers.

Looks at alliteration.

Throws out an alluvian plot.






https://www.kaggle.com/bsivavenu/lsa-model-on-spooky-author-data

https://www.kaggle.com/anuragmaravi/eda-spooky-author-identification

https://www.kaggle.com/sandpiturtle/eda-fe-nb-xgb

https://www.kaggle.com/lemur78/classification-4-models-and-simple-eda

https://www.kaggle.com/kanav0183/spooky-halloween-eda-lb-0-6


# Images

For images, I went with [lung cancer](https://www.kaggle.com/c/data-science-bowl-2017/), and [leaves](https://www.kaggle.com/c/leaf-classification/).

We'll pick one that is domain specific: lung cancer. And we'll pick one that is more general images, a multi label classification problem of dog breeds.


# Lung Cancer

# https://www.kaggle.com/gzuidhof/full-preprocessing-tutorial



# https://www.kaggle.com/anokas/exploratory-data-analysis-4

# https://www.kaggle.com/amorsili/fast-exploratory-data-analysis-in-r

https://www.kaggle.com/apapiu/exploratory-analysis-visualization

https://www.kaggle.com/mumech/loading-and-processing-the-sample-images

# Leaves

# https://www.kaggle.com/lorinc/feature-extraction-from-images

# https://www.kaggle.com/selfishgene/visualizing-pca-with-leaf-dataset

# https://www.kaggle.com/josealberto/fast-image-exploration

https://www.kaggle.com/selfishgene/visualizing-k-means-with-leaf-dataset

https://www.kaggle.com/bhuvaneshwaran/leaf-classification

# Dog Breeds

https://www.kaggle.com/jeru666/dog-eat-dog-world-eda-useful-scripts

https://www.kaggle.com/dansbecker/exercise-convolutions-for-computer-vision

https://www.kaggle.com/pvlima/use-pretrained-pytorch-models

https://www.kaggle.com/kaggleslayer/simple-convolutional-n-network-with-tensorflow

https://www.kaggle.com/johngull/breed-distribution

