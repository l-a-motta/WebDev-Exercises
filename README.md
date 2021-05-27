# 1. Requirements
* Must be capable of selling firearms. Clients must be able to filter the catalog by configuration and function.
* Firearm configurations are: handguns, rifles, shotguns, carbines, machine guns, sniper rifles, submachine guns, automatic rifles, assault rifles, PDWs, battle rifles.
* Firearm functions are: manual, lever action, pump action, semi-automatic, automatic, selective fire.
* The firearms' records must also include: mass, length, barrel length, cartridge, caliber, action, rate of fire, muzzle velocity, effective firing range, maximum firing range, feed system, sights, manufacturer.
* The specific functionality of our application is having a button that simulates the trigger of the firearm, playing its firing sound.
* This store is completely legal, in the sense that selling military-grade weapons to civilians is assumed to be completely legal.

# 2. Project Description
The online store contains the following pages (you can find the Figma <a href="https://www.figma.com/file/G66aRUbO65k8scSnY9moq2/online-store?node-id=0%3A1">here</a>):
The online store legally sells military-grade firearms.
All the pages contain the same footer and header.

![Index](https://github.com/l-a-motta/online-store/blob/main/beta_images/index.png)
**Homepage**

![Index](/beta_images/index.png)

This is the main page.
The user/admin can use the search bar to get to the product list or a specific product page, or login to an account.
It is minimalistic by design, having in mind that the application is futurally going to be single-page.

Contains:
* Search box with two dropdowns and a text field:
	* The first dropdown specifies the functions.
	* The second dropdown specifies the configuration.
	* The text field specifies any other search criteria the user might use.
	* Examples:
		* " -- All -- -- All -- 'blank' " returns the entire catalog.
		* " -- Automatic -- -- Handguns -- '12mm' " returns all automatic 12mm handguns in stock.
		* Search criteria that correspond to a single weapon in stock returns the firearm's page.
		* Search criteria that doensn't correspond to any gun in stock returns "Not in stock / Not found".

**Weapon List**

![Weapon List](https://github.com/l-a-motta/online-store/blob/main/beta_images/weapon_list.png)

This is where the user browses for firearms.
criteria anytime.
When the application becomes single-page, the search bar is going to remain in it and the user will be able to change his search

Contains:
* Cards displaying quick information about the weapon, as well as a button to see more information.
**Weapon Page**


![Weapon Information](https://github.com/l-a-motta/online-store/blob/main/beta_images/weapon_information.png)

This is where the user analyses the gun's informations and decides to put it in his cart.

Contains:
* A box with the main 
* A box with the weapon's informations

**Cart Page**

This is where the user sees his firearm choices and can choosse to finish his purchase or abandon it.

**Login Page**

This is where users/admins can create/log into their accounts.
Users are redirected back to the main page.
Admins are redirected to the main admin page.

**Main admin page**
TODO description, image, contents

**Admin management**
TODO description, image, contents

**Store management**
TODO description, image, contents

# 3. Comments about the code

# 4. Test Plan

# 5. Test Results

# 6. Build Procedures

# 7. Problems

# 8. Comments
