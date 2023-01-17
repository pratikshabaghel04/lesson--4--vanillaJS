var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var ouputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" +"text=" + input
}

function errorHandler(error){
    console.log("error occured", error);
        alert("something wrong with server! try again after some time")
    }

function clickHandler() {
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        ouputDiv.innerText = translatedText;
    }) 
    .catch(errorHandler)  
};

btnTranslate.addEventListener("click", clickHandler);