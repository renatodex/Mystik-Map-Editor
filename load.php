<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>
<link href="ajaxfileupload.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="load/ajaxfileupload.js"></script>

 <script type="text/javascript">
$(function() {
        $('.uploadnow').live('change', function(){        

           ajaxFileUpload();

});
});
</script>
<style type="text/css">
<!--
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
        top:0 !important; /* -30 for IE */
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
    
.mapform {
font:12px georgia;
width:500px;
background:#F2F2F2;
padding:5px;
margin-bottom:5px;
}
.in {
background: url("css/input-bg.png") repeat-x left top;
color:#292929;
font:12px verdana;
outline:none;
padding:5px;
border: 1px solid #858585;
width:100px;
}
-->
</style>
	<script type="text/javascript" src="mapLoad.js"></script>

    
</head>
<body>

<div id="content;position:absolute;">
    	<h1>Mystik Map Upload</h1>
        
     <div style="float: left;margin-right:15px;margin-bottom:10px;">
		<form name="form" action="" method="POST" enctype="multipart/form-data">
                
<label class="cabinet">Drag-and-Drop .txt file <input id="fileToUpload" type="file" size="45" name="fileToUpload" class="uploadnow" /></label>
		</form> </div> 
        <img id="loading" src="loading.gif" style="display:none;position:relative;top:15px;" />
        <img id="success" src="success.png" style="display:none;position:relative;top:8px;" /> 	
    </div>
    <div style="clear: both;"></div>
<div id="map-loaded" style="display: none;">

<div id="stats-map" style="float: left;margin-right:10px;">
<div id="map-info-div" style="margin-bottom:10px;">

<table id="info-table" style="width:247px;margin-right:10px;float:left;"><tr><th class='top' colspan='2' class='t_info'>Map Information</th></tr>
<tr><tbody class="info_body">
<tr><td class='info_row'>Map Title</td><td><span id="title"></span> (<span class="id-show">Map ID: <span id="curr"></span></span>)</td></tr>
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




</body>
</html>