<?php

namespace db;

use PDO;

class PDOSingleton {
  private static $conn;

  public static function getInstance($dsn, $username, $password){
    if(!isset(self::$conn)){
      self::$conn = new PDO($dsn, $username, $password);
    }
    return self::$conn;
  }
}

class DataBaseConnection{
  private $conn;

  public function __construct($host = 'localhost', $port = '8889', $dbName = 'testdb', $username = 'test_user', $password = 'pwd') 
  {
    $dsn = "mysql:host={$host};port={$port};dbname={$dbName}";
    $this->conn = PDOSingleton::getInstance($dsn, $username, $password);
  }

  public function execute($sql, $valueMap){
    $pst = $this->conn->prepare($sql);
    DataBaseConnection::bindValues($pst, $valueMap);
    $pst->execute();
  }

  public function selectOne($sql, $valueMap){
    $pst = $this->conn->prepare($sql);
    DataBaseConnection::bindValues($pst, $valueMap);
    $pst->execute();
    $data = $pst->fetch();
    return $data;
  }

  public function selectAll($sql, $valueMap){
    $pst = $this->conn->prepare($sql);
    if(isset($valueMap)){
      DataBaseConnection::bindValues($pst, $valueMap);
    }
    $pst->execute();
    $data = $pst->fetchAll();
    return $data;
  }

  public static function bindValues($preparedStmt, $valueMap){
    foreach($valueMap as $placeHolder => $value){
      $preparedStmt->bindValue($placeHolder, $value);
    }
  }

  public function getLastInsertId(){
    return $this->conn->lastInsertId();
  }

  public function beginTransaction(){
    $this->conn->beginTransaction();
  }

  public function commit(){
    $this->conn->commit();
  }

  public function rollBack(){
    $this->conn->rollBack();
  }
}