MealPicker
=====

A small app for people who can't make up their minds about what to eat. This will provide the user with a random restaurant in their area.

Stuff to Know
------

I didn't feel like trying to handle every 5-digit number that is not a United States zip code, so it is possible to put in numbers like 34534, which leads to Istanbul. I did however code against unused numbers like 99999. This will just redirect back to the home page.

This app uses the [Locu API](https://dev.locu.com) to get all of the restaurant data displayed in this app.
