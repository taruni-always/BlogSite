var blogs = {
    "Node As Service": "StrongBlock, which pioneered Nodes-as-a-Service (NaaS) by rewarding node creators for their participation, is excited to announce it will be upgrading its NaaS DApp platform to the Stronger (STRNGR) token on April 5, 2022, Pacific Time. For several hours prior to the upgrade, claiming of STRONG will be disabled. This will be announced on Twitter, on the Website, and in the DApp.     STRONG within the NaaS DApp platform will be automatically upgraded to STRNGR on a 1:1 basis. No action will be required by anyone already participating in the platform.     After the upgrade is complete, STRNGR will replace STRONG as the token used to create nodes within the NaaS DApp in current and upcoming protocols, as well as the reward token for the NaaS DApp",
    "Machine Learning": "Machine learning interviews cover a wide range of skills such as coding, machine learning, probability/statistics, research, case studies, presentations, etc. One of the important machine learning interviews is the system design interview.     The ML system design interview analyzes the candidate’s skill to design an end-to-end machine learning system for a given use case",
    "Artificial Intelligence (AI) and Big Data": 'AI is nothing but intelligence that learns, re-learns, and reinforces its learning through the data that it gets. This data can either be specifically fed into the modes or designed to collect this data independently. Hence, the volume and quality of data are extremely important in determining the efficacy and relevance of AI for any purpose. Big data is a new form of information asset, and it requires massive processing models and the right computing muscle to take care of its flow, velocity, scale, and density. For Big Data to expand and extend human intelligence through AI, we would need to master many dimensions of Big Data. They would include, but would not be limited to, speech recognition, IoT and sensor data, image recognition, unstructured data, and real-time data of many formats.',
    "What is Natural Language Processing (NLP)": 'It combines the power of human and machine, to solve the complex problems into simple solutions. Which consist the great combination of computer science to study the rules of of language, and create intelligent systems (run on machine learning and NLP algorithms) capable of understanding, analyzing, and extracting meaning from text and speech.NLP is a field of Artificial Intelligence(AI) which converts the human language into machine language. Which works with different aspects like syntax, semantics, pragmatics, and morphology etc.The Gmail contains Promotions, Social, Primary, or Spam, here every message is been separated so properly with the help of keyword extraction where it extracts the word and find its relevant place, and store the mails only by reading the single word out of the entire mail.'
};

var images = ["blog1.jfif",
            "blog2.jfif",
            "blog3.jfif",
            "blog4.jfif"];

window.addEventListener('DOMContentLoaded', function () {
    if (document.getElementsByClassName("navbar")[1].children[0].className == "active") {
        var index = 0;
        for (const key of Object.keys(blogs)) {
            const divTag = document.createElement("div");
            divTag.className = "blog";
            const img1 = document.createElement("img");
            img1.src = images[index];
            index ++;
            divTag.appendChild(img1);

            const h = document.createElement("h3");
            h.innerHTML = key;
            divTag.appendChild(h);

            const p = document.createElement("p");
            p.innerHTML = blogs[key].substr(0, 70) + " ...";
            divTag.appendChild(p);

            const b = document.createElement("input");
            b.setAttribute("type", "button");
            b.setAttribute("value", "CONTINUE READING");
            b.addEventListener("click", function () {
                var blogName = this.parentNode.children[1].innerHTML;
                var opened = window.open("");
                opened.document.write("<html lang='en'><head><title>BlogSite</title><link rel='stylesheet' href='style.css'> <script src='script.js'> </script> </head> <body> <div class='navbar' style='color:white;font-size:25px;'> <p>BLOG SITE</p> </div> <div class='showfullblog'> <h2>" + blogName + "</h2></div><p>" + blogs[blogName] + "</p></body> </html>");
            });
            divTag.appendChild(b);
            document.body.appendChild(divTag);
        }
    }
    if (document.getElementsByClassName("navbar")[1].children[4].className == "active") {
        document.getElementById("newblogform").children[10].onclick = function() {
            window.location.href = "home.html";
        };
    }
});