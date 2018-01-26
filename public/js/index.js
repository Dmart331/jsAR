 

var activeElement = "";

 AFRAME.registerComponent('play-on-scan-drew', { 
  init: function () { 
    var el = this.el;
    
    el.sceneEl.addEventListener('markerFound', function(){
      activeElement = el.id;
      });

    }
      checkActive();
});

AFRAME.registerComponent('play-on-scan-lee', {
  init: function(){
    var el = this.el;
    
    el.sceneEl.addEventListener('markerFound', function(){
      activeElement = el.id;
      });
    }
    checkActive();
    
});

function checkActive(){
  console.log(activeElement);
      if(activeElement == "leeSound"){
        var entity = document.getElementById("leeSound");
        entity.components.sound.playSound();
        console.log("lee");
      }

      else if(activeElement == "drewSound"){
            var entity = document.getElementById("drewSound"); 
            entity.components.sound.playSound();
            console.log("drew");
      }
}



