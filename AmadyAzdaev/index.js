const arrow = document.querySelector('#arrow');
const tl = new TimelineMax();

tl.to(arrow, 0.9, {
    y: "20",
    repeatDelay: 0,
    repeat: 5,
    yoyoEase: Circ.easeOut,
})

// f217dad276ff47ee96c97cf9c4e6f57e
// 1635845445.1677ed0.a5c18f24e1f0439b90232145bf5a5ea2


var userFeed = new Instafeed({
    get: 'user',
    userId: '1635845445',
    limit: 8,
    accessToken: '1635845445.1677ed0.a5c18f24e1f0439b90232145bf5a5ea2',
    resolution: 'thumbnail'
});
userFeed.run();