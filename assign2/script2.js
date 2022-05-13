  var app = angular.module('myApp', []);
  app.controller('myCtrl', function ($scope) {
      $scope.blogs = [{
              id: "one",
              title: "Node As Service",
              body: "StrongBlock, which pioneered Nodes-as-a-Service (NaaS) by rewarding node creators for their participation, is excited to announce it will be upgrading its NaaS DApp platform to the Stronger (STRNGR) token on April 5, 2022, Pacific Time. For several hours prior to the upgrade, claiming of STRONG will be disabled. This will be announced on Twitter, on the Website, and in the DApp.     STRONG within the NaaS DApp platform will be automatically upgraded to STRNGR on a 1:1 basis. No action will be required by anyone already participating in the platform.     After the upgrade is complete, STRNGR will replace STRONG as the token used to create nodes within the NaaS DApp in current and upcoming protocols, as well as the reward token for the NaaS DApp",
              image: "blog1.jfif"
                },
          {
              id: "two",
              title: "Machine Learning",
              body: "Machine learning interviews cover a wide range of skills such as coding, machine learning, probability/statistics, research, case studies, presentations, etc. One of the important machine learning interviews is the system design interview. The ML system design interview analyzes the candidate’s skill to design an end-to-end machine learning system for a given use case",
              image: "blog2.jfif",
                },
          {
              id: "three",
              title: "Artificial Intelligence (AI) and Big Data",
              body: 'AI is nothing but intelligence that learns, re-learns, and reinforces its learning through the data that it gets. This data can either be specifically fed into the modes or designed to collect this data independently. Hence, the volume and quality of data are extremely important in determining the efficacy and relevance of AI for any purpose. Big data is a new form of information asset, and it requires massive processing models and the right computing muscle to take care of its flow, velocity, scale, and density. For Big Data to expand and extend human intelligence through AI, we would need to master many dimensions of Big Data. They would include, but would not be limited to, speech recognition, IoT and sensor data, image recognition, unstructured data, and real-time data of many formats.',
              image: "blog3.jfif"
                },
          {
              id: "four",
              title: "What is Natural Language Processing (NLP)",
              body: 'It combines the power of human and machine, to solve the complex problems into simple solutions. Which consist the great combination of computer science to study the rules of of language, and create intelligent systems (run on machine learning and NLP algorithms) capable of understanding, analyzing, and extracting meaning from text and speech.NLP is a field of Artificial Intelligence(AI) which converts the human language into machine language. Which works with different aspects like syntax, semantics, pragmatics, and morphology etc.The Gmail contains Promotions, Social, Primary, or Spam, here every message is been separated so properly with the help of keyword extraction where it extracts the word and find its relevant place, and store the mails only by reading the single word out of the entire mail.',
              image: "blog4.jfif"
                }
            ];
      $scope.fname = "hey";
     
  });
