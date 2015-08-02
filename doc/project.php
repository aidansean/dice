<?php
include_once($_SERVER['FILE_PREFIX']."/project_list/project_object.php") ;
$github_uri   = "https://github.com/aidansean/dice" ;
$blogpost_uri = "http://aidansean.com/projects/?tag=dice" ;
$project = new project_object("dice", "Dice simulator", "https://github.com/aidansean/dice", "http://aidansean.com/projects/?tag=dice", "dice/images/project.jpg", "dice/images/project_bw.jpg", "This is another somewhat frivolous script I wrote when playing an RPG game where we did not have enough sets of dice.  It simulates dice rolls with various modes.", "Tool,Frivolous", "CSS,HTML,JavaScript") ;
?>