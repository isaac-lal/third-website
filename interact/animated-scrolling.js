const sr = ScrollReveal ({
    distance: '25px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text', {delay: 250, origin: 'bottom'})
sr.reveal('.section-intro, .about, .about-text, .work, .pro-langs, .tool-frames, work-projects, .project-row, .contact, .contact-form, footer', {delay: 500, origin: 'bottom'})