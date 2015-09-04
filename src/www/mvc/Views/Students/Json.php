<?php

class Views_Students_Json {

  private $model;

  public function setModel ($model) {
    $this->model = $model;
  }

  public function render () {
    echo json_encode($this->model->getStudents());
  }
}

