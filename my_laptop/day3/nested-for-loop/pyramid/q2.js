//pattern pyramid
// 1 2 3 4 5 
//  1 2 3 4
//   1 2 3
//    1 2
//     1
//    1 2
//   1 2 3
//  1 2 3 4
// 1 2 3 4 5

for(let i=1;i<=5;i++)
{
  for(let space=1;space<i;space++)
  {
    process.stdout.write(" ");
  }

  for(let j=1;j<=6-i;j++)
  {
    process.stdout.write(j+" ");
  }

  console.log("");
}



for(let i=1;i<=4;i++)
{
  for(let space=3;space>=i;space--)
  {
    process.stdout.write(" ");
  }

  for(let j=1;j<=i+1;j++)
  {
    process.stdout.write(j+" ");
  }

  console.log("");
}
