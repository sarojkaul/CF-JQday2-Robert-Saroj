// JavaScript source code
let data = JSON.parse(actors);
for (let i = 0; i < data.length; i++) {
    $(".container").append(`<div class="container mt-5 ml-4 mr-3">
    <div class="row">
        <div class="col col-lg-4 bg-dark">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Actor 1</a>
                <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Actor 2</a>
                <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Actor 3</a>
                <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Actor 4</a>
                <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Actor 5</a>
            </div>
        </div>
        <div class="col col-7 bg-dark ml-5">
            <div class="container"></div>
            <figure class="figure">
                <img class="figure-img img-fluid actorsImage" src='${data[i].image}'>
                   <figcaption class="figure-caption imageText">${data[i].text}</figcaption>
                    
                </figure>
            </div>

        </div>
    </div>`
    )
}
