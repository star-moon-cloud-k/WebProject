<?php

    //Data Type Conversion -> 원하는 데이터 타입으로 변경시 $변수 = (원하는 데이터형)$변수;
    $str = "문자열";
    echo "데이터형 변경 전의 데이터형 ".gettype($str)."<br>";

    $str = (int)$str;
    echo "데이터형의 변경 후 데이터형 ".gettype($str)." 값은 {$str} <br>";
?>