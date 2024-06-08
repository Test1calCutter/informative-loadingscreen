window.addEventListener("DOMContentLoaded", event=>{
    // SELECTORS
    const about = document.getElementById("about");
    const features = document.getElementById("features");
    const team = document.getElementById("team");
    const bar = document.getElementById("bar");

    const h1About = document.getElementById("h1-about")
    const h1Feat = document.getElementById("h1-feat")
    const h1Team = document.getElementById("h1-team")
    const iAbout = document.getElementById("i-about")
    const iFeat = document.getElementById("i-feat")
    const iTeam = document.getElementById("i-team")



    // SECTIONS
    const about_section = document.getElementById("about-section");
    const features_section = document.getElementById("features-section");
    const team_section = document.getElementById("team-section");


    var currDiv

    // This is for the sliding bar under the selections like "About", "Server Feature" and "Team"
    about.addEventListener("click", event=>{
        features_section.style.display = "none"
        team_section.style.display = "none"

        h1Feat.style.color = "#4a4a4a"
        iFeat.style.color = "#4a4a4a"
        h1Team.style.color = "#4a4a4a"
        iTeam.style.color = "#4a4a4a"

        bar.style.transition = "0.4s ease"
        bar.style.left = "10px";

        about_section.style.transition = "0.4s ease"
        about_section.style.display = ""
        h1About.style.color = "white"
        iAbout.style.color = "white"

        currDiv = about_section
        
    })
    features.addEventListener("click", event=>{
        about_section.style.display = "none"
        team_section.style.display = "none"

        h1About.style.color = "#4a4a4a"
        iAbout.style.color = "#4a4a4a"
        h1Team.style.color = "#4a4a4a"
        iTeam.style.color = "#4a4a4a"
        
        bar.style.transition = "0.4s ease"
        bar.style.left = "380px";
        features_section.style.transition = "0.4s ease"
        features_section.style.display = ""
        h1Feat.style.color = "white"
        iFeat.style.color = "white"

        currDiv = features_section

    })
    team.addEventListener("click", event=>{
        about_section.style.display = "none"
        features_section.style.display = "none"

        h1About.style.color = "#4a4a4a"
        iAbout.style.color = "#4a4a4a"
        h1Feat.style.color = "#4a4a4a"
        iFeat.style.color = "#4a4a4a"

        bar.style.transition = "0.4s ease"
        bar.style.left = "760px";

        team_section.style.transition = "0.4s ease"
        team_section.style.display = ""
        h1Team.style.color = "white"
        iTeam.style.color = "white"
        currDiv = team_section

    })





})