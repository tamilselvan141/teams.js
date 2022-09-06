let participants = [{
    Name: "Rahul ",
    Id: "TT1",
    Rank: 1,
  
},

{
    Name: "Ashwin",
    Id: "TT2",
    Rank: 2,
    
},

{
    Name: "David",
    Id: "TT3",
    Rank: 3,
    
},

{
    Name: "Dhoni",
    Id: "TT4",
    Rank: 9,
    
},

{
    Name: "Virat",
    Id: "TT5",
    Rank: 4,
    
},

{
    Name: "Hardik",
    Id: "TT6",
    Rank: 5,
    
},

{
    Name: "Smith",
    Id: "TT7",
    Rank: 6,
    
},

{
    Name: "Abdul",
    Id: "TT6",
    Rank: 7,
    
}];


//-----------------find_leagues_matches------------------
function find_leagues_matches() {
    let leaguesSchedules = [];
    for (i = 0; i < participants.length / 2; i++) {
        leaguesSchedules.push(participants[i].Name + "  vs  " + participants[participants.length - 1 - i].Name)
    }
    return leaguesSchedules;
}


//-----------------find_qualifier-----------------------
function find_qualifier() {
    let Qualifier = []
    let findLeaguesMatch = find_leagues_matches()
    for (let i = 0; i < findLeaguesMatch.length; i++) {
        if (i % 2 == 0) {
            Qualifier.push(findLeaguesMatch[i].slice(0, 6));
        } else {
            Qualifier.push(findLeaguesMatch[i].slice(-6));
        }
    }
    return Qualifier;
}


//-----------------find_qualifier_matches----------------
function find_qualifier_matches() {
    let QualifierSchedule = [];
    let find_qualifiers = find_qualifier()
    for (i = 0; i < find_qualifiers.length; i += 2) {
        QualifierSchedule.push(find_qualifiers[i] + " vs " + find_qualifiers[1 + i]);
    }
    return QualifierSchedule;
}


//-----------------find_semi_finalist--------------------
function find_semi_finalist() {
    let semiFinalist = []
    let find_qualifierMatch = find_qualifier_matches()
    for (let i = 0; i < find_qualifierMatch.length; i++) {
        if (i % 2 == 0) {
            semiFinalist.push(find_qualifierMatch[i].slice(0, 6));
        } else {
            semiFinalist.push(find_qualifierMatch[i].slice(-6));
        }
    }
    return semiFinalist;
}


//----------------find_semi_final_matches-----------------
function find_semi_final_matches() {
    let SemiFinalSchedule = [];
    let semiFinalist = find_semi_finalist()
    for (i = 0; i < semiFinalist.length; i += 2) {
        SemiFinalSchedule.push(semiFinalist[i] + " vs " + semiFinalist[1 + i]);
    }
    return SemiFinalSchedule;
}


//----------------find_finalist-------------------------
function find_finalist() {
    let Finalist = []
    let findSemiFinalMatch = find_semi_final_matches()
    for (let i = 0; i < findSemiFinalMatch.length; i++) {
        if (i % 2 == 0) {
            Finalist.push(findSemiFinalMatch[i].slice(0, 6));
        } else {
            Finalist.push(findSemiFinalMatch[i].slice(-6));
        }
    }
    return Finalist;
}


//----------------find_final_match-----------------------
function find_final_match() {
    let finalSchedule = [];
    let find_finalists = find_finalist()
    for (i = 0; i < find_finalists.length; i += 2) {
        finalSchedule.push(find_finalists[i] + " vs " + find_finalists[1 + i])
    }
    return finalSchedule;
}


//----------------all_match_schedule---------------------
function all_match_schedule() {
    if (participants.length == 16) {
        let allMatch = {
            "LEAGUES": find_leagues_matches(),
            "QUALIFIER": find_qualifier_matches(),
            "SEMIFINAL": find_semi_final_matches(),
            "FINAL": find_final_match()
        }
        console.table(allMatch);
    } else if (participants.length == 8) {
        let allMatch = {
            "LEAGUES": find_leagues_matches(),
            "SEMIFINAL": find_qualifier_matches(),
            "FINAL": find_semi_final_matches(),
        }
        console.table(allMatch);
    } else if (participants.length == 4) {
        let allMatch = {
            "LEAGUES": find_leagues_matches(),
            "FINAL": find_qualifier_matches(),
        }
        console.table(allMatch);
    }
} all_match_schedule(participants)






