---
path: "/exploratory-data-analysis-strategies/"
date: "2018-02-25T09:00:00.000Z"
title: "Common strategies for exploratory data analysis on Kaggle"
image: "cover.png"
tags: ["kaggle", "eda", "deep learning", "machine learning", "data science", "statistics"]
---



Kaggle is a website for doing data science competitions. / It's a good idea to understand the data you're working with before trying to jump in and build a deep learning model.


Usually the process is something like:

1) initial data analysis
2) data clean up, hypotheses
3) building the model
4) submissions, rinse repeat

That first step - the data analysis, or EDA - is what I want to look at today.

*While running through a Kaggle competition I felt the EDA (Exploratory Data Analysis) was super helpful. I wanted to get a sense for what different types of EDAs looked like across domains.*

I want to see if there's any similarities or differences between the various approaches people take to data analysis.

> Data Scientists spend [the] vast majority of their time by data preparation, not model optimization. - [Lorinc](https://www.kaggle.com/lorinc/feature-extraction-from-images)

I looked specifically at EDA as well as feature engineering. The difference between the two is blurry so I included both. I stopped before getting into models or any sort of actual machine / deep learning.

[What is feature engineering?](https://www.quora.com/Does-deep-learning-reduce-the-importance-of-feature-engineering)

----


# Methodology

I chose three target domains from which to choose competitions to examine:

* Structured data
* NLP (natural language)
* Images

I chose these because Fast.ai covers these three domains along with recommendations which I think is similar enough to structured data problems.

(NLP datasets have some overlap with structured datasets, in that the NLP data often contains structured data. Because text has specific things I'm going to consider them separately.)

I did notice there's a lot of structured data competitions with a lot of team entries, which is interested because Jeremy discusses there not being a lot of scientific literature on those types of problems.

*I vaguely modeled these off of fast.ai. There's definitely others that could be done (I'm very interested in audio). (The fast.ai course lays out four types of ML problems: image classification, structured data, NLP, and recommendation engines. I'm going to combine recommendations and structured data since they can be kind of the same thing.)*

---

For each of these domains, I chose two competitions, based roughly on how many teams had submitted for it (and whether it was closed or not). Then, I did a search for EDA-tagged kernels within the competition, and chose three that were highly rated, well commented or just well-written.

I ended up picking the following competitions:

Structured: Titanic, and House Prices
NLP: Toxic, and Spooky.
Images: Leaves and Lung cancer

# Findings

For structured data, EDAs seem to follow similar formats. For instnace, all the Titanic EDas are almost identical in their analyses. Houses prices less so, but still follow the same general thrust - looking for correlations between different variables.

NLP EDAs share some similarities, but there's also a bit more variability in the approach. In particulr, with feature negineering.

Finally, images are all over the map. Really creative approaches to data analysis.



## Structured Data Competitions

Structured data problems tend to come with one or more `csv` files containing training and test data. The spreadsheets could contain categorical variables (e.g., colors like "green", "red", and "blue"), continuous variables (e.g., Ages like "4", "15", and "67") and ordinal variables (e.g., educational level, like "elementary", "high school", "college", etc.) Often they have all three. There is a target column that you are effectively trying to solve for (that will be missing in the test data), and so much of the EDA tends to focus on discovering potential correlations between the target variable and the rest of the data.

The competitions I chose to analyze were the [Titanic](https://www.kaggle.com/c/titanic) competition and the [House Prices](https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data) competition. Titanic is a popular beginners' competition with a rolling leaderboard; Lots of folks on Kaggle tend to start with Titanic. House Prices is a bit more complicated and boasts numerous categorical, ordinal and continuous features, some of which are relevant and other which are not.

## Titanic
[There's tons of EDAs](https://www.kaggle.com/c/titanic/kernels?sortBy=relevance&group=everyone&search=eda&page=1&pageSize=20&competitionId=3136). And because this is rolling, I think over time these disappear. Is that true?





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




#### Other options:

https://www.kaggle.com/astandrik/journey-from-statistics-eda-to-prediction
https://www.kaggle.com/stephaniestallworth/titanic-eda-classification-end-to-end
https://www.kaggle.com/kueipo/super-guide-eda-of-titanic-updated-tree-digraph
https://www.kaggle.com/neviadomski/titanic-data-exploration-starter
https://www.kaggle.com/headsortails/pytanic
https://www.kaggle.com/omarelgabry/a-journey-through-titanic

I picked a number at random that were highly rated / had a number of comments. I did not look at final score.




# House Prices

House Prices is a dataset that is blah bblah.

https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data



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






## NLP

NLP problem tend ot be characterizd by blah blah.

For the NLP ones, I chose [Toxic](https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge), [Spooky Author](https://www.kaggle.com/c/spooky-author-identification).

# Toxic

Warning: some of these comments are nasty to read.

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




Other kernels:

https://www.kaggle.com/bsivavenu/lsa-model-on-spooky-author-data

https://www.kaggle.com/anuragmaravi/eda-spooky-author-identification

https://www.kaggle.com/sandpiturtle/eda-fe-nb-xgb

https://www.kaggle.com/lemur78/classification-4-models-and-simple-eda

https://www.kaggle.com/kanav0183/spooky-halloween-eda-lb-0-6


# Images

For images, I went with [lung cancer](https://www.kaggle.com/c/data-science-bowl-2017/), and [leaves](https://www.kaggle.com/c/leaf-classification/).

Lung cancer is very domain specific and features additional structured data. Leaves do not.


# Leaves

"The dataset consists approximately 1,584 images of leaf specimens (16 samples each of 99 species) which have been converted to binary black leaves against white backgrounds. Three sets of features are also provided per image: a shape contiguous descriptor, an interior texture histogram, and a ﬁne-scale margin histogram. For each feature, a 64-attribute vector is given per leaf sample."

# https://www.kaggle.com/lorinc/feature-extraction-from-images

The author finds the center of each image. The author then finds the edges of the leaf. The author then converts hte image into polar coordinates. Author realizes they must first transform the image to 0,0. Author will use the contour, not the image of the leaf (save space). Author is successful post transformation, migrating the image into polar coordinates.

Author comes up with an idea: split each sample into half and treat as two samples?

Author looks for CENSURE feature detection, Harris corner detection. Then looks for local minima maxima on the polar ocordinate image.

Author talks about mathemtical morpholoy from scipy.

Author then realizes there's noise around the edge of the imge. Shows the original image - there is noise all right. Author figures out a way to remove the noise. Ends the kernel with a lovely image of a leafe and a distance map.

# https://www.kaggle.com/selfishgene/visualizing-pca-with-leaf-dataset

Author starts by showing a bunch of different leaves.

Author shows variance directions of the images.

Looks at image reconstrutions - I don't understand this part.

Dives into model vriation around the mean image. He explains:

"The upper most row contains the data distributions of each eigenvector (i.e. the histogram along that "direction")
The second row contains what we already saw in a previous plot, what we called the variance directions.
The forth row contains the median image of leafs. notice that this row is identical for all eigenvectors
The third row holds the 2nd percentile images of each eigenvector. it's easier to think of this as the median image minus the eigenvector image multiplied by some constant. i.e the image we see is the forth row image, minus the second row image, when the second row image is multiplied by a constant. The constant is chosen to show the varying degree of influence of this specific eigenvector on the "average" image, so we can visualize what type of variation this particular eigenvector tends to
capture. 2nd percentile will subtract a relatively large absolute value from the median image, showing us what images look like when this coefficient is highly negative. 98th percentile would be just the opposite, showing us what images look like when this coefficient is at the upper end of the range. 50th percentile would give us a "middle of the road" effect of this coefficient."

Then dives into some eigenvectors. Looks for images that correspond to hte vectors.

The author then plots a scatter plot fo the what the fuck.

# https://www.kaggle.com/josealberto/fast-image-exploration

This author looks at the training data; views what the various species are. Sees that there are 10 images per species.

then creates a gif of each image and sees they look similar to each other.

Other kernels:

https://www.kaggle.com/selfishgene/visualizing-k-means-with-leaf-dataset

https://www.kaggle.com/bhuvaneshwaran/leaf-classification


# Lung Cancer

# https://www.kaggle.com/gzuidhof/full-preprocessing-tutorial

"Working with these files can be a challenge, especially given their heterogeneous nature. Some preprocessing is required before they are ready for consumption by your CNN."

"Loading the DICOM files, and adding missing metadata
Converting the pixel values to Hounsfield Units (HU), and what tissue these unit values correspond to
Resampling to an isomorphic resolution to remove variance in scanner resolution.
3D plotting, visualization is very useful to see what we are doing.
Lung segmentation
Normalization that makes sense.
Zero centering the scans."

The author talks about messing with DICOM data which comes in a specific format. The author looks at an image. Using the image and the histogram allows the author to interpret the medical picture.

One issue with these medical image is that the space between pixels can differ. The author recommends resampling to a certain resolution. Because of rounding, this is a difficult process. The author then 3d plots the images to get a nice view of the CT scan.

The author wants to reduce the problem space, and will do this by segmenting the lungs. He does this by removing the air. The author works up to a plot showcasing the air within the lungs which is very cool.

The author normalizes the data by throwing away values outside of the bounds.

The author finalizes by centering the data so the mean value is 0.


# https://www.kaggle.com/anokas/exploratory-data-analysis-4

The author starts by looking at the number of scans per patient, total number of csans, and a histogram of dicom files per patient. Also looks at file size. Then looks at csv - whether a given patient has cancer or not.

The author checks to see if there's a correlation between ID and cancer (for instance, if the dataset authors messed up). The author finds no correlation, meaning the dataset is well sorted.

Author pulls a dicom image and then reads information about i.

Author then looks at an image. Author plots a whole bunch of images. Author plots all slices for a particular patient. Author builds a gif of the images and ends on that.


# https://www.kaggle.com/apapiu/exploratory-analysis-visualization

Author lists some images for a patient, and looks at shape of imge.

Author builds a sweep of a torso. Looks at a patient from various angles.

Author decides to try edge detection. First looks at distribution of pixel values. Does a histogram - sees a distribution that is bimodal with lots of missing values.

Does an edge detection with a Sobel filter, then cranks up the threshold to show it better.

# https://www.kaggle.com/amorsili/fast-exploratory-data-analysis-in-r

Author looks at the csvs.

Author looks at images, looks at a paritcular patient image. Looks at a set of patient images.

Author does some image manipualtion.


Other kernels:

https://www.kaggle.com/mumech/loading-and-processing-the-sample-images
