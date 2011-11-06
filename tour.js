    /**
     * Guiders are created with guiders.createGuider({settings}).
     *
     * You can show a guider with the .show() method immediately
     * after creating it, or with guiders.show(id) and the guider's id.
     *
     * guiders.next() will advance to the next guider, and
     * guiders.hideAll() will hide all guiders.
     *
     * By default, a button named "Next" will have guiders.next as
     * its onclick handler.  A button named "Close" will have
     * its onclick handler set to guiders.hideAll.  onclick handlers
     * can be customized too.
     */
     
    guiders.createGuider({
      buttons: [{name: "No, thanks.", onclick: guiders.hideAll},{name: "Let's do this!", onclick: guiders.next}],
      description: "A few things have changed and new features have been added in. You can press 'next' to continue with the tour or exit.<br /><br />This tour will take less than approximately 3 minutes.",
      id: "start",
      next: "second",
      overlay: true,
      title: "Welcome to Mystik Map Editor v1.5!"
    });
    /**
     * .show() means that this guider will get shown immediately after creation.
     *
     * Using .show() is one way of starting your guiders.
     * 
     * Another way is by directing the user to a special URL with the guider id in
     * its hash tag, such as:
     *
     * http://www.local.com/README.html#guider=first
     *
     * This makes it easy to only show guiders for new users.  It can also be used
     * to route people among multiple web pages and still keep showing the guiders.
     */
    
    guiders.createGuider({
      attachTo: "#tile",
      buttons: [{name: "Close"},
                {name: "Next"}],
      description: "The brush tool is used to place one tile at a time. It is also used only for placing items, monsters, entrances, and teleports.",
      id: "second",                  
      next: "third",
      overlay: true, 
      highlight: true,
      xButton: true,            
      position: 12,
      width: 300,
      title: "Brush Tool"
    });
               
    guiders.createGuider({
      attachTo: "#line_tool",
      buttons: [{name: "Close"},
                {name: "Next"}],
      description: "Draw straight lines in the 4 ways available. Ranging from north, east, west, and south. <div style='width:100%;text-align:center;margin:10px 0;'><img alt=\"Tool\" src=\"opt/line_tool.gif\" style=\"width:320px;height:100px;border: 1px solid #333;\" /></div>",
      id: "third",
      next: "fourth",
      overlay: true,
      position: 12,
      highlight: true,
      xButton: true,
      title: "Line Tool",
      width: 340
    });
               
    guiders.createGuider({
      attachTo: "#rect",
      buttons: [{name: "Close"},
                {name: "Next"}],
      description: "Draw a filled-in rectangle with ease. <div style='width:100%;text-align:center;margin:10px 0;'><img alt=\"Tool\" src=\"opt/rect-tool.gif\" style=\"width:320px;height:100px;border: 1px solid #333;\" /></div>",
      id: "fourth",
      next: "fifth",
      overlay: true,
      position: 12,
      highlight: true,
      xButton: true,
      title: "Rectangle Tool",
      width: 340
    });
    
    guiders.createGuider({
      attachTo: "#tile_dropper",
      buttons: [{name: "Close"},
                {name: "Next"}],
      description: "<div style='float:left;margin-right:10px;'><img alt=\"Tool\" src=\"opt/tile-dropper.gif\" style=\"width:128px;height:128px;border: 1px solid #333;\" /></div>Quickly switch to using that tile on the map again by clicking it with the tile dropper, instead of wasting time looking for them in the list!",
      id: "fifth",
      next: "sixth",
      overlay: true,
      position: 12,
      highlight: true,
      xButton: true,
      title: "Tile Dropper Tool",
      width: 320
    });
    
    guiders.createGuider({
      attachTo: "#currPosition",
      buttons: [{name: "Close"},
                {name: "Next"}],
      description: "The X and Y listed here are where your cursor is currently hovering over in the board canvas.",
      id: "sixth",
      next: "seventh",
      overlay: true,
      position: 12,
      highlight: true,
      xButton: true,
      title: "X and Y Mouse Position",
      width: 320
    });
    
    guiders.createGuider({
      attachTo: "#create",
      buttons: [{name: "Close"},
                {name: "Next"}],
      description: "After you are finally done making your glorious map, you press this button to see the map structured in JSON. With this, copy, paste, and save as a text document and put it in your maps folder.<div style='width:100%;text-align:center;margin:10px 0;'><img alt=\"JSON Output\" src=\"opt/json-file.png\" style=\"width:336px;height:131px;border: 1px solid #333;\" /></div>",
      id: "seventh",
      next: "eigth",
      overlay: true,
      position: 12,
      highlight: true,
      xButton: true,
      title: "Mystik Map in JSON",
      width: 350
    });
    
      guiders.createGuider({
      attachTo: "#load",
      buttons: [{name: "Close"},
                {name: "Next"}],
      description: "Drag-and-drop your text file from your desktop (or click the button) and the map will instantaneously load into the map editor. How cool is that? <div style='width:100%;text-align:center;margin:10px 0;'><img alt=\"JSON Output\" src=\"opt/instant-upload.gif\" style=\"width:420px;height:200px;border: 1px solid #333;\" /></div>",
      id: "eigth",
      next: "ninth",
      overlay: true,
      position: 12,
      highlight: true,
      xButton: true,
      title: "Instant Map Upload",
      width: 440
    });
    
    guiders.createGuider({
      attachTo: "#analyze",
      buttons: [{name: "Close"},
                {name: "Next"}],
      description: "<div style='float:left;margin-right:10px;'><img alt=\"Tool\" src=\"opt/map-analyzer.png\" style=\"width:155px;height:129px;border: 1px solid #333;\" /></div>This tool analyzes your map in realtime. It gives you the basic information such as neat statistics and list each monster and item on the map with their X's, Y's, and ID's.",
      id: "ninth",
      next: "tenth",
      overlay: true,
      position: 12,
      highlight: true,
      xButton: true,
      title: "Map Analyzer",
      width: 350
    });
    
    guiders.createGuider({
      attachTo: "#clearmap",
      buttons: [{name: "Close"},
                {name: "Next"}],
      description: "When you're ready for your next map or just want to start over, click this button to clear the map.",
      id: "tenth",
      next: "eleventh",
      overlay: true,
      position: 12,
      highlight: true,
      xButton: true,
      title: "Clear Map Utility",
      width: 250
    });
    
    guiders.createGuider({
      attachTo: "#tile_status",
      buttons: [{name: "Finished", onclick: guiders.hideAll}],
      description: "Blocked tiles indiciate that these tiles cannot be walked by the player in-game or have monsters or items placed ontop of them.",
      id: "eleventh",
      next: "twelfth",
      overlay: true,
      position: 12,
      highlight: true,
      xButton: true,
      title: "Tile Status",
      width: 250
    });
    
    