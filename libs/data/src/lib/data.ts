

export class ToDo{
    readonly name: string;
    readonly dueDate:Date;
    readonly complete:boolean;
    readonly description:string;
}
export class Crop{
    readonly name:string;
    readonly description:string;
    readonly todos:Array<ToDo>;
}
export class GardenBed{
    readonly name:string;
    readonly description:string;
    readonly crops: Array<Crop>

    constructor(name:string, description:string){
        this.name =name;
        this.description=description;
        this.crops=new Array();
    }
}
export class Zone{
    readonly id:number;
    readonly name:string;
    readonly description:string;
    readonly beds:Array<GardenBed>

    constructor(id:number,name:string, description:string){
        this.id=id;
        this.name=name;
        this.description=description;
        this.beds=new Array();
    }
}
export class Activity{
    readonly id:number;
    readonly name:string;
    readonly prompt: string;
    readonly response:string;
    readonly complete:boolean;
    
    constructor(id:number,name:string,prompt:string){
        this.id=id;
        this.name=name
        this.prompt=prompt;
        this.response ="";
        this.complete=false;
    }
}
export class Principle{
    readonly name:string;
    readonly description:string;
    readonly activities: Array<Activity>

    constructor(name:string, description:string){
        this.name=name;
        this.description=description;
        this.activities=new Array();
    }
}

export class Project {
    readonly name: string;
    readonly description:string;
    readonly eduCourse: Array<Principle>;
    readonly garden: Array<Zone>;

