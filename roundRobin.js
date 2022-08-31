// Teams
tournamentSchedule = { playingTeams: ["Mumbai", "Chennai", "Bangalore", "Punjab"], startDate: new Date() }
//---------------------------------------------------------------------------------------------
// Counting the Number of Matches
function numberOfMatches(){
    count = 0
for (i of tournamentSchedule.playingTeams) {
    for (d = tournamentSchedule.playingTeams.indexOf(i) + 1; d < tournamentSchedule.playingTeams.length; d++) {
        count++
    }
}
console.log("Number of Matches:",count)
}
var numberOfRounds = tournamentSchedule.playingTeams.length - 1;
//---------------------------------------------------------------------------------------------
// Assigning Dope Value if Odd Number of Teams for support
dopeTeam = "dummy"
if (tournamentSchedule.playingTeams.length % 2 != 0) {
    tournamentSchedule.playingTeams.push(dopeTeam)
}
//---------------------------------------------------------------------------------------------
// Rival Teams by Round Robin Method
const roundRobinFunction = (array) => {
    teams = []
    if (array.includes("dummy")) {
        numberOfRounds += 1
    }
    else {
        numberOfRounds = numberOfRounds
    }
    for (i = 0; i < numberOfRounds; i++) {
        for (var j = 0; j < array.length / 2; j++) {
            if (array[j] != dopeTeam & array[array.length - 1 - j] != dopeTeam) {
                teams.push(array[j] + " vs " + array[array.length - 1 - j]);
            }
        }
        array.splice(1, 0, array.pop());
    }
    return teams
}
//---------------------------------------------------------------------------------------------
// Rival Teams
rivalTeams = roundRobinFunction(tournamentSchedule.playingTeams)
if (rivalTeams.length % 2 != 0) {
    rivalTeams.push("None")
}
//---------------------------------------------------------------------------------------------
// Date Function 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date(tournamentSchedule.startDate)
var saturday = new Date(tournamentSchedule.startDate)
var sunday = new Date(tournamentSchedule.startDate)
// Finding the Date
dateList = []
for (let i = 0; i <= 6; i++) {
    if (d.getDay() + i == 6) {
        saturday.setDate(d.getDate() +i+ 1)
        sunday.setDate(d.getDate() + i )
    }
}
//---------------------------------------------------------------------------------------------
// Finding the Day
day = []
var dt = new Date(saturday);
var dt2 = new Date(sunday)
for (e = 0; e <= rivalTeams.length / 4; e++) {
    dateList.push((new Date(dt2)).toString().substring(4, 15))
    dateList.push((new Date(dt)).toString().substring(4, 15))
    day.push(days[dt2.getDay(sunday)])
    day.push(days[dt.getDay(saturday)])
    dt.setDate(dt.getDate() + 7)
    dt2.setDate(dt2.getDate() + 7)
}
//---------------------------------------------------------------------------------------------
// Scheduling the Teams
count = 0
id=1
matchList = []
console.log("\n")
console.log("******************************************    Match Schedule     **********************************************")
for (i = 0; i < rivalTeams.length; i = i + 2) {
    slotOne = {}
    slotTwo = {}
    d = i
    slotOne["ID"]="M"+id
    slotOne["Match_No"] = i + 1
    slotOne["Match"] = rivalTeams[i]
    slotOne["Date"] = dateList[count]
    slotOne["Day"] = day[count]
    slotOne["Venue"]="Wankhede"
    slotOne["Time"]="3:30PM IST"
    id++
    if (rivalTeams[d + 1] != "None") {
        slotTwo["ID"]="M"+id
        slotTwo["Match_No"] = i + 2
        slotTwo["Match"] = rivalTeams[d + 1]
        slotTwo["Date"] = dateList[count]
        slotTwo["Day"] = day[count]
        slotTwo["Venue"]="Chepauk"
        slotTwo["Time"]="7:30PM IST"
    }
    matchList.push(slotOne)
    matchList.push(slotTwo)
    count++
    id++
}
matchList.forEach(element => {
    console.log("\n")
    console.log(`Match No: ${element.Match_No}                                                                     Match ID : ${element.ID}       `)
    console.log("---------------------------------------------------------------------------------------------------------------")
    console.log(`Date  : ${element.Date}                                                                  Day : ${element.Day}`)
    console.log(`                                            ${element.Match}      `)
    console.log(`Venue : ${element.Venue}                                                                  Timing : ${element.Time}  `)
    console.log("---------------------------------------------------------------------------------------------------------------")
    console.log("\n")
});
//---------------------------------------------------------------------------------------------
// Finding Match details by ID
function findById(id){
    match=matchList.filter(n=>n.ID.includes(id))
    match.forEach(element=>{
        console.log(element)
    })
}
findById("M1")
//---------------------------------------------------------------------------------------------