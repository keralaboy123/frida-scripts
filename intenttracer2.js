Java.perform(function () {
   var act = Java.use("android.app.Activity");
   
   act.startActivity.overload('android.content.Intent','android.os.Bundle').implementation = function (inti,bund) {
        console.log("\n\n * startActivity" );
        print (inti );
        return this.startActivity(inti,bund );
        
        }
     
    act.startActivity.overload('android.content.Intent').implementation = function (inti) {
        console.log("\n\n * startactivity" );
        print (inti );
        return this.startActivity(inti);
        
        }
         
    
    act.startActivityForResult.overload('android.content.Intent',"int","android.os.Bundle").implementation = function (inti,number,bund) {
        console.log("\n\n * stratActivityForResult" );
        print (inti );
        return this.startActivityForResult(inti,number,bund);
        
        }
         
  
    act.startActivityForResult.overload('android.content.Intent',"int").implementation = function (inti,number) {
        console.log("\n\n * stratActivityForResult" );
        print (inti );
        return this.startActivityForResult(inti,number);
        
        }
         
 
    act.getIntent.overload().implementation = function () {
        console.log("\n\n * getIntent" );
        var inti = this.getIntent();
        print (inti );
        return inti;
        
        }
         
         
 
  
    var str = Java.use('java.lang.String'), objectClass = 'java.lang.Object';
    str.equals.overload(objectClass).implementation = function(obj) {
        var response = str.equals.overload(objectClass).call(this, obj);
        if (obj) {
            if (obj.toString().length > 5) {
                send(str.toString.call(this) + ' == ' + obj.toString() + ' ? ' + response);
            }
        }
        return response;
    }
    
    
    


   function print(inti) {
        
        
        console.log("\t    data    =  "+  inti.getDataString() );
        console.log("\t    action  =  "+  inti.getAction() );
        console.log("\t    package =  "+  inti.getPackage() ); 
        
        var classobject =inti.getComponent();
        if (classobject)  {
            console.log("\t    class   =  "+  classobject.getClassName());
            }
        else {   console.log("\t    class   =  null");}
            
        
        var ext = inti.getExtras();
        if (ext) {
           console.log("\t    extras");
           var keys = ext.keySet()
           var iterator = keys.iterator()
           while (iterator.hasNext()) {
               var key = iterator.next().toString()
               var value = ext.get(key)
               console.log("\t         " + key + ' : ' + value.toString())
           }  
        } 
        else {   console.log("\t    extras = null"); }
             
        
    }
   
})
