var dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}
  
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }
  
    e.dataTransfer.dropEffect = 'move';   
    return false;
  }
  
  function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
  }
  
  function handleDragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
  }
  
  function handleDrop(e) {
    // this/e.target is current target element.
  
    if (e.stopPropagation) {
      e.stopPropagation(); // Stops some browsers from redirecting.
    }
  
    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != this) {
      // Set the source column's HTML to the HTML of the column we dropped on.
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
  
    return false;
  }
  
  function handleDragEnd(e) {
    this.style.opacity = '1';
    var cols = document.querySelectorAll('#squares .square');
    
    [].forEach.call(cols, function (col) {
      col.classList.remove('over');
    });
  }



function refresh(node)
{
   var times = 30000; // gap in Milli Seconds;

   (function startRefresh()
   {
       
      var address;
      if(node.src.indexOf('?')>-1)
       address = node.src.split('?')[0];
      else 
       address = node.src;
      node.src = address+"?time="+new Date().getTime();

      setTimeout(startRefresh,times);
   })();

}

function refreshHealth()
{
   var times = 30000; // gap in Milli Seconds;
   (function startRefreshHealth()
   {

      setTimeout(startRefreshHealth,times);
   })();

}

window.onload = function()
{

    var cols = document.querySelectorAll('#squares .square');
    [].forEach.call(cols, function(col) {
      col.addEventListener('dragstart', handleDragStart, false);
      col.addEventListener('dragenter', handleDragEnter, false)
      col.addEventListener('dragover', handleDragOver, false);
      col.addEventListener('dragleave', handleDragLeave, false);
      col.addEventListener('drop', handleDrop, false);
      col.addEventListener('dragend', handleDragEnd, false);
    });
 
  var nodes = document.getElementsByTagName('img');
  console.log(nodes)
  for (n = 0; n < nodes.length; n++) {
      refresh(nodes[n])
  }
  refreshHealth()

  
}


function updateHealth()
{
    $(".health").html('<img src="warning.png", height="25" />');   
    
    $("#api1").load("");
    $("#api2").load("");
    $("#api3").load("");
    $("#api4").load("");
    $("#api5").load("");
    $("#api6").load("");
    $("#api7").load("");
    $("#api8").load("");
    $("#api9").load("");    
    $("#api10").load("");
    $("#api11").load("");  
    $("#api12").load("");

}
