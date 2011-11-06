<?php $hasGuided = $_COOKIE['guider'];
if ($hasGuided == "") {
    Header("Location: #guider=start");
}
setcookie("guider", "1", time()+2592000);
include "../inc/top.php"; ?>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
    <meta name="keywords" content="jquery, java, script, javascript, java, rpg, 2d, tile, map, editor, online, browser, based, text, mmorpg, mystik rpg, free, MUD, multi, user, dungeon, jtxtrpg, c++, c#" />
    <meta name="description" content="A jQuery 2D tile map editor used to create maps for Mystik RPG." />
    <meta http-equiv="Cache-control" content="public" />
            
	<title>Mystik Map Editor v1.5 - Mystik RPG</title>
    
<link rel="stylesheet" type="text/css" href="growl/css/jquery.gritter.css" />
<link rel="stylesheet" href="css/jquery.tooltip.css" />
<link rel="stylesheet" href="../sexybuttons.css" type="text/css" />
<link rel="stylesheet" href="dnd/client/fileuploader.css" type="text/css" />	
<link rel="stylesheet" href="ajaxfileupload.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="../fancybox/jquery.fancybox-1.3.4.css" media="screen" />
<link rel="stylesheet" href="http://jqueryui.com/themes/base/jquery.ui.all.css" /> 
<link rel="stylesheet" href="opt/guiders-1.1.5.css" type="text/css" />
    
    <script type="text/javascript" src="js/jQuery-1.8.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="load/ajaxfileupload.js"></script>
    <script type="text/javascript" src="growl/js/jquery.gritter.min.js"></script>
    <script type="text/javascript" src="mapEditor.js"></script> 
    <script type="text/javascript">
$(function() {
        $('.uploadnow').live('change', function(){        
           browseMode();
           $.fancybox.close();
});
});
</script>
<script type="text/javascript" src="../fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
<script type="text/javascript" src="../fancybox/jquery.fancybox-1.3.4.pack.js"></script>
<script src="js/jquery.ui.core.js"></script> 
<script src="js/jquery.ui.widget.js"></script> 
<script src="js/jquery.ui.tabs.js"></script>  
<script src="js/jquery.tooltip.js" type="text/javascript"></script>
<script type="text/javascript" src="opt/guiders-1.1.5.js"></script>
   
    
          
<!--[if IE]>
<style type="text/css">
#main,
#inner-wrap,
#wrap {
zoom:1;
}
li a {
    padding: 0px 10px 5px 10px;
    color:#fff;
    text-decoration:none;
    display:block; 
    float:left;  
    background: url(images/menu-split.png) right 1px no-repeat;
    text-shadow:1px 1px 0px #000000;
    font:12px verdana bold;
    line-height:26px;
}
#browser_wrong {
width:100%;
border:2px solid #CF637E;
padding:10px;
color:#6E3D49;
font-size:12px;
font-family:verdana, tahoma, times new roman;
background:#F2C7D1;
display:block;
margin-bottom:10px;
}
    .weapon-map, .monster-map {
        position:absolute !important;
        top:-30px !important; /* -30 for IE */
        left:0 !important;
    }
</style>
<![endif]--> 

<?php include "../inc/main.php"; ?>

<div id="content" style="clear: both;margin-bottom:10px;">
        
        <div id="res"></div>
        </div>
    <div style="clear: both;"></div>
<div id="browser_wrong">It seems you are using Internet Explorer. This map editor will work best in browsers such as <a href="http://google.com/chrome" title="Get Google Chrome.">Google Chrome</a> or <a href="http://firefox.com" title="Get Firefox.">Mozilla Firefox</a>. <br />It is <strong>extremely recommended</strong> you change browsers.<br /><br />To make the pop-up boxes work, you have to disable your DivX plugin in Internet Explorer.</div>    
<input type="text" value="" style="display:none;"  id="fileLoad" />
<div id="map" style="float: left;width:512px;">
<?php
// START MAP
for ($i = 0; $i <= 10; $i++) {
for ($xi = 0; $xi <= 15; $xi++) {
    
    echo "<a href='#' id='a-".$i."x".$xi."' class='tile_map'><img id='".$i."x".$xi."' style='z-index:1;width:32px;height:32px;'  name='343' title='(X: ".$xi.", Y: ".$i.")' class='maptile'  src='line_tile/t343.png' /></a>";
}
 echo "<br />";
}
// END MAP
?>


