var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(190,120,250,3);
var wall2 = createSprite(190,260,250,3);
var wall3 = createSprite(67,145,3,50);
var wall4 = createSprite(67,235,3,50);
var wall5 = createSprite(313,145,3,50);
var wall6 = createSprite(313,235,3,50);
var wall7 = createSprite(41,170,50,3);
var wall8 = createSprite(41,210,50,3);
var wall9 = createSprite(337,210,50,3);
var wall10 = createSprite(337,170,50,3);
var wall11 = createSprite(18,190,3,40);
var wall12 = createSprite(361,190,3,40);

var escaper = createSprite(40,190,13,13);
  escaper.shapeColor = "green";
  
var laser1 = createSprite(100,130,10,10);
  laser1.shapeColor = "red";
var laser2 = createSprite(215,130,10,10);
  laser2.shapeColor = "red";
var laser3 = createSprite(165,250,10,10);
  laser3.shapeColor = "red";
var laser4 = createSprite(270,250,10,10);
  laser4.shapeColor = "red";
  
  laser1.velocityY = 8;
  laser2.velocityY = 8;
 laser3.velocityY = -8;
  laser4.velocityY = -8;
  
  collide=createSprite(355,190,10,40);
  collide.shapeColor="blue";
  
  
  var score = 0;
  var count = 0;
  playSound("assets/category_instrumental/harpe_upscale_1.mp3", true);

  


function draw() {
  background("white");
  text("Game won: " + count,100,100);
  text("Lives Lost: " + score,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(18,170,52,40);
  rect(308,170,52,40);
  
  laser1.bounceOff(wall1);
  laser1.bounceOff(wall2);
   laser2.bounceOff(wall1);
   laser2.bounceOff(wall2);
   laser3.bounceOff(wall1);
   laser3.bounceOff(wall2);
  laser4.bounceOff(wall1);
   laser4.bounceOff(wall2);
   
   if(escaper.isTouching(wall12)){
     background("white");
     text("You Won the Game!! Congratulations!!",50,50);
    count= count+1;
   }
   
  
   if(keyDown("right")){
    escaper.x = escaper.x + 2.3;
  }
  if(keyDown("left")){
    escaper.x = escaper.x - 2.3;
  }
  if(keyDown("up")){
    escaper.y = escaper.y - 2.3;
  }
  if(keyDown("down")){
    escaper.y = escaper.y + 2.3;
  }
  if(escaper.isTouching(wall11)||
     escaper.isTouching(wall12)||
     escaper.isTouching(laser1)||
     escaper.isTouching(laser2)||
     escaper.isTouching(laser3)||
     escaper.isTouching(laser4))
  {
     escaper.x = 40;
     escaper.y = 190;
     score = score + 1;
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
