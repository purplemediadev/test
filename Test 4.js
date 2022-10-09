//Question: We have received two JS object from an API, but we need one merged object.
//You need to write a function to merge the data
//If any keys have conflicting values, they should be concatenated with " / "
//between each value. There should be no missing data. Try to write your function to support any variations of data, or multiple sources.


//#region provided example objects

const object_1 = {
    id: 1,
    name: "Res One",
    responses: [
        { id: 1, text: "A" },
        { id: 2, text: "B" },
        { id: 3, text: "C" },
    ],
};

const object_2 = {
    id: 2,
    name: "Res Two",
    responses: [
        { id: 1, text: "D" },
        { id: 3, text: "C" },
        { id: 4, text: "E" },
    ],
};

//#endregion

/*
for the sake of testing, showing off the reults of this function and making a fun easter egg inside of this test.
I will be adding 3 extra functions
*/

//#region custom objects

const custom_object = {
    index: 53,
    behaviour: "Rough",
    full_name: "Res Three Thirty",
    responses: [
        { id: 3, text: "F" },
        { id: 76, text: "G" },
        { id: 3, text: "A" },
    ],
    results: [
        { id: 2, text: "e" },
        { id: 3, text: "l" },
        { id: 4, text: "l" },
        { id: 5, text: "o" },
        { id: 1, text: "H" },
        { id: 6, text: "👋" },
    ],
};

const custom_object2 = {
    days: 3,
    behaviour: "Emotional",
    emoji: "✨",
    responses: [
        { id: 5, text: "F" },
        { id: 3, text: "G" },
        { id: 2, text: "A" },
    ],
    results: [
        { id: 4, text: "p" },
        { id: 6, text: "e" },
        { id: 3, text: "r" },
        { id: 5, text: "l" },
        { id: 2, text: "u" },
        { id: 1, text: "P" },
    ],
};

const custom_object3 = {
    time_off: 6,
    week: "Holiday",
    time_off_name: "Seeing friends",
    name_characters: [
        { id: 2, text: "D" },
        { id: 4, text: "a" },
        { id: 7, text: "D" },
    ],
    results: [
        { id: 3, text: "d" },
        { id: 1, text: "M" },
        { id: 2, text: "e" },
        { id: 5, text: "a" },
        { id: 6, text: "!" },
        { id: 4, text: "i" },
    ],
};
//#endregion

//This compare function isnt neccessary to the use of combine_objects function. It is used to sort arrays by their ID values.
//this was included solely for showing an easter egg (copy this page and paste it into a browser console and check "results: Array(6)")

//#region Compare function

function compare(a, b) {
    if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }
    return 0;
}

//#endregion