<div style="float: left;margin-bottom:10px;">
<br />
<div class="mapform" id="tools">
<div id="currPosition">(X: <span id="currX">0</span>, Y: <span id="currY">0</span>)</div>
<a href="#" type="reset" title="Tool: Draw one tile per click." id="tile" class="sexybutton sexysimple sexygreen sexylarge">Brush</a>
<a href="#" type="reset" title="Tool: Draw straight lines." id="line_tool" class="sexybutton sexysimple sexyred sexylarge">Line Tool</a>
<a href="#" type="reset" title="Tool: Draw filled-in squares/rectangles." id="rect" class="sexybutton sexysimple sexyred sexylarge">Rectangle</a>
<a href="#inline1" type="reset" title="Tool: Select tile from game map as the selector." id="tile_dropper" class="sexybutton sexysimple sexyred sexylarge">Tile Dropper</a>

</div>
<div class="mapform"><div style="float: right;text-align:right;">[<a id="credit_due" href="#inline8">where credit is due</a>]<br />[<a href="#" onclick="guiders.show('start');">show guided tour</a>]</div>
Map Title: <input type="text" class="in" id="map_title" value="" title="a-z & A-Z ONLY." /></div>

<div class="mapform">

map id: <input type="text" class="in" id="map_id" style="width: 30px;margin-right:5px;" title="numbers only -- DO NOT PUT ZERO" value="0" />
left id: <input type="text" class="in" id="left_id" style="width: 30px;margin-right:5px;" title="numbers only -- must refer to a map id" value="0" />
right id: <input type="text" class="in" id="right_id" style="width: 30px;margin-right:5px;" title="numbers only -- must refer to a map id" value="0" />
up id: <input type="text" class="in" id="up_id" style="width: 30px;;margin-right:5px;" title="numbers only -- must refer to a map id" value="0" />
down id: <input type="text" class="in" id="down_id" style="width: 30px;" title="numbers only -- must refer to a map id" value="0" />

</div>
</div><div style="clear: both;"></div>

<div style="margin-bottom:5px;" id="tools_two">
<a href="#" type="reset" id="create" class="sexybutton sexysimple sexyred sexylarge">Create Map</a>
<a href="#inline6" type="reset" id="load" class="sexybutton sexysimple sexyorange sexylarge">Load Map</a>
<a href="#inline7" type="reset" id="analyze" class="sexybutton sexysimple sexyblue sexylarge">Analyze Map</a>
<a href="#" type="reset" id="clearmap" class="sexybutton sexysimple sexyteal sexylarge">Clear Map</a>
<!--<a href="#inline2" type="reset" id="weapontest" class="sexybutton sexysimple sexyorange sexylarge">List Items</a>
<a href="#inline4" type="reset" id="entrancetest" class="sexybutton sexysimple sexyblue sexylarge">List Entrances</a> -->
</div>
<div style="clear: both;"></div>
</div>
<div style="float: left;margin-left:10px;">

<div style="width: 338px;height:490px;" id="tabs">
	<ul>
    	<li><a href="#tabs-1">Tiles</a></li>
		<li><a href="#tabs-2">Monsters</a></li>
		<li><a href="#tabs-3">Items</a></li>
	</ul>
	<div id="tabs-1">
	<div id="tile-div" style="height: 440px;width:300px;overflow:auto;">
<?php
// TILE LIST
for ($i = 0; $i <= 522; $i++) {
    echo "<a id='".$i."' title='ID: ".$i."/522' href='#' name='item' class='tilelink'><img id='item-".$i."' style='background:#666;width:32px;height:32px;' class='item' src='line_tile/t".$i.".png' /></a>";
}

?>
</div>
     </div>
	<div id="tabs-2">
    	 <div id="monster-div" style="height: 170px;overflow:auto;">
<?php

$monsterName = array("Goblin","Arachnid","Bald Eagle","Orc Warrior","Water Beast","Sand Drake","Human Mage","Fiery Salamandar","Skeleton Warrior","Human Warrior","Captain","Taurus","Maggot","Catapillar","Wasp","Human Knight","Basilisk","Red Dragon");
$monsterLevel = array("4","1","9","11","12","16","18","14","15","19","22","23","3","2","1","21","25","30");
    

// MONSTER LIST
for ($i = 0; $i <= 17; $i++) {
    echo "<a id='".$i."' href='#' name='monster' title='".$monsterName[$i]." - Lvl ".$monsterLevel[$i]."' class='monsterlink'><img style='width:32px;height:32px;' id='monster-".$i."' class='monster' src='crop.php?f=monster.gif&y=0&x=".$i."' /></a>";
    //echo "<a id='".$i."' href='#' name='monster' title='".$monsterName[$i]." - Lvl ".$monsterLevel[$i]."' class='monsterlink'><img id='monster-".$i."' class='monster' src='monster/m".$i.".gif' /></a>";
}

