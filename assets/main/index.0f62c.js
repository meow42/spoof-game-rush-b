window.__require=function t(e,o,i){function n(r,a){if(!o[r]){if(!e[r]){var s=r.split("/");if(s=s[s.length-1],!e[s]){var u="function"==typeof __require&&__require;if(!a&&u)return u(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+r+"'")}r=s}var p=o[r]={exports:{}};e[r][0].call(p.exports,function(t){return n(e[r][1][t]||t)},p,p.exports,t,e,o,i)}return o[r].exports}for(var c="function"==typeof __require&&__require,r=0;r<i.length;r++)n(i[r]);return n}({Fruit:[function(t,e,o){"use strict";cc._RF.push(e,"0fcd2+ItoBJQJ297sm77o0Z","Fruit");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,i){var n,c=arguments.length,r=c<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(c<3?n(r):c>3?n(e,o,r):n(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.id=0,e}return n(e,t),e.prototype.start=function(){},e.prototype.init=function(t){void 0!==t.id&&(this.id=t.id);var e=this.node.getChildByName("Image"),o=e.getComponent(cc.Sprite);o.spriteFrame=t.iconSF,this.node.opacity=255,t.size?(this.node.width=t.size,this.node.height=t.size,o.sizeMode=cc.Sprite.SizeMode.CUSTOM,e.width=t.size,e.height=t.size):(o.sizeMode=cc.Sprite.SizeMode.TRIMMED,this.node.width=e.width,this.node.height=e.height),t.isNextNode&&(this.node.removeComponent(cc.RigidBody),this.node.removeComponent(cc.PhysicsCircleCollider),this.node.removeComponent(cc.CircleCollider))},e.prototype.onBeginContact=function(t,e,o){if(e.tag==o.tag&&e.node&&o.node){e.node.isCreate=!0,o.node.isCreate=!0;var i=e.node.getComponent("Fruit"),n=o.node.getComponent("Fruit");if(!i||!n)return;if(8===i.id||8===n.id)return;i.id===n.id&&e.node.emit("sameContact",{self:e,other:o})}},e.prototype.onDestroy=function(){this.node.removeFromParent(!1)},c([a],e)}(cc.Component));o.default=s,cc._RF.pop()},{}],Game:[function(t,e,o){"use strict";cc._RF.push(e,"722a63zlB1NYINNm9HMiXap","Game");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,i){var n,c=arguments.length,r=c<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(c<3?n(r):c>3?n(e,o,r):n(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r},r=this&&this.__awaiter||function(t,e,o,i){return new(o||(o=Promise))(function(n,c){function r(t){try{s(i.next(t))}catch(e){c(e)}}function a(t){try{s(i.throw(t))}catch(e){c(e)}}function s(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(r,a)}s((i=i.apply(t,e||[])).next())})},a=this&&this.__generator||function(t,e){var o,i,n,c,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return c={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function a(t){return function(e){return s([t,e])}}function s(c){if(o)throw new TypeError("Generator is already executing.");for(;r;)try{if(o=1,i&&(n=2&c[0]?i.return:c[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,c[1])).done)return n;switch(i=0,n&&(c=[2&c[0],n.value]),c[0]){case 0:case 1:n=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,i=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(!(n=(n=r.trys).length>0&&n[n.length-1])&&(6===c[0]||2===c[0])){r=0;continue}if(3===c[0]&&(!n||c[1]>n[0]&&c[1]<n[3])){r.label=c[1];break}if(6===c[0]&&r.label<n[1]){r.label=n[1],n=c;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(c);break}n[2]&&r.ops.pop(),r.trys.pop();continue}c=e.call(t,r)}catch(a){c=[6,a],i=0}finally{o=n=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,u=s.ccclass,p=s.property,h=cc.Class({name:"FruitItem",properties:{id:0,size:0,iconSF:cc.SpriteFrame}}),l=cc.Class({name:"JuiceItem",properties:{id:0,particle:cc.SpriteFrame,circle:cc.SpriteFrame,slash:cc.SpriteFrame}}),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fruitContainer=null,e.canvas=null,e.successPop=null,e.failPop=null,e.line=null,e.fruitPrefab=null,e.juicePrefab=null,e.nextSprite=null,e.nextNode=null,e.boomAudio=null,e.knockAudio=null,e.waterAudio=null,e.haihaihaiAudio=null,e.scoreLabel=null,e.comboLabel=null,e.maxFruitId=8,e.fruits=[],e.juices=[],e.nextFruit=null,e.score=0,e.isAnimtionPlaying=!1,e.isCreating=!1,e.combo=0,e.lineBlink=!1,e.showOver=!1,e}return n(e,t),e.prototype.createOneFruit=function(t){var e=this,o=cc.instantiate(this.fruitPrefab),i=this.fruits[t];o.isCreate=!1,o.getComponent("Fruit").init({id:i.id,iconSF:i.iconSF,size:i.size}),o.getComponent(cc.RigidBody).type=cc.RigidBodyType.Dynamic;var n=o.getComponent(cc.PhysicsCircleCollider);return n.radius=o.height/2,n.apply(),o.on("sameContact",function(t){var o=t.self,i=t.other;i.node.off("sameContact"),e.onSameFruitContact({self:o,other:i})}),o},e.prototype.showCombo=function(){var t=this;this.combo++,this.combo<2||(this.comboLabel.node.opacity=255,this.comboLabel.node.scale=0,this.comboLabel.string="X"+this.combo.toString(),cc.tween(this.comboLabel.node).to(.2,{scale:1.5}).start(),cc.tween(this.comboLabel.node).to(3,{opacity:0}).call(function(){t.combo=0}).start())},e.prototype.onSameFruitContact=function(t){var e=t.self,o=t.other;o.node.off("sameContact"),e.node.removeFromParent(!1),o.node.removeFromParent(!1);var i=e.node.y<o.node.y?e.node:o.node,n=i.x,c=i.y,r=o.getComponent("Fruit").id;this.showCombo(),this.createFruitJuice(r-1,cc.v2({x:n,y:c}),i.width),this.addScore(r);var a=r,s=this.createOneFruit(a);s.setPosition(cc.v2(n,c)),s.getComponent(cc.RigidBody).enabledContactListener=!1,this.scheduleOnce(function(){s.getComponent(cc.RigidBody).enabledContactListener=!0},.5),this.scheduleOnce(function(){s.isCreate=!0},1),this.fruitContainer.addChild(s),a<10?(s.scale=0,cc.tween(s).to(.5,{scale:1},{easing:"backOut"}).start()):10==a?this.onCombineWaterMelon():console.log("\u5408\u6210\u4e24\u4e2a\u897f\u74dc\uff0c\u8fd8\u6ca1\u505a\uff0c\u611f\u89c9\u6ca1\u4eba\u5408\u5230\u8fd9\u5757")},e.prototype.createFruitJuice=function(t,e,o){return r(this,void 0,void 0,function(){var i,n,c;return a(this,function(r){switch(r.label){case 0:return this.isAnimtionPlaying?[2]:(this.isAnimtionPlaying=!0,cc.audioEngine.play(this.boomAudio,!1,1),cc.audioEngine.play(this.waterAudio,!1,1),console.log("id:",t,t===this.maxFruitId-1),t===this.maxFruitId-1&&cc.audioEngine.play(this.haihaihaiAudio,!1,1),i=cc.instantiate(this.juicePrefab),this.fruitContainer.addChild(i),n=this.juices[t],(c=i.getComponent("Juice")).init(n),[4,c.showJuice(e,o)]);case 1:return r.sent(),this.isAnimtionPlaying=!1,[2]}})})},e.prototype.addScore=function(t){this.score+=2*t,this.scoreLabel.string=this.score.toString()},e.prototype.initPhysics=function(){var t=cc.director.getPhysicsManager();t.enabled=!0,t.gravity=cc.v2(0,-960),cc.director.getCollisionManager().enabled=!0;var e=this.canvas.width,o=this.canvas.height,i=new cc.Node;i.addComponent(cc.RigidBody).type=cc.RigidBodyType.Static;var n=function(t,e,o,i,n){var c=t.addComponent(cc.PhysicsBoxCollider);c.offset.x=e,c.offset.y=o,c.size.width=i,c.size.height=n};n(i,0,-o/2,e,1),n(i,0,o/2,e,1),n(i,-e/2,0,1,o),n(i,e/2,0,1,o),i.parent=this.canvas},e.prototype.onLoad=function(){var t=this;this.initPhysics(),this.canvas.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),this.canvas.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.canvas.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.successPop.active=!1,this.failPop.active=!1,this.successPop.on(cc.Node.EventType.TOUCH_START,function(){t.successPop.active=!1,t.successPop.children.forEach(function(t){"bg"!=t.name&&t.destroy()})},this),this.failPop.on(cc.Node.EventType.TOUCH_START,function(){t.failPop.active=!1,t.showOver=!1,t.fruitContainer.removeAllChildren(),t.nextNode.getComponent("Fruit").init({iconSF:t.fruits[0].iconSF,size:t.fruits[0].size}),t.nextFruit=t.createOneFruit(0),t.score=0,t.scoreLabel.string="0",t.nextNode.opacity=255,t.line.opacity=0}),this.nextFruit=this.createOneFruit(0),this.nextNode.getComponent("Fruit").init({iconSF:this.fruits[0].iconSF,size:this.fruits[0].size,isNextNode:!0}),this.nextNode.setPosition(cc.v2(this.canvas.width/2,-20-this.nextNode.height/2)),this.comboLabel.node.opacity=0,this.line.opacity=0},e.prototype.createFruitOnPos=function(t,e){var o=this;void 0===t&&(t=this.canvas.width/2),void 0===e&&(e=-20-this.nextNode.height/2);var i=~~(4*Math.random()),n=this.nextFruit;n.setPosition(cc.v2(t,-20-n.height/2)),this.fruitContainer.addChild(n),this.nextNode.opacity=0,this.scheduleOnce(function(){o.nextFruit=o.createOneFruit(i),o.nextNode.setPosition(cc.v2(o.canvas.width/2,-20-o.nextFruit.height/2)),o.nextNode.getComponent("Fruit").init({iconSF:o.fruits[i].iconSF,size:o.fruits[i].size}),o.nextNode.scale=0,cc.tween(o.nextNode).to(.4,{scale:1},{easing:"backOut"}).call(function(){o.isCreating=!1}).start()},.5)},e.prototype.onTouchStart=function(t){this.isCreating||cc.tween(this.nextNode).to(.1,{position:cc.v3(t.getLocationX(),-20-this.nextNode.height/2)}).start()},e.prototype.onTouchMove=function(t){this.isCreating||this.nextNode.setPosition(cc.v2(t.getLocationX(),this.nextNode.y))},e.prototype.onTouchEnd=function(t){this.isCreating||(this.isCreating=!0,this.createFruitOnPos(t.getLocationX()))},e.prototype.onCombineWaterMelon=function(){var t=this;console.log("\u5408\u6210\u4e86\u4e00\u4e2a\u897f\u74dc\uff0c\u4f60\u5c31\u662f\u6700\u9753\u7684\u4ed4\uff01");var e=new cc.Node("Sprite");e.addComponent(cc.Sprite).spriteFrame=this.fruits[10].iconSF,e.setScale(.5),e.setPosition(cc.v2(0,-this.canvas.height/2+e.height/2)),this.successPop.addChild(e),this.successPop.active=!0,cc.tween(e).to(1,{scale:1,position:cc.v3(0,0)}).call(function(){var e=new cc.Node;e.setPosition(0,0),e.addComponent(cc.Label).string="\u4f60\u5c31\u662f\u6700\u9753\u7684\u4ed4\uff01",t.successPop.addChild(e)}).start()},e.prototype.gameEnd=function(){this.failPop.active=!0},e.prototype.update=function(){var t=this,e=[];this.fruitContainer.children.forEach(function(t){t.isCreate&&e.push(t)}),e.sort(function(t,e){return e.y-t.y}),!this.showOver&&e[0]&&e[0].y+e[0].height/2>this.line.y&&(this.showOver=!0,this.nextNode.opacity=0,cc.tween(this.line).to(.3,{opacity:255}).to(.3,{opacity:0}).union().repeat(4).call(function(){t.gameEnd()}).start()),!this.lineBlink&&e[0]&&e[0].y+e[0].height/2>this.line.y-50&&(this.lineBlink=!0,this.line.opacity=255,cc.tween(this.line).to(.3,{opacity:0}).to(.3,{opacity:255}).union().repeat(4).start())},e.prototype.start=function(){},c([p(cc.Node)],e.prototype,"fruitContainer",void 0),c([p(cc.Node)],e.prototype,"canvas",void 0),c([p(cc.Node)],e.prototype,"successPop",void 0),c([p(cc.Node)],e.prototype,"failPop",void 0),c([p(cc.Node)],e.prototype,"line",void 0),c([p(cc.Prefab)],e.prototype,"fruitPrefab",void 0),c([p(cc.Prefab)],e.prototype,"juicePrefab",void 0),c([p(cc.Sprite)],e.prototype,"nextSprite",void 0),c([p(cc.Node)],e.prototype,"nextNode",void 0),c([p(cc.AudioClip)],e.prototype,"boomAudio",void 0),c([p(cc.AudioClip)],e.prototype,"knockAudio",void 0),c([p(cc.AudioClip)],e.prototype,"waterAudio",void 0),c([p(cc.AudioClip)],e.prototype,"haihaihaiAudio",void 0),c([p(cc.Label)],e.prototype,"scoreLabel",void 0),c([p(cc.Label)],e.prototype,"comboLabel",void 0),c([p(cc.Integer)],e.prototype,"maxFruitId",void 0),c([p([h])],e.prototype,"fruits",void 0),c([p([l])],e.prototype,"juices",void 0),c([u],e)}(cc.Component);o.default=d,cc._RF.pop()},{}],Juice:[function(t,e,o){"use strict";cc._RF.push(e,"d99a570Gb5JvrCdeZjq9j7B","Juice");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,i){var n,c=arguments.length,r=c<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(c<3?n(r):c>3?n(e,o,r):n(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,function(t,e){return Math.floor(Math.random()*(e-t)+t)}),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.particle=null,e.circle=null,e.slash=null,e}return n(e,t),e.prototype.init=function(t){this.particle=t.particle,this.circle=t.particle,this.slash=t.slash},e.prototype.showJuice=function(t,e){for(var o=function(){var o=new cc.Node("Sprite");o.addComponent(cc.Sprite).spriteFrame=i.particle,o.parent=i.node;var n=359*Math.random(),c=30*Math.random()+e/2,r=cc.v2(Math.sin(n*Math.PI/180)*c,Math.cos(n*Math.PI/180)*c);o.scale=.5*Math.random()+e/100;var a=.5*Math.random();o.position=t,o.runAction(cc.sequence(cc.spawn(cc.moveBy(a,r),cc.scaleTo(a+.5,.3),cc.rotateBy(a+.5,s(-360,360))),cc.fadeOut(.1),cc.callFunc(function(){o.active=!1},i)))},i=this,n=0;n<10;++n)o();for(var c=function(){var o=new cc.Node("Sprite");o.addComponent(cc.Sprite).spriteFrame=r.circle,o.parent=r.node;var i=359*Math.random(),n=30*Math.random()+e/2,c=cc.v2(Math.sin(i*Math.PI/180)*n,Math.cos(i*Math.PI/180)*n);o.scale=.5*Math.random()+e/100;var a=.5*Math.random();o.position=t,o.runAction(cc.sequence(cc.spawn(cc.moveBy(a,c),cc.scaleTo(a+.5,.3)),cc.fadeOut(.1),cc.callFunc(function(){o.active=!1},r)))},r=this,a=0;a<20;a++)c();var u=new cc.Node("Sprite");u.addComponent(cc.Sprite).spriteFrame=this.slash,u.parent=this.node,u.position=t,u.scale=0,u.angle=s(0,360),u.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2,e/150),cc.fadeOut(1)),cc.callFunc(function(){u.active=!1})))},c([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{}]},{},["Fruit","Game","Juice"]);