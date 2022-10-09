//QUESTION:
/*
Write a function that will return either ‘completed’ | ‘in progress’ | ‘not started’ depending on the states of each value.

If all values are true, return ‘completed’
If all values are false, return ‘not started’
If a mix, return ‘in progress’
*/

//example object given:
const progress = {
    onboardingPassed : false,
    diversityPassed : false,
    foiPassed : false,
    ethicsPassed : false,
    socialPassed : false,
    quizPassed : false,
};


/*
The core of the function is quite simple as the problem to be solved is quite simple and the function wouldnt have a logical way to be expanded.
We will just need to count the amount of true booleans in the object with a for loop at the length of the objects value array.
with the number of true booleans then known we can use a switch statement to determine if the object is either not started, in progress or completed.

with the nature of the original demand. It seems to me there would be no need to make sure the function could handle variable types outside of booleans.
this function is clearly needed to find the progress of a larger task with smaller parts of said task being tracked through objects.
however, just for safety. we can include a check to see if a value is equal to a float 1 value. As there is a possibility that tasks inside the object could have
their progress tracked on a percentage. With no reference for how their progress is tracked though, I'll resort to float values being at a maximum of 1
*/

function IsComplete(progress_obj) {
    
    //we start the function by checking to make sure the given object actually contains any keys. if this isnt the case we just retrun an error.
    if(Object.keys(progress_obj).length < 1) {
        console.error("no values in the given object");
        return "no values in the given object";
    }

    //we make a variable to hold the progress of the for loop. this variable is also what is used to decide which return to use in the later switch statement.
    let completion = 0;

    //using a for loop. we will go through each keys value in the object and counting the number of true booleans using the completion variable.
    for(i = 0; i < Object.values(progress_obj).length; i++)
    {
        //inside of the loop. we can check the value of each of the keys. we check with an else after checking if the value is true just incase there is a value that
        //is tracked with a percentage of completion.
        if(Object.values(progress_obj)[i] == true) {
            completion = completion + 1;
        }
        else if(Object.values(progress_obj)[i] > 0) {
            completion = completion + Object.values(progress_obj)[i];
        }
    }

    //finally. since we have an object that has more than one value assigned to it. we can use the completion variable to find our return.
    //the only two values we need to know in this case are 0 and the amount of values in the object. all other results would be marked as in progress.
    switch (completion) {
        case 0:    
            return "not started";
        case Object.values(progress_obj).length:
            return "completed";
        default:
            return "in progress";
    }
}

//console log to test the function
var result = IsComplete(progress);
console.log(result);