?>
<a href="#" title="Delete monsters from map" class="delete" id="delete"><img src="delete.png" class="delete-monster" /></a>
</div>

    
    </div>
    	<div id="tabs-3">
	<div id="weapon-div" style="height:150px;overflow:auto;">
<?php
// WEAPON LIST
for ($i = 0; $i <= 6; $i++) {
    $ekid = $i+1;
    echo "<a id='".$i."' href='#' name='weapon' class='weaponlink'><img title='".$ekid."' id='weapon-".$i."' style='background:#D6D6D6;width:32px;height:32px;' class='weapon' src='crop.php?f=items.gif&y=0&x=".$i."' /></a>";
    //echo "<a id='".$i."' href='#' name='weapon' class='weaponlink'><img title='".$ekid."' id='weapon-".$i."' style='background:#D6D6D6'; class='weapon' src='weapon/w".$i.".gif' /></a>";
}

?>
<a href="#" title="Delete weapons from map" class="delete" id="delete"><img src="delete.png" class="delete-weapon" /></a>
</div></div>
</div>
<div class="tile_status" style="float: left;">
<img style="position:relative;top:15px;margin-right:5px;width:32px;height:32px;" id="current_tile" title="Current tile" class="none" src="line_tile/t0.png" /> 
<button type="reset" id="tile_status" style="margin: 0;" class="sexybutton sexysimple sexygreen sexylarge">Walkable</button>
</div>
</div>


       
	<div style="display: none;">
		<div id="inline1" style="width:500px;height:600px;overflow:auto;">
      <div id="stats" style="font-size:14px;font-family:lucida console, verdana, tahoma;"></div>
   
		
        </div>
        
		<div id="inline2" style="width:500px;height:600px;overflow:auto;">
      <div id="stats_weapon" style="font-size:14px;font-family:lucida console, verdana, tahoma;"></div>
        </div>
        
       <div class="credits" id="inline8" style="width:500px;height:600px;overflow:auto;">
     <h1>Credits</h1>
     <p>I don't take credit for <em>all</em> of Mystik Map Editor. I had help with thanks to some plugins and content that made this tile-map editor available to you!</p>
     <br />   
     <br /><a href="http://fancybox.net">Fancybox</a> - Providing the glorious pop-ups you see.<br />
     <br /><a href="https://github.com/jeff-optimizely/Guiders-JS">Guided Tours</a> - The guided tour was nice, wasn't it?<br />
     <br /><a href="http://code.google.com/p/sexybuttons/">Sexy CSS Buttons</a> - Giving buttons the sleekest design since 2010.<br />
     <br /><a href="http://www.phpletter.com/Our-Projects/AjaxFileUpload/">AJAX File Upload</a> - Instant upload via drag-and-drop. Now that's niiiice.<br />
     <br /><a href="http://boedesign.com/blog/2009/07/11/growl-for-jquery-gritter/">Growl Notifications</a> - Sleek and unobstructive notification boxes.<br />
     <br /><a href="http://blog.twg.ca/2010/11/retina-display-icon-set/twg_retina_icons/">Retina Icons</a> - Used coupled with the side notifications.<br />
        </div>
        
       <div id="inline5" style="width:500px;height:600px;overflow:auto;">
      <div id="stat_tele" style="font-size:14px;font-family:lucida console, verdana, tahoma;"></div>
        </div>
        
        <div id="inline7" style="width:600px;height:600px;overflow:auto;">
        <h1>Map Analyzer</h1>
       
       <div id="map-loaded">

<div id="stats-map" style="float: left;margin-right:10px;">
<div id="map-info-div" style="margin-bottom:10px;">

<table id="info-table" style="width:247px;margin-right:10px;float:left;"><tr><th class='top' colspan='2' class='t_info'>Map Information</th></tr>
<tr><tbody class="info_body">
<tr><td class='info_row'>Map Title</td><td><span id="title_row"></span></td></tr>
<tr><td class='info_row'>Other IDs</td><td><span class="id-show"><u>N</u>: <span id="upID">0</span></span> | <span class="id-show"><u>E</u>: <span id="rightID">0</span></span> | 
<span class="id-show"><u>S</u>: <span id="downID">0</span></span> | <span title="left id" class="id-show"><u>W</u>: <span id="leftID">0</span></span></td></tr>
<tr><td class='info_row'>Map ID:</td><td><span id="curr"></span></td></tr>
<tr><td style="font-weight: bold;text-align:center;" colspan="2">Extra column! :D</td></tr>
</tbody></tr></table>

