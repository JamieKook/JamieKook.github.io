$(function () {
    $('[data-toggle="popover"]').popover()
  })

$('.popover-dismiss').popover({
    trigger: 'focus'
})

$(".portbtn").on("click", function(){
  $("#port-paper").hide();
  $("#port-more").removeAttr("hidden");

  let objectName= $(this).attr("id")+"Object"; 
  objectName= eval(objectName);
  console.log(objectName); 
  writePortfolioData(objectName); 
  $("#port-more").show(); 

})

$("#back").on("click", function(){
  $("#port-paper").show();
  $("#port-more").hide(); 
})

let jobObject ={title: "Got Jobs", 
                  descript: "This web application searches user-selected cities for job postings and for data about the quality of life in that city. Users can save and view favorite jobs.",
                  role: "Collaborative project- coded all functions regarding the job search and map found in the script.js file.",
                  tech: "This project utilizes javascript, css, bootstrap, Animate.css, jQuery, local storage, Mapquest’s static map api, The Muse’s job api, Teleport’s api, and Plotly.js.",
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
          
let projectsArr= ["quiz", "planner", "weather", "job"]; 

function listProjects(){
  debugger; 
  let currentIndex=0; 
  let projectsReverse= projectsArr.reverse(); 
  for (let i=1; i<4; i++){
    let name = projectsReverse[currentIndex];
    let object= name+ "Object"; 
    object = eval(object);
     
    let project= $("#project"+i); 
    $(project).find(".link").attr("href", object.linkapp); 
    $(project).find(".title").text(object.title);
    $(project).find(".fas").attr("class", object.icon);
    $(project).find(".description").text(object.shortd);
    $(project).find(".btn").attr("id", name);
    currentIndex++; 
  }
}

listProjects(); 

function writePortfolioData(objectName){
  $("#port-title").text(objectName.title);
  $("#port-descript").text(objectName.descript);
  $("#port-role").text(objectName.role);
  $("#port-tech").text(objectName.tech);
  $("#port-img").attr("src", objectName.img);
  $("#port-linkapp").attr("href",objectName.linkapp);
  $("#port-linkhub").attr("href",objectName.linkhub);
}
