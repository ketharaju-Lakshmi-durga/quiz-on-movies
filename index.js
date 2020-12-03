const chalk=require("chalk")
const emoji = require('node-emoji');
const boom = emoji.get('boom');
const wave=emoji.get("wave")
const eyes=emoji.get("eyes")
const princess=emoji.get("princess")
const point_down=emoji.get("point_down")
const confused=emoji.get("confused")
const smiley=emoji.get("smiley")
const v=emoji.get("v")
const fire=emoji.get("fire")
const clap=emoji.get("clap")
const pumpkin=emoji.get('jack_o_lantern')
const fireworks=emoji.get('fireworks')
const relaxed=emoji.get('smiley_cat')

const bust_in_silhouette=emoji.get("bust_in_silhouette")
console.log(boom,boom,boom);
console.log(chalk.keyword('purple').bold.italic("Hi!"+wave+" "+ wave+" "+ wave+" "+ "This is Durga\nI have created an exciting quiz\nTry it out and have Fun !"))
var readlineSync=require("readline-sync")
console.log(chalk.green("-----------------------------"))
console.log(chalk.green("        Rules"))
console.log(chalk.hex('#ff1a66').bold("1.For each correct answer 1 point is awarded\n2.No negative marking\n3.For every game there exist 2 levels\n4.To play level2 you should complete level1 \nNote:Game-1 consists of 2 levels,10 questions in each Level\n    :Game-2 consists of 2 levels,5 questions in each Level"))
console.log(chalk.green("-----------------------------\n"))

