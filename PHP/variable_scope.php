<?php 
/*
변수의 종류

PHP에서 변수는 스크립트 내 어느 곳에서나 선언할 수 있습니다.
변수의 유효 범위(variable scope)란 특정 변수를 참조되거나 사용할 수 있는 스크립트 내의 범위를 의미합니다.
PHP에서는 이러한 변수의 유효 범위에 따라 변수의 종류를 다음과 같이 구분합니다.
 
1. 지역 변수(local variable)
2. 전역 변수(global variable)
3. 정적 변수(static variable)
*/

$global_var = 11;
function varFunc(){
    $local_var = 10;      //지역 변수
    echo "함수 내부 지역 변수 {$local_var}\n";
    global $global_var;  //함수 내에서 사용할 전역 변수 명시
    echo "함수 내부에서 호출 한 전역 변수 : {$global_var}\n";
}

varFunc();
echo "함수 밖에서 호출한 지역 변수 var의 값 : {$local_var}\n";
//PHP Warning:  
//Undefined variable $local_var in variable_scope.php on line 23
echo "함수 밖에서 호출한 전역 변수 var의 값 : {$global_var}\n";


?>