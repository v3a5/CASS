function loadSkills(){

    const repo = new EcRepository();

    repo.selectedServer = "https://dev.cassproject.org/api/";

    repo.search("*", function(results){

        const container = document.getElementById("skills");
        container.innerHTML = "";

        results.forEach(skill => {

            if(skill.name){

                const card = document.createElement("div");

                card.className = "skill-card";

                card.innerHTML =
                    "<h3>" + skill.name + "</h3>" +
                    "<p>" + (skill.description || "") + "</p>";

                container.appendChild(card);

            }

        });

    });

}
