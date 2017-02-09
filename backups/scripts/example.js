(function() {

var generateGUID = (typeof(window.crypto) != 'undefined' &&
                typeof(window.crypto.getRandomValues) != 'undefined') ?
    function() {
        // If we have a cryptographically secure PRNG, use that
        // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
        var buf = new Uint16Array(8);
        window.crypto.getRandomValues(buf);
        var S4 = function(num) {
            var ret = num.toString(16);
            while(ret.length < 4){
                ret = "0"+ret;
            }
            return ret;
        };
        return (S4(buf[0])+S4(buf[1])+"-"+S4(buf[2])+"-"+S4(buf[3])+"-"+S4(buf[4])+"-"+S4(buf[5])+S4(buf[6])+S4(buf[7]));
    }

    :

    function() {
        // Otherwise, just use Math.random
        // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    };



    var scripts = document.getElementsByTagName('script');

  console.log("Found Scripts=" + scripts.length);

   var localProcessed={};
    for (var i = 0; i< scripts.length; i++) {
         var src = scripts[i].src;
         var imposeIndex = src.indexOf(".js?impose&");

        if(imposeIndex<=0) {
            continue;
        }

         if(!localProcessed[src]) {
            localProcessed[src]=0;
        }

        localProcessed[src]++;

        if(window.hasOwnProperty("globalProcessed")) {
            if(!window.globalProcessed[src]) {
                window.globalProcessed[src]=0;
            }
            else if(window.globalProcessed[src]>=localProcessed[src]) {
                continue;
            }
        }
        else {
            window.globalProcessed={};
            window.globalProcessed[src]=0;
        }

        window.globalProcessed[src]++;

        var queryString = src.substring(imposeIndex+11);
        var imposeValuePairs = queryString.split(/&/);
        var imposeParams={};
        for (var i in imposeValuePairs) {
               var nameValue = imposeValuePairs[i].split(/=/);
               imposeParams[nameValue[0]] = nameValue[1];
        }

        var imposeCanvasId = "impose_" + generateGUID();
        document.write("<canvas id='" + imposeCanvasId + "' width='578' height='400'></canvas>");

        console.log("Imose CanvasId=" + imposeCanvasId);

      var imageObj = new Image();

      imageObj.onload = function() {
        var canvas = document.getElementById(imposeCanvasId);
        var context = canvas.getContext('2d');
        context.drawImage(imageObj, 69, 50);

         var x = canvas.width / 2;
              var y = canvas.height / 2;

              context.font = '30pt Calibri';
              context.textAlign = 'center';
              context.fillStyle = 'blue';
              context.fillText(imposeParams.caption, x, y);
      };

console.log("Imose Script=" + src);


      imageObj.src = imposeParams.image;



       return;
  }
})();