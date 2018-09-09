const $ = function (sel) {
    const nodeList = document.querySelectorAll(sel);
  
    const text = function (content) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].textContent = content;
      }
    }
  
    const toggleClass = function (className) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.toggle(className);
      }
    }
  
    const on = function (action, cb) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener(action, cb);
      }
    }
  
    const val = function (content) {
        if(content === undefined){
          return nodeList[0].value; 
        } else {
          nodeList[0].value = content;
        }     
    }

    const html = function (content) {
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = content;
          }    
    }

    const append = function(content){
       for (let i = 0; i < nodeList.length; i++){
        nodeList[i].innerHTML += content;
         
       }
    }

    const empty = function(){
      for (let i = 0; i < nodeList.length; i++){
       nodeList[i].innerHTML = '';
        
      }
   }

   const render = (...props) => {
    props.forEach(e => {  
       append2(e);
    });
  }
  
  const append2 = content => {
    const p = document.createElement('p');
    p.textContent = content;
    document.getElementById('content').appendChild(p);
  }
  
  
    const publicAPI = {
      text: text,
      toggleClass: toggleClass,
      on: on,
      val: val,
      html: html,
      append: append,
      empty: empty,
      render: render,
      append2: append2

    }
  
    return publicAPI;
  
  
  
  }
  