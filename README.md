# 1. Requirements
* Must be capable of selling firearms. Clients must be able to filter the catalog by configuration and function.
* Firearm configurations are: handguns, rifles, shotguns, carbines, machine guns, sniper rifles, submachine guns, automatic rifles, assault rifles, PDWs, battle rifles.
* Firearm types are: manual, semi, auto.
* The firearms' records must also include: mass, length, barrel length, cartridge, caliber, action, rate of fire, muzzle velocity, effective firing range, maximum firing range, feed system, sights, manufacturer.
* The specific functionality of our application is having a button that simulates the trigger of the firearm, playing its firing sound.
* This store is completely legal, in the sense that selling military-grade weapons to civilians is assumed to be completely legal.

# 2. Project Description
The online store contains the following pages (you can find the old Figma <a href="https://www.figma.com/file/G66aRUbO65k8scSnY9moq2/online-store?node-id=0%3A1">here</a>):
The online store legally sells military-grade firearms.
All the pages contain the same footer and header.

**CTA**

![Index](https://github.com/l-a-motta/online-store/blob/main/beta_images/cta.png)

This is the Call to Action.
The user/admin can use the easy filter to get to the product list or the gun show.
It is minimalistic by design, having in mind that the application is single-page.

**Weapon Show**

![Weapon Show](https://github.com/l-a-motta/online-store/blob/main/beta_images/gun_show.png)

This is where the user can see a fancy show of the current guns in the database.

**Weapon List**

![Weapon List](https://github.com/l-a-motta/online-store/blob/main/beta_images/gun_list.png)

This is the main aspect of the website. In here, the user can see the guns and some of their information, to browse which he would like to see more of. By clicking on the plus symbol, the user will be shown a modal with more information about the gun. The administrator can also edit and delete the guns from the databse by using the buttons on the right of the table.

**Detail Modal**

![Weapon List](https://github.com/l-a-motta/online-store/blob/main/beta_images/gun_detail.png)

This the modal that will be shown to the user once they click on the plus button on the Weapon List. It shows all the information about the gun, and also offer the option of adding that gun to the user Cart. There is also a link, if the user would like to search for that gun through Google.

**Cart Modal**

![Weapon Cart](https://github.com/l-a-motta/online-store/blob/main/beta_images/gun_cart.png)

Here will be stored all the guns that the user has added to their cart by clicking on the button from the Detail Modal. It shows the pertinent information, price, and allows for a click to the Checkout button.

**Add Weapon**

![Weapon Add](https://github.com/l-a-motta/online-store/blob/main/beta_images/gun_add.png)

This is the form that can be used to add another entry to the database. It is also used whenever an ADMIN wants to update a gun, by pre-populating the inputs with that gun's information. By clicking the Submit button, the submit action will be done. By clicking the update button, the app will look for the proper gun and update its information with what's on the inputs.

# 3. Comments about the code
Code comments were made internally. Check each file if you wish.

# 4. Test Plan
A run-down of the whole website and all the features offered. You can check it in the video file testing_functions.mp4

# 5. Test Results
Tests were all successful. No bugs were detected and application behaved as expected.

# 6. Build Procedures

You will need a local mongodb database setup. The application uses two collections: 'usercollections' and 'cart', under the database named 'online-store'. If you have a different database, just change the name in the app.js where appropriate. The collections must be named as such, otherwise you will need to update all the db calls in the /routes/ directory.

Your database would need to look like this:

![Database format](https://github.com/l-a-motta/online-store/blob/main/beta_images/mongodb.png)

While the data inserted would look like this:

![Database data](https://github.com/l-a-motta/online-store/blob/main/beta_images/mongodb_data.png)

After setting up your mongodb database, install the dependencies from node by running 'npm install' in the directory with package.json in it. Then, simply run 'npm start' on the same directory. It should be live in your localhost:3000.

# 7. Problems
The app will not scale well. It saves all the return from the database in a vector, read from a JSON. If it had millions of entries, it would be quite heavy and load slowly. A possible fix to this would be to include pagination in the website.

# 8. Comments
This app was not divided into the MVC format, nor is it expandable. It should not be used as a framework or base to work off of. It does the requirements detailed above, and nothing else. It could be used as a resource for learning, but not for actual deployment in a bigger project.
