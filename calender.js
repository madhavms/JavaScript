function checkleap(yr)
{
  return ((yr % 4 == 0) && (yr % 100 != 0)) || (yr % 400 == 0);
}

var year = 2008;
var month = 5;
var febd;
var calender = [
  ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA',],
  ['..','..','..','..','..','..','..',],
  ['..','..','..','..','..','..','..',],
  ['..','..','..','..','..','..','..',],
  ['..','..','..','..','..','..','..',],
  ['..','..','..','..','..','..','..',],
  ['..','..','..','..','..','..','..',],
];

function setcal(monthd,month)
{
  var i=1,j;
  mond=days[month-1];
  var c =1;
  for(j=monthd;j<7;j++)
  {
    if (c<10)
    {
      calender[i][j] = ' '+c;
      c++;
    }
    else
    {
      calender[i][j] = c;
      c++;
    }
  }

  for (i=2;i<7;i++)
  {
    for(j=0;j<7;j++)
    {
      if (c>mond) {
        continue;
      }
      if (c<10)
      {
        calender[i][j] = ' '+c;
        c++;
      }
      else
      {
        calender[i][j] = c;
        c++;
      }
    }
  }
}



function printyear(calender)
{
  var i,j;
  for(i=0;i<7;i++)
  {monthd
    console.log(calender[i][0]+" "+calender[i][1]+" "+calender[i][2]+" "+calender[i][3]+" "+calender[i][4]+" "+calender[i][5]+" "+calender[i][6]);
  }
}

function setbl()
{
  var  i,j;
  for (i = 0; i < 7; i++)
    for (j = 0; j < 7 ;j++)
    {
      if (calender[i][j]=='..')
      {
        calender[i][j]='  '
      }
    }
}





var leapoff =[];
var nonleapoff =[];

var f = checkleap(year)
if (f)
   febd=29;
else
  febd=28;

days = [31,febd,31,30,31,30,31,31,30,31,30,31];
var yeard = year-2000;
var leapd = yeard/4;
yeard = Math.ceil(yeard)
leapd = Math.ceil(leapd)
//console.log(yeard);
// console.log(leapd);

var diff = (yeard-leapd)+(2*leapd);

//console.log(diff);

diff = diff%7;
//console.log(diff);
var totalspend=0
var monthd=0

switch (month) {
  case 0:
        totalspend=0;
        monthd=totalspend%7;
    break;
  case 1:
        totalspend=days[0];
        monthd=totalspend%7;
    break;
  case 2:
          totalspend=days[0]+days[1];
          monthd=totalspend%7;
    break;
  case 3:
          totalspend=days[0]+days[1]+days[2];
          monthd=totalspend%7;
    break;
  case 4:
          totalspend=days[0]+days[1]+days[2]+days[3];
          monthd=totalspend%7;
    break;
  case 5:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4];
          monthd=totalspend%7;
    break;
  case 6:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4]+days[5];
          monthd=totalspend%7;
    break;
  case 7:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4]+days[5]+days[6];
          monthd=totalspend%7;
    break;
  case 8:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4]+days[5]+days[6]+days[7];
          monthd=totalspend%7;
    break;
  case 9:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4]+days[5]+days[6]+days[7]+days[8];
          monthd=totalspend%7;
    break;
  case 10:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4]+days[5]+days[6]+days[7]+days[8]+days[9];
            monthd=totalspend%7;
    break;
  case 11:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4]+days[5]+days[6]+days[7]+days[8]+days[9]+days[10];
            monthd=totalspend%7;
    break;


}
// /console.log(monthd);
setcal(monthd,month);

setbl()
/*
if (f)
{


}

*/




//console.log(calender)
printyear(calender)