var userName=readlineSync.question(chalk.hex('#ff8080').bold("Please enter your name")+smiley+" :")
var score=0
var levelone=0
var leveltwo=0
var h1=0,h2=0,a1=0,a2=0;
//var total=-1
var aladdinlevelone=0
var aladdinleveltwo=0
menu();
function playGame(ques,ans,a1,a2,a3,a4)
{ console.log(chalk.hex('#ff1a75').bold(ques))
console.log("\n")
   for(var i=2;i<arguments.length;i++)
{ 
  
    console.log(i-1+"."+chalk.hex('#ffdb4d').bold(arguments[i])+"\n")
  

}
  var userAns=readlineSync.questionInt(chalk.hex('#884dff').bold("enter ur the option  :"));
  if(arguments[userAns+1]===arguments[1])
  {
    score=score+1
    console.log(chalk.hex('#80ff00').bold("wow!Its correct good"))

  }
  else{
    console.log(chalk.hex('#ff0000').bold("No!Nice attempt TRY AGAIN!"))
  }
  console.log("________________________________________")
}//playgame
function menu()
{
 console.log(chalk.blue.bold("choose the one which you want to play from the menu"));
 console.log(point_down+" "+point_down+" "+point_down)
 var arr1=["Harry potter","Aladdin"]
 var index=readlineSync.keyInSelect(arr1,chalk.blue("which Quiz u wanna play ?"));

if(index==-1)
{
  if(readlineSync.keyInYN(chalk.blue("DO u really want to exit "+confused+" ?")))
  {
    console.log(chalk.hex('#ff1a75').bold("Okay! thank you ")+smiley);
  }
  else{
    console.log(chalk.hex('#ff1a75').bold("okay! choose again...! ")+smiley);
    menu();
    
  }
}
else if(index==0){
  if(levelone<5)
  { 
    if((h1==1)&&(levelone<5))
  {
    console.log(chalk.red("Wanna Try again? Here you go..."))
    level1();
  }
console.log(chalk.hex('#ff704d').italic("YOU have Selected  :"),chalk.hex('#4dffb8').bold(arr1[index])+pumpkin);
console.log(chalk.hex('#ff0055').bold("You have to score minimum 5 points to unlock Level-2.Lets get started......."+v));
console.log("_________________________________________")
level1();
}//nested if
else if(levelone>=5 && h2==0){
  console.log(chalk.hex('#ff6666').bold("YOu have already played level1"))
  if(readlineSync.keyInYN(chalk.hex('#ff6666').bold("Do u want to play level2  ? "+smiley)))
    { 
    
      level2();
    }
    

    else
    {
      if(readlineSync.keyInYN(chalk.hex('#ff6666').bold("Do u want to play other game?")))
      {
        menu();
      }
      else
      {
        console.log(chalk.blue("thank you! ")+relaxed+" "+relaxed);
        
      }
    }
}
else if(levelone>=5 && h2==1)
{
  console.log(chalk.hex('#ff6666').bold("You have played all the levels in Harrypotter"))
  if(aladdinlevelone<3 && a1==1)
  {
    
    if(readlineSync.keyInYN(chalk.green("You have not Completed Aladdin Level-1! Wanna Play?")))
    {
      abuLevel1();
    }
    else
    {
console.log(chalk.hex('#ff1a75').bold("Okay! thank you ")+smiley);
    }
  }
  else if(a1==0 && a2==0)
  {
    if(readlineSync.keyInYN(chalk.green("You have not played Aladdin! Wanna Play Level-1?")))
    {
      abuLevel1();
    }
    else
    {
console.log(chalk.hex('#ff1a75').bold("Okay! thank you ")+smiley);
    }
  }
  else if(aladdinlevelone>=3 && a2==0)
  {
    if(readlineSync.keyInYN(chalk.green("You have not played Aladdin Level 2! Wanna Play?")))
    {
      abulevel2();
    }
    else
    {
console.log(chalk.hex('#ff1a75').bold("Okay! thank you ")+smiley);
    }
  }
  else if(aladdinlevelone>=3 && a2==1)
  {
    console.log(chalk.hex('#ff6666').bold("You have played all the levels in Aladdin"))
  }
}

}//elseif//Game1

else if(index==1)
{ 
  if(aladdinlevelone<3)
  { 
    if((a1==1)&&(a2==0))
  {
    console.log(chalk.red("Wanna Try again Level 1? Here you go..."))
    abuLevel1();
  }
  console.log(chalk.hex('#ff704d').italic("YOU have Selected  :"),chalk.hex('#4dffb8').bold(arr1[index])+" "+fireworks);
console.log(chalk.hex('#ff0055').bold("lets get started ! "+v));
console.log(chalk.hex('#ff0055').bold("You need to score minimum 3 Points to reach leve12 "))
console.log("_________________________________________")
  abuLevel1();
  }//nested if
else if((aladdinlevelone>=3) && (a2==0))
{
  console.log(chalk.hex('#ff6666').bold("YOu have already played level1 in Aladdin"))
  if(readlineSync.keyInYN(chalk.hex('#ff6666').bold("Do u want to play level2  ? "+smiley)))
    { 
    
      abulevel2();
    }
   

    else
    {
      if(readlineSync.keyInYN(chalk.hex('#ff6666').bold("Do u want to play other game?")))
      {
        menu();
      }
      else
      {
        console.log(chalk.blue("thank you! ")+relaxed+" "+relaxed);
        
      }
    }
}
     else if(aladdinlevelone>=3 && a2==1)
{
  console.log(chalk.hex('#ff6666').bold("You have played all the levels in Aladdin"))
  if(h1==0 && h2==0)
  {
    if(readlineSync.keyInYN(chalk.green("You have not played Harry Potter! Wanna Play Level1?")))
    {
      level1();
    }
    else
    {
console.log(chalk.hex('#ff1a75').bold("Okay! thank you ")+smiley);
    }
  }
  else if(levelone<5 && h1==1)
  {
    if(readlineSync.keyInYN(chalk.green("You have not completed Harry Potter Level 1! Wanna Play again?")))
    {
      level1();
    }
    else
    {
console.log(chalk.hex('#ff1a75').bold("Okay! thank you ")+smiley);
    }
  }
  else if(levelone>=5 && h2==0)
  {
    if(readlineSync.keyInYN(chalk.green("You have not played Harry Potter Level 2! Wanna Play?")))
    {
      level2();
    }
    else
    {
console.log(chalk.hex('#ff1a75').bold("Okay! thank you ")+smiley);
    }
  }
   else if(levelone>=5 && h2==1)
  {
    console.log(chalk.hex('#ff6666').bold("You have played all the levels in Harrypotter"))
  }
}



  

}//menu
//**********************Harry potter level 1 */
function level1()
{ h1=1
  var harryPotter=[
    {
      question:"What does the scar on Harry’s head look like?",
      ans:"Lightening bolt",
      answers:["broomstick","owl","straight","Lightening bolt"],
    },
    {
      question:"At first Who tells harry that he is a wizard?",
      ans:"hagrid",
      answers:["uncle Vernon","hagrid","Dumbledore","hermione"],
    },
    {
      question:"What is the name of Harry’s snowy owl?",
      ans:"Hedwig",
      answers:["Ron","Hedwig","scabbers","pygmy puff"]
    },
    {
      question:"Which platform at King’s Cross station does the Hogwarts Express leave from?",
      ans:"Nine and three quaters",
      answers:["seven and four quaters","Ten","Nine and three quaters","six and five quaters"]
    },
    {
      question:"Which house is Harry Potter sorted into by the Sorting Hat?",
      ans:"Gryffinder",
      answers:["Gryffinder","slyderin","raven claw","Huffle Puff"]
    },
    {
      question:"which position does harry plays on his team?",
      ans:"seeker",
      answers:["chaser","seeker","Beater","keeper"]
    },
    {
      question:"Harry can speak and understand one of these animals?",
      ans:"snake",
      answers:["Owl","snake","dragon","Dementor"]
    },
    {
      question:"How many heads does fluffy has?",
      ans:"Three",
      answers:["Five","Four","Three","Six"],
    },
    {
      question:"who is the cousin of Harry",
      ans:"Dudley Dursley",
      answers:["petunia Dusley","Dudley Dursley","Vernon Dusley","Drace Dusley"]
    },
    {
      question:"Harrypotter film was directed based on novel written by_________?",
      ans:"J.K.Rowling",
      answers:["J.K.Rowling","crstopher columbus","jacie collins","maria semple"],
    }]
  for(var i=0;i<harryPotter.length;i++)
  {
    var current=harryPotter[i];
    playGame(current.question,current.ans,current.answers[0],current.answers[1],current.answers[2],current.answers[3]);

  }
  levelone=score
  console.log(chalk.hex('#ff1a75').bold("YAAAY!you score in level1 is :"+levelone))
  if(levelone>=5)
  {
    console.log(boom+" "+boom+" "+chalk.hex('#4dffff').bold("you have unlocked next level "+clap+" "+clap));

    if(readlineSync.keyInYN(chalk.hex('#4dffff').bold("Are u ready to play level2?")))
    {console.log("_____________________________________")
    score=0
      level2();
    }
    else{
      if(readlineSync.keyInYN(chalk.green("Do u want to play other game?")))
      {
        menu();
      }
      else
      {
        console.log(chalk.red("thank you! ")+smiley)
        
      }


    }
  }
  else
  {
    console.log(chalk.hex('#ff6666').bold("You need to score minimum 5 ponits for next level"))
    
    if(readlineSync.keyInYN(chalk.hex('#ff6666').bold("Do u want to play again ? "+smiley)))
    { score=0;
      level1();
    }
    else
    {
      if(readlineSync.keyInYN(chalk.hex('#ff6666').bold("Do u want to play other game?")))
      {
        menu();
      }
      else
      {
        console.log(chalk.blue("thank you! ")+relaxed+" "+relaxed);
        
      }

}

}
}//level1
//**********************HArry potter level2 */
  function level2()
  { h2=1
    score=0

    var harryPotter1=[
      {
        question:"Let's break the spell \n A protective charm that channels a person’s happiest memory to keep those soul-sucking Dementors at bay..",
        ans:"Expecto Patronum",
        answers:["Expelliarmus","Expecto Patronum","Avada Kedavra","Diffindo"],


      },
      {
        question:"A Squib and the caretaker of Hogwarts School of Witchcraft and Wizardry. He wandered the halls of Hogwarts with his cat Mrs. Norris.",
        ans:"flich",
        answers:["flich","fluffy","fig","flitwick"],

      },
      {
        question:"In  'Harry Potter and the Goblet of Fire' during the last round to touch Triwizard Cup at the center __________ killed by wormtail at graveyard and performs a ritual to restore Lord Voldemort to a body.",
        ans:"cedric diggory",
        answers:[" Fleur Delacour"," Viktor Krum","cedric diggory"," Frank Bryce"],

      },
      {
        question:"who is Harry's heroically Loyal Elf?",
        ans:"Dobby",
        answers:["Dobby","Krecher","winkey","Hookey"],

      },
      {
        question:"Name of Dumbledore's highly-intelligent phoenix...?",
        ans:"Fawkes",
        answers:["Fang","Fluffy","pixie","Fawkes"],

      },
      {
        question:"who taught defense against the dark arts at Hogwarts and was a pivotal member of the original Order of the Phoenix.",
        ans:"Professor Alastor Moody",
        answers:["Professor Alastor Moody","Professor Dolorus Umbridge","Professor Severus Snape","professor Remus rupin"],

      },
      {
        question:"Serius black can transform into_____?",
        ans:"Black Giant Dog",
        answers:["Rat","Black Giant Dog","Bare wolf","Snake"],

      },
      {
        question:"What kind of animal was Voldemort drinking from in the Forbidden Forest in Philosopher’s Stone?",
        ans:"Unicorn",
        answers:["Centaur","Basilisk","Acromantula","Unicorn"],

      },
      {
        question:"To enter the Hufflepuff common room, you must tap a barrel to the rhythm of a Hufflepuff-related word. Which is it?",
        ans:"Helga hufflepuff",
        answers:["Helga hufflepuff","Pomona Sprout","Badger","The fat fridar"],

      },
      {
        question:"How did Moaning Myrtle die?",
        ans:"she came face to face with Basilisk",
        answers:["she was killed by Aragog","she came face to face with Basilisk","she fell and hit her head in bathroom","she was poisoned by TomRiddle"],

      },
    ]
    for(var i=0;i<harryPotter1.length;i++)
  {
    var current=harryPotter1[i];
    playGame(current.question,current.ans,current.answers[0],current.answers[1],current.answers[2],current.answers[3]);

  }
  console.log("\n")
  leveltwo=score
  var total=levelone+leveltwo
   console.log(chalk.hex(' #ffff00').bold(fire+" your  score  in level2 "+fire+" :"+leveltwo))
  console.log(chalk.hex(' #ffff00').bold(fire+" your total score  upto level2 "+fire+" :"+total))

      if(readlineSync.keyInYN(chalk.hex('#ff6666').bold("Do u want to play other game?")))
      {
        menu();
      }
      else
      {
        console.log(chalk.blue("thank you! ")+relaxed+" "+relaxed);
        
      }


  
  }//level2
  //************Aladdin level1 */
  function abuLevel1()
  {a1=1
    score=0;
    var aladdin1=[
      {
        question:"What is the name of the kingdom in which entire play revolves ?",
        ans:"Agrabah",
        answers:["kazikistan","Agrabah","sheerabadh","Ababua"]
      },
      {
        question:"What is pet name of Aladdin ?",
        ans:"Abu",
        answers:["genie","Abu","rajah","Akira"]
      },
      {
        question:"Who is the princess?",
        ans:"Jasmine",
        answers:["Jasmine","Rose","Lilly","Emy"]
      },
      {
        question:"What do Aladdin do for living before he met genie?",
        ans:"Steal Things",
        answers:["Perform magic on streets","Steal Things","Travel world Through magic carpet","Works in Sulthan's Kingdom"]
      },
      {
        question:"Why did jasmine disguised herself as a commoner ?",
        ans:"To get a sense of life outside the palace.",
        answers:["To get a sense of life outside the palace.","To meet aladdin","To find genie","To escape from palace"]
      }]
      
    for(var i=0;i<aladdin1.length;i++)
  {
    var current=aladdin1[i];
    playGame(current.question,current.ans,current.answers[0],current.answers[1],current.answers[2],current.answers[3]);

  }
   aladdinlevelone=score
   console.log(chalk.hex('#ff1a75').bold("you score in level1 is :"+aladdinlevelone))
   if(aladdinlevelone>=3)
   {
    console.log(boom+" "+boom+" "+chalk.hex('#4dffff').bold("Yaaaay!you have unlocked next level2 "+clap+" "+clap));

    if(readlineSync.keyInYN(chalk.hex('#4dffff').bold("Are u ready to play level2?")))
    {
      console.log("_____________________________________")
      abulevel2();
    }
    else{
      if(readlineSync.keyInYN(chalk.green("Do u want to play other game?")))
      {
        menu();
      }
      else
      {
        console.log(chalk.red("thank you! ")+smiley)
        
      }


    }
  }
  else
  {
    console.log(chalk.hex('#ff6666').bold("You need to score minimum 3 points to unlock next level"))
    
    if(readlineSync.keyInYN(chalk.hex('#ff6666').bold("Do u want to play again ? "+smiley)))
    { 
      abuLevel1();
    }
    else
    {
      console.log("\n")
      if(readlineSync.keyInYN(chalk.hex('#ff6666').bold("Do u want to play other game?")))
      {
        menu();
      }
      else
      {
        console.log(chalk.blue("thank you! ")+relaxed+" "+relaxed);
        
      }

}

}
  
  }//level1
  //********************Aladdin level2 */
  function abulevel2()
  { a2=1
    score=0
    var aladdin2=[
      {
        question:"Where did aladdin Finds the magic Lamp?",
        ans:"cave",
        answers:["palace","streets of agrabah","cave","In his home"]
      },
      {
        question:"What is aladdin first wish?",
        ans:"To become prince",
        answers:["Unlimited wealth","To marry jasmine","To become prince","To become sulthan of agrabah"]
      },
      {
        question:"after his first wish,Aladdin Disguised himself as______?",
        ans:"prince ali",
        answers:["price rajah","prince ali","prince aladdin","price akira"]
      },
      {
        question:"Pet name of jafar",
        ans:"lago",
        answers:["luna","lago","lusy","lian"]
      },
      {
        question:"what is the last wish of aladdin?",
        ans:"To set genie free",
        answers:["To marry jasmine","To repair magic cart","To set genie free","Saving himself from drowning water"]
      }
    ]
    for(var i=0;i<aladdin2.length;i++)
  {
    var current=aladdin2[i];
    playGame(current.question,current.ans,current.answers[0],current.answers[1],current.answers[2],current.answers[3]);

  }
   aladdinleveltwo=score
   var total=aladdinlevelone+aladdinleveltwo
   console.log("\n")
  aladdinleveltwo=score
   var total=aladdinlevelone+aladdinleveltwo
   console.log(chalk.hex(' #ffff00').bold(fire+" your total score  in level2 "+fire+" :"+aladdinleveltwo))
  console.log(chalk.hex(' #ffff00').bold(fire+" your total score  [Aladdin] "+fire+" :"+total))


      if(readlineSync.keyInYN(chalk.hex('#ff6666').bold("Do u want to play other game?")))
      {
        menu();
      }
      else
      {
        console.log(chalk.blue("thank you! ")+relaxed+" "+relaxed);
        
      }

  }
  

  
  }//game2
