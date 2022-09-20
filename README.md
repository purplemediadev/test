# :wave: PurpleMedia Developer Test

## Front-End

These tests have been designed so we can assess how you tackle problems, problem solving is a huge part of what we do at Purple. These tests shouldn't take you more than a couple of hours, and just gives us a feel for how your brain works. :nerd_face:

### Our stack

We're always assessing what the best technology is for our products. Right now we're using some of the following across the front-end, from our legacy projects, to our upcoming.
* VueJS (3 CLI)
* VueX
* SASS
* jQuery
* Gulp
* TypeScript

### Rules

Try not to use any frameworks/libraries for these. The supplied code can be sent as a pull request, .zip, codepen etc.

## Test One

We've got the following object in a legacy projects state management.
```
progress = {
    onboardingPassed = false,
    diversityPassed = false,
    foiPassed = false,
    ethicsPassed = false,
    socialPassed = false,
    quizPassed = false
}
```

Write a function that can return a boolean for whether all values match `true` or `false`.

## Test Two

You've created a game in which there are multiple score values, ranging from 0 to 1,000,000,000. Write a function that can abbreviate any number, to one fixed decimal place, with a letter (k, m, b, t) for it's unit:

```
const score1 = 194511
// 194.5k

const score2 = 58132456
// 58.1m

const score3 = 3437593785953
// 3.4t
```

## Test Three

Here's a few css challenges, plenty of ways to approach them, these have been taken from [cssbattle](https://cssbattle.dev). Feel free to use SCSS on these. 

Again, just to see your approach

### Graphic one

![css battle play/34](https://cssbattle.dev/targets/34.png)

![css battle play/80](https://cssbattle.dev/targets/80.png)

![css battle play/48](https://cssbattle.dev/targets/48.png)

## Test Four

We have received two JS object from an API, but we need one merged object.
```
{
    id: 1,
    name: 'Res One',
    responses: [
        { id: 1, text: 'A' },
        { id: 2, text: 'B' },
        { id: 3, text: 'C' },
    ],
},
{
    id: 1,
    name: 'Res Two',
    responses: [
        { id: 1, text: 'D' },
        { id: 3, text: 'C' },
        { id: 4, text: 'E' },
    ],
}
```

You need to write a function to merge the data in the following:
```
{
    "id": 1,
    "name": "Res One / Res Two",
    "responses": [
        {
            "id": 1,
            "text": "A / D"
        },
        {
            "id": 2,
            "text": "B"
        },
        {
            "id": 3,
            "text": "C"
        },
        {
            "id": 4,
            "text": "E"
        }
    ]
}
```

If any keys have conflicting values, they should be concatenated with " / " between each value. There should be no missing data. Try to write your function to support any variations of data, or multiple sources.

## Summary

Try to comment your code to explain the decisions you've made, use clear naming conventions and follow whatever methodologies you deem most appropriate for each task. If you're unsure of any tasks, don't panic, get in touch and we'll explain a little further.

Good luck! :crossed_fingers:
