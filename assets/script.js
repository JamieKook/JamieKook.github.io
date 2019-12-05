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

let weatherObject={title: "Weather Dashboard", 
                  descript: "This web application displays both current weather and the 5 day forecast of user-selected cities. It features automatic user-location finding and a saved search history.",
                  role: "I created the application from scratch following a set of guidelines.",
                  tech: "This project utilizes javascript, css, bootstrap, jQuery, local storage, Moment.js, Mapquest’s geocoding and static map apis, OpenWeather’s weather api and the navigator’s geolocation api.",
                  img: "assets/imgs/dashboard.png",
                  linkapp:"https://jamiekook.github.io/WeatherDashboard/" ,
                  linkhub:"https://github.com/JamieKook/WeatherDashboard"
                  };

let plannerObject= {title: "Day Planner", 
                    descript: "This web application functions as an event planner for a day of work. Events can be saved or cleared from each time block. The current day and time are represented on the planner in the form of the date and color coded time blocks.",
                    role: "I created the application using a provided style-sheet and a set of guidelines.",
                    tech: "This project utilizes javascript, css, bootstrap, jQuery, local storage, and Moment.js.",
                    img: "assets/imgs/planner.png",
                    linkapp:"https://jamiekook.github.io/DayPlanner/" ,
                    linkhub:"https://github.com/JamieKook/DayPlanner"
                    };

let quizObject= {title: "Timed Quiz", 
                    descript: "This web application functions as a timed quiz, testing users' knowledge of trivia. Users can select the quiz type. Incorrect answers deduct time from the clock. Scores can be saved and a list of high scores can be viewed.",
                    role: "I created the application from scratch following a set of guidelines.",
                    tech: "This project utilizes javascript, css, bootstrap, jQuery, and local storage.",
                    img: "assets/imgs/quiz.png",
                    linkapp:"https://jamiekook.github.io./TimedQuiz/" ,
                    linkhub:"https://github.com/JamieKook/TimedQuiz"
                    };
          
          

function writePortfolioData(objectName){
  $("#port-title").text(objectName.title);
  $("#port-descript").text(objectName.descript);
  $("#port-role").text(objectName.role);
  $("#port-tech").text(objectName.tech);
  $("#port-img").attr("src", objectName.img);
  $("#port-linkapp").attr("href",objectName.linkapp);
  $("#port-linkhub").attr("href",objectName.linkhub);
}
