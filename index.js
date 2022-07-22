var btn = document.querySelector('.btn')
var input = document.querySelector('.txt-input');
var list = document.querySelector('.ul-list')
var close = document.getElementsByClassName('close')

window.onload = function(){
  input.focus();
}


for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

btn.addEventListener('click', function(){

    if(input.value === ""){
        alert("Please type something")
    }
    else{
        var li = document.createElement('li');
        var txt = document.createTextNode(input.value);
        li.appendChild(txt);
        list.appendChild(li);
        input.value = "";
    
        var span = document.createElement('span');
        var closetxt = document.createTextNode('\u00D7');
        span.className = "close";
        span.appendChild(closetxt);
        li.appendChild(span);
    
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              var div = this.parentElement;
              div.style.display = "none";
            }
          }
    
    }
})

input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        btn.click();
    }
})