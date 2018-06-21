This is the client repository for Student side of the Course Management System application, which is being implemented in Angular. This part of application provides read only access to content posted by instructors(implemented using React and Spring). The students can view courses, modules, lesson and their widgets. They can also view sections available for various courses, and enroll in them. They can un-enroll anytime they want.

The admin is provided with the ability to add/delete/update sections of course. The admin for the deployed application is already created and hence cannot be created again. The credentials for admin are-

*Username - admin
*Password - admin

Session is being used which ensures, based on the role of the user (either "student" or admin), content gets displayed according to the user. 

As per the requirements, the students enrolled courses should appear on top of the home page. I feel that displaying the courses as such in the grid appears better. So I have just disabled the enroll button from the courses the student is already enrolled in, to provide better appearance.

The admin page and home page build up on the same component, however the courses for student have enrollment options, whereas courses for admin have add/delete/update section options. Rather than displaying the sections on the same page as courses, I made a design decision of rendering the sections (enrollment for sections for student / adding or deleting section for admin) separate from the course grid. If admin wants to update section data, that data gets populated on input fields at top and then can be updated.

The navbar is provided on top of each page to facilitate ease of navigation to user to render home page/profile/course-grid components as well as to log out.

The profile can display or update the user information. For students the profile will also display the enrolled sections and provide option to unenroll from that section.

Some clicks like logout seems to be rusty as pointer does not change when we hover over them, but clicking on them will still perform the required operation.

I have ensured that the user gets logged out after 30 minutes, code for which is implemented in the node repository.

While creating new sections by the admin, default name of new section is being set automatically based on name of course and previously created sections length.

All checks like same username disallowed, same password and verify password field, invalide credentials have been implemented.

The server side of the application is implemented in Node, and MongoDB database has been used. The link to the server side repository is -

https://github.com/shukla-ayush/Course-Management-System-NodeJS

The client and server parts of the application are both depoyed on Heroku and client side can be accessed live at the given link - 

http://angular-course-management.herokuapp.com

Please ensure you do not use https.

There is another repository by the name of Course-Management-System-Angular, which I was working on initially but a lot of code crashed and I had to create this new repository. Please check the previous commits in that repository as number of commits in this repository might not be much.
