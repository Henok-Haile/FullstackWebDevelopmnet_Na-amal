var mydate = new Date();

console.log(mydate.getHours() + ':' + (mydate.getMinutes()) + ':' + mydate.getSeconds() + ' ' + (mydate.getHours() >= 12 ? 'PM' : 'AM'))