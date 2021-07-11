//var request = require('request');

const { Alert } = require('bootstrap');

var sline;
sline = 0;
function call_api(stext,sgraph,stime) {
    var Http = new XMLHttpRequest();
    var url = 'https://api.eu-gb.tone-analyzer.watson.cloud.ibm.com/instances/1303cd83-6fcf-470a-bb52-35beea51074b/v3/tone_chat?version=2017-09-21';
    Http.open("POST", url, false);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.setRequestHeader("Authorization", "Basic " + btoa("apikey:kjAdDxAhzv6AYQQp4PnnJ-Qhm2x32Kr8mSfUT3yBM-vl"));

    //stext = document.getElementById("TextArea1");
   // stext = "I am excited.Team, I know that times are tough!"
    //Http.timeout = 60000;
    Http.send(JSON.stringify({ "utterances": [{ "text": stext, "user": "customer" }] }));
    if (sgraph == "One") {
        update_graph1(Http.responseText, stime);
    }
    else if (sgraph == "Two") {
        update_graph2(Http.responseText, stime);
    }
   // Http.onreadystatechange = (e) => {
        //if (Http.responseText!="") {
           
            
        //}

        //console.log(Http.responseText)
        
    //}
var http=""
   
}
function update_graph1(stext, stime) {
    const obj = JSON.parse(stext);
    sad_score = 0;
    frustrated_score = 0;
    satisfied_score = 0;
    excited_score = 0;
    polite_score = 0;
    impolite_score = 0;
    sympathetic_score = 0;
    
    for (var i = 0; i < obj.utterances_tone[0].tones.length; i++) {
        var tone_name = obj.utterances_tone[0].tones[i].tone_id;
        var tone_score = obj.utterances_tone[0].tones[i].score;
        switch (tone_name) {
            case 'sad': sad_score = "-" + tone_score               
                break;
            case "frustrated": frustrated_score = "-" + tone_score                
                break;
            case "satisfied": satisfied_score =  tone_score                
                break;
            case "excited": excited_score = tone_score                
                break;
            case "polite": polite_score = tone_score                
                break;
            case "impolite": impolite_score = "-" + tone_score                
                break;
            case "sympathetic": sympathetic_score = tone_score                
                break;
        }
        tone_name = "";
        tone_score = "";
    }
    scustomer.Sad.push(sad_score)
    scustomer.Frustrated.push(frustrated_score)
    scustomer.Satisfied.push(satisfied_score)
    scustomer.Excited.push(excited_score)
    scustomer.Polite.push(polite_score)
    scustomer.Impolite.push(impolite_score)
    scustomer.Sympathetic.push(sympathetic_score)
    scustomer.label.push(stime)

    polarchart1.config.data.labels = scustomer.label
    polarchart1.config.data.datasets[0].data = scustomer.Impolite
    polarchart1.config.data.datasets[1].data = scustomer.Sad
    polarchart1.config.data.datasets[2].data = scustomer.Frustrated
    polarchart1.config.data.datasets[3].data = scustomer.Sympathetic
    polarchart1.config.data.datasets[4].data = scustomer.Polite
    polarchart1.config.data.datasets[5].data = scustomer.Satisfied
    polarchart1.config.data.datasets[6].data = scustomer.Excited

    polarchart1.update();
    


}

function update_graph2(stext, stime) {
    const obj = JSON.parse(stext);
    sad_score = 0;
    frustrated_score = 0;
    satisfied_score = 0;
    excited_score = 0;
    polite_score = 0;
    impolite_score = 0;
    sympathetic_score = 0;

    for (var i = 0; i < obj.utterances_tone[0].tones.length; i++) {
        var tone_name = obj.utterances_tone[0].tones[i].tone_id;
        var tone_score = obj.utterances_tone[0].tones[i].score;
        switch (tone_name) {
            case 'sad': sad_score = "-" + tone_score
                break;
            case "frustrated": frustrated_score = "-" + tone_score
                break;
            case "satisfied": satisfied_score = tone_score
                break;
            case "excited": excited_score = tone_score
                break;
            case "polite": polite_score = tone_score
                break;
            case "impolite": impolite_score = "-" + tone_score
                break;
            case "sympathetic": sympathetic_score = tone_score
                break;
        }
        tone_name = "";
        tone_score = "";
    }
    sagent.Sad.push(sad_score)
    sagent.Frustrated.push(frustrated_score)
    sagent.Satisfied.push(satisfied_score)
    sagent.Excited.push(excited_score)
    sagent.Polite.push(polite_score)
    sagent.Impolite.push(impolite_score)
    sagent.Sympathetic.push(sympathetic_score)
    sagent.label.push(stime)

    polarchart2.config.data.labels = sagent.label
    polarchart2.config.data.datasets[0].data = sagent.Impolite
    polarchart2.config.data.datasets[1].data = sagent.Sad
    polarchart2.config.data.datasets[2].data = sagent.Frustrated
    polarchart2.config.data.datasets[3].data = sagent.Sympathetic
    polarchart2.config.data.datasets[4].data = sagent.Polite
    polarchart2.config.data.datasets[5].data = sagent.Satisfied
    polarchart2.config.data.datasets[6].data = sagent.Excited

    polarchart2.update();

}



