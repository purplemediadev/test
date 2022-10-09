//Question:
//You've created a application in which there are varied monetary values. Write a function that can abbreviate any number, to one fixed decimal place, with a letter (k, m, b, t) for it's unit:

const score1 = 194511;
// 194.5k

const score2 = 58132456;
// 58.1m

const score3 = 3437593785953;
// 3.4t

//seeing how the examples used appear to be appreviations of:
// k Thousands
// m Millions
// t Trillions

//I can only assume B is representative of billions

//custom score variable so we can check if the function is working outside of the given variables. this can be any number and should bring back the correct 
const custom_score = 420;

function get_best_measurement(input_val) {
    
    //using a index counter we find the exact unit of measurement to use when pushing our simplified number.
    //here the recursions variable is going to keep track of the amount of times we would need to divide by 1000 to simplify
    let recursions = 0;

    //div_value is going to be used to hold our highest number to divide the input value by. starting at 1000 we will times this by 1000 every loop of a while loop.
    //since quantitive units are calculated 1000 times higher than the last. no logic is required to find the value between units.
    //We know for fact the difference between k and m is an addition of three extra zeros on the end of the number.
    let div_value = 1000;

    //simp_val will be used to keep hold of our returning value after division. simp_val is short for simplified value
    let simp_val = input_val;

    /*
    the core of our function is going to rely on only two statements.
    First a while loop will run to determine the amount of times a value would need to be divided to reach its highest simplification
    Then a switch statement will use the amount of times the while loop was executed to match the value up to a specified unit of measurement
    using this method allows us to keep a default in place incase of a value being unreturnable or the input value being too low to warrent a specified unit.
    */

    //we check how many times we need to multiply the div_value by divding the input value but it currently and seeing if the result havent dropped below one.
    //while we're doing this we are adding one extra to our recursions index to use later in the switch statement.
    while ((input_val / div_value) > 1) {
        recursions++;
        simp_val = input_val / div_value;
        div_value = div_value * 1000;
    }

    //we use the amount of times we recurred in the while loop to found our unit of measurement
    switch (recursions) {
        case 0:
            //the while loop was never executed and so there is no way to simplify the value to a unit of measurement. so we should just return the value itself.    
            return input_val;
        case 1:
            // thousands
            return simp_val.toFixed(1) + "k";
        case 2:
            // millions
            return simp_val.toFixed(1) + "m";
        case 3:
            // billions
            return simp_val.toFixed(1) + "b";
        case 4:
            // trillions
            return simp_val.toFixed(1) + "t";
        case 5:
            // quadrillions
            return simp_val.toFixed(1) + "quad";
        case 6:
            // quintrillions
            return simp_val.toFixed(1) + "quint";
        case 7:
            // sextillions
            return simp_val.toFixed(1) + "s";
        default:
            // default value will return if the recursions in the while loop exceed the limit specified by switch cases
            return simp_val.toFixed(1) + " non specified unit of measurement";
    }
}

//console log command to check the function is working properly. the score used by the function can be any of the given scores or the custom score.
console.log(get_best_measurement(custom_score));