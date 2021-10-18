var data = {
    "research": [
        {
            img: 'images_harshit/research/fIRL.png',
            title: 'Avant LLC',
            authors: 'Operations and Strategy Analyst',
            text: '<b>Contact center product reform</b>: I worked on facilitating company-wide cutover from Avant’s legacy Cisco vendor to the new Twilio Flex platform that would enable agents to interact with customers. To do this, I collaborated cross-functionally with the front-end, back-end, customer operations, and data management teams to set-up the platform and build product features. <br> <b>Livevox contact center implementation</b>: I developed and deployed jobs for sending out SMSes, emails, voicemails, and for outbound dialing for customer communication in Livevox that would replace disparate vendors with $100k a year. I built SQL monitors for these and scripted Python jobs for auto-migrating customer communication data from Livevox to Avant’s cloud database. <br><b>Self-service capabilities</b>: In an attempt to provide self-service options to customers to reduce call-center traffic, I am collaborating with the development team to identify, build, and deploy APIs for self-service options like ‘Text-to-Pay’ and ‘Schedule Callbacks’.'
        },
        {
            img: 'images_harshit/research/fIRL.png',
            title: 'Runaway',
            authors: 'Product Manager',
            text: 'At Runaway, I worked on developing and launching a front-end mobile app and a back-end web app. To do this, I created a product road-map and managed a team of 12 engineers and designers. I also conducted interviews with 13 users, 6 bloggers, and 4 volunteers to develop detailed user stories, and conducted weekly agile sprints, writing epics based on user stories. <a href="https://youtu.be/Le6imYEHYjY?t=688">[Product Demo]</a>'
        },
        {
            img: 'images_harshit/research/FlowPlan.png',
            title: 'Illinois Business Consulting (IBC)',
            authors: '',
            text: '<b>Project Manager</b><br>I managed a team of 4 consultants to identify new markets for a live cell imaging start-up post the global Covid-19 pandemic. To do this, I performed detailed market trend analysis in areas of product mix, pricing, value, and services by performing quantitative research on 15 competitors and about 4000 customers. I also created a marketing plan based on A/B testing for redesigning website and marketing strategy, which increased responses by 20% and sales by 3%.<br><b>Analytics Consultant</b><br>As a consultant for Illinois Business Consulting, I worked for a global retail grocery chain to standardized their pellet delivery throughout the week to ensure a more efficient demand-based replenishment system across the client’s network of grocery stores. To do this, I performed data analysis on current logistics and storage data of over 70 stores and developed a VBA-Macros tool that would optimize pallet delivery by determining the most efficient delivery quantities based on dynamically changing store data. This program will enable the client to change their delivery schedule based on the store data each week.'
        },  
        {
            img: 'images_harshit/research/LOOP.png',
            title: 'Bhabha Atomic Research Center',
            authors: 'Data Analyst',
            text: 'I developed a software to perform digital analysis of radiation emitted by equipment used for handling radioactive material which was used to determine which radioactive material was emitting the radiation. This eliminated the need for analog analysis machines and reduced cost by $6000.',
        },
        {
            img: 'images_harshit/research/lane_detection.png',
            title: 'R. R. Kabel Limited',
            authors: 'Operations Analyst',
            text: 'I proposed an optimized manufacturing process at a leading cables and wires manufacturing company that would streamline processes from the drawing of the copper to testing, packaging and delivery of wires and cables.',
        },
        {
            img: 'images_harshit/research/face_detection.png',
            title: 'Siemens Limited',
            authors: 'Supply Chain Analyst',
            text: 'I built a dashboard to track the efficient of a circuit breaker factory along with employee distribution and absenteesm. I also calculated the required cycle time and current production rate to determine how to make the factory more productive so as to fullfill all ongoing orders in the current fiscal year. The project resulted in 3% increase in the rate of production.',
        }],
    "projects": [
        {
            img: 'images_harshit/projects/agv.png',
            title: 'GSCMI Intercollege Graduate Case Competition',
            text: 'I was selected to represent UIUC at the Purdue Supply Chain Case Competition. For the competition, my team and I were required to solve a complex global supply chain challenge across 3 continents while optimizing shipping routes and demand fullfillment, with plant capacity constraints and exchange rate variations. <a href="https://drive.google.com/file/d/19Bj9LefNjK69DBc-Lmr-U4tOhUAkit4J/view?usp=sharing">[Slides]</a>'
        },
        {
            img: 'images_pranaya/projects/bp.jpg',
            title: 'BP Professional Responsibility Strategy Competition',
            text: 'My team and I won the First Runner Up prize for developing a 20-year plan to shift the energy mix in the developing country from non-renewable to renewable energy sources while satisfying all stakeholders and maintaining steady economic growth. <a href="https://docs.google.com/presentation/d/1oqmC41G4L4g61fLfy4hNVZk-VApRdnHT/edit?usp=sharing&ouid=102278493785615446744&rtpof=true&sd=true">[Slides]</a>'
        },
        {
            img: 'images_harshit/projects/unnati.png',
            title: 'Automatic Traffic Control using Computer Vision',
            text: 'As a part of my B. Tech. thesis project, I collaborated closely with traffic police and my engineering team to address vehicular traffic problems in Mumbai by devising an effective system by collecting traffic data from 11 signals and applying image processing using agile project management'
        }],
    "teaching": [
        {
            img: 'images_harshit/projects/agv.png',
            title: 'BADM 508 - Leadership and Teams',
            text: 'This course develops and integrates fundamental behavioral concepts and theory having administrative applications; initially focuses on the individual decision maker and ultimately includes interpersonal, organizational, and social structures and influences; and develops strategies and methods of research on behavioral applications in business.'
        },
        {
            img: 'images_harshit/projects/igvc.png',
            title: 'MBA 551 - Strategic Innovation',
            text: 'This course covers the strategic perspective on innovation and the management side of innovation efforts – leadership and design of innovation initiatives such that employees are able to effectively execute them. It also covers how to successfully implement innovation efforts while working alongside established businesses at the same firm, the challenges of leading product development teams, the analysis of planning and evaluation systems for innovation initiatives, and how to manage innovation when the initiative spans organizational boundaries.'
        },
        {
            img: 'images_harshit/projects/unnati.png',
            title: 'BADM 312 - Designing and Managing Organizations',
            text: 'This course covers the general understanding of complex organizations; particular attention to ways of dividing work, achieving coordination, and issues connected with change and adaptation.'
        }],
    "blog": [
    ],
    "news": [
    ],
}

