# Charles-ka2
Key Assessment 2 - Salford City College; FutureSkills @ MediaCityUK 
---------------------------------------------------------------------
T-Levels Key Assessment 2 

Instructions 

All tasks will be completed and marked through git. 

All work must be submitted to the main branch.  

Read each question carefully, as they outline specific requirements which you must follow. 

Partial marks will be awarded for incomplete answers. 

You have unlimited access to the internet, cheat sheets, and any of your previous work.  

You may not speak to each other, use your phones, or use social media during lesson time. 

All commits must be made during lesson time. 

The total number of marks for this paper is 76. 

You have until 11:00 on Friday the 1st of December to complete this assessment. 

 

Task 0 – [8 marks] 

Create a git repository named <YOUR FIRST NAME>-ka2. For example, alex-ka2. [1 mark] 

Add me (username: AlexBowker) as an editor to your git repository. [1 mark] 

Create a React Typescript project. [1 mark] 

Remove all unnecessary demo code from the React project template [2 marks]. 

Change the title of your website [1 mark].  

Push your React project to your newly created repository. Include a relevant commit message. [2 marks] 

As this task is a prerequisite for the other tasks, you may ask for help on any of the steps, but in doing so, you will concede all associated marks for each step you are unable to complete by yourself. 

Hint: The cheat sheet should be sufficient in guiding you through each of the above steps. 

 

 

Task 1 – [14 marks] 

Create a component called Navbar.tsx.  

This navbar should be visible on all your pages. On the left should be three links titled “Home”, “Biscuit Clicker”, and “Temperature Checker” respectively. On the right should be text displaying the user’s current number of biscuits. For now, you can add a temporary placeholder for this, although there are marks associated with this task for displaying the globally accessible biscuit count you will implement in Task 3.  

The links should lead to pages with appropriate paths. You will populate these pages in later tasks. Attempting to visit an invalid path should result in a 404 page. 

Apply appropriate styling. Beyond displaying the three links on the left and the text on the right, you are free to style this navbar however you feel is reasonable. An example can be seen below: 

 

 

1 mark – create component called Navbar.tsx. 

1 mark – display correctly named links. 

3 mark – links correctly navigate to relevant page using routing. 

1 mark – appropriately named paths. 

1 mark – display biscuit text. 

1 mark – display correct biscuit count. 

1 mark – display links on the left of the navbar. 

1 mark – display biscuit text on the right of the navbar. 

1 mark – appropriate styling added beyond correct positions of elements. 

1 mark – 404 page displayed for invalid path.  

2 mark – good presentation of work.  

 

 

Task 2 – [10 marks]  

Create a component called ParagraphPair.tsx. It should take two strings as props, and display both side-by-side as centered paragraphs.  

Add this to your Home page component. Hardcoded text values should be passed into your ParagraphPair component. You should not need to define any strings within your ParagraphPair component.  

An example of what your home page should look like can be seen below: 

 A screenshot of a website

Description automatically generated 

 

1 mark – create component called ParagraphPair.tsx. 

2 marks – correctly pass in props for left and right paragraph. 

1 mark – correctly display both paragraphs. 

2 marks – apply appropriate styling to display paragraphs centered and side-by-side. 

1 mark – display component in home page. 

1 mark – correctly pass props into ParagraphPair component.  

2 marks – good presentation of work. 

 

 

 

Task 3 – [22 marks] 

Create a provider component and appropriate hook for managing two globally accessible numbers for both the biscuit count and biscuit multiplier. Both numbers should be stored in the browser, even after the browser window is closed.  

At this point, you may want to update your solution from Task 1 to correctly display the biscuit count. 

In your Biscuit Clicker page, create appropriate components to implement the following: 

A center-aligned biscuit image which increases the biscuit count by the biscuit multiplier every time it is clicked on. For example, a 1x multiplier will increase the biscuit count by 1, while a 2x multiplier will increase the biscuit count by 2.  

Appropriate text displaying instructions for the game, the current biscuit count, and the current biscuit multiplier. 

A button which is only visible whenever the user has 100 or more biscuits. Pressing this button should subtract 100 biscuits and increase the multiplier by 1. 

An example can be seen below: 

 

 

4 marks – correctly create biscuit context and provider. 

2 marks – correctly create custom biscuit hook. 

3 marks – correctly store biscuit count and multiplier using persistent storage. 

1 mark – correctly use biscuit provider to create global state. 

1 mark – create at least one appropriately named component in Biscuit Clicker page. 

1 mark – add biscuit image. 

2 marks – correctly handle logic for clicking on biscuit. 

1 mark – correctly display game instructions. 

1 mark – correctly display biscuit count and multiplier. 

1 mark – conditionally display upgrade button. 

2 marks – correctly handle logic for clicking on upgrade button. 

3 marks – good presentation of work. 

 

Task 4 – [22 marks]  

Create a component called TemperatureChecker.tsx that should be displayed on the Temperature Checker page. It should create a basic form which allows the user to enter a city. No styling needs to be added to this form. 

Upon submitting the form, an appropriate API should be used to report the current temperature in that city. This information should be displayed on the screen. An appropriate message should be displayed below the form, should an error occur.  

An example can be seen below: 

  

 

1 mark – create component called TemperatureChecker.tsx. 

3 marks – correctly set up form. 

11 marks – correctly send request to API and receive a valid response.  

3 marks – correctly process API response to display the temperature.  

1 mark – correctly display error message. 

3 marks – general presentation of work. 

 