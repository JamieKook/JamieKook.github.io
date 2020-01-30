$(function () {
    $('[data-toggle="popover"]').popover()
  })

$('.popover-dismiss').popover({
    trigger: 'focus'
})

$('[data-toggle="tooltip"]').tooltip();

$(".portbtn").on("click", function(){
  $("#port-paper").hide();
  let objectName= $(this).attr("id")+"Object"; 
  objectName= eval(objectName); 
  writePortfolioData(objectName);  
  $("#port-more").removeAttr("hidden");
  $("#port-more").show(); 
})

$("#back").on("click", function(){
  $("#port-paper").show();
  $("#port-more").hide(); 
})

let currentIndex=0; 
let jobObject ={title: "Got Jobs", 
                  descript: "This web application searches user-selected cities for job postings and for data about the quality of life in that city. Users can save and view favorite jobs.",
                  role: "Collaborative project- responsible for all functions regarding the job search and map found in the script.js file.",
                  tech: "This project utilizes javascript, css, bootstrap, Animate.css, jQuery, local storage, Mapquest’s static map api, The Muse’s job api, Teleport’s api, and Plot.ly.",
                  img: "assets/imgs/GotJobs.png",
                  linkapp:"https://jamiekook.github.io/GotJobs/" ,
                  linkhub:"https://github.com/JamieKook/GotJobs",
                  shortd: "Find your perfect job.",
                  icon: "fas fa-search"
}; 

let weatherObject={title: "Weather Dashboard", 
                  descript: "This web application displays both current weather and the 5 day forecast of user-selected cities. It features automatic user-location finding and a saved search history.",
                  role: "Solo project following a set of guidelines.",
                  tech: "This project utilizes javascript, css, bootstrap, jQuery, local storage, Moment.js, Mapquest’s geocoding and static map apis, OpenWeather’s weather api and the navigator’s geolocation api.",
                  img: "assets/imgs/dashboard.png",
                  linkapp:"https://jamiekook.github.io/WeatherDashboard/" ,
                  linkhub:"https://github.com/JamieKook/WeatherDashboard",
                  shortd: "Find a location's current weather and 5-day forecast.",
                  icon: "fas fa-cloud-sun"
};

let plannerObject= {title: "Day Planner", 
                    descript: "This web application functions as an event planner for a day of work. Events can be saved or cleared from each time block. The current day and time are represented on the planner in the form of the date and color coded time blocks.",
                    role: "Solo project following a set of guidelines.",
                    tech: "This project utilizes javascript, css, bootstrap, jQuery, local storage, and Moment.js.",
                    img: "assets/imgs/planner.png",
                    linkapp:"https://jamiekook.github.io/DayPlanner/" ,
                    linkhub:"https://github.com/JamieKook/DayPlanner",
                    shortd: "Plan out your work day.",
                    icon: "fas fa-calendar-alt"
};

let quizObject= {title: "Timed Quiz", 
                    descript: "This web application functions as a timed quiz, testing users' knowledge of trivia. Users can select the quiz type. Incorrect answers deduct time from the clock. Scores can be saved and a list of high scores can be viewed.",
                    role: "Solo project following a set of guidelines.",
                    tech: "This project utilizes javascript, css, bootstrap, jQuery, and local storage.",
                    img: "assets/imgs/quiz.png",
                    linkapp:"https://jamiekook.github.io./TimedQuiz/" ,
                    linkhub:"https://github.com/JamieKook/TimedQuiz",
                    shortd: "Test your trivia knowledge.",
                    icon: "fas fa-brain"
};
let numbersObject= {title: "Numbers", 
                    descript: "A game to teach children how to count using an abacus and displaying numbers in multiple representations.",
                    role: "Passion project created independently.",
                    tech: "This project utilizes javascript, css, bootstrap, Animate.css, jQuery, local storage, and Giphy's API.",
                    img: "assets/imgs/numberswebpage.png",
                    linkapp:"https://jamiekook.github.io./Numbers" ,
                    linkhub:"https://github.com/JamieKook/Numbers",
                    shortd: "Learn how to use an abacus.",
                    icon: "fas fa-plus"
};

let employeeTrackerObject ={title: "Employee Tracker", 
                  descript: "This node commandline application allows users to view and update employees, roles, and departments.",
                  role: "Solo project following a set of guidelines",
                  tech: "This project utilizes javascript, node, sql, and the following npm packages: inquirer, mysql-promisifiy, console.table, and jest",
                  img: "assets/imgs/Employeetracker.png",
                  linkapp:"" ,
                  linkhub:"https://github.com/JamieKook/EmployeeTracker",
                  shortd: "Manager your Employees.",
                  icon: "fas fa-tasks"
}; 
          
let projectsArr= ["quiz", "planner", "weather", "numbers", "job", "employeeTracker"]; 
let projectsReverse= projectsArr.reverse(); 

function listProjects(index){
  currentIndex=index; 
  $("#port-paper").css("position", "static"); 
  for (let i=1; i<4; i++){
    let project= $("#project"+i); 
    let name = projectsReverse[currentIndex];
    if (name === undefined){
      project.hide();   
    } else {
      project.show(); 
      let object= name+ "Object"; 
      object = eval(object);
      $(project).find(".link").attr("href", object.linkapp); 
      $(project).find(".title").text(object.title);
      $(project).find(".fas").attr("class", object.icon);
      $(project).find(".description").text(object.shortd);
      $(project).find(".btn").attr("id", name);  
    }
    currentIndex++; 
  }
  $("#port-paper").css("position", "absolute"); 
}

listProjects(0); 

function writePortfolioData(objectName){
  $("#port-title").text(objectName.title);
  $("#port-descript").text(objectName.descript);
  $("#port-role").text(objectName.role);
  $("#port-tech").text(objectName.tech);
  $("#port-img").attr("src", objectName.img);
  $("#port-linkapp").attr("href",objectName.linkapp);
  $("#port-linkhub").attr("href",objectName.linkhub);
}

$("#oldProjects").on("click", function(){
  if (currentIndex >= projectsArr.length) {
    listProjects(0); 
  } else{
    listProjects(currentIndex);
  }

})


$("#newProjects").on("click", function(){
  let index= currentIndex-6; 
  if (index < 0) {
    index= currentIndex-(projectsArr.length%3); 
  } 
  listProjects(index); 
})