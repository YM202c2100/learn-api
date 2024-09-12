<?php
require_once "db/DataBaseConnection.php";
use db\DataBaseConnection;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: multipart/form-data');

if($_SERVER['REQUEST_METHOD'] === 'POST'){
  $title = $_POST['title'] ?? null;
  $body = $_POST['body'] ?? null;

  try{
    $db = new DataBaseConnection();
    $db->beginTransaction();
  
    $insert_sql = 'INSERT into todos (title, body) values (:title, :body)';
    $db->execute($insert_sql,[
      ':title'=>$title,
      ':body' =>$body
    ]);
    
    //上の処理でdbに格納したtodoを再取得
    //(これはトランザクション練習用の処理であり、本来はselect無しでも戻り値に必要な情報は満たせる)
    $select_sql = 'SELECT id, title, body, completed from todos where id = :id';
    $inserted_id = $db->getLastInsertId();
    $fetched_data = $db->selectOne($select_sql, [
      ':id'=>$inserted_id
    ]);

    $db->commit();
    echo json_encode($fetched_data);

  }catch(Throwable $error){
    $db->rollBack();
    http_response_code(500);
  }
}