    constructor(name:string, description:string){
        this.name =name;
        this.description=description;
        this.garden = new Array<Zone>();
        this.garden.push(new Zone(1,"Zone 1", "The zone closest to home"));
        this.garden.push(new Zone(2,"Zone 2", "The next zone"));
        this.garden.push(new Zone(3,"Zone 3", "The next one"));
        this.garden.push(new Zone(4,"Zone 4", "Another one "));
        this.garden.push(new Zone(5,"Zone 5", "Yes"));

        this.eduCourse = new Array<Principle>();
        //Principle 1
        const princ1 = new Principle("Observe and Interact", "By taking the time to engage with nature we can design solutions that suit our particular situation.");
        const act0 = new Activity(0,"Beginning Reflection Activity", "Sit in the space you intend to plan your garden for 30 minutes to an hour. Journal what you see, hear, smell, and feel.");
        princ1.activities.push(act0);
        const act1 = new Activity(1,"Mapping", "Draw a map of the proposed space. View Aranyas online resources for tips");
        princ1.activities.push(act1);
        this.eduCourse.push(princ1);
        //Principle 2
        const princ2 = new Principle("Catch and Store Energy", "By developing systems that collect resources when they are abundant, we can use them in times of need.");
        const act3 = new Activity(0, "Soil Test", "Take a soil sample in the proposed garden space. If it is a large area consider taking more than one in different locations. Send these in to a local lab to find out the health of your soil.");
        princ2.activities.push(act3);
        const act4 = new Activity(1,"Party Time","Permaculture is about more than the land. it involves the people around you as well. Throw a party or event with some friends.");
        princ2.activities.push(act4);
        const act5 = new Activity(2,"Party Reflection", "Think about the event you planned. In what ways did it bring people together. What would you change to make things better next time?");
        princ2.activities.push(act5);
        this.eduCourse.push(princ2);
        //Principle 3
        const princ3 = new Principle("Obtain a Yield", "Ensure that you are getting truly useful rewards as part of the work that you are doing.");
        const act6 = new Activity(0,"Different Types of Yield", "Share a meal with a close friend. Although this may seem unproductive, think about the ways you and your friend benefit from the experience.");
        princ3.activities.push(act6);
        const act7 = new Activity(1,"Quick Yields", "Make a small herb garden in a window sill. This is by no means a large garden but it will provide for you nonetheless. Appreciate even small gifts.");
        princ3.activities.push(act7);
        const act8 = new Activity(2,"Volunteering", "Find a local farm or urban garden to volunteer at. Try to make some connections with other members of your local food community.");
        princ3.activities.push(act8);
        this.eduCourse.push(princ3);
        //Principle 4
        const princ4 = new Principle("Apply Self Regulation and Accept Feedback", "We need to discourage inappropriate activity to ensure that systems can continue to function well.");
        const act9 = new Activity(0,"Clean House", "For a week, try to give up something you know is dragging you down, whether it be social media, ice cream, or some other habit. Each day log the ways you feel the effects of giving this up.");
        princ4.activities.push(act9);
        const act10 =new Activity(1,"Soil Research", "Research what the results of your soil test mean and what crops are best accustomed to it. Research different ways to naturally bring more nutrients into the soil and log them here.");
        princ4.activities.push(act10);
        const act11 =new Activity(2,"Harvest Log", "By now you are likely obtaining some sort of harvest. Even if it is just herbs, log the weights of everything you harvest and when.");
        princ4.activities.push(act11);
        this.eduCourse.push(princ4);
        //Principle 5
        const princ5 = new Principle("Use and Value Renewable Resources and Services", "Make the best use of nature’s abundance to reduce our consumptive behaviour and dependence on non-renewable resources.");
        const act12 = new Activity(0,"Sleep Log", "We often do not think of ourselves as renewable resources, but your energy is certainly a resource. Log how much and how well you sleep for week and how you feel as a result each day.");
        princ5.activities.push(act12);
        const act13 = new Activity(1,"Composting", "Research different methods of composting to find one that best fits your situation. Implement that solution in your home.");
        princ5.activities.push(act13);
        this.eduCourse.push(princ5);
        //Principle 6
        const princ6 = new Principle("Produce No Waste", "By valuing and making use of all the resources that are available to us, nothing goes to waste.");
        const act14 = new Activity(0,"Waste Log", "Weigh all of your waste for a week. Log the weights and ways you can reduce your total amount of waste here.");
        princ6.activities.push(act14);
        const act15 = new Activity(1,"Food Rescue", "Voltuneer with a local food rescue. Think about how some waste is unnecessary, and ways to prevent that kind of waste.");
        princ6.activities.push(act15);
        const act16 = new Activity(2,"Waste Meal", "Make a meal completely from items normally considered waste. Example include carrot tops, broccoli stalks, or chicken bones.");
        princ6.activities.push(act16);
        this.eduCourse.push(princ6);
        //Principle 7
        const princ7 = new Principle("Design From Patterns to Details", "By stepping back, we can observe patterns in nature and society. These can form the backbone of our designs, with the details filled in as we go.");
        const act17 = new Activity(0,"Your Own Patterns", "Look back at your sleep and waste log. See if you can observe any patterns in yourself.");
        princ7.activities.push(act17);
        const act18 = new Activity(1,"Natural Patterns", "Look for some examples of patterns occurring in your environment, both natural and man made. Some examples include a spiral, net, or wave");
        princ7.activities.push(act18);
        const act19 = new Activity(2,"Apply a Pattern", "Try the process of designing from pattern to details. Pick a pattern for a space you can design and then drill down into the details.");
        princ7.activities.push(act19);
        this.eduCourse.push(princ7);
        //Principle 8
        const princ8 = new Principle("Integrate Rather Then Segregate", "By putting the right things in the right place, relationships develop between them and they support each other.");
        const act20 = new Activity(0,"Random Assembly", "Write down different aspects of your life on notecards and shuffle. Divide the stacks into two face down piles. Pick up a card from each side and try to write down connections betwee the two. Repeat until the stacks are empty.");
        princ8.activities.push(act20);
        const act21 = new Activity(1,"Needs and Yields Analysis", "All things have both needs and yields. By having elements in our system that provide for the needs of other elements, we can move closer to a closed loop system. Thnk about the elements of your garden and where the needs of one element can be met by the yields of another.");
        princ8.activities.push(act21);
        const act22 = new Activity(2,"Attend a Meeting", "Attend your local community meeting (neighborhood, apartment complex, dorm, etc). Try to take not of what groups may be underrepresented or completely missing. Make a plan for integrating the missing pieces.");
        princ8.activities.push(act22);
        this.eduCourse.push(princ8);
        //Principle 9
        const princ9 = new Principle("Use Small and Slow Solutions", "Small and slow systems are easier to maintain than big ones, making better use of local resources and produce more sustainable outcomes.");
        const act23 = new Activity(0,"Respond to Feedback", "Look back at the activities from principle #4. Make a long term plan to address any feedback.");
        princ9.activities.push(act23);
        const act24 = new Activity(1,"Long Term Yields", "In principle #3 we implemented something to return yields in the short term. Now plan an element to your garden that will return in the long term, such as a tree or perrenial.");
        princ9.activities.push(act24);
        const act25 = new Activity(2,"Small and Slow Application", "Look back at the plans you made for principles #7 and #8. How can you apply the principle of small and slow solutions to those plans.");
        princ9.activities.push(act25);
        const act26 = new Activity(3,"Reflect", "You have come a long way since this project began. Take a moment to relfect on why you have chosen to undertake this project.");
        princ9.activities.push(act26);
        const act27 = new Activity(4,"Climate", "Your local climate can be very particular to an area. Research your climate and how that impacts the crops you plant.");
        princ9.activities.push(act27);
        this.eduCourse.push(princ9);
        //Principle 10
        const princ10 = new Principle("Use and Value Diversity", "Diversity reduces vulnerability to a variety of threats and takes advantage of the unique nature of the environment in which it resides.");
        const act28 = new Activity(0,"Diversity in Your Life", "Think about the ways in which your life may be lacking diversity. Journal about ways you can bring more in.");
        princ10.activities.push(act28);
        const act29 = new Activity(1,"Crop Diversity", "Today we are often presented with only one variety of a crop. Pick a common crop and research the myriad of varieties that exist.");
        princ10.activities.push(act29);
        const act30 = new Activity(2,"Biodiversity and Cultural Diversity", "The incredible amount of diversity in food has helped to create an incredible amount of cultural diversity as well. Pick a specific crop and research how it helped to form of culture and its food ways.");
        princ10.activities.push(act30);
        this.eduCourse.push(princ10);
        //Principle 11
        const princ11 = new Principle("Use Edges and Value the Marginal", "The interface between things is where the most interesting events take place. These are often the most valuable, diverse and productive elements in the system.");
        const act31 = new Activity(0,"Zones and Sectors", "In your garden management there are defined zones for you to place garden beds in. Do a zones and sectors analysis of your garden.");
        princ11.activities.push(act31);
        const act32 = new Activity(1,"Zone 00", "Zone 00 is often defined as the self. What parts of you are the most marginal, and how can you integrate them more fully?");
        princ11.activities.push(act32);
        const act33 = new Activity(2,"The Land", "What aspects of your land are most marginal. How can you make use of and value those transitional spaces?");
        princ11.activities.push(act33);
        const act34 = new Activity(3,"The People", "Find a local organization that supports a marginalized group in society such as the elderly, LGBTQIA+, women, children, or people experiencing poverty. Volunteer and reflect on the experience.");
        princ11.activities.push(act34);
        this.eduCourse.push(princ11);
        //Priciple 112
        const princ12 = new Principle("Creatively Use and Respond to Change", "We can have a positive impact on inevitable change by carefully observing, and then intervening at the right time.");
        const act35 = new Activity(0,"The Self", "Look back at all the activities in which you looked deeper into yourself and made plans to change things. What worked? What still needs to change? How have you changed over this process?");
        princ12.activities.push(act35);
        const act36 = new Activity(1,"The Land", "Look back at your harvest log. Note what crops did well and what crops were not as succesful. Brainstorm why a certain crop may have failed. Was it the climate, or simply the placement in the garden?");
        princ12.activities.push(act36);
        const act37 = new Activity(2,"Conclusion", "How is having learned permaculture helping you to use and creatively respond to change?");
        princ12.activities.push(act37);
        this.eduCourse.push(princ12);
    }
  }
  export class User {
      //readonly _id:String;
      readonly username:String;
      readonly password:String;
      readonly email:String;
      readonly firstName:String;
      readonly lastName:String;
      readonly projects: Array<Project>;

      constructor(username:String, password:String, email:String, firstName:String, lastName:String){
          this.username=username;
          this.password=password;
          this.email=email;
          this.firstName=firstName;
          this.lastName=lastName;
          this.projects = new Array<Project>();
      }

  }