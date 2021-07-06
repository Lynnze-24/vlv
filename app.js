const hamburger= document.querySelector('.hamburger');
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('clicked');
}); 

// img position
const imgs= Array.from (document.querySelectorAll('.gallery-container_content'));

const round=(x) => {
    return Math.round(x *10)/10;
}


const imgWidth= round(imgs[0].getBoundingClientRect().width);





const setposition= (img,index) =>{
        const pos = (index*imgWidth)+ "px";
        img.style.left= pos;
        console.log(pos)
}

imgs.forEach(setposition);


// left and right buttons
const lbtn = document.querySelector('.gallery-btn_left');
const rbtn = document.querySelector('.gallery-btn_right');


const btnHide= function(){
    lbtn.classList.remove('btn-hide');
    rbtn.classList.remove('btn-hide');
    if ((imgs[0].style.left=="0px")||(imgs[0].style.left==0)){
        lbtn.classList.add('btn-hide');
    }
    if ((imgs[9].style.left=="0px")||(imgs[9].style.left==0)){
        rbtn.classList.add('btn-hide');
    }
}
btnHide();

const dots= document.querySelectorAll('.dots_child');

const dotChange= ()=>{
    
    dots.forEach(function(dot){
        dot.classList.remove('current_dot');
    })
    imgs.forEach(function(img,index){
        if ((img.style.left=="0px")||(img.style.left==0)){
            
            dots[index].classList.add('current_dot');
        }
    })
}




const moveleft= function(){
    imgs.forEach(function(img,index){
       
        const left= round(img.style.left.split("px")[0]);
        const newleft= round(left + imgWidth)+ "px";
        img.style.left= newleft;
        
    })
    btnHide();
    dotChange();
}

const moveright= function(){
    
    imgs.forEach(function(img,index){
       
        const left= round(img.style.left.split("px")[0]);
        const newleft= round(left - imgWidth)+ "px";
        img.style.left= newleft;
        
    })
    btnHide();
    dotChange();
}

const dotclick= ()=>{
    
    const target= round(this.style.left.split("px")[0]);

    console.log(this)

    imgs.forEach(function(img){
        const left= round(img.style.left.split("px")[0]);
        const newleft= round(left - target)+ "px";
        img.style.left= newleft;
    })


}


dots.forEach(function(dot,index){
    dot.addEventListener('click',function(){
    
        const target= round(imgs[index].style.left.split("px")[0]);
    
        
    
        imgs.forEach(function(img){
            const left= round(img.style.left.split("px")[0]);
            const newleft= round(left - target)+ "px";
            img.style.left= newleft;
        })
        
        dotChange();
    
    });
})

lbtn.addEventListener('click', moveleft);
rbtn.addEventListener('click', moveright);