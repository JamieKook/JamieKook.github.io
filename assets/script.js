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
                  tech: "This project utilizes javascript, node, mySQL, and the following npm packages: inquirer, mysql-promisifiy, console.table, and jest",
                  img: "assets/imgs/Employeetracker.png",
                  linkapp:"" ,
                  linkhub:"https://github.com/JamieKook/EmployeeTracker",
                  shortd: "Manage your Employees.",
                  icon: "fas fa-tasks"
}; 

let burgerLoggerObject ={title: "Burger Logger", 
                  descript: "This web application allows users to log burgers as avaialbe or eaten and store data in a mySQL database.",
                  role: "Solo project following a set of guidelines",
                  tech: "This project utilizes javascript,html, css, bootstraps, node, mySQL, a MVC file structure, and the following npm packages: express, express-handlebars, and mySQL.",
                  img: "assets/imgs/burgerLogger.png",
                  linkapp:"https://gentle-cliffs-24688.herokuapp.com/" ,
                  linkhub:"https://github.com/JamieKook/BurgerLogger",
                  shortd: "Track delicious burgers.",
                  icon: "fas fa-hamburger"
}; 

let writersLibObject ={title: "The Writer's Library", 
                  descript: "This web application allows users to share their writing with others and to give and recieve feedback.",
                  role: "Collaborative Project- project lead for coding all aspects except for styling",
                  tech: "This project utilizes AWS's s3 storage, javascript, html, css, bootstraps, pure, node, mySQL, a MVC file structure, and the following npm packages: express, express-handlebars, express-fileUpload, Passport, and mySQL.",
                  img: "assets/imgs/writerLib.png",
                  linkapp:"https://morning-lake-48557.herokuapp.com/" ,
                  linkhub:"https://github.com/JamieKook/WriterLib",
                  shortd: "Use s3 to store and share your Stories",
                  icon: "fas fa-book-open"
}; 


          
let projectsArr= ["weather", "burgerLogger", "numbers", "job", "employeeTracker", "writersLib"]; 
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
