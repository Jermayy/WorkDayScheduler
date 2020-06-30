# WorkDayScheduler
Full Stack Flex Exercise #5

# Description

This is a simple Workday Scheduler to demonstrate use of jQuery and Moment.js to create a functioning application. The user can enter their agenda in the text areas for each corresponding hour between 9am-5pm and save it so when they refresh the page it will remain until cleared.

Deployed Application URL: https://jermayy.github.io/WorkDayScheduler/




1. When deploys application, greeted to screen with 9 time blocks, each with a corresponding hour and save button. Browser will also display current date and time that application is launched


2. browser will check current time, display each timeblock as a different colour depending on:

- if hour has already past: colour = grey
- if current hour: colour = red
- if future hour: colour = green

![](/screenshot/1.png)


3. User can enter their task for a specific hour and click the save button to store the value 

![](/screenshot/2.png)

4. When user refreshes page, any saved values should repopulate their respective time blocks






# Notes
* There are numerous bugs in this application:
    - unable to implement feature to compare current time with timeblocks and change colour accordingly. Code currently changes class and colour of all blocks rather than go row by row --> code currently does not colour text boxes anymore
    - able to save objects into local storage, but unable to retrieve and repopulate timeblock values
* Planning to revisit this exercise at a later date to complete




Last Edited 22/06/2020