const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hiddenn');
hiddenElements.forEach((el) => observer.observe(el));

//gallery =>

const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('someshow');
        }
        else{
            entry.target.classList.remove('someshow');
        }
    })
})

const hiddenGalleryElements = document.querySelectorAll('.sometry');
hiddenGalleryElements.forEach((el) => obs.observe(el));