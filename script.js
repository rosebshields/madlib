      var name = document.querySelector("#name");
      var verb1 = document.querySelector("#verb1");
      var adjective1 = document.querySelector("#adjective1");
      var adjective2 = document.querySelector("#adjective2");
      var feeling = document.querySelector("#feeling");
      var adjective3 = document.querySelector("#adjective3");
      var pasttenseverb = document.querySelector("#pasttenseverb");
      var noun = document.querySelector("#noun");
      var story = document.querySelector("#story");
      var launch = document.querySelector("#ohboy");
      launch.addEventListener("click", writeStory, false);

      function writeStory(){
            var launchedStory = "";
            launchedStory += "Once upon a time Mickey and his friend " + name.value;
            launchedStory += " decided to go " + verb1.value + " because they had such a " + adjective1.value + " friendship. ";
            launchedStory += " It was a " + adjective2.value + " day and they were so " + feeling.value + " to be spending the day together.";
            launchedStory += " They vowed to be the " + adjective3.value + " of friends and hangout again soon.";
            launchedStory += " As the day came to a close they " + pasttenseverb.value + " all the way home and gave eachother a " + noun.value + " symbolizing such a wonderful time. The end.";
            story.innerHTML = launchedStory;
      }