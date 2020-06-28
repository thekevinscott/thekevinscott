---
date: "2015-07-23T07:00:00.000Z"
description: "How to do i18n with Javascript"
url: "/javascript-internationalization/"
tags: ["javascript", "internationalization"]
title: "Javascript Internationalization"
hidden: true
---

I recently did some research on Javascript internationalization for a (mostly)
client-side Javascript app. Here are my thoughts and findings.

### Some definitions

**i18n** (*internationalization*) — The process by which software is made
language and locale neutral. i18n stands for 18 characters in the word
*internationalization*.

**l10n** (*localization*) — The processes to localize software into a specific
locale (includes translations, rules about numbers, currencies, dates, and
more).

## High-Level Considerations

Besides language translation, there’s other localization requirements to be
considered.

* **Dates** — Date formats change across cultures. For example, 10/4/15 means
October 4th in the US, and April 10th in the UK.
* **Times** — Different locales require either a 24-hour clock or 12-hour clock.
Also, some locales use different notations, like 5h10 in French.
* **Formatting of numbers** — Different locales use different digits to represent
numbers. So, 3,025.23 in English would be 3.025,23 in Greman, and 3 025,23 in
French.
* **Images** — If you have images with text, you need to make sure to provide
versions for each locale.
* **UI Spacing** — You need to provide enough space in the UI to handle expanded
lengths of words. IBM has provided [design
guidelines](http://www-01.ibm.com/software/globalization/guidelines/a3.html)
that specify an additional 200% space for short words; The W3 provides an
example of a translation for [Flickr requiring an additional 300% in
Italian](http://www.w3.org/International/articles/article-text-size.en).
* **Text Sorting** — Text sorting can vary by language. For instance, German has
two types of sort order, [phonebook and
dictionary](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/),
which determine whether to sort by sounds (umlauted vowels become to character
pairs: ä → ae, ö → oe, ü → ue.) or by character order.
* **Punctuation** — Different languages use different punctuation. [For
instance](https://en.wikipedia.org/wiki/Internationalization_and_localization),
double quotes in English (“ “) are represented as guillemets in French (« »).
* **Keyboard shortcuts** — If you have hotkeys that map to English words, these
should be updated with a mapping for each locale.
* **Outbound links** — External links to documentation will need to take language
into account.
* **Accessibility** — If the software offers accessibility options, those will
need to take the locales into consideration.

There’s a few more that I don’t need to handle for this particular project:

* **Currencies**
* **Addresses** — including zipcodes
* **Phone numbers**
* **Validation** — Luckily, we have no data input fields that would require
locale-specific validation (like number inputs or date/time inputs).

## Technical Considerations

### Keys

When translating strings, there’s no consensus on [how to specify
keys](https://stackoverflow.com/questions/10654056/best-practice-for-key-values-in-translation-files)
used for the strings. Three main strategies are used: English strings,
descriptive keys, and object keys.

#### English Strings

Using a string as a key might look like this:

    // returns "Welcome" in English,
    // and "Willkommen" in German
    _("Welcome")

Which would return the given string in English, and the translation in another
language.

This is the format that both [gettext](https://www.gnu.org/software/gettext/)
(Linux’s i18n implementation) and
[genstrings](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/genstrings.1.html)
(Apple’s i18n tool) use. Using English strings have a number of clear benefits:

* It directly shows the meaning of the text.
* If a translation is unavailable, it’s possible to fall back to the given string.
* Given that this strategy is the closest thing to an i18n key standard, if
browsers were to implement an i18n translation standard in the future, this will
probably be the strategy.

However, there are drawbacks:

* Using English as the default can lead to conflicting keys in other languages.
For instance, an English word “Email” might require two different texts in
French, [“E-Mail” or “Envoyer un
e-mail”.](https://stackoverflow.com/questions/10654056/best-practice-for-key-values-in-translation-files).
* If an English translation changes, every translation file’s keys needs to be
updated (though, presumbly, if an English translation changes, every other
language will have to change as well).
* For longer texts, specifying English strings keys could become verbose,
particularly for paragraph-length text.

#### Descriptive keys

Using descriptive keys for each translation is another oft-used solution that
would look like this:

    // returns "Welcome" in English,
    // and "Willkommen" in German
    _("WELCOME_MESSAGE")

This method solves many of the drawbacks of using strings (handling homonyms,
changing English translations without updating all language files, and less
verbose).

However, using abstract keys comes with its own set of disadvantages:

* It’s not immediately clear what a given string means, so metadata or comments
dictating the purpose and placement of strings would be necessary.
* No fallback is possible if a translation doesn’t exist.
* Collisions in key names could happen much more frequently.

#### Objects

Finally, we could use objects which is effectively a more advanced key
structures:

    // returns "Welcome" in English,
    // and "Willkommen" in German
    _("messages.welcome")

The main benefit here would be to keep things better organized by namespacing
various texts. This is the strategy that [Rails uses for their i18n
tool](http://guides.rubyonrails.org/i18n.html). It would also avoid the issue of
collisions highlighted above with a flat JSON object.

### Passing arguments

In many languages, [word order can
change](https://blogs.oracle.com/userassistance/entry/keeping_it_simple_yet_effective_facebooks_i18n_best_practices).
Therefore, it’s important that translations maintain the ability to change word
order in sentences. This means string concatenations should be avoided:

    // Bad!
    _("File moved to ") + folder_name + _("a few minutes ago")

    // Good!
    _("File moved to % a few minutes ago", %s)

Most libraries accept arguments in order or as named parameters which allows for
flexible input. This allows the developer to decide which method of input to
use, dependinding on whether verbosity or clarity is desired.

    // Passing arguments in order
    _('The first letters in the alphabet: %s %s %s', 'a', 'b', 'c')

    // Passing names arguments
    _('Welcome to %(version), %(user_name)', { version: 'Awesome Software', user_name: 'admin' })

### Plurals

Another problem between different locales [concerns
plurals](http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html).

Different languages have different rules for plurals. Polish, for instance, [has
four plural forms](http://alistapart.com/article/pluralization-for-javascript):

> *A plural rule defines a plural form using a formula that includes a counter. A
> counter is the number of items you’re trying to pluralize. Say we’re working
with “2 rabbits.” The number before the word “rabbits” is the counter. In this
case, it has the value 2. Now, if we take the English language as an example, it
has two plural forms: singular and plural. Therefore, our rules look like this:*

> *If the counter has the integer value of 1, use the singular: “rabbit.”If the
> counter has a value that is not equal to 1, use the plural: “rabbits.”*

> *However, the same isn’t true in Polish, where the same word — “rabbit,” or
> “królik” — can take more than two forms:*

> *If the counter has the integer value of 1, use “królik.”If the counter has a
> value that ends in 2–4, excluding 12–14, use “królika.”If the counter is not 1
and has a value that ends in either 0 or 1, or the counter ends in 5–9, or the
counter ends in 12–14, use “królików.”If the counter has any other value than
the above, use “króliki.”*

To solve this, [ICU’s
MessageFormat](http://userguide.icu-project.org/formatparse/messages) provides a
standard for formatting plurals in strings across languages. (It also specifies
how to handle genders in different languages.)

A message with plurals might look like this:

    'There {scans, plural, one{is # scan} other{are # scans}}';

The message above shows plurals inlined in the message. Another strategy is to
define each plural message separately:

    {
        SCAN_MESSAGE: {
            one: "There is # scan",
            other: "There are # scans"
        }
    }

Defining plurals using the latter strategy can become very verbose, especially
for longer text strings. Inlining plurals as shown in the first example is much
more concise.

### Translation formats

The obvious file format contender is JSON.

However, [gettext](https://www.gnu.org/software/gettext/), Linux’s standard
translation library, uses a format called [PO
files](https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html)
which is also worth considering.

The [format of a PO
file](http://pology.nedohodnik.net/doc/user/en_US/ch-poformat.html) is:

    white-space
    #  translator-comments
    #. extracted-comments
    #: reference…
    #, flag…
    #| msgid previous-untranslated-string
    msgid untranslated-string
    msgstr translated-string

There is wide support across languages for reading PO files, including
[Node](https://github.com/mikejholly/node-po),
[Python](https://polib.readthedocs.org/en/latest/quickstart.html), and
[Java](https://www.gnu.org/software/gettext/manual/html_node/Java.html).

A major argument in favor of using PO files is that it would allow us to take
advantage of the ecosystem that’s been built up around the PO format. For
instance, [POEdit](https://poedit.net/) is a popular translating tool; numerous
[online web services](https://webtranslateit.com/en/docs/file_formats/) offer PO
support; and any experienced translator will certainly be familiar with the PO
format.

Additionally, if you’re sharing translation files with a particular
non-Javascript backend, PO might be a more appropriate file format than JSON.

## Debugging and development

When it comes to debugging translation integration, a number of recommendations
are worth highlighting.

### Pseudo Language

A common recommendation is to set up an “pseudo language” for testing. This will
highlight all translated strings in the application and allow developers to
quickly locate any untranslated strings.

[One
solution](http://www.agileconnection.com/article/internationalization-best-practices-agile-teams?page=0,1)
is to simply pad English strings, making it easy to see missing strings:

> *“里îßEnter your name:里îß”*

Another option is to replace English with a [repeating
character](http://www.techrepublic.com/blog/10-things/10-tips-and-best-practices-for-software-localization/):

> *“XXXXX”*

[My
favorite](http://www.hanselman.com/blog/GlobalizationInternationalizationAndLocalizationInASPNETMVC3JavaScriptAndJQueryPart1.aspx)
is replacing English characters with similar, yet distinctly foreign,
replacements:

> *Ŝęľęčŧ äŉ äččőūŉŧ þęľőŵ ŧő vįęŵ őř đőŵŉľőäđ yőūř äväįľäþľę őŉľįŉę şŧäŧęmęŉŧş.*

### Identifiers

HTML elements containing translations should be tagged with the particular key
of the translation in development mode. This will make it easy to identify a
particular translation if it acts up.

## Conclusion

On Github [I’ve evaluated](https://github.com/scottlabs/i18n-research) a number
of i18n libraries. For my purposes, I’ve chosen to go with stitching a number of
libraries together in lieu of a framework, specifically MessageFormat.js,
Moment.js, and Intl (with Intl.js polyfill).

* [JavaScript](https://medium.com/tag/javascript?source=post)
* [Internationalization](https://medium.com/tag/internationalization?source=post)
