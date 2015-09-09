<?php

class Controllers_Students_Add {

  private $model;
  private $redirect;

  public function setRedirect ($redirect) {
    $this->redirect = $redirect;

  }

  public function setModel ($model) {
    $this->model = $model;
  }

  public function getRedirect() {
    return $this->redirect;
  }

  public function post () {
    if (!empty($_POST['name'])) {
      $name = $_POST['name'];
      $this->model->saveStudent($name);
    }
  }

}
