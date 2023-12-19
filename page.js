var data = {
    "research": [
        {
            img: 'images/',
            title: 'Wayfair LLC',
            authors: 'Senior Data Analyst',
            teams: [
                {
                    teamName: 'Planning and Inventory Management',
                    period: 'Jan 2023 - Present',
                    text: [['Defined key metrics that served as a heuristics, allowing us to measure supplier performance while being interpretable to stakeholders, and developed new data pipelines to capture new and existing KPIs; planned and performed end-to-end development of several internal tools and dashboards to surface operational metrics and enable streamlined replenishment process. Worked closely in conjunction with internal tech teams and supplier facing teams to develop reporting.'],
                            ['Developed a unifying interface for incorporating fine-tuned language models to interact with the internal data. These include: enabling text to SQL queries directly on internal databases with language models and retrieval augmented generation (RAG) for extracting factual information from document databases.'],
                            ['QA tested and discovered several data discrepancies and shortcomings in the legacy in-house inventory tool causing over-ordering and leading to deadstock. Consequently, rebuilt the inventory procurement tool to take in time-series data, clean it, and produce more accurate forecast (by 7.8% for top-selling items and 12.8% for tail items}) and order quantities while being robust and scalable. My tool has since been tested for over a year, used to over inventory worth over $800M, and productionlized into a web application.'],
                            ['Implemented automated data cleaning and validation algorithms to enable for replenishment 8500 high-velocity products with forecasted sales of over $300M over the next 12 months.']
                        ]
                },
                {
                    teamName: 'Returns Monetization Channel Growth',
                    period: 'Aug 2022 - Jan 2023',
                    text: [['Used regression models on historical data to evaluate the most profitable product categories to sell at Wayfair\'s returned inventory outlet store pilot; developed procurement and merchandising strategies to maximize profit and built standardized reporting to track performance of the outlet store. The store achieved profitability within 3 months of opening with $500K annual profit operating only one day/week and the pilot has since been expanded to two more locations in the US.'],
                            ['Developed an internal tool using excel and GBQ to generate details like description and list price of any returned product to be sold at Wayfair\'s outlet store and used API connectors to integrated data pipelines to and from the third-party point of sale system.']
                          ]
                },
                {
                    teamName: 'Partner Operations for Specialty Retail Brands',
                    period: 'Mar 2022 - aug 2022',
                    text: [['Created new product and supplier databases for Specialty Retail Brands, Flagship Brands, and Physical Retail.'],
                            ['Developed and maintained long-term reporting for All Modern, Joss and Main, Birch Lane, and Wayfair\'s physical retail business in the form of KPI reports and dashboards; Created a query database by writing custom SQL queries based on business requirements.']
                          ]
                }
            ]
        }
    ],
    "projects": [
        {
            img: 'images/',
            title: 'GSCMI Intercollege Graduate Case Competition',
            text: 'I was selected to represent UIUC at the Purdue Supply Chain Case Competition. For the competition, my team and I were required to solve a complex global supply chain challenge across 3 continents while optimizing shipping routes and demand fullfillment, with plant capacity constraints and exchange rate variations. [slides]'
        },
        {
            img: 'images/',
            title: 'BP Professional Responsibility Strategy Competition',
            text: 'My team and I won the First Runner Up prize for developing a 20-year plan to shift the energy mix in the developing country from non-renewable to renewable energy sources while satisfying all stakeholders and maintaining steady economic growth. [Slides]'
        },
        {
            img: 'images/',
            title: 'Automatic Traffic Control using Computer Vision',
            text: 'As a part of my B. Tech. thesis project, I collaborated closely with traffic police and my engineering team to address vehicular traffic problems in Mumbai by devising an effective system by collecting traffic data from 11 signals and applying image processing using agile project management'
        }],
    "teaching": [
        {
            img: 'images/',
            title: 'BADM 508 - Leadership and Teams',
            text: 'This course develops and integrates fundamental behavioral concepts and theory having administrative applications; initially focuses on the individual decision maker and ultimately includes interpersonal, organizational, and social structures and influences; and develops strategies and methods of research on behavioral applications in business.'
        },
        {
            img: 'images/',
            title: 'MBA 551 - Strategic Innovation',
            text: 'This course covers the strategic perspective on innovation and the management side of innovation efforts – leadership and design of innovation initiatives such that employees are able to effectively execute them. It also covers how to successfully implement innovation efforts while working alongside established businesses at the same firm, the challenges of leading product development teams, the analysis of planning and evaluation systems for innovation initiatives, and how to manage innovation when the initiative spans organizational boundaries.'
        },
        {
            img: 'images/',
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
    if ('team' in proj) {
        html += '<h4>' + proj.team + '</h4>';
    }
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
    if ('period' in proj) {
        html += '<p><i>' + proj.period + '</i></p>'
    }

    if ('teams' in proj && Array.isArray(proj.teams)) {
        for (var i = 0; i < proj.teams.length; i++) {
            var team = proj.teams[i];
            if ('teamName' in team) {
                // Remove the word "team" from the team title
                var teamTitle = team.teamName.replace('team', '').trim();
                html += '<p><strong>' + teamTitle + ':</strong></p>';
            }
            if ('period' in team) {
                // Remove the word "team" from the team title
                var teamTitle = team.period.replace('team', '').trim();
                html += '<p><strong>' + teamTitle + ':</strong></p>';
            }
            if ('text' in team && Array.isArray(team.text)) {
                html += '<ul>'; // Start the unordered list
                for (var j = 0; j < team.text.length; j++) {
                    html += '<li>' + team.text[j] + '</li>'; // Add each list item
                }
                html += '</ul>'; // Close the unordered list
            }     
        }
    }
    
    html += '</td>';

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