var userFeed = new Instafeed({
    get: 'user',
    userId: '1635845445',
    accessToken: '1635845445.f217dad.0750fa768b0f4f4d804bca0c3909cfd0',
    resolution: "standard_resolution",
    template: '<div style="background-image: url({{image}})"></div>'
});
userFeed.run();

let fileInput = document.querySelector('input');

fileInput.addEventListener('change', () => {
    let feed = document.querySelector('#instafeed');
    let thumb = document.createElement('div');
    if (fileInput.files[0]) {
        thumb.style.backgroundImage = "url(" + URL.createObjectURL(fileInput.files[0]) + ")";
        feed.insertBefore(thumb, feed.childNodes[0]);
    }
});