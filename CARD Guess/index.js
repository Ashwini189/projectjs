let cards=[
    {
        image:"https://th.bing.com/th/id/OIP.KHNhjCqzRAN8EMatSURV-gHaKl?pid=ImgDet&rs=1",
        value:1,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.KHNhjCqzRAN8EMatSURV-gHaKl?pid=ImgDet&rs=1",
        value:1,
        status:"closed"
    },
    {
        image:"https://htc-wallpaper.com/wp-content/uploads/2019/08/Iron-Man-Endgame.jpg",
        value:2,
        status:"closed"

    },
    {
        image:"https://htc-wallpaper.com/wp-content/uploads/2019/08/Iron-Man-Endgame.jpg",
        value:2,
        status:"closed"

    },
    {
        image:"https://wallpapercave.com/wp/wp5770481.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://wallpapercave.com/wp/wp5770481.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.k4UinGD6w7Zr2jVCctxB2gHaHa?pid=ImgDet&rs=1",
        value:4,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.k4UinGD6w7Zr2jVCctxB2gHaHa?pid=ImgDet&rs=1",
        value:4,
        status:"closed"
    },
    {
        image:"https://cdn.vox-cdn.com/thumbor/99WUPvdrLIQ20euntmxrdwzOS20=/0x0:1200x628/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8378039/baby-groot-guardians.0.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://cdn.vox-cdn.com/thumbor/99WUPvdrLIQ20euntmxrdwzOS20=/0x0:1200x628/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8378039/baby-groot-guardians.0.jpg",
        value:5,
        status:"closed"
    }   
]

//durnsten shuffling algorithms for shuffling cards below floor fun is used to round up a num to smallest integer
//random function generates floating numbers
let temp;
for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));//will generate random index from array and giving i+1 for not picking current element

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;

}

let cardscopy=cards;

function displaycards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        <div class="card" style="background-image:url('${card.image}')">
            <div class=" overlay ${card.status}" onclick="opencard(${index})">
            </div>

        </div>
        `;

    });//to put variable with a string we use $ variable inside a string


    document.getElementById('cards').innerHTML=cardsString;

}

displaycards(cards);


let cardcount=1;
let val1=null,val2=null;
let score=0;


function opencard(index){

    cards[index].status="opened";
    if(cardcount===1){
        val1=cards[index].value;
        cardcount++;
    }
    else if(cardcount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            //reset after one guess
            val1=null;
            val2=null;
            cardcount=1;
            
        }
        else{
            alert("game over");
            location.reload();

        }
        
    }

    displaycards(cards);

}