$('document').ready(function () {
    // Add news
    // for (var i = 0; i < data.news.length; i++) {
    //     var proj = data.news[i];
    //     var html = '<tr><td>&#8594; ' + proj + '</td></tr>';
    //     $('table#news-table').append(html);
    // }


    // Add projects
    for (var i = 0; i < data.projects.length; i++) {
        var proj = data.projects[i];
        var html = getProjectHTML(proj);
        $('table#projects-table').append(html);
    }

    // Add teaching
    for (var i = 0; i < data.teaching.length; i++) {
        var proj = data.teaching[i];
        var html = getProjectHTML(proj);
        $('table#teaching-table').append(html);
    }


    // Add research
    for (var i = 0; i < data.research.length; i++) {
        var proj = data.research[i];
        var html = getResearchHTML(proj);
        $('table#research-table').append(html);
    }

    // Add blog
    for (var i = 0; i < data.blog.length; i++) {
        var proj = data.blog[i];
        var html = getBlogHTML(proj);
        $('table#blog-table').append(html);
    }



});


function getProjectHTML(proj) {
    var html = '<tr>';
    // Add image
    // Add title and description
    // html += '<td class="image-td"><img class="project-img" src="' + proj.img + '"></td>';
    // html += '<iframe width="420" height="315" src="' + proj.img + '> </iframe > '
    html += '<td class="description-td"><h3>' + proj.title + '</h3>'
    if ('authors' in proj) {
        html += '<p><i>' + proj.authors + '</i></p>'
    }
    html += '<p>' + proj.text + '</p></td>';

    html += '</tr>';
    return html;
}

function getResearchHTML(proj) {
    var html = '<tr>';
    // Add image
    // Add title and description
    html += '<td class="description-td"><h3>' + proj.title + '</h3>'
    if ('authors' in proj) {
        html += '<p><i>' + proj.authors + '</i></p>'
    }
    html += '<p>' + proj.text + '</p></td>';
    // html += '<td class="image-td"><img class="project-img" src="' + proj.img + '"></td>';

    html += '</tr>';
    return html;
}

