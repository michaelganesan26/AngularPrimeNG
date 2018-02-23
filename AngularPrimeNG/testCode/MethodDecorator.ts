//This is a sample application using the method decorator
const leDecorator = (target:Object,propertyKey:string|symbol,descriptor:PropertyDescriptor):any => {
     
    var oldValue = descriptor.value;
    
    descriptor.value = function(){
          console.log(`Calling ${propertyKey} with `,arguments,target);
          let value = oldValue.apply(null,[arguments[1],arguments[0]]);

          console.log(`Function executed!`);
          return (value + "; This is awesome");
    }

    return descriptor;
}

const leDecorator2 = (target:Object,propertyKey:string|symbol,descriptor:PropertyDescriptor):any => {
     
    var oldValue = descriptor.value;
    
    descriptor.value = function(){
          console.log(`Calling ${propertyKey} with `,arguments,target);
          arguments[0] = 'Michael this is way too cool';
          arguments[1] = 'Wow, this is not bad!';
          let value = oldValue.apply(null,[arguments[0],arguments[1]]);

          console.log(`Function executed!`);
          return (value + "; This is awesome");
    }

    return descriptor;
}

const trackValues = (target:Object,propertyKey:string|symbol,descriptor:PropertyDescriptor):any => {
     
    var oldValue = descriptor.value;
    
    descriptor.value = function(){
          console.log(`Calling ${propertyKey} with `,arguments,target);
          var result = oldValue.apply(this,arguments);
          return(result);
        }

    return descriptor;
}


const trackValues2 = (target:Object,propertyKey:string|symbol,descriptor:PropertyDescriptor):any => {
     
    var oldValue = descriptor.value;
    
    descriptor.value = function(){
          //console.log(`Calling ${propertyKey} with `,arguments,target);
          let args = Array.prototype.slice.call(arguments);
          var a = args.map(a=> JSON.stringify(a)).join();
          var result = oldValue.apply(this,arguments);
          var r = JSON.stringify(result);
          console.log(`Call: ${propertyKey} (${a}) => ${r}`);
          return(result);
        }
    return descriptor;
}

//Pass in optional parameters into the method decorators
const trackValuesWithArguments = (mode:string):any=>{
  
    function actualDecorator(target:Object,propertyKey:string|symbol,descriptor:PropertyDescriptor):any {
        var oldValue = descriptor.value;
        
        descriptor.value = function(){
              //console.log(`Calling ${propertyKey} with `,arguments,target);
              let args = Array.prototype.slice.call(arguments);
              var a = args.map(a=> JSON.stringify(a)).join();
              var result = oldValue.apply(this,arguments);
              var r = JSON.stringify(result);
              if(mode==="debug"){
                console.log(`Call: ${propertyKey} (${a}) => ${r}`);
              }
              return(result);
            }
        return descriptor;
    }

    return(actualDecorator);
}






class JSMeetUp {
    speaker: string = "Ruban";

    //@trackValues2
    @trackValuesWithArguments("debug")
    welcome(arg1: string, arg2: string) {

        console.log(`Arguments received: ${arg1}, ${arg2}`);
        return (`${arg1} ${arg2}`);

    }
}



const meetup = new JSMeetUp();
console.log(meetup.welcome("World","Hello"));