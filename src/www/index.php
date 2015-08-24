<?php

  // parse the request
  list($controller, $view) = explode('.', $_SERVER['REQUEST_URI'], 2);

  // strip leading and trailing slashes
  $controller = trim($controller, '/');

  // extract controller and view
  print_r($controller);
  print_r($view);

