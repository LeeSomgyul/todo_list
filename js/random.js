const netflix = [
    {
        poster:"슈퍼마리오.png",
        title:"슈퍼 마리오 브라더스",
        information:"2023/ALL/영화",
    },
    {
        poster:"이두나.png",
        title:"이두나!",
        information:"2023/15세/드라마",
    },
    {
        poster:"발레리나.png",
        title:"발레리나",
        information:"2023/18세/영화",
    },
    {
        poster:"스파이더맨.png",
        title:"스파이더맨:어크로스 더 유니버스",
        information:"2023/ALL/영화",
    },
    {
        poster:"바비.png",
        title:"바비",
        information:"2023/12세/영화",
    },
    {
        poster:"악마들.png",
        title:"악마들",
        information:"2023/18세/영화",
    },
]

const poster = document.querySelector(".netflix div:nth-child(2) img");
const title = document.querySelector(".netflix div:nth-child(3)");
const information = document.querySelector(".netflix div:last-child");

const randomNetflix = netflix[Math.floor(Math.random()*netflix.length)];

poster.src = `net-img/${randomNetflix.poster}`;
title.innerText = randomNetflix.title;
information.innerText = randomNetflix.information;