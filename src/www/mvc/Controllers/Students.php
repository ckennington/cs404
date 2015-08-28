<?php

class Controllers_Students {

  private $model;

  public function __construct ($model) {
    $this->model = $model;
  }

  public function addStudent () {
    if (!empty($_POST['name'])) {
      $name = $_POST['name'];
      $this->model->saveStudent($name);
    }
  }

}
