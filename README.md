# 1. Requirements
* This online store sells firearms. Clients must be able to filter the catalog by configuration and function.
* Firearm configurations are: handguns, rifles, shotguns, carbines, machine guns, sniper rifles, submachine guns, automatic rifles, assault rifles, PDWs, battle rifles.
* Firearm functions are: manual, lever action, pump action, semi-automatic, automatic, selective fire.
* The firearms� records must also include: mass, length, barrel length, cartridge, caliber, action, rate of fire, muzzle velocity, effective firing range, maximum firing range, feed system, sights, manufacturer.
* The specific functionality of our application is having a button that simulates the trigger of the firearm, playing its firing sound.
* Selling military-grade weapons to anyone willing to buy them should be completely legal. This is, obviously, not in the developers� hands to decide, but is nevertheless a necessary requirement and this store concept is based on the proposition that this condition is true.

# 2. Project Description
The online store contains the following pages:
<img src="/beta_images/index.png" width="350" title="Index" alt="Index">
![Index](/beta_images/index.png)
* Homepage:
	* Header:
		* Logo.
	* Search box with two dropdowns and a text field:
		* The first dropdown specifies the functions.
		* The second dropdown specifies the configuration.
		* The text field specifies any other search criteria the user might use.
		* Examples:
			* " -- All -- -- All -- 'blank' " returns the entire catalog.
			* " -- Automatic -- -- Handguns -- '12mm' " returns all automatic 12mm handguns in stock.
			* Search criteria that correspond to a single weapon in stock returns the firearm's page.
			* Search criteria that doensn't correspond to any gun in stock returns "Not in stock / Not found".
	* Footer:
		* Store admin login page link.
![Weapon List](/beta_images/weapon_list.png)
![Wepaon Information](/beta_images/weapon_information.png)
# 3. Comments about the code

# 4. Test Plan

# 5. Test Results

# 6. Build Procedures

# 7. Problems

# 8. Comments
