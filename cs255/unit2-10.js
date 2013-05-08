parseJSON = function (w) {
  parsed = JSON.parse(w);
  return parsed['frames']['chaingun_impact.png']['spriteSourceSize']['x'];
};

var setup = function() {
  xo = new XMLHttpRequest();    
  xo.open('GET',"/media/resources/gamedev/weapon.json",true);
  xo.onload = function() {
    var res = parseJSON(this.responseText);
    console.log(res);
  };

  xo.send();    
};

setup();
