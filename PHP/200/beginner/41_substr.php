<?php   
    $str = "everdevel";

    //0자리 시작하여 5글자를 자른 후 curStr 에 대입

    $cutStr = substr($str, 0 , 5);
    $cutStr2 = substr($str,-5 , 5);
    echo $cutStr."<br>";
    echo $cutStr2;
?>