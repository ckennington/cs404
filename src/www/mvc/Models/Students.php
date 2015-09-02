<?php

class Models_Students {

  // eventually move data access to a DAO class
  private $file = "/Users/crk/projects/cs404/src/www/mvc/Models/data.dat";

  public function getStudents () {
    $data = file_get_contents($this->file);
    $students = explode("\n", $data);
    return $students;
  }

  public function saveStudent ($student) {
    file_put_contents($this->file, "$student\n", FILE_APPEND);
  }

}
