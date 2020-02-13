var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var xw = 106;
var yw = 17;

if(window.innerWidth/xw<window.innerHeight/yw){
  size=Math.floor(window.innerWidth/xw);
}else{
  size=Math.floor(window.innerHeight/yw);
}

var mcbwidth = xw*size+1;
var mcbheight = yw*size+1;
canvas.width=mcbwidth;
canvas.height=mcbheight;

for(let h=0;h<=xw;h++){
  ctx.fillRect(h*size,0,1,yw*size);
}
for(let v=0;v<=yw;v++){
  ctx.fillRect(0,v*size,xw*size,1);
}
function render(){
  let bi = new BigInt(document.getElementById('input').value);
  console.log(bi);
  /*
  for(let x=0;x<xw;x++){
    for(let y=0;y<yw;y++){
      if(0.5<Math.floor())
    }
  }

  let drawx = x*size;
  let drawy = y*size;
  ctx.fillRect(drawx,drawy,size,size);
*/
}
