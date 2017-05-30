/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

function whatToDoForLunch(hungry, availableTime) {
  if(hungry === true){
    console.log("I'm hungry");
    if(availableTime < 20){
      console.log("You have less then" + availableTime + " minutes. You to pick something up and eat in back in the Lab or in the kitchen, where you can get to know your fellow classmates.");
    } else if(availableTime >= 20 && availableTime <= 45){
      console.log("You have " + availableTime + " minutes. You deserve a break and could try a place in Gastown.");
    } else {
      console.log("You have " + availableTime + " minutes. This is a bootcamp after all and you should probably reconsider.");

    }
  } else{
    console.log("You are not hungry. Get back to work!");
  }
}

whatToDoForLunch(true, 20);
whatToDoForLunch(true, 50);
whatToDoForLunch(false, 30);
whatToDoForLunch(true, 15);