const fs = require('fs');
//consists of dates
let datearray = [];
// consists of dates and readings
let dateMap = new Map<string, number[]>();

//Reading the JSON file
fs.readFile('./heart-rate.json', (err, jsonfile) => {
    if (err) {
        console.log("Error loading the jsonfile", err);
    }
    try {
        //core are where all the functions are called
        const heat_rate = JSON.parse(jsonfile);
        heat_rate.forEach(getDates);
        let output = getReadings();
        getOutputFile(output);
    } catch (err) {
        console.log("Error parsing the jsonfile", err);
    }
});

function getDates(currentValue, index) {
    //Gets timestamp
    const dt = new Date(currentValue.start_time);//.getTime();
    //Getting date from timestamp
    //var date = new Date(dt);
    let StringDate = dt.getMonth() + "/" + dt.getDate() + "/" + dt.getFullYear();
    //calling the function where reading are linked to the respt. dates
    addtoMap(StringDate, currentValue.bpm);
};

function addtoMap(StringDate, intbpmreading) {
    //Linking of readings is done here to respt. dates
    //Where date will be the key and readings will be the values
    if (dateMap.has(StringDate)) {
        dateMap.get(StringDate).push(intbpmreading);
    } else {
        //creating the link between date and reading
        let bpmReadingList = [];
        bpmReadingList.push(intbpmreading);
        dateMap.set(StringDate, bpmReadingList);
        datearray.push(StringDate);
    }
};

function getReadings() {
    let readings = [];
    for (let i = 0; i < datearray.length; i++) {
        //sorting the readings
        let sorted = (dateMap.get(datearray[i])).sort(function (a, b) { return a - b });
        //getting median
        let mediancount = Math.round(dateMap.get(datearray[i]).length / 2)
        //creating JSON structured output
        readings.push({
            "date": datearray[i],
            "bpm": {
                "min": sorted[0],
                "max": sorted[dateMap.get(datearray[i]).length - 1],
                "median": sorted[mediancount]
            }
        })
    }
    //has comple readings
    return readings;
}

//Output File
function getOutputFile(data) {
    //creating the new file where output will be visible
    const jsonString = JSON.stringify(data);
    fs.writeFile('./output.json', jsonString, (err) => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
}
