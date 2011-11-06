<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />


<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>

       <script type="text/javascript">
$.getJSON("main.txt", function(data) {


    
    //Get Monsters
    $("#title_row").text(data.title);
    
    
    var getIDs = "ids";
        $.each(data[getIDs], function(i,getIDs){
            $("#curr").text(getIDs.currentID);
            $("#leftID").text(getIDs.leftMap);
            $("#rightID").text(getIDs.rightMap);
            $("#downID").text(getIDs.downMap);
            $("#upID").text(getIDs.upMap);
            });
            
    
    //Get Map
    var getMap = "map";
    var now = 0;
    $(".map_body").text("");
        $.each(data[getMap], function(i,getMap){
            
        $("#nothing_tr").remove();
        $(".nothing").remove();
        $(".map_body").append("<div id='map'></div>");
            //$("#other").append(getMap[now] + " {} <br />");
            for (var mapLoad = 0; mapLoad <= 15; mapLoad++) {

   $("#map").append("<a href='#' id='a-"+now+"x"+mapLoad+"' class='tile_map'><img title='(X: " +mapLoad + ", Y: " + now + ") | ID: "+getMap[mapLoad]+"' src='line_tile/t" + getMap[mapLoad]+ ".png' /></a>");
 if ((mapLoad/15) == 1) { 
    now = now + 1;
    $("#map").append("<div style='clear:both;'></div>");
     }

    }

    });
    
    // Get monsters            
    var getMonsters = "monsters";
    var monsterCount = 0;
    $(".mon_body").text("");
        $.each(data[getMonsters], function(i,getMonsters){
         monsterCount++;
        $("#nothing_tr").remove();
        $(".nothing").remove();
        
        $('#a-'+getMonsters.y+"x"+getMonsters.x).append('<img title="(X: ' + getMonsters.x + ', Y: ' + getMonsters.y + ') | ID: ' + getMonsters.id + '" style="z-index:2" id="'+getMonsters.y+'x'+getMonsters.x+'" name="'+(parseInt(getMonsters.id-1))+'" class="monster-map" src="crop.php?f=monster.gif&y=0&x='+(parseInt(getMonsters.id-1))+'" />');
        $(".mon_body").append("<tr><td class='mon_row'><img style='width:32px;height:32px' src='crop.php?f=monster.gif&y=0&x="+(parseInt(getMonsters.id-1))+"' /></td><td class='numbers'>"+ getMonsters.id +"</td><td class='numbers'>"+ getMonsters.x +"</td><td class='numbers'>"+ getMonsters.y +"</td></tr>");   
      
    });
    
    $("#numb_monsters").text(monsterCount);
    
    //Get Items
    var getItems = "items";
    var itemCount = 0;
    $(".item_body").text("");
        $.each(data[getItems], function(i,getItems){
           itemCount++;
        $("#nothing_tr").remove();
        $(".nothing").remove();

$('#a-'+getItems.y+"x"+getItems.x).append('<img title="(X: ' + getItems.x + ', Y: ' + getItems.y + ') | ID: ' + getItems.id + '" style="z-index:2" id="'+getItems.y+'x'+getItems.x+'" name="'+(parseInt(getItems.id-1))+'" class="weapon-map" src="crop.php?f=items.gif&y=0&x='+(parseInt(getItems.id-1))+'" />');
$(".item_body").append("<tr><td style='text-align:center;' class='item_row'><img style='width:32px;height:32px' src='crop.php?f=items.gif&y=0&x="+(parseInt(getItems.id)-1)+"' /></td><td class='numbers'>"+ getItems.id +"</td><td class='numbers'>"+ getItems.x +"</td><td class='numbers'>"+ getItems.y +"</td></tr>");   
      
    });
    $("#numb_items").text(itemCount);
    

    $("#map-loaded").css("display","inline");
    $("#success").css("display","inline");

					
				});
</script>

<style>
    .tilelink img {
        padding:3px;
        background:#D6D6D6;
        margin-right:5px;
        margin-bottom:5px;
    }
    .monsterlink img {
        padding:3px;
        background:#C1F090;
        margin-right:5px;
        margin-bottom:5px;
    }
    .tile_map {
        position:relative;
    }
    .weaponlink img, #delete img {
        padding:3px;
        background:#E39F9F;
        margin-right:5px;
        margin-bottom:5px;
    }
    .weapon-map, .monster-map {
        position:absolute !important;
        top:-20px !important; /* -30 for IE */
        left:0 !important;
    }
    #current_tile {
        padding:3px;
        background:#D6D6D6;
    }
    #selected-tile {
        background:#D6D6D6;
    }
    button {
        padding:5px;
        font-weight:bold;
    }
    #map img {
        border:0;
    }
    #warn {
        margin-top:5px;
        width:500px;
        font:12px verdana;
    }      
    
    </style>

	<title>Untitled 2</title>
</head>

<body>



    <div style="clear: both;"></div>
<div id="map-loaded">

<div id="stats-map" style="float: left;margin-right:10px;">
<div id="map-info-div" style="margin-bottom:10px;">

<table id="info-table" style="width:247px;margin-right:10px;float:left;"><tr><th class='top' colspan='2' class='t_info'>Map Information</th></tr>
<tr><tbody class="info_body">
<tr><td class='info_row'>Map Title</td><td><span id="title_row"></span> (<span class="id-show">Map ID: <span id="curr"></span></span>)</td></tr>
<tr><td class='info_row'>Other IDs</td><td><span class="id-show"><u>N</u>: <span id="upID"></span></span> | <span class="id-show"><u>E</u>: <span id="rightID"></span></span> | 
<span class="id-show"><u>S</u>: <span id="downID"></span></span> | <span title="left id" class="id-show"><u>W</u>: <span id="leftID"></span></span></td></tr>
<tr><td class='info_row'>Map URL</td><td><span id="mapurl"></span></td></tr>
</tbody></tr></table>

<table id="stats-table" style="width:257px;float:left;"><tr><th class='top' colspan='2' class='t_stats'>Map Statistics</th></tr>
<tr><tbody class="stats_body">
<tr><td class='stats_row'>Number of monsters</td><td><span id="numb_monsters"></span></td></tr>
<tr><td class='stats_row'>Number of items</td><td><span id="numb_items"></span></td></tr>
<tr><td class='stats_row'>.txt file size</td><td><span id="mapsize"></span></td></tr>
</tbody></tr></table>
</div>
<div style="clear: both;"></div>

<div id="the-map" style="float:left;margin-top:10px;">
<table id="map-table"><tr><th class='top' colspan='1' class='t_map'>The Map</th></tr>
<tr><tbody class="map_body">
<tr id="nothing_tr">
<td class='nothing' colspan='4'>Nothing found.</td>
</tr>
</tbody></tr></table>
</div>
</div>
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
<tr id="nothing_tr">
<td class='nothing' colspan='4'>Nothing found.</td>
</tr>
</tbody>
</table>
</div>
<div style="clear: both;"></div>

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
<tr id="nothing_tr">
<td class='nothing' colspan='4'>Nothing found.</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div style="clear: both;"></div>


</body>
</html>