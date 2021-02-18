function changeBg(){
    if ($('#websitebackground').attr('src') === 'Images/websitebg.jpg')
    {
        $('#websitebackground').attr("src","Images/altwebsitebg.jpg");
    }
    else
    {
        $('#websitebackground').attr("src","Images/websitebg.jpg");
    }
}