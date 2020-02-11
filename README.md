# Steven Universe Click It

### Live Link: https://kimblesandbits.github.io/StevenUniverseClickIt/

## Problem
The idea was to use React to create a game where you had a grid of images and each needed to be clicked once. After a click, the images are shuffled and a point added. When you click on an image that was already clicked on, it resets the game and your points go back to zero.

## Solution
Using a JSON file to hold the data for each image, react components are created with each image. These are stored in an array which is stored in the state and each time one is clicked, the array is randomized which updates their position on the screen. Each time an imageis clicked its "clicked" field is checked, if it's already true your points are reset as are all the "clicked" fields, if it's false it updates to true and randomizes the images on the screen.
