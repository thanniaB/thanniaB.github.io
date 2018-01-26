(function(){
  var spanishNodes = $(".spanish");
  var englishNodes = $(".english");

  function hideLanguage(languageArray) {

    for(var x=0; x < languageArray.length; x++) {
      $(languageArray[x]).hide();
    }

  }

  function showLanguage (languageArray) {
    for(var x=0; x < languageArray.length; x++) {
      $(languageArray[x]).show();
    }
  }

  function updateLanguageSelectors (newLanguage, oldLanguage) {
    var newLanguageSelector = "." + newLanguage + "-language-selector";
    var oldLanguageSelector = "." + oldLanguage + "-language-selector";
    $(newLanguageSelector).addClass("selected-language");
    $(oldLanguageSelector).removeClass("selected-language");
  }

  $.get("https://ipinfo.io", function(response) {
      var country = response.country;
      if(country === "MX") {
        hideLanguage(englishNodes);
        updateLanguageSelectors("spanish", "english");
      } else {
        hideLanguage(spanishNodes);
        updateLanguageSelectors("english", "spanish");
      }
  }, "jsonp");

  $(".spanish-language-selector").click(function () {
    hideLanguage(englishNodes);
    showLanguage(spanishNodes);
    updateLanguageSelectors("spanish", "english");
  });

  $(".english-language-selector").click(function () {
    hideLanguage(spanishNodes);
    showLanguage(englishNodes);
    updateLanguageSelectors("english", "spanish");
  });

}(jQuery));
