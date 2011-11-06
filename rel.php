<?php

define("MAP_EDITOR_VERSION", "1.5");
define("MAP_EDITOR_DATE", date("M j, Y", mktime(0, 0, 0, 10, 28, 2011)));
define("MAP_EDITOR_RELEASE", " v". MAP_EDITOR_VERSION . ", " . MAP_EDITOR_DATE);

define("MYSTIK_RPG_VERSION", "2.1.3");
define("MYSTIK_RPG_DATE", date("M j, Y", mktime(0, 0, 0, 05, 27, 2011)));
define("MYSTIK_RPG_RELEASE", " v". MYSTIK_RPG_VERSION . ", " . MYSTIK_RPG_DATE);
echo MAP_EDITOR_RELEASE;
echo MYSTIK_RPG_RELEASE;

?>