function loadchat() {
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

async function loadfile() {
    var input = document.getElementById("myFile");
    var output = document.getElementById("output");
    

    input.addEventListener("change", function () {
        if (this.files && this.files[0]) {
            var myFile = this.files[0];
            var reader = new FileReader();

            reader.addEventListener('load', function (e) {
                output.textContent = e.target.result;
                var outputs = e.target.result;

                //readfile(outputs)
            });

            reader.readAsBinaryString(myFile);
        }
    });
}
function readfile() {
    var output = document.getElementById("output");
    if (output.value != "") {
        var snumber = document.getElementById("Text1");
        
        sline = parseInt(snumber.value)
        
        var results = output.value.split("\n");

        //for (var sline = 0; sline < 1; sline++) {
         

        var slineword = results[sline].split(":");
        slineword[1] = slineword[1].replaceAll('"', '')
        var stime = new Date().toLocaleTimeString();
        if (slineword[0] == "Me") {

            call_api(slineword[1], "One", stime)
            addchat(slineword[1], "One", stime);

        }
        else if (slineword[0] == "Agent") {
            call_api(slineword[1], "Two", stime)
            addchat(slineword[1], "Two", stime);
        }
        

        //setTimeout(processing, 500);
        //sleep(2000)
        
        
        snumber.value = sline + 1
        //sline = sline+1
        //if (sline == 5) {
        if (sline == 10) {
            output.textContent=""
        }
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function graph1() {
    
    polarchart1 = new Chart(document.getElementById("chartjs-5"), {
        "type": "bar",
        "data": {
            "labels": [],
            "datasets": [
                {
                    label: "Impolite",
                    backgroundColor: "rgb(255, 204, 0, 0.3)",
                    borderColor: "rgb(255, 204, 0)",
                    borderWidth: 1.5,
                    stack: "Stack 0",
                    data: []
                },{
                label: "Frustrated",
                backgroundColor: "rgb(255, 0, 0, 0.3)",
                    borderColor: "rgb(255, 0, 0)",
                borderWidth: 1.5,
                stack: "Stack 0",
                data: []
            },{
                label: "Sad",
          backgroundColor: "rgb(255, 102, 0, 0.3)",
          borderColor: "rgb(255, 102, 0)",
          borderWidth: 1.5,
          stack: "Stack 0",
          data: []
           }, {
                    label: "Sympathetic",
                    backgroundColor: "rgb(255, 255, 153, 0.3)",
                    borderColor: "rgb(255, 255, 153)",
                    borderWidth: 1.5,
                    stack: "Stack 0",
                    data: []
                }, {
                    label: "Polite",
                    backgroundColor: "rgb(153, 255, 153, 0.3)",
                    borderColor: "rgb(153, 255, 153)",
                    borderWidth: 1.5,
                    stack: "Stack 0",
                    data: []
                }, {
                    label: "Satisfied",
                    backgroundColor: "rgb(0, 204, 0, 0.3)",
                    borderColor: "rgb(0, 204, 0)",
                    borderWidth: 1.5,
                    stack: "Stack 0",
                    data: []
                }, {
                    label: "Excited",
                    backgroundColor: "rgb(0, 128, 0, 0.3)",
                    borderColor: "rgb(0, 128, 0)",
                    borderWidth: 1.5,
                    stack: "Stack 0",
                    data: []
                }]
        }
    });
}
function graph2() {

    polarchart2 = new Chart(document.getElementById("chartjs-6"), {
        "type": "bar",
        "data": {
            "labels": [],
            "datasets": [
                {
                    label: "Impolite",
                    backgroundColor: "rgb(255, 204, 0, 0.3)",
                    borderColor: "rgb(255, 204, 0)",
                    borderWidth: 1.5,
                    stack: "Stack 0",
                    data: []
                }, {
                    label: "Frustrated",
                    backgroundColor: "rgb(255, 0, 0, 0.3)",
                    borderColor: "rgb(255, 0, 0)",
                    borderWidth: 1.5,
                    stack: "Stack 0",
                    data: []
                }, {
                    label: "Sad",
                    backgroundColor: "rgb(255, 102, 0, 0.3)",
                    borderColor: "rgb(255, 102, 0)",
                    borderWidth: 1.5,
                    stack: "Stack 0",
                    data: []
                }, {
                    label: "Sympathetic",
                    backgroundColor: "rgb(255, 255, 153, 0.3)",
                    borderColor: "rgb(255, 255, 153)",
                    borderWidth: 1.5,
                    stack: "Stack 0",
                    data: []
                }, {
                    label: "Polite",
                    backgroundColor: "rgb(153, 255, 153, 0.3)",
                    borderColor: "rgb(153, 255, 153)",
                    borderWidth: 1.5,
                    stack: "Stack 0",
                    data: []
                }, {
                    label: "Satisfied",
                    backgroundColor: "rgb(0, 204, 0, 0.3)",
                    borderColor: "rgb(0, 204, 0)",
                    borderWidth: 1.5,
                    stack: "Stack 0",
                    data: []
                }, {
                    label: "Excited",
                    backgroundColor: "rgb(0, 128, 0, 0.3)",
                    borderColor: "rgb(0, 128, 0)",
                    borderWidth: 1.5,
                    stack: "Stack 0",
                    data: []
                }]
        }
    });
}
function addchat(stext, sperson, stime) {
    //var d = Date.now();
    
    if (sperson == "One") {
        var daString = "<div class=\'chatcontainer\'><img src=\'/Img/Chat1.png\' alt=\'Avatar\' class=\'left\'><p>" + stext + "</p><span class=\'time-right\'>" + stime + "</span></div>";

    }
    else if (sperson == "Two") {
        var daString = "<div class=\'chatcontainer darker\'><img src=\'/Img/Chat2.png\' alt=\'Avatar\' class=\'right\'><p>" + stext + "</p><span class=\'time-right\'>" + stime + "</span></div>";
    }
    
    var daParent = document.getElementById("chat");
    stitle = daParent.innerHTML
    
    daParent.innerHTML = stitle.concat(daString);
    gotoBottom("chat")
}
function gotoBottom(id) {
    var element = document.getElementById(id);
    element.scrollTop = element.scrollHeight - element.clientHeight;
}