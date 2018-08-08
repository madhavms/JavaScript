

var daysofweek=['sun','mon','tue','wed','thu','fri','sat'];
var monthsofyear=['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec'];
var daysofmonth=['31','28','31','30','31','30','31','31','30','31','30','31'];
var yearbegsun=[0,3,3,6,1,4,6,2,5,0,3,5];
var yearbegsunleap=[0,3,4,0,2,5,0,3,6,1,5,6];
var a = new Array();
cal();
function cal()
{
  var month=process.argv.slice(2);
  var year=process.argv.slice(3);
  console.log('is leap or not');
  console.log(isleap(year));
  validate(year,month);
  setdatearray(year,month);
  getcalender(year,month);

  printcalender(year,month);

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

function isleap(year)

{
if((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0)))
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
  console.log('startday');
  console.log(startday);
  return startday-1
  }


function setdatearray(year,month)
{console.log("set date");
c=startdayofweek(year,month);
console.log(c);
diff=c-yearbegsun[0];
diffarr=[diff,diff,diff,diff,diff,diff,diff,diff,diff,diff,diff,diff];
if(isleap==false)
{
yearbegsun=yearbegsun+diffarr
for(i=0;i<12;i++)
{
  yearbegsun[i]=yearbegsun[i]%7
}
}
else{
  yearbegsunleap=yearbegsunleap+diffarr
  for(i=0;i<12;i++){
    yearbegsunleap[i]=yearbegsunleap[i]%7
  }

}
}




function noofrow(year,month)
{
  var daysInWeek = 7
  if(isleap==true){
  var startDay =  yearbegsun[month-1]}
  else{
  var startDay =  yearbegsunleap[month-1]}

  var daysInMonth = daysofmonth[month-1]
  var numRows = (startDay+daysInMonth)/daysInWeek

  if((startDay+daysInMonth - 1) % daysInWeek != 0)
      numRows +=1


  return numRows
}




function getcalender(year,month)
{console.log("hero");
var x=0
var z=1
if(isleap==true)
var k=yearbegsunleap[month-1]
else
  var k=yearbegsun[month-1]
if(k>0)
{
  for(i=0;i<k;i++){noofrow(year,month)
    a[x]=a[x]+' '


  for(i=k;i<7;i++){
    a[x]=a[x]+' '+z
    z++
  }
  x++
  while(z<32)
  {
  for(i=1;i<numRow;i++)
  {
    for(i=1;i<7;i++)
    {
      a[x]=a[x]+' '+z
      z++
    }
    x++
  }
}
}
}
}


function printcalender(year,month)
{
console.log('hello')
x=noofrow(year,month);
console.log(x)
for(i=0;i<10;i++)
console.log('hello')
console.log(a[i])

}
