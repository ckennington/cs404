<?php
// All requests go through me!

// make it easier to require php classes
set_include_path("/Users/crk/projects/cs404/src/www/mvc");

// get request
$uri = $_SERVER['REQUEST_URI'];

// get list of static routes
$routes = json_decode(file_get_contents("routes.json"));

// compare list to request
foreach ($routes as $route => $components) {
  if (strtolower($uri) == $route) {

    // route found! Require MVC components
    foreach ($components as $component) {
      foreach ($component as $type => $file) {
        // require compenent class file
        require_once($file);

        // convert filename to classname
        $class = str_replace(".php", "", $file);
        $class = str_replace("/", "_", $class);

        // instantiate component
        $$type = new $class;
      }
    }

    // wire together MVC components
    $controller->setModel($model);

    if (isset($view)) {
      $view->setModel($model);
    } else {
      // no view set, must be a post
      $controller->post();
      header("Location: " . $controller->getRedirect());
    }

    // render the page
    $view->render();
    exit;
  }
}

// 404, route doesn't exist
@header("HTTP/1.1 404 Not Found");
readfile(dirname(__FILE__) . "/errors/404.html");
