"At the top layer of the software each user is able to manage any number of different projects. Once a user has loaded a project, they will be presented with the main dashboard and can select to either enter the project management module or the educational course module.
Although it is a simplification of permaculture, the structure of the project management module is designed to mirror the structure of a permaculture garden. The top layer of this module is a garden component. This view presents the user with the five zones of permaculture and a brief description of each. The user can choose to dive deeper and view the contents of a specific zone. Inside each zone component the user is able to view all of the garden beds that are contained within that zone and a brief description the user provides. Each garden bed contains components that show all of the crops in that bed and all of the tasks associated with those crops. The user is able to give each crop a name, description, the date it was planted, and any number of tasks that need to be completed for that crop. Each task can be given a name, description, due date, and status of completion. The user is then able to track their progress on each garden bed or on each crop. 
The educational course module is designed to teach the user not only what permaculture is and how to do it physically, but also how to integrate social permaculture and provide the user with a number of tools for planning and design in all aspects of their lives. The educational course is broken down into the permaculture principles. Although these principles should be viewed cyclically, the flow of this course is designed for users to progress through the principles from 1 to 12. Each of the principles contains 3 or more activities with at least one in each pertaining to physical, social, and personal aspects of permaculture. Although not discussed at length, introspection is a vital part of designing a permaculture system and is therefore afforded that importance in the application design. As the user progresses through the principles, some of these activities are designed to build on one another. The user will be able to track their progress from the view of the course as a whole, and from within each principle." --Excerpt from thesis

It is currently in its developmental stages and regular updates will be made. Thus far the only functionality that is available is: Create a User and Login / Create, Update, Delete, or View a project / View a Principle / View the activities within a principle and edit those activities / View a Zone. 

Each of these functions interacts with MongoDB using Mongoose, and a nest api application. However, Users are the only doc with a mongodb generated id, the rest of the information is nested within that user. 

Testing is not yet complete for this repo. e2e testing is not yet available and Unit testing is in configuration stages. 

CSS styles imported from twitter. 

In order to run this repo, first ensure that mongodb is running in the background. Then in the permaculture folder run 'npm install'. Next serve up the api using 'ng serve api' and navigate to localhost:3333/api/users to view the database as it updates. Finally serve the front end using 'ng serve permaculture-planner'. Navigate to localhost:4200 to use the available functionality described above. 