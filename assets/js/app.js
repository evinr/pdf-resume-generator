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


    document.getElementsByClassName('job-title-1')[0].innerHTML = data.jobs[0].position;  
    document.getElementsByClassName('job-logo-1')[0].innerHTML = data.jobs[0].company;  
    document.getElementsByClassName('job-start-end-1')[0].innerHTML = data.jobs[0].start.substring(0, 4) + " to " + data.jobs[0].end;  //Needs logic to handle Present case  
    document.getElementsByClassName('description-job-1')[0].innerHTML = data.jobs[0].description; 

    document.getElementsByClassName('job-title-2')[0].innerHTML = data.jobs[1].position;  
    document.getElementsByClassName('job-logo-2')[0].innerHTML = data.jobs[1].company;  
    document.getElementsByClassName('job-start-end-2')[0].innerHTML = data.jobs[1].start.substring(0, 4) + " to " + data.jobs[1].end.substring(0, 4);    
    document.getElementsByClassName('description-job-2')[0].innerHTML = data.jobs[1].description; 

    document.getElementsByClassName('job-title-3')[0].innerHTML = data.jobs[2].position;  
    document.getElementsByClassName('job-logo-3')[0].innerHTML = data.jobs[2].company;  
    document.getElementsByClassName('job-start-end-3')[0].innerHTML = data.jobs[2].start.substring(0, 4) + " to " + data.jobs[2].end.substring(0, 4);    
    document.getElementsByClassName('description-job-3')[0].innerHTML = data.jobs[2].description; 

    document.getElementsByClassName('job-title-4')[0].innerHTML = data.jobs[3].position;  
    document.getElementsByClassName('job-logo-4')[0].innerHTML = data.jobs[3].company;  
    document.getElementsByClassName('job-start-end-4')[0].innerHTML = data.jobs[3].start.substring(0, 4) + " to " + data.jobs[3].end.substring(0, 4);    
    document.getElementsByClassName('description-job-4')[0].innerHTML = data.jobs[3].description; 


    document.getElementsByClassName('testimonial-description-1')[0].innerHTML = data.testimonials[0].quote;  
    document.getElementsByClassName('testimonial-name-1')[0].innerHTML = data.testimonials[0].name;  
    document.getElementsByClassName('testimonial-relation-1')[0].innerHTML = data.testimonials[0].relation;    

    document.getElementsByClassName('testimonial-description-2')[0].innerHTML = data.testimonials[1].quote;  
    document.getElementsByClassName('testimonial-name-2')[0].innerHTML = data.testimonials[1].name;  
    document.getElementsByClassName('testimonial-relation-2')[0].innerHTML = data.testimonials[1].relation;   

    document.getElementsByClassName('testimonial-description-3')[0].innerHTML = data.testimonials[2].quote;  
    document.getElementsByClassName('testimonial-name-3')[0].innerHTML = data.testimonials[2].name;  
    document.getElementsByClassName('testimonial-relation-3')[0].innerHTML = data.testimonials[2].relation;  


    document.getElementsByClassName('school-name')[0].innerHTML = data.education[0].school;  
    document.getElementsByClassName('field')[0].innerHTML = data.education[0].degrees[0].name;  
    document.getElementsByClassName('year')[0].innerHTML = data.education[0].degrees[0].date;    
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