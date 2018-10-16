"use strict"
let grantHealth = 10;
let userHealth = 40;
let userWins = 0;

//prompt

//while (start === yes) 

let start = prompt("do you want to play:");
if (start === "yes"){

     let userName = prompt("what is your name?");

     while (start){ 

        //generate the random numbers between 1 and 2

        //play game 
        grantHealth -= Math.floor(Math.random() * 2) + 1;
        userHealth -=  Math.floor(Math.random() * 2) + 1;
        console.log(userName + " has " + userHealth + " lives left");
        console.log("Grant has " + grantHealth + " lives left");

            //round win for user
            if (grantHealth <=0 ){
                userWins+=1;
                if (userWins === 3){
                    console.log("the winner is " + userName + ".");
                    break;
                }
                else {
                    grantHealth = 10;
                }
            }
            if (userHealth <= 0){
                console.log("You lose! Goodbye");
                break;
            }
        }
    }