(function () {
    'use strict'

    document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function () {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
        document.querySelector('.in-canvas').classList.toggle('hide')
        document.querySelector('.navbar-toggler').classList.toggle('blur')
    })
    document.querySelector('.in-canvas').addEventListener('click', function () {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
        document.querySelector('.in-canvas').classList.toggle('hide')
        document.querySelector('.navbar-toggler').classList.toggle('blur')
    })
})()