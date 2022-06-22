<?php
    $str = " 양쪽 모두 공백 없앰 ";
    echo '|'.trim($str).'|'; //공백 확인용
    echo "<br>";

    $str = " 앞만 공백 없앰 ";
    echo '|'.ltrim($str).'|';
    echo "<br>";

    $str  = " 뒤만 공백 없앰 ";
    echo '|'.rtrim($str).'|';
?>