(function(){
    const images = [
    'url(img/photo1.jpg) no-repeat center center / cover',
    'url(img/photo2.jpg) no-repeat center center / cover',
    'url(img/photo3.jpg) no-repeat center center / cover',
    'url(img/photo4.jpg) no-repeat center center / cover',
    'url(img/photo5.jpg) no-repeat center center / cover',
    'url(img/photo6.jpg) no-repeat center center / cover'
    ];
    const descriptions = [
        'Przykładowy opis 1. At vero eos et accusamus et iusto odio dignissimos.',
        'Przykładowy opis 2. Ducimus qui blanditiis praesentium voluptatum.',
        'Przykładowy opis 3. Et harum quidem rerum facilis est et expedita distinctio.',
        'Przykładowy opis 4. Nam libero tempore, cum soluta nobis est eligendi.',
        'Przykładowy opis 5. Temporibus autem quibusdam. Itaque earum rerum hic tenetur.',
        'Przykładowy opis 6. Sed ut perspiciatis unde omnis.'
    ]
    let eventListenerShouldBeOn = true;
    let currentNumberOfImage = 0;
    let nextDot;
    let currentImage = document.getElementById("current");
    let nextImage = document.getElementById("next");
    currentImage.style.background = images[currentNumberOfImage];
    document.getElementById('description').innerHTML = descriptions[currentNumberOfImage];

    function onEventListeners (trueOrFalse) {
        if (trueOrFalse == true) {
            document.getElementById('rightArrow').addEventListener('click', rightArrow, true)
            document.getElementById('rightArrow').classList.add('cursor');
            document.getElementById('leftArrow').addEventListener('click', leftArrow, true)
            document.getElementById('leftArrow').classList.add('cursor');
            var photoDivs = document.getElementsByClassName('kliker');
            for (var i = 0; i < photoDivs.length; i++) {
                photoDivs[i].addEventListener('click', clickPhoto, true);
                photoDivs[i].classList.add('cursor');
            };

        } else {
            document.getElementById('rightArrow').removeEventListener('click', rightArrow, true);
            document.getElementById('rightArrow').classList.remove('cursor');
            document.getElementById('leftArrow').removeEventListener('click', leftArrow, true);
            document.getElementById('leftArrow').classList.remove('cursor');
            var photoDivs = document.getElementsByClassName('kliker');
            for (var i = 0; i < photoDivs.length; i++) {
                photoDivs[i].removeEventListener('click', clickPhoto, true);
                photoDivs[i].classList.remove('cursor');
            };
        }
    };
    
    onEventListeners(eventListenerShouldBeOn);

    function rightArrow() {
        eventListenerShouldBeOn = false;
        onEventListeners(eventListenerShouldBeOn);
        nextImage.style.background = images[currentNumberOfImage + 1] || images[0];
        currentImage.classList.add("CurrentRightArrow");
        nextImage.classList.add("NextRightArrow");
        document.getElementById("" + currentNumberOfImage).classList.remove("redDot");
        if (currentNumberOfImage == 5) {nextDot = 0} else {nextDot = currentNumberOfImage + 1}
        document.getElementById("" + nextDot).classList.add("redDot");
        setTimeout(function() {
            currentNumberOfImage ++
            if (currentNumberOfImage == 6) {currentNumberOfImage = 0};
            currentImage.style.background = images[currentNumberOfImage];
            document.getElementById('description').innerHTML = descriptions[currentNumberOfImage];
            currentImage.classList.remove("CurrentRightArrow");
            nextImage.classList.remove("NextRightArrow");
            eventListenerShouldBeOn = true;
            onEventListeners(eventListenerShouldBeOn);
        }, 650);
    }
    function leftArrow() {
        eventListenerShouldBeOn = false;
        onEventListeners(eventListenerShouldBeOn);
        nextImage.style.background = images[currentNumberOfImage - 1] || images[5];
        currentImage.classList.add("CurrentLeftArrow");
        nextImage.classList.add("NextLeftArrow");
        document.getElementById("" + currentNumberOfImage).classList.remove("redDot");
        if (currentNumberOfImage == 0) {nextDot = 5} else {nextDot = currentNumberOfImage - 1}
        document.getElementById("" + nextDot).classList.add("redDot");
        setTimeout(function() {
            currentNumberOfImage --
            if (currentNumberOfImage == -1) {currentNumberOfImage = 5};
            currentImage.style.background = images[currentNumberOfImage];
            document.getElementById('description').innerHTML = descriptions[currentNumberOfImage];
            currentImage.classList.remove("CurrentLeftArrow");
            nextImage.classList.remove("NextLeftArrow");
            eventListenerShouldBeOn = true;
            onEventListeners(eventListenerShouldBeOn);
        }, 650);
    };
    function clickPhoto(event) {
        eventListenerShouldBeOn = false;
        onEventListeners(eventListenerShouldBeOn);
        let clickedPhoto = parseInt(event.target.dataset.numberofphoto, 10);
        nextImage.style.background = images[clickedPhoto];
        currentImage.classList.add("FadeOut");
        nextImage.classList.add("FadeIn");
        document.getElementById("" + currentNumberOfImage).classList.remove("redDot");
        document.getElementById("" + clickedPhoto).classList.add("redDot");
        setTimeout(function() {
            currentNumberOfImage = clickedPhoto;
            currentImage.style.background = images[currentNumberOfImage];
            document.getElementById('description').innerHTML = descriptions[currentNumberOfImage];
            currentImage.classList.remove("FadeOut");
            nextImage.classList.remove("FadeIn");
            eventListenerShouldBeOn = true;
            onEventListeners(eventListenerShouldBeOn);    
        }, 1100);
    }

})()