function getBlogHTML(proj) {
    var html = '<tr>';
    // Add image
    // Add title and description
    html += '<td class="description-td"><h3>' + proj.title + '</h3>'
    if ('authors' in proj) {
        html += '<p><i>' + proj.authors + '</i></p>'
    }
    html += '<p>' + proj.text + '</p></td>';

    html += '</tr>';
    return html;
}


// var data = {
//     "research": [
//         {
//             img: 'images_harshit/research/fIRL.png',
//             title: 'Runaway',
//             authors: 'Product Management Intern',
//             text: 'I am currently working as a Product Management Intern at Runaway, wheren I have developed a detailed product roadmap for developing a web application for a mental health initiative, and conducting weekly agile sprints for all stages of the SDLC based on user stories and monitoring product iterations.',
//         },
//         {
//             img: 'images_harshit/research/FlowPlan.png',
//             title: 'Illinois Business Consulting (IBC)',
//             authors: 'Consultant',
//             text: 'I was a consultant for Illinois Business Consulting where I worked for a global retail grocery chain to standardized their pellet delivery throughout the week to ensure a more efficient demand-based replenishment system across the client’s network of grocery stores. To do this, I performed data analysis on current logistics and storage data of over 70 stores and developed a VBA-Macros tool that would optimize pallet delivery using input data for the client to use on other stores now and in the future',
//         },
//         {
//             img: 'images_harshit/research/LOOP.png',
//             title: 'Bhabha Atomic Research Center',
//             authors: 'Project Trainee',
//             text: 'I worked on a project to digitize the analysis of signals emitted by radioactive elements which could then be used to determine which element was emitted the radiation. I managed this project using waterfall management and my team and I were able to reduce the cost of analysis by 0.5% by eliminating the need for equipment.',
//         },
//         {
//             img: 'images_harshit/research/lane_detection.png',
//             title: 'R. R. Kabel Limited',
//             authors: 'Operations Intern',
//             text: 'I proposed an optimized manufacturing process at a leading cables and wires manufacturing company that would streamline processes from the drawing of the copper to testing, packaging and delivery of wires and cables.',
//         },
//         {
//             img: 'images_harshit/research/face_detection.png',
//             title: 'Siemens Limited',
//             authors: 'Supply Chain Intern',
//             text: 'I built a dashboard to track the efficient of a circuit breaker factory along with employee distribution and absenteesm. I also calculated the required cycle time and current production rate to determine how to make the factory more productive so as to fullfill all ongoing orders in the curretn fiscal year. The project resulted in 3% increase in the rate of production.',
//         }],
//     //     "teaching": [
//     //         {
//     //             img: 'images_harshit/projects/agv.png',
//     //             title: 'BADM 508 - Leadership and Teams',
//     //             text: 'This course develops and integrates fundamental behavioral concepts and theory having administrative applications; initially focuses on the individual decision maker and ultimately includes interpersonal, organizational, and social structures and influences; and develops strategies and methods of research on behavioral applications in business.
//     // • Schedule Type: Online
//     // • Campus: Urbana - Champaign
//     // • Semester: Spring 2020
//     // • Instructional Method: Extramural - Open Learning
//     // • Credit Hours: 4
//     // • Duration: 8 Weeks'
//     //         },
//     // {
//     //     img: 'images_harshit/projects/igvc.png',
//     //         title: 'MBA 551 - Strategic Innovation',
//     //             text: 'This course covers the strategic perspective on innovation and the management side of innovation efforts – leadership and design of innovation initiatives such that employees are able to effectively execute them. It also covers how to successfully implement innovation efforts while working alongside established businesses at the same firm, the challenges of leading product development teams, the analysis of planning and evaluation systems for innovation initiatives, and how to manage innovation when the initiative spans organizational boundaries.
//     //     • Schedule Type: Online
//     //     • Campus: Urbana - Champaign
//     //     • Semester: Spring 2020
//     //     • Instructional Method: Extramural - Open Learning
//     //     • Credit Hours: 4
//     //     • Duration: 8 Weeks'
//     // },
//     // {
//     //     img: 'images_harshit/projects/unnati.png',
//     //         title: 'BADM 312 - Designing and Managing Organizations',
//     //             text: 'This course covers the general understanding of complex organizations; particular attention to ways of dividing work, achieving coordination, and issues connected with change and adaptation.
//     //     • Schedule Type: Lecture - Discussion
//     //     • Campus: Urbana - Champaign
//     //     • Semester: Spring 2020
//     //     • Prerequisite: BADM 310 - Management and Organizational Behavior
//     //     • Time: Tuesday / Thursday 12: 30 PM to 1: 50 PM
//     //     • Credit Hours: 3
//     //     • Duration: 16 Weeks'
//     // }],
//     // "teaching": [
//     // ],
//     //     "Projects": [
//     //         {
//     //             img: 'images/',
//     //             title: 'GSCMI Intercollege Graduate Case Competition',
//     //             text: 'I was selected to represent UIUC at the Purdue Supply Chain Case Competition. For the competition, my team and I were required to solve a complex global supply chain challenge across 3 continents while optimizing shipping routes and demand fullfillment, with plant capacity constraints and exchange rate variations. [slides]'
//     //         },
//     //         {
//     //             img: 'images/',
//     //             title: 'BP Professional Responsibility Strategy Competition',
//     //             text: 'My team and I won the First Runner Up prize for developing a 20-year plan to shift the energy mix in the developing country from non-renewable to renewable energy sources while satisfying all stakeholders and maintaining steady economic growth. [Slides]'
//     //         },
//     //         {
//     //             img: 'images/',
//     //             title: 'Automatic Traffic Control using Computer Vision',
//     //             text: 'As a part of my B. Tech. thesis project, I collaborated closely with traffic police and my engineering team to address vehicular traffic problems in Mumbai by devising an effective system by collecting traffic data from 11 signals and applying image processing using agile project management'
//     //         }
//     //     ],
//     //         "news": [
//     //         ],
// }

