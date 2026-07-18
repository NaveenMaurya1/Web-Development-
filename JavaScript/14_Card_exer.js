function createCard(tittle, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (1000000 > views) {
        viewStr = views / 1000 + "K";
    }
    else if (1000000 < views) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }

    // it's a variable
    let html = ` <div class="card">
            <div class="image"><img
                    src="${thumbnail}"
                    alt="thumbnail">
                    <div class="duration">${duration}</div>
                </div>
            <div class="text">
                <h2>${tittle}</h2>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>
`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html ;

}

//fucntion call

// card 1
createCard("Introduction to Frontend | Sigma Web Dev video#92" , "CodeWithHarry" , 56000, 7 ,"31:22" , "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ"
)
createCard("Introduction to Backend | Sigma Web Dev video#92" , "CodeWithHarry" , 5600000, 7 ,"56:22" , "https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOkIyACIrUQH4WItgmM-x89Ebw2Q"
)
createCard("Introduction to Database | Sigma Web Dev video#92" , "CodeWithHarry" , 5600, 7 ,"20:22" , "https://i.ytimg.com/vi/9H-Ieq6zjIY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA-WIZAGIFuvinqPyBDZmo5hnDTTw"
)
createCard("Introduction to kaalu | Sigma Web Dev video#92" , "CodeWithHarry" , 5600, 7 ,"20:22" , "https://i.ytimg.com/vi/9H-Ieq6zjIY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA-WIZAGIFuvinqPyBDZmo5hnDTTw"
)
createCard("Introduction to Database | Sigma Web Dev video#92" , "CodeWithHarry" , 5600, 7 ,"20:22" , "https://i.ytimg.com/vi/9H-Ieq6zjIY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA-WIZAGIFuvinqPyBDZmo5hnDTTw"
)