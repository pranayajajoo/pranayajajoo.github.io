var data = {
    "research": [
        {
                img: 'images_pranaya/rlzero.jpg',
                title: 'RLZero: Zero-Shot Language to Behaviors without any Supervision',
                teams: [
                    {
                        teamName: 'Harshit Sikchi*, Siddhant Agarwal*, Pranaya Jajoo*, Samyak Parajuli*, Max Rudolph*, Peter Stone, Amy Zhang, Scott Niekum',
                        // teamName: ['Harshit Sikchi*', 'Siddhant Agarwal*', 'Pranaya Jajoo*', 'Samyak Parajuli*', 'Max Rudolph*', 'Peter Stone', 'Amy Zhang', 'Scott Niekum'],
                        // teamURLS: ['https://hari-sikchi.github.io/', 'https://agarwalsiddhant10.github.io/', 'https://pranayajajoo.github.io/', 'https://samp830.github.io/', 'http://calcharles.github.io/', 'https://maxrudolph1.github.io/', 'https://www.cs.utexas.edu/~pstone/', 'https://www.ece.utexas.edu/people/faculty/amy-zhang', 'https://people.cs.umass.edu/~sniekum/'],
                        period: 'arxiv.org/abs/2412.05718',
                        text1: 'https://hari-sikchi.github.io/rlzero/',
                        text2: '',
                    }
                   ]
        },
    ],
    "projects": [
        ],
    "volunteering": [
        ],
    "teaching": [
        ],
    "education": [    
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
        var html = getTeachingHTML(proj);
        $('table#teaching-table').append(html);
    }


    // Add research
    for (var i = 0; i < data.research.length; i++) {
        var proj = data.research[i];
        var html = getResearchHTML(proj);
        $('table#research-table').append(html);
    }

    // Add education
    for (var i = 0; i < data.education.length; i++) {
        var proj = data.education[i];
        var html = getEducationHTML(proj);
        $('table#education-table').append(html);
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
    if ('text' in proj && Array.isArray(proj.text)) {
        html += '<ul>'; // Start the unordered list
        for (var i = 0; i < proj.text.length; i++) {
            html += '<li>' + proj.text[i] + '</li>'; // Add each list item
        }
        html += '</ul>'; // Close the unordered list
    }
    
    html += '</td>';

    html += '</tr>';
    return html;
}

function getResearchHTML(proj) {
    var html = '<tr>';
    // Adding the image
    if ('img' in proj && proj.img.trim() !== '') {
        html += '<td class="image-td"><img class="project-img" src="' + proj.img + '" alt="Project Image"></td>';
    } else {
        html += '<td class="image-td">No image available</td>'; // Fallback when there is no image
    }

    // Add title and team details
    html += '<td class="description-td"><h3>' + proj.title + '</h3>';

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
                html += '<p><a href="' + teamTitle + '" target="_blank"><i>Paper</i></a></p>';
            }
            if ('text1' in team) {
                // Remove the word "team" from the team title
                var teamTitle = team.text1.replace('team', '').trim();
                html += '<p><a href="' + teamTitle + '" target="_blank"><i>Website</i></a></p>';
            }
            if ('text2' in team) {
                // Remove the word "team" from the team title
                var teamTitle = team.text2.replace('team', '').trim();
                html += '<p>' + teamTitle + '</p>';
            }     
        }
    }
    
    html += '</td>';

    html += '</tr>';
    return html;
}

function getTeachingHTML(proj) {
    var html = '<tr>';
    // Add image
    // Add title and description
    html += '<td class="description-td"><h3>' + proj.title + '</h3>'
    if ('authors' in proj) {
        html += '<p><i>' + proj.authors + '</i></p>'
    }
    if ('text' in proj) {
        html += '<p><i>' + proj.text + '</i></p>'
    }
    
    html += '</tr>';
    return html;
}

function getEducationHTML(proj) {
    var html = '<tr>';

    html += '<td class="description-td"><h3>' + proj.university + '</h3>'
    if ('degree' in proj) {
        html += '<p><i>' + proj.degree + '</i></p>'
    }
    if ('text' in proj) {
        html += '<p><i>' + proj.text + '</i></p>'
    }

    html += '</tr>';
    return html;
}