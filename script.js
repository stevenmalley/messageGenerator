const components = {
    part1: ["james bond the good fellas and god father",
        "would you let a man",
        "ive never",
        "when people say they quit smoking to",
        "when i serve you one of my fine home cooked meals i promise 2 things: it WILL",
        "people think today is a good day to",
        "when you find out that i intentionally"],

    part2: ["team up to shoot",
        "normalize",
        "save money",
        "be tge best thing you've ever tasted",
        "talk about",
        "limit my power by"],

    part3: ["the most ufos you have ever seen",
        "your taxes",
        "a thing in my life",
        "i simply laugh. all the smokers i know are Rich",
        "you WILL get diarrhea",
        "the oscars. Wrong.",
        "not being a guy who retweets his own stuff........."]
};

function assembleTweet() {
    return components.part1[Math.floor(Math.random()*components.part1.length)] + " " +
            components.part2[Math.floor(Math.random()*components.part2.length)] + " " +
            components.part3[Math.floor(Math.random()*components.part3.length)];
}

console.log(assembleTweet());