var web


function changeBg(){
    if ($('#websitebackground').attr('src') === 'Images/websitebg.jpg')
    {
        $('#websitebackground').attr("src","Images/altwebsitebg.jpg");
        localStorage.setItem("background", 'Images/altwebsitebg.jpg');
    }
    else
    {
        $('#websitebackground').attr("src","Images/websitebg.jpg");
        localStorage.setItem("background", 'Images/websitebg.jpg');
    }
}

function checkBg(){
    var bgLink = localStorage.getItem("background");
    if (bgLink === 'Images/websitebg.jpg')
    {
        $('#websitebackground').attr("src","Images/websitebg.jpg");
    }
    else if (bgLink === 'Images/altwebsitebg.jpg')
    {
        $('#websitebackground').attr("src","Images/altwebsitebg.jpg");
    }
}