var highest=[
  {
  name:"durga",
  score:18,
  total:20,
  game:"Harry Potter"
  },
  {
  name:"raji",
  score:9,
  total:10,
  game:"Aladdin",

}]
console.log("\n")
console.log("* * * * * * * * * * * * * * * *")
console.log("\n")
console.log(chalk.hex('#66ffff').bold("Your Score in HarryPotter  :"+(levelone+leveltwo)+"/20"))
console.log(chalk.hex('#66ffff').bold("Your Score in Aladdin  :"+(aladdinlevelone+aladdinleveltwo)+"/10"))
console.log("\n")
console.log("* * * * * * * * * * * * * * * *")
console.log()
console.log("\n")

console.log(chalk.green("-------------HIGHEST SCORES ARE----------"))
for(var i=0;i<highest.length;i++)
{ var current=highest[i]
console.log(chalk.blue("Name :")+chalk.keyword('purple').bold(current.name))
console.log(chalk.blue("score :")+chalk.keyword('purple').bold(current.score+"/"+current.total))
console.log(chalk.blue("Game :")+chalk.keyword('purple').bold(current.game))
console.log("______________________________________")
}
console.log("\n");
console.log(chalk.hex('#ffdb4d').bold("Send me the Screenshot of Your score If higher or Equal to score board"))
console.log("\n")
console.log(chalk.hex('#ff1a75').bold("THANK YOU FOR PLAYING ")+smiley)
console.log(boom+" "+boom+" "+" "+boom)
console.log("\n")

