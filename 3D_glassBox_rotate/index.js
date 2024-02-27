
var cube = document.querySelector('.cube');
var cube2 = document.querySelector('.cube2');
var cube3 = document.querySelector('.cube3');
var currentClass = 'show-front';
var currentClass2 = 'show-front';
var currentClass3 = 'show-front';

function changeSide(e) {
    if(e === 'enter'){
        var showClass = 'show-back';
        if ( currentClass ) {
            cube.classList.remove( currentClass );
        }
        cube.classList.add( showClass );
        currentClass = showClass;
    } if(e === 'leave') {
        var showClass = 'show-front';
        if ( currentClass ) {
            cube.classList.remove( currentClass );
        }
        cube.classList.add( showClass );
        currentClass = showClass;
    }
    if(e === 'click'){
        if ( currentClass === 'show-front' ) {
            cube.classList.remove( currentClass );
            currentClass = 'show-back'
            cube.classList.add( currentClass );
            return
        }

        if( currentClass === 'show-back' ){
            cube.classList.remove( currentClass );
            currentClass = 'show-front';
            cube.classList.add( currentClass );
            return
        }

    }
}

function changeSide2(e) {
    if(e === 'enter'){
        var showClass = 'show-back';
        if ( currentClass2 ) {
            cube2.classList.remove( currentClass2 );
        }
        cube2.classList.add( showClass );
        currentClass2 = showClass;
    } if(e === 'leave') {
        var showClass = 'show-front';
        if ( currentClass2 ) {
            cube2.classList.remove( currentClass2 );
        }
        cube2.classList.add( showClass );
        currentClass2 = showClass;
    }
    if(e === 'click'){
        if ( currentClass2 === 'show-front' ) {
            cube2.classList.remove( currentClass2 );
            currentClass2 = 'show-back'
            cube2.classList.add( currentClass2 );
            return
        }

        if( currentClass2 === 'show-back' ){
            cube2.classList.remove( currentClass2 );
            currentClass2 = 'show-front';
            cube2.classList.add( currentClass2 );
            return
        }

    }
}

function changeSide3(e) {
    if(e === 'enter'){
        var showClass = 'show-back';
        if ( currentClass3 ) {
            cube3.classList.remove( currentClass3 );
        }
        cube3.classList.add( showClass );
        currentClass3 = showClass;
    } if(e === 'leave') {
        var showClass = 'show-front';
        if ( currentClass3 ) {
            cube3.classList.remove( currentClass3 );
        }
        cube3.classList.add( showClass );
        currentClass3 = showClass;
    }
    if(e === 'click'){
        if ( currentClass3 === 'show-front' ) {
            cube3.classList.remove( currentClass3 );
            currentClass3 = 'show-back'
            cube3.classList.add( currentClass3 );
            return
        }

        if( currentClass3 === 'show-back' ){
            cube3.classList.remove( currentClass3 );
            currentClass3 = 'show-front';
            cube3.classList.add( currentClass3 );
            return
        }

    }
}
// set initial side
changeSide();

cube.addEventListener( 'mouseenter', () => {
    changeSide('enter') }
);
cube.addEventListener( 'mouseleave', () => {
    changeSide('leave') 
}
);
cube.addEventListener('click', () => {
    changeSide('click')
})

cube2.addEventListener( 'mouseenter', () => {
    changeSide2('enter') }
);
cube2.addEventListener( 'mouseleave', () => {
    changeSide2('leave') 
}
);
cube2.addEventListener('click', () => {
    changeSide2('click')
})

changeSide2()

cube3.addEventListener( 'mouseenter', () => {
    changeSide3('enter') }
);
cube3.addEventListener( 'mouseleave', () => {
    changeSide3('leave') 
}
);
cube3.addEventListener('click', () => {
    changeSide3('click')
})

changeSide3()


