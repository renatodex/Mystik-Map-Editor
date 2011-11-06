<?php include "../inc/top.php"; ?>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
<meta name="keywords" content="jquery, java, script, javascript, java, rpg, 2d, tile, map, editor, online, browser, based, text, mmorpg, mystik rpg, free, MUD, multi, user, dungeon, jtxtrpg, c++, c#" />
    <meta name="description" content="A map editor, created using PHP, jQuery, and JavaScript, that is used for Mystik RPG. " />
	<title>Mystik RPG Tile Map Analyzer</title>
    
    <script type="text/javascript" src="js/jQuery-1.8.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    
<link href="ajaxfileupload.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="load/ajaxfileupload.js"></script>

        <script type="text/javascript" src="mapLoad2.js"></script>
        <link href="dnd/client/fileuploader.css" rel="stylesheet" type="text/css" />	

 <script type="text/javascript">
$(function() {
        $('.uploadnow').live('change', function(){        
           browseMode();
});
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
       
        <link rel="stylesheet" href="css/jquery.tooltip.css" />

<script src="js/jquery.tooltip.js" type="text/javascript"></script>

        
        <link rel="stylesheet" href="http://jqueryui.com/themes/base/jquery.ui.all.css" /> 
        	<script src="js/jquery.ui.core.js"></script> 
	<script src="js/jquery.ui.widget.js"></script> 
         <script src="js/jquery.ui.tabs.js"></script>  
        <link rel="stylesheet" href="http://jqueryui.com/demos/demos.css" />
       	<script type="text/javascript" src="../fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
	<script type="text/javascript" src="../fancybox/jquery.fancybox-1.3.4.pack.js"></script>
	<link rel="stylesheet" type="text/css" href="../fancybox/jquery.fancybox-1.3.4.css" media="screen" />
    
    <link rel="stylesheet" href="../sexybuttons.css" type="text/css" />
              
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
</style>
<![endif]--> 



<?php include "../inc/main.php"; ?>




<div id="content" style="clear: both;margin-bottom:10px;">


    	<h1>Mystik Map Analyzer</h1>
        
        <input type="text" value="" id="fileLoad" />
        
        <div id="res"></div>
        <div id="file-uploader-demo1">	
		<noscript>			
			<p>Please enable JavaScript to use file uploader.</p>
			<!-- or put a simple form for upload here -->
		</noscript> 
        <img id="loading" src="loading.gif" style="display:none;position:relative;top:15px;" />	        
	</div>
    
     <div style="float: left;margin-right:15px;margin-bottom:10px;display:none;">
		<form name="form" action="" method="POST" enctype="multipart/form-data" style="display: none;">

<input id="fileToUpload" type="file" size="45" name="fileToUpload" class="uploadnow" />
</form></div> 

    </div>
    
    <div style="clear: both;"></div>
    
<div id="map-loaded" style="display: none;">

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
<tr id="nothing_tr">
<td class='nothing' colspan='4'>Nothing found.</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

</div>

<div style="clear: both;"></div>

    <script src="dnd/client/fileuploader.js" type="text/javascript"></script>
    <script>        
        function createUploader(){            
            var uploader = new qq.FileUploader({
                element: document.getElementById('file-uploader-demo1'),
                action: 'quick.php',
                allowedExtensions: ['txt'], 
                multiple: false,
                onComplete: function(data){ 
                    var mapToLoad = $("#fileLoad").val();                    
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