<table id="stats-table" style="width:257px;float:left;"><tr><th class='top' colspan='2' class='t_stats'>Map Statistics</th></tr>
<tr><tbody class="stats_body">
<tr><td class='stats_row'>Number of monsters</td><td class="stats-td"><span id="numb_monsters">0</span></td></tr>
<tr><td class='stats_row'>Number of items</td><td class="stats-td"><span id="numb_items">0</span></td></tr>
<tr><td class='stats_row'>Number of entrances</td><td class="stats-td"><span id="numb_ent">0</span></td></tr>
<tr><td class='stats_row'>Number of teleports</td><td class="stats-td"><span id="numb_tele">0</span></td></tr>
</tbody></tr></table>
</div>
<div style="clear: both;"></div>
<div  style="float: left;">
  <div id="monsters">
<table id='monsters-table'>
<tr><th class='top' colspan='5' class='t_mon'>Monsters</th></tr>
<tr>

<th class='t_mon'></th>
<th>ID</th>
<th class='t_numb'>X</th>
<th class='t_numb'>Y</th>
</tr>
<tbody class="mon_body">
<tr class="monster-tr" id="nothing_tr"><td class='nothing' colspan='4'>Nothing found.</td></tr>
</tbody>
</table>
</div>
</div>
<div  style="float: left;">
<div style="margin-top: 10px;" id='items'>
<table id="items-table">
<tr><th class='top' colspan='5' class='t_mon'>Items</th></tr>
<tr>
<th class='t_item'></th>
<th>ID</th>
<th class='i_numb'>X</th>
<th class='i_numb'>Y</th>
</tr>
<tbody class="item_body">
<tr class="item-tr" id="nothing_tr"><td class='nothing' colspan='4'>Nothing found.</td></tr>
</tbody>
</table>
</div>
</div>
</div>
       
    </div>

</div>        
        <div id="inline6" style="width:400px;height:400px;overflow:hidden;">
        
        <div id="file-uploader-demo1" style="font: 12px verdana;font-weight:bold">	
		<noscript>			
			<p>Please enable JavaScript to use file uploader.</p>
			<!-- or put a simple form for upload here -->
		</noscript> 
        <img id="loading" src="loading.gif" style="display:none;position:relative;top:15px;" />	
                
	</div>
    
    
    <!--<br /><br /><br /><span style="font: 12px tahoma;">(Use this one for now, while I fix the drag-n-drop. Thanks.)</span><br />
    <input id="fileToUpload" type="file" size="45" name="fileToUpload" class="uploadnow" />-->
    </div>
        
		<div id="inline3" class="output_body" style="width:600px;height:600px;overflow:auto;">
        <h1>Mystik Map JSON</h1>
        <span>Click on textarea to select.</span>
        <textarea id="txt_out"></textarea>
        
      <!--<div id="output" style="font-size:12px;font-family:'Lucida Console', verdana, tahoma;"></div>-->
      <span><strong>Tip:</strong> For extra help, validate the JSON above with <a target="_blank" title="Opens in a new tab." href="http://jsonformatter.curiousconcept.com/">JSON Formatter</a>.</span>
        </div>
        
		<div id="inline4" style="width:500px;height:600px;overflow:auto;">
      <div id="entrance_stat" style="font-size:14px;font-family:'Lucida Console', verdana, tahoma;"></div>
        </div>
	</div>

<div style="clear: both;"></div>

    <script type="text/javascript" src="tour.js"></script>

<script src="dnd/client/fileuploader.js" type="text/javascript"></script>
    <script>        
        function createUploader(){            
            var uploader = new qq.FileUploader({
                element: document.getElementById('file-uploader-demo1'),
                action: 'up.php',
                allowedExtensions: ['txt'], 
                multiple: false,
                onComplete: function(data){ 
                    var mapToLoad = $("#fileLoad").val();   
                    $('#create').attr("class", "sexybutton sexysimple sexygreen sexylarge"); 
                    $('#create').attr("href", "#inline3");             
                    ajaxFileUpload(mapToLoad);
                    },
                debug: true
            });           
        }
        
        // in your app create uploader as soon as the DOM is ready
        // don't wait for the window to load  
        window.onload = createUploader;     
    </script>

<?php include "../inc/footer.php"; ?>