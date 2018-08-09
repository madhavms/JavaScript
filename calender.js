var daysofweek=['sun','mon','tue','wed','thu','fri','sat'];
var monthsofyear=['january','february','march','april','may','june','july','august','september','october','november','december'];
var daysofmonth=['31','28','31','30','31','30','31','31','30','31','30','31'];
var yearbegsun=[0,3,3,6,1,4,6,2,5,0,3,5];
var yearbegsunleap=[0,3,4,0,2,5,0,3,6,1,5,6];
var d=' su mo tu we th fr sa'
var a = [];
for(var i = 0; i <12; ++i) { a.push(''); }

cal();
function cal()
{
var month=process.argv[2];
var year=process.argv.slice(3);

validate(year,month);

leap(year)
setdatearray(year,month);
printheader(month,year);
getcalender(year,month);

printcalender(year,month);

}
function printheader(month,year)
{
console.log(' '+' '+' '+' '+' '+monthsofyear[month-1]+' '+year);
console.log();
console.log(d);


}
function leap(year)
{
if(isleap(year)==true)
daysofmonth[1]=29
}
function validate(year,month)
{
try{
if (year<0)
{
console.log("year should not be BC");
throw new Error("Please enter a valid year")
}
}
catch(e){
       process.exit()
   }
try{if (month>12 | month<1)
{
console.log("invalid month");
throw new Error("Please enter a valid month")
}
}
catch(e){
       process.exit()
   }
}

function getcalender(year,month)
{
var x=0
var z=1
var k
if(isleap(year)==true)
k=yearbegsunleap[month-1]
else
k=yearbegsun[month-1]

if(k>0)
{
for(i=0;i<k;i++)
a[x]=a[x]+' '+' '+' '


for(i=k;i<7;i++)
{ if(z<10)
{a[x]=a[x]+' '+' '+z
z++}
else{
a[x]=a[x]+' '+z
z++}
}

for(i=1;i<6;i++)
{x++

for(j=0;j<7;j++)
{
if(z>daysofmonth[month-1])
{break}
if(z<10){
a[x]=a[x]+' '+' '+z
z++}
else{
a[x]=a[x]+' '+z
z++ }}}}

else {

  for(i=0;i<6;i++)
  {x++

  for(j=0;j<7;j++)
  {
  if(z>daysofmonth[month-1])
  {break}
  if(z<10){
  a[x]=a[x]+' '+' '+z
  z++}
  else{
  a[x]=a[x]+' '+z
  z++ }}}}}


function printcalender(year,month)
{


for(var i=0;i<6;i++)

console.log(a[i])

}

function isleap(year)

{
if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))
return true;
else
return false;
}

function countnoleapyears(year)
{var k=0
for(i=0;i<year;i++)
{if(isleap(i)==true)
k++
}

return k
}

function startdayofweek(year,month)
{
b=countnoleapyears(year);

var startday=((year-b)*365+(b*366))%7;
startday-=1;

return startday
}


function setdatearray(year,month)
{
c=startdayofweek(year,month);

diff=c-yearbegsun[0];

diffarr=[diff,diff,diff,diff,diff,diff,diff,diff,diff,diff,diff,diff];

if(isleap(year)==false)
{

for(var i = 0; i < 12; i++){
yearbegsun[i]=yearbegsun[i] + diffarr[i];

}

for(i=0;i<12;i++)
{
yearbegsun[i]=yearbegsun[i]%7

}
}
else{

for(var i = 0; i < 12; i++)
yearbegsunleap[i]=(yearbegsunleap[i] + diffarr[i]);

for(var i=0;i<12;i++){
yearbegsunleap[i]=yearbegsunleap[i]%7;

}
}
}
