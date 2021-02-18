# ID_AimDotTrainer_Assignment3

GitHub Page link - https://jordankwek.github.io/ID_AimDotTrainer_Assignment3/

Assignment 3: Aim Dot Trainer
This website allows users to play an "aim training" game, where they click on a target that randomly appears in a fixed play area. Depending on the different modes, this repeats for a certain number of point (1 target = 1 point), or a fixed time. There are a total of 4 modes to this game: Blitz, Sprint, Precision and Zen, which will be explained later on. Additionally, a reddit API is used to show users various articles related to FPS aiming. 

Design Process
This project was made with the goal of allowing its users to play this aim trainer game in order to improve their reaction time and mouse accuracy, in order to enhance and improve their gameplay when playing various other First Person Shooter games. 
We believe that we were successful in fulfilling this as we were able to make multiple modes of this game, and also making the website visually appealing, along with adding some additional features.

User Stories: 
- As a gamer, I want to use this website in order to train my aim and make it faster and more accurate while having fun.
- As a E-Sports coach, I want to let my students use this website to improve their aim, either for upcoming competitions or just for regular training

In the assignment folder, a wireframe can be found that we made in order to get a template for what the website should look like. Though the final product is not exactly like the wireframe, the changes were made after consideration and realising that these current changes make the website better than the one in the wireframe. The wireframe made it a lot easier to code as we had a picture of the website in our heads

Existing Features
- Feature 1 - Mode 1, Blitz: The user has to click on as many targets and accumulate as many points as he can within the 30 second time limit. 
- Feature 2 - Mode 2, Sprint: The user has to click on 50 targets to accumulate 50 points as fast as possible
- Feature 3 - Mode 3, Precision: The user has to click on 25 targets and accumulate 25 points as fast as possible, but the targets are a lot smaller as compared to the other modes of gameplay
- Feature 4 - Mode 4, Zen: In this gamemode, the user enjoys free and easy gameplay as there is no time or point limit, and will go on until the user either clicks on stop or reset. 
- Feature 5 - In all of the modes, there is a clock that counts either up or down to show the user how much they took, or how much time they have left. 
- Feature 6 - In all of the modes, there is an option to restart the game at anytime on top of the play area. 
- Feature 7 - At the end of every game, the points accumulated, as well as the time taken will be output and shown to the user. 
- Feature 8 - The logo in the navbar and the target for all the gamemodes uses Lottie animation. 
- Feature 9 - In the navbar, the logo and title of the website leads to the index page of the website when clicked. The item "Play Games" is a dropdown menu to the different gamemodes that drops down when hovered over. In the index page, when "Play Games" is clicked, it leads to the Game Modes section of the page, while in other pages, clicking it will simply leave the dropdown menu there.
- Feature 10 - In the navbar, the option "Change Background" allows the user to switch the background image when clicked to suit the user's preference.
- Feature 11 - The first portion of the index page features a carousel. which changes pictures either after a set interval or when the user clicks on the previous or next button. The bars at the bottom also indicate which picture is currently showing. 
- Feature 12 - In the gamemode portion of the index page, when the user hovers over the picture of a gamemode, the picture expands, the opacity of the image gets lowered, and the name of the gamemode appears with a smooth animation. 
- Feature 13 - In the last portion of the index page, the footer, it features two different forms, "Report a Bug" and "Contact Us", which opens up with an animation when the user clicks on their respective name. The user can then click on the down arrow at the bottom of the form to close up that respective form.
- Feature 14 - A media query is used, which means that the website will reformat itself after becoming smaller than a width of 756px. In addition, the navbar also switches to a burger menu, which will expand the other options of the navbar when clicked on.
- Feature 15 - A reddit API is used to show posts related to improving aim in FPS games. The user can then click on the respective link to go to the full post.  


Technologies Used
This website uses html, css, javascript and bootstrap.
- html is used to determine the content and what goes into the website. 
- bootstrap is used inside html classes to format and help with other content such as navbar to make the website organised according to what we want. 
- css is used in conjunction with bootstrap to design the website and dictate what should go where
- javascript is used to implement the complex and interactive features onto the website. In this website, it is also used to operate the game portion of the website, the change of background, as well as the animation of the contact form. 


Credits:
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartkey.com%2Fview%2Fiiixwih_red-gun-target-logo%2F&psig=AOvVaw19__d1fgWZ8CC-MLo4Z-E8&ust=1612597130852000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDrq86e0u4CFQAAAAAdAAAAABAW
https://pngtree.com/element/down?id=NDYwOTk5Ng==&type=1&time=1613544304&token=YjNlZTc5MzI0NWY5Yjg2MTc2MThmNjBlY2EyNjZmNjU=
https://www.vhv.rs/viewpic/hTxmwxT_transparent-man-running-png-running-man-white-silhouette/
https://wallpapersafari.com/w/vOTg5M
https://www.onlinewebfonts.com/icon/555134



- For the counting timer javascript code
http://jsfiddle.net/Ratan_Paul/9uy0kqs1/