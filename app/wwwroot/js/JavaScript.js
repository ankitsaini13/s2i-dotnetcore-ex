//var request = require('request');

function call_api() {
    const Http = new XMLHttpRequest();
    const url = 'https://api.eu-gb.tone-analyzer.watson.cloud.ibm.com/instances/1303cd83-6fcf-470a-bb52-35beea51074b/v3/tone?version=2017-09-21';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.setRequestHeader("Authorization", "Basic " + btoa("apikey:kjAdDxAhzv6AYQQp4PnnJ-Qhm2x32Kr8mSfUT3yBM-vl"));

    //stext = document.getElementById("TextArea1");
    stext ="I am excited.Team, I know that times are tough!"
    Http.send(JSON.stringify({ "text": stext}));

    Http.onreadystatechange = (e) => {
        if (Http.responseText!="") {
            //alert(Http.responseText)
            graph1(Http.responseText)
        }

        //console.log(Http.responseText)
        
    }

   
}
function graph1(stext) {
    const obj = JSON.parse(stext);
    Anger_score = 0;
    Fear_score = 0;
    Joy_score = 0;
    Sadness_score = 0;
    Analytical_score = 0;
    Confident_score = 0;
    Tentative_score = 0;
    for (var i = 0; i < obj.document_tone.tones.length; i++) {
        var tone_name = obj.document_tone.tones[i].tone_name;
        var tone_score = obj.document_tone.tones[i].score;
        switch (tone_name) {
            case 'Anger': Anger_score = tone_score
                break;
            case "Fear": Fear_score = tone_score
                break;
            case "Joy": Joy_score = tone_score
                break;
            case "Sadness": Sadness_score = tone_score
                break;
            case "Analytical": Analytical_score = tone_score
                break;
            case "Confident": Confident_score = tone_score
                break;
            case "Tentative": Tentative_score = tone_score
                break;
        }
        tone_name = "";
        tone_score = "";
    }
    new Chart(document.getElementById("chartjs-5"), {
        "type": "polarArea",
        "data": {
            "labels": ["Anger", "Fear", "Joy", "Sadness", "Analytical", "Confident", "Tentative"],
            "datasets": [{
                "label": "My First Dataset",
                "data": [Anger_score, Fear_score, Joy_score, Sadness_score, Analytical_score, Confident_score, Tentative_score],
                "backgroundColor": ["rgb(255, 99, 132)", "rgb(75, 192, 192)", "rgb(255, 205, 86)", "rgb(201, 203, 207)", "rgb(54, 162, 235)"]
            }]
        }
    });
}

function graph2() {

    new Chart(document.getElementById("chartjs-6"), {
        "type": "polarArea",
        "data": {
            "labels": ["Anger", "Fear", "Joy", "Sadness", "Analytical", "Confident", "Tentative"],
            "datasets": [{
                "label": "My First Dataset",
                "data": [11, 16, 7, 3, 14, 1, 3],
                "backgroundColor": ["rgb(255, 99, 132)", "rgb(75, 192, 192)", "rgb(255, 205, 86)", "rgb(201, 203, 207)", "rgb(54, 162, 235)"]
            }]
        }
    });
}