**GW** is a wrapper for HTML5 game oriented libraries. Test any particular library and make your games!

*This project is part of the authors degree final project.*

The wiki contains all the project document.

## Launch a game factory

 ```
 var engine = GW( customModules ); //if no parameter is send, it will use the default modules
 
 engine( gameConfiguration ).then( function( game ) {
     ... //the game
 });
 ```
 
## Extend an existing module
 
 - Create the new folder with:
 ```
 npm run module -- {module name}
 ```
 
 - Read the module docs and implement your solution.
 - Copy the tests and make sure it passes all.
 - Launch the factory with your module as a parameter

### TODO list

 **Check-Redo**
 
 - [x] Controller: tests, docs and facade mode
 - [ ] Input: tests, docs and facade mode
 - [x] Loader: tests, docs and facade mode
 - [x] Loop: tests, docs and facade mode
 - [x] Render: tests, docs and facade mode
 - [x] Resource: tests, docs and facade mode
 - [ ] Sprite: tests, docs and facade mode
 - [ ] Tween: tests, docs and facade mode
 - [ ] World: tests, docs and facade mode
 - [ ] Physics: tests, docs and facade mode
 - [x] Audio: tests, docs and facade mode

 - Lots of things
