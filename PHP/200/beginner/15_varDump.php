<?php

    //var_dump(변수 명)  : 배열의 구조를 보여주는 함수
    $dr = array();
    $dr['continent'] = array();
    
    $dr['continent']['america'] = array();
    $dr['continent']['america'][0] = '애넌하임';
    $dr['continent']['america'][1] = '올랜도';
    
    $dr['continent']['asia'] = array();
    $dr['continent']['asia'][0] = '우라야스';
    $dr['continent']['asia'][1] = '홍콩';
    $dr['continent']['asia'][2] = '상하이';
    
    $dr['continent']['europe'] = array();
    $dr['continent']['europe'][0] = '파리';

    echo "<pre>";
    var_dump($dr);
    echo "</pre>";
?>