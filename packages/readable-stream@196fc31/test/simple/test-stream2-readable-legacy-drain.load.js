montageDefine("196fc31","test/simple/test-stream2-readable-legacy-drain",{dependencies:["../common","assert","../../readable"],factory:function(e){function t(){n(2>=h),h=0,c.emit("drain")}e("../common");var n=e("assert"),a=e("../../readable"),s=a.Readable,r=new s,i=256,o=0;r._read=function(){return r.push(++o===i?null:new Buffer(1))};var l=!1;r.on("end",function(){l=!0});var c=new a;c.writable=!0;var p=0,h=0;c.write=function(e){return p+=e.length,h+=e.length,process.nextTick(t),!1};var u=!1;c.end=function(){u=!0},r.on("readable",function(){c.emit("drain")}),r.pipe(c),process.on("exit",function(){n(l),n(u),console.error("ok")})}});