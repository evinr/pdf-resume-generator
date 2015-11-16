var data;

function getPdf () {
    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world.');
    doc.save('Test.pdf');
}

function renderData() {
    document.getElementsByClassName('name')[0].innerHTML = data.name;
    document.getElementsByClassName('email')[0].innerHTML = data.email;
    document.getElementsByClassName('phone')[0].innerHTML = data.phone;
    document.getElementsByClassName('location')[0].innerHTML = data.location;

    
    for (i=0; i < data.jobs.length; i++){
        console.log('adsf' + i)
        document.getElementsByClassName('job-title')[i].innerHTML = data.jobs[i].position; 
        document.getElementsByClassName('job-start-end')[i].innerHTML = data.jobs[i].start.substring(0, 4) + " to " + (data.jobs[i].end ? data.jobs[i].end.substring(0, 4): 'Present');  //Needs logic to handle Present case  
        document.getElementsByClassName('job-description')[i].innerHTML = data.jobs[i].description; 
        if (data.jobs[i].logo) {
            document.getElementsByClassName('job-center')[i].style.backgroundImage = 'url(' + data.jobs[i].logo + ')';
            document.getElementsByClassName('job-center')[i].className += ' job-logo';
            document.getElementsByClassName('job-center')[i].innerHTML = '';
        }
        else {
            document.getElementsByClassName('job-center')[i].innerHTML = data.jobs[i].company; 
            document.getElementsByClassName('job-center')[i].className += ' job-company'; 
        }
    }
 
    for (i=0; i < data.testimonials.length; i++)  {
        document.getElementsByClassName('testimonial-description')[i].innerHTML = data.testimonials[i].quote;  
        document.getElementsByClassName('testimonial-name')[i].innerHTML = data.testimonials[i].name;  
        document.getElementsByClassName('testimonial-relation')[i].innerHTML = data.testimonials[i].relation; 
    }



    for (k=0; k < data.education.length; k++) {
        if (data.education[k].logo) {
            debugger;
            document.getElementsByClassName('job-center')[i].style.backgroundImage = 'url(' + data.education[k].logo + ')';
            document.getElementsByClassName('job-center')[i].className += ' education-logo';
            document.getElementsByClassName('job-center')[i].innerHTML = '';
        }
        else {
            document.getElementsByClassName('job-center')[i].innerHTML = data.education[k].school; 
            //document.getElementsByClassName('job-center')[i].className += ' job-company'; 
        }
        for (i=0; i < data.education[k].degrees.length; i++)  {
            console.log(data.education[k].degrees.length);
            document.getElementsByClassName('field')[i].innerHTML = data.education[k].degrees[i].name;  
            document.getElementsByClassName('year')[i].innerHTML = data.education[k].degrees[i].date;    
        }
    }
}

function loadData() {
    //dynamically loads the data from a JSON
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            data = JSON.parse(xhttp.responseText);
            renderData();
        }
    }
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}

// loadData();

