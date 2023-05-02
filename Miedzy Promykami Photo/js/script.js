const nav = document.querySelector('.navbar-collapse')

document.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show')
    }
})


// INSTAGRAM FEED APP

let userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    // Limit pokazywanych Feedsów 
    limit: 4,               
    accessToken: 'IGQVJWWnRuQkkyc0R0UkxyWWpMYUhESzJGWjcxWmg3RnJJbGNRdzhEU3JRa3hMQzNUX01NSXpRZADdndE1fVmFPSXRXcVFQbTRhVDl4aDd6bHNPdDhXR2lGWEF4X1F6QVRvNi1qY0ZAJdTlLSDJtYkRTNgZDZD'
});

userFeed.run()
let userFeedSnd = new Instafeed({
    get: 'user',
    target: "instafeed-container-snd",
    resolution: 'low_resolution',
    // Limit pokazywanych Feedsów 
    limit: 4,               
    accessToken: 'IGQVJWWnRuQkkyc0R0UkxyWWpMYUhESzJGWjcxWmg3RnJJbGNRdzhEU3JRa3hMQzNUX01NSXpRZADdndE1fVmFPSXRXcVFQbTRhVDl4aDd6bHNPdDhXR2lGWEF4X1F6QVRvNi1qY0ZAJdTlLSDJtYkRTNgZDZD'
});

userFeedSnd.run()

console.log(userFeedSnd);

