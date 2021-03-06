<?php
$variable_name = 'fist_value';
// 변수 선언 $사용
// C언어와는 달리 변수를 선언할 때 따로 타입을 명시하지 않습니다.
// PHP에서 변수의 타입은 해당 변수에 대입하는 값에 따라 자동으로 결정되기 때문입니다.

$var1 = 10;      //정수 값 대입
$var2 = 3.14;    //실수 값 대입
$var3 = "PHP";   //문자열 대입

/*
1. 변수의 이름은 영문 대소문자, 숫자, 언더스코어(_)로만 구성됩니다.
2. 변수의 이름은 숫자와의 구분을 빠르게 하기 위해 숫자로는 시작할 수 없습니다.
3. 변수의 이름에는 공백이 포함될 수 없습니다.
4. 변수의 이름으로 PHP에서 미리 정의한 $this는 사용할 수 없습니다.
5. 변수의 이름은 대소문자를 구분합니다.
*/

echo "$var1\n";
echo "{$var2}\n";

echo "변수 \$var 에 저장된 값은 $var 입니다.\n";
//선언 안된 $var라고 출력해도 오류발생 없음
//경고만 발생하게 됨. 
//Warning: Undefined variable $var in variable.php on line 22
echo "변수 \$var1 에 저장된 값은 $var1 입니다.\n"; 
echo "변수 \$var2 에 저장된 값은 {$var2} 입니다.\n";

//변수의 이름을 중괄호로 감싸야만 PHP 파서가 변수의 이름을 정확히 인식할 수 있습니다.

//선언되지 않은 변수의 기본값
var_dump($var) //NULL

?>