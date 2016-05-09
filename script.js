window.onload = function(){
  var scrnSize = window.innerWidth;
  var pxlWidth = Math.floor(100/11.1) + 1;
  

  genDivs(pxlWidth);

  //creates the board with divs on the page
  function genDivs(v){ 
      var e = document.body;
      for(var i = 0; i < v; i++){ 
        var row = document.createElement("div"); 
        row.className = "row";
        row.style.width = "100%"; 
        row.style.display = "flex"
        for(var x = 1; x <= v; x++){ 
            var cell = document.createElement("div"); 
            cell.className = "checker";
            
            if (i % 2 === 0){
              cell.style.backgroundColor = bgClr(x);
            }
            else{
              cell.style.backgroundColor = bgClr(x+1);  
            }
            cell.style.float = "left";
            cell.style.paddingBottom = "11.1%"; 
            cell.style.width = "200px";
            row.appendChild(cell); 
        } 
        e.appendChild(row); 
      } 
    }
    //defines color for checkerboard pattern
  function bgClr(val){
    if (val % 2 === 0) return("red");
    return("black");
  }  
};