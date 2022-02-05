window.addEventListener('load',function(){
    initSlider(
      'slider', //id
<<<<<<< HEAD
      ["I'm a Frontend Developer","I'm a data analyst","I love coding"], 
=======
      ['Am a Frontend Developer','Am a data analyst','I love coding'], 
>>>>>>> f9c993ba165939ab8633e8e485944da0bb8ecec5
      100, //duration
      1000 //delay
    );
  });
  
  //just copy and paste below
  var createText = function(text,id,duration){
    document.getElementById(id).innerHTML = '';
    for(let i = 0; i < text.length; i++){
      setTimeout(()=>{
        let newText = text.substr(0,(i+1));
        document.getElementById(id).innerHTML = newText;
      },duration*i);
    }
  }
  var clearText = function(id,duration){
    let text = document.getElementById(id).innerHTML;
    for(let i = text.length; i > 0; i--){
      setTimeout(()=>{
        let newText = text.substr(0,text.length-i);
        document.getElementById(id).innerHTML = newText;
      },duration*i);
    }
  }
  var initSlider = function(id,texts,duration,delay){
    let durs = [];
    for(let i = 0; i < texts.length-1; i++){
      let beforeDur;
      if(i==0){
        beforeDur = 0;
      }
      else{
        beforeDur=durs[i-1];
      }
      durs.push((texts[i].length*duration*2) + (2*delay) + beforeDur);
    }
    
    let allTime = 0;
    for (let i = 0; i < texts.length; i++){
      allTime += (texts[i].length*duration*2) + (2*delay);
    }
    let mainSlider = function(){
      for(let i = 0; i < texts.length; i++){
        setTimeout(()=>{
          createText(texts[i],id,duration);
          setTimeout(()=>{
            clearText(id,duration);
          },texts[i].length*duration + delay);
        },i === 0 ? 0 : durs[i-1]);
      }
    }
    mainSlider();
    setInterval(()=>{
      mainSlider();
    },allTime);  
  }
  