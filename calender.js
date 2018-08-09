var daysofweek=['sun','mon','tue','wed','thu','fri','sat'];
var monthsofyear=['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec'];
var daysofmonth=['31','28','31','30','31','30','31','31','30','31','30','31'];
var yearbegsun=[0,3,3,6,1,4,6,2,5,0,3,5];
var yearbegsunleap=[0,3,4,0,2,5,0,3,6,1,5,6];
var a = [];
    for(var i = 0; i <12; ++i) { a.push(''); }
    console.log('this is a');
    console.log(a);
cal();
function cal()
{
  var month=process.argv[2];
  var year=process.argv.slice(3);
  console.log('is leap or not');
  console.log(isleap(year));
  validate(year,month);
  console.log('month is');
  console.log(month);
  leap(year)
  setdatearray(year,month);
  console.log('array after set');
  console.log(yearbegsun);
  getcalender(year,month);

  printcalender(year,month);

}
function leap(year)
{
  if(isleap(year)==true)
  daysofmonth[1]=29
}
function validate(year,month)
{
  return true;
if (year<0)
{
  console.log("year should not be BC");
  return false;
}
if (month>12)
{
  console.log("invalid month");
  return false;
}



}


function getcalender(year,month)
{

console.log("hero");
var x=0
var z=1
var k
if(isleap(year)==true)
k=yearbegsunleap[month-1]
else
k=yearbegsun[month-1]
  console.log('k values')

  console.log(yearbegsunleap[month-1])
  console.log(month)
if(k>0)
{
  for(i=0;i<k;i++)
    a[x]=a[x]+' '+' '


  for(i=k;i<7;i++)
    {a[x]=a[x]+' '+z
    z++





  while(z<daysofmonth[month-1])
  {
  for(i=1;i<6;i++)
  {x++
    for(i=0;i<7;i++)
    {
      a[x]=a[x]+' '+z
      z++

    }
    }
  }
}



if(k==0) {
  while(z<daysofmonth[month-1])
  {
  for(i=0;i<6;i++)
  {
    for(i=0;i<7;i++)
    {
      a[x]=a[x]+' '+z
      z++
    }
    x++
  }
}
}

function isleap(year)

{
if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))
return true;
else
return false;
}


function printcalender(year,month)
{
console.log('hello')

for(var i=0;i<6;i++)

console.log(a[i])

}


function countnoleapyears(year)
{var k=0
  for(i=0;i<year;i++)
  {if(isleap(i)==true)
   k++
  }
  console.log(k);
  return k
}


function startdayofweek(year,month)
{
  b=countnoleapyears(year);
  console.log('num of leap');
  console.log(b);
  console.log('year');
  console.log(year);
  var startday=((year-b)*365+(b*366))%7;
  startday-=1;
  console.log('startday');
  console.log(startday);
  return startday
  }


function setdatearray(year,month)
{
console.log('array before set');
console.log(yearbegsun);
  console.log("set date");
c=startdayofweek(year,month);
console.log(c);
diff=c-yearbegsun[0];
console.log('diff');
console.log(diff);
diffarr=[diff,diff,diff,diff,diff,diff,diff,diff,diff,diff,diff,diff];
console.log('diffarr');
console.log(diffarr);
if(isleap(year)==false)
{
  console.log('madhav this is not leap');
  for(var i = 0; i < 12; i++){
     yearbegsun[i]=yearbegsun[i] + diffarr[i];
     console.log('HELLOOOO');
     console.log(yearbegsun[i]);
   }

     for(i=0;i<12;i++)
{
       yearbegsun[i]=yearbegsun[i]%7
       console.log('hello madhav this is not leap');
       console.log(yearbegsun[i]);
  }
}


else{
  console.log('madhav this is leap');
  for(var i = 0; i < 12; i++)
  {yearbegsunleap[i]=(yearbegsunleap[i] + diffarr[i]);
   console.log('madhav this is leap');
   console.log(yearbegsunleap[i]);}
  for(var i=0;i<12;i++){
    yearbegsunleap[i]=yearbegsunleap[i]%7;
    console.log('hello madhav this is leap');
    console.log(yearbegsunleap[i]);
  }
}
