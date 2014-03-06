var colors = new Array() ;
var background_colors = new Array() ;
var color_names = new Array() ;
colors[0] = 'rgb(  0,  0,  0)' ; background_colors[0] = 'rgb(255,255,255)' ; color_names[0] = 'white' ;
colors[1] = 'rgb(255,255,255)' ; background_colors[1] = 'rgb(255,  0,  0)' ; color_names[1] = 'red'   ;
colors[2] = 'rgb(255,255,255)' ; background_colors[2] = 'rgb(  0,  0,  0)' ; color_names[2] = 'black' ;
colors[3] = 'rgb(255,255,255)' ; background_colors[3] = 'rgb(  0,  0,255)' ; color_names[3] = 'blue'  ;
colors[4] = 'rgb(  0,  0,  0)' ; background_colors[4] = 'rgb(255,255,204)' ; color_names[4] = 'cream' ;

var mode_names = new Array() ;
mode_names[0] = 'fair'  ;
mode_names[1] = 'fudge' ;
mode_names[2] = 'xkcd'  ;

function start(){
  var select_mode  = Get('select_mode' ) ;
  var select_color = Get('select_color') ;
  Get('input_nDice').value = nDice ;

  for(var k=0 ; k<colors.length ; k++){
    var option = document.createElement('option') ;
    option.value     = color_names[k] ;
    option.innerHTML = color_names[k] ;
    select_color.appendChild(option) ;
  }
  var option = document.createElement('option') ;
  option.value     = 'change' ;
  option.innerHTML = 'Change each roll' ;
  select_color.appendChild(option) ;

  option = document.createElement('option') ;
  option.value     = 'rgb' ;
  option.innerHTML = 'Random rgb values' ;
  select_color.appendChild(option) ;

  for(var k=0 ; k<color_names.length ; k++){
    if(color==color_names[k]){
      select_color.options[k].selected = true ;
      break ;
    }
  }
  if(color=='change'  ) select_color.options[color_names.length+0].selected = true ;
  else if(color=='rgb') select_color.options[color_names.length+1].selected = true ;
  for(var k=0 ; k<mode_names.length ; k++){
    if(mode==mode_names[k]){
      select_mode.options[k].selected = true ;
      break ;
    }
  }

  var j = 1 ;
  var tr_head = Get('tr_head_'+j) ;
  var tr_dice = Get('tr_dice_'+j) ;
  for(var i=1 ; i<=nDice ; i++){
    if(i%6==0){
      j++ ;
      tr_head = document.createElement('tr') ;
      tr_dice = document.createElement('tr') ;
      tr_head.id = 'tr_head' + (j+1) ;
      tr_dice.id = 'tr_dice' + (j+1) ;
      Get('tbody_dice').appendChild(tr_head) ;
      Get('tbody_dice').appendChild(tr_dice) ;
    }
    var td = document.createElement('td') ;
    td.className = 'die' ;
    td.id = 'die_' + i ;
    for(var k=0 ; k<color_names.length ; k++){
      if(color==color_names[k]){
        td.style.color           = colors[k] ;
        td.style.backgroundColor = background_colors[k] ;
        break ;
      }
    }
    if(color=='change'){
      var k = Math.floor(Math.random()*color_names.length) ;
      td.style.color           = colors[k] ;
      td.style.backgroundColor = background_colors[k] ;
    }
    else if(color=='rgb'){
      td.style.backgroundColor = random_color() ;
    }
    var th = document.createElement('th') ;
    th.className = 'die' ;
    th.innerHTML = 'die ' + i ;
    tr_dice.appendChild(td) ;
    tr_head.appendChild(th) ;
  }
  update() ;
}
function random_color(){
  var r = Math.floor(Math.random()*255) ;
  var g = Math.floor(Math.random()*255) ;
  var b = Math.floor(Math.random()*255) ;
  return 'rgb('+r+','+g+','+b+')' ;
}
function update(){
  if(color=='change'){
    for(var i=1 ; i<=nDice ; i++){
      var k = Math.floor(Math.random()*color_names.length) ;
      Get('die'+(i+1)).style.color           = colors[k] ;
      Get('die'+(i+1)).style.backgroundColor = background_colors[k] ;
    }
  }
  if(color=='rgb'){
    var i = Math.floor(Math.random()*4) ;
    var td = Get('die_'+(i+1)) ;
    td.style.backgroundColor = random_color() ;
    if(r<100 && g<100 && b<100){
      td.style.color = 'rgb(255,255,255)' ;
    }
    else{
      td.style.color = 'rgb(0,0,0)' ;
    }
  }
  var t = 1000*Math.random() ;
  window.setTimeout('update()',t) ;
}
function roll(){
  var score = 0 ;
  if(mode=='xkcd'){
    for(var i=0 ; i<nDice ; i++){
      Get('die_'+(i+1)).innerHTML = '4' ;
      score += 4 ;
    }
  }
  else if(mode=='fudge'){
    for(var i=0 ; i<nDice ; i++){
      var r = Math.random() ;
      if(r<1.0/3.0){
        Get('die_'+(i+1)).innerHTML = '-' ;
        score-- ;
      }
      else if(r<2.0/3.0){
        Get('die_'+(i+1)).innerHTML = ' ' ;
      }
      else{
        Get('die_'+(i+1)).innerHTML = '+' ;
        score++ ;
      }
    }
  }
  else if(mode=='fair'){
    for(var i=0 ; i<nDice ; i++){
      var r = 1+Math.floor(Math.random()*6) ;
      Get('die_'+(i+1)).innerHTML = r ;
      score += r ;
    }
  }
  Get('score').innerHTML = score ;
  if(color=='change'){
    for(var i=1 ; i<=nDice ; i++){
      var k = Math.floor(Math.random()*color_names.length) ;
      var td = Get('die_'+(i+1)) ;
      td.style.color           = colors[k] ;
      td.style.backgroundColor = background_colors[k] ;
    }
  }
}
function Get(id){ return document.getElementById(id) ; }