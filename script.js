function pageLoaded()
{
    const page = document.title.toLowerCase();
    const linkElement = document.getElementsByClassName(page+"Link")[0];
    linkElement.classList.add('active');
}