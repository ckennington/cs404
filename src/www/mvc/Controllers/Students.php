<?php

class Controllers_Students {

  private $model;

  public function setModel ($model) {
    $this->model = $model;
  }

  public function all () {
    return $this->model->getStudents();
  }

}
