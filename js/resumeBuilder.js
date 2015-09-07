$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name" : "Stephon ",
    "role" : "Software Developer ",
    "contacts":{
        "email":"spatton@email.sc.edu ",
        "mobile":"8035498557 ",
        "github":"stephonpatton ",
        "twitter":"stephonpatton",
        "location" : "Columbia, South Carolina "
    },
    "welcome_message" : "Hello, welcome to my interactive resume! ",
    "skills" : ["Programming ", "JavaScript ", "Java ", "Python ", "HTML5 ", "CSS ", "C# "],
};

var education = {
    "schools" : [
        {
            "name": "Central Carolina Technical College",
            "city": "Sumter, SC",
            "degree": "Associates",
            "major": ["Arts"],
            "dates":2013,
            "url":"http://www.cctech.edu"
        },
        {
            "name": "University of South Carolina",
            "city": "Columbia, SC",
            "degree": "Bachelors",
            "major": ["Computer Engineering"],
            "dates": 2015,
            "url":"http://www.sc.edu"
        }
    ]
};

var work = {
    "jobs" : [
        {
            "employer": "Kroger, Inc.",
            "title": "Grocery Clerk",
            "dates": "June 2012 - August 2015",
            "description": "Universal worker that helped all where needed. Typical day would include stocking items on shelf, ringing up customers items, and bagging customers items."
        },
        {
            "employer": "Guru.com",
            "title": "Java Software Developer",
            "dates":"May 2015 - August 2015",
            "description":"Made Software Applications for clients on guru.com with Java."
        }
    ]
}

var projects = {
    "projects": [
        {
        },
        {
        }
    ]
}
if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
    $("#skills").append(formattedSkill);


}
v;
