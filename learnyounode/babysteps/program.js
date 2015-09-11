var myarray = process.argv;
var sumtotal = 0;
for (var i=2;i< myarray.length; i++)
{
sumtotal = sumtotal + Number(myarray[i]);
}
console.log(sumtotal);