// $('document').ready(function () {
//     // Add news
//     // for (var i = 0; i < data.news.length; i++) {
//     //     var proj = data.news[i];
//     //     var html = '<tr><td>&#8594; ' + proj + '</td></tr>';
//     //     $('table#news-table').append(html);
//     // }


//     // Add projects
//     for (var i = 0; i < data.projects.length; i++) {
//         var proj = data.projects[i];
//         var html = getProjectHTML(proj);
//         $('table#projects-table').append(html);
//     }

//     // Add teaching
//     for (var i = 0; i < data.teaching.length; i++) {
//         var proj = data.teaching[i];
//         var html = getProjectHTML(proj);
//         $('table#teaching-table').append(html);
//     }


//     // Add research
//     for (var i = 0; i < data.research.length; i++) {
//         var proj = data.research[i];
//         var html = getResearchHTML(proj);
//         $('table#research-table').append(html);
//     }

//     // Add blog
//     for (var i = 0; i < data.blog.length; i++) {
//         var proj = data.blog[i];
//         var html = getBlogHTML(proj);
//         $('table#blog-table').append(html);
//     }



// });


// function getProjectHTML(proj) {
//     var html = '<tr>';
//     // Add image
//     // Add title and description
//     // html += '<td class="image-td"><img class="project-img" src="' + proj.img + '"></td>';
//     // html += '<iframe width="420" height="315" src="' + proj.img + '> </iframe > '
//     html += '<td class="description-td"><h3>' + proj.title + '</h3>'
//     if ('authors' in proj) {
//         html += '<p><i>' + proj.authors + '</i></p>'
//     }
//     html += '<p>' + proj.text + '</p></td>';

//     html += '</tr>';
//     return html;
// }

// function getResearchHTML(proj) {
//     var html = '<tr>';
//     // Add image
//     // Add title and description
//     html += '<td class="description-td"><h3>' + proj.title + '</h3>'
//     if ('authors' in proj) {
//         html += '<p><i>' + proj.authors + '</i></p>'
//     }
//     html += '<p>' + proj.text + '</p></td>';
//     html += '<td class="image-td"><img class="project-img" src="' + proj.img + '"></td>';

//     html += '</tr>';
//     return html;
// }

// function getBlogHTML(proj) {
//     var html = '<tr>';
//     // Add image
//     // Add title and description
//     html += '<td class="description-td"><h3>' + proj.title + '</h3>'
//     if ('authors' in proj) {
//         html += '<p><i>' + proj.authors + '</i></p>'
//     }
//     html += '<p>' + proj.text + '</p></td>';

//     html += '</tr>';
//     return html;
// }
