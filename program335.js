function display(no)
{
   console.log("Jay Ganesh..."+no);
   return ++no;
}

function main()
{
    let iRet = 0;

    iRet = display(11);

    console.log("Return Value is :"+iRet);
}

main();