/* Thought Process
seeing the example objects given. the simple solution would of been to get the names of each value and add convert each value to a string to concat.
However, doing so wouldnt let this function be expandable to other objects that dont follow the same naming conventions. What if there was an object with an extra Array?
Because of that I've made this function longer. Based on for loop recursion, this function will take any amount of objects and not only meet the requirements of the test,
but also concat values that are not present in all of the objects as well as attach unique values to the resulting object.

the function needs to be fed an Array element in order
*/
function combine_objects(objects = Array) {
    //starting with some array checks. we're going to see if the array is greater than 1 to justify the rest of the function
    if (objects.length <= 1) {
        if (objects.length < 1) {
            //if the objects array is empty. we will return null with the intention of breaking the code and giving an error to find the point of the problem.
            console.error("an array with at least one object is required!. returning null to break code to ensure this is fixed!");
            return null;
        }

        //if the array only contains one item. we will check to make sure the item is an object. if not we will return null and an error again. if it is an object we will return the object as the rest of the function is meaningless for one object.
        if (typeof objects[0] !== 'object') {
            console.error("an item in the array is not an object!");
            return null;
        }
        else {
            console.log("the list of objects only contained one object. there was no need to use the combine_objects function");
            return objects[0];
        }
    }

    //we'll now create a blank loop_result object. this will be added to during the loop and be copied to the answer object after the function has finished checking each object it was fed
    let loop_result = {};

    //we'll start with a for loop to check the contents of loop_result as we go on. on its first loop. no arguments should be passed as the loop result object is empty
    for (loop_index = 0; loop_index < objects.length; loop_index++) {

        //we check again to see if the current object in the loop is an object. if this fails we again return null and send an error to console
        if (typeof objects[loop_index] !== 'object') {
            console.error("an item in the array is not an object!");
            return null;
        }

        //we start a new loop inside. now checking every key in the object that is being checkd by loop_index. doing this we can make sure every key is either unique or has another key with the same name and concat with more precision
        for (let i = 0; i < Object.keys(objects[loop_index]).length; i++) {

            //now we chack if the first object (object0_copy) contians the key in our loop_index object thats being check in the i loop. if it does we need to do some logic to make sure we handle it properly.
            if (Object.keys(loop_result).includes(Object.keys(objects[loop_index])[i])) {

                //we're going to need to use the index of the key that was found object0_copy, making a variable to hold this index will be cleaner than typing Object.keys(object0_copy).indexOf(Object.keys(objects[loop_index])[i]) when its needed
                let ind = Object.keys(loop_result).indexOf(Object.keys(objects[loop_index])[i]);

                //we check to see if the values of the two keys are the same. if they are then there is no reason to take any action an we can continue the current i loop.
                //if they are different. then we need to get ready to concat them.
                if (Object.values(loop_result)[ind] != Object.values(objects[loop_index])[i]) {

                    //we check to see if the values we're looking at are an array. if this is the case then we have approach concating the values differently.
                    if (Array.isArray(Object.values(loop_result)[ind]) == true) {
                        //the value is an array and now we need to enter another for loop to check that arrays values.

                        //we create two variables for the for loop. one (array_val) that will hold the array from the currently checked objects key and another (val)
                        //that will hold the array from object0_copy
                        let array_val = Object.values(objects[loop_index])[i];
                        //NOTE: we create the val variable because we need to be able to edit this. the array_val variable is made to make the code more readable.
                        let val = Object.values(loop_result)[ind];

                        //we go through another loop that goes through the array on the current object
                        for (let j = 0; j < Array.from(Object.values(objects[loop_index])[i]).length; j++) {

                            //we set up boolean to go off if the id of both keys in each array match.
                            let success = false;

                            //now we check each key in the val variable array. doing a loop on this specifically means we can check the data that we push to it after we check the data that was already there
                            for (let k = 0; k < val.length; k++) {

                                //if the j loop id value and the k loop id value match we can mark this as successful
                                if (array_val[j].id == val[k].id) {
                                    success = true;

                                    //we now check to see if the text in each are the same. if they arent we can concat them with / in the middle
                                    if (array_val[j].text != val[k].text) {
                                        //we make the change to the val variable value. as this is going to also be the one that holds the data when we push to the array. it only makes sense that we make our concats on it to to later export
                                        val[k].text = val[k].text + " / " + array_val[j].text;
                                    }
                                }
                            }
                            if (success == false) {
                                //if the k loop turns out not find a matchign id. we just push this variable data to the val array and continue with the loop
                                val.push(array_val[j]);
                            }
                        }
                        //at the end of the j loop. we will have check all variables and have a complete array inside of val. we can now add this to the loop results and
                        //continue the loop_index loop
                        loop_result[Object.keys(objects[loop_index])[i]] = val;
                    }
                    else {
                        //the value was not an array. this makes concatinating much simplier for us.
                        //the values store in the object are singular and will just need to be concatenated and added to the loop result
                        //after which we can then just continue the loop_index loop.
                        let val = Object.values(loop_result)[ind] + " / " + Object.values(objects[loop_index])[i];
                        loop_result[Object.keys(objects[loop_index])[i]] = val;
                    }
                }
            }
            else {
                //if the object key was not shared with the loop_result object then we can add the key to loop_result and continue the loop_index loop.
                //we check to see if the key's value is an array
                if (Array.isArray(Object.values(objects[loop_index])[i]) == true) {
                    //and then sort the array and add it to loop_result
                    let array_value = Object.values(objects[loop_index])[i];
                    array_value.sort(compare);
                    loop_result[Object.keys(objects[loop_index])[i]] = array_value;
                }
                else {
                    //and if its not. then we just add the key to loop_result and continue the loop_index loop
                    loop_result[Object.keys(objects[loop_index])[i]] = Object.values(objects[loop_index])[i];
                }
            }
        }
    }

    //finally we will just return loop result as it is a fully concatinated version of all given objects.
    return loop_result;
}

//below are a const array of objects and a console.log to show the function is working
const objects_list = [object_1, object_2, custom_object, custom_object2, custom_object3];
console.log(combine_objects(objects_list));

//hope this is okay!
//liam fortune