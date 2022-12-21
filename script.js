const volumeslider=document.querySelector('#volume');

const whitekeys=document.querySelectorAll('.keys-white');
const blackkeys=document.querySelectorAll('.keys-black');

const whitekeysarray=Array.from(whitekeys);
const blackkeysarray=Array.from(blackkeys);

whitekeysarray.forEach((element)=>{
    const audio=new Audio(`tunes/${element.id}.wav`)
    element.addEventListener('click',()=>{
        audio.volume=volumeslider.value/100;
        audio.play()
    })
})
blackkeysarray.forEach((element)=>{
    const audio=new Audio(`tunes/${element.id}.wav`)
    element.addEventListener('click',()=>{
        audio.volume=volumeslider.value/100;
        audio.play()
    })
})
document.addEventListener('keydown',(e)=>{

    whitekeysarray.forEach((element)=>{
        if(element.id == e.key){
            element.click();
            element.classList.add('active-white')
            setTimeout(()=>{
                element.classList.remove('active-white')
            },150)
        }
    })
    blackkeysarray.forEach((element)=>{
        if(element.id == e.key){
            element.click();
            element.classList.add('active-black')
            setTimeout(()=>{
                element.classList.remove('active-black')
            },150)
        }
    })
})