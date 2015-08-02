<?php
$title = 'Dice simulator' ;
$stylesheets = array('style.css') ;
$js_scripts  = array('functions.js') ;
include_once('project.php') ;
include_once($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>
  <script type="text/ecmascript">
<?php
  $color = (isset($_GET['color'])) ? $_GET['color'] : 'white' ;
  $mode  = (isset($_GET['mode' ])) ? $_GET['mode' ] : 'fair'  ;
  $nDice = (isset($_GET['nDice'])) ? $_GET['nDice'] : 4 ;
  echo 'var color = "' , $color , '" ;' , PHP_EOL ;
  echo 'var mode  = "' , $mode  , '" ;' , PHP_EOL ;
  echo 'var nDice = "' , $nDice , '" ;' , PHP_EOL ;
?>
  </script>
  <div class="right">
    <h3>Dice simulator</h3>
		<div class="blurb">
			<p>This page simulates dice rolls.  It was written to annoy people while playing an RPG.</p>
			<p class="center"><input type="submit" onclick="roll()" value="Let's roll!" id="input_roll" /></p>
			<table id="table_dice">
  			  <tbody id="tbody_dice">
  			    <tr id="tr_head_1">
  			      <th class="die">Score</th>
  			    <tr>
  			    <tr id="tr_dice_1" >
  			      <td class="die" id="score">0</td>
  			    <tr>
  			  </tbody>
			</table>
			<form method="GET">
			  <table id="table_settings">
			    <tbody>
			      <tr>
			        <th class="settings">Mode: </th>
     			    <td class="settings">
     			      <select name="mode" id="select_mode">
			            <option value="fair">Normal fair dice</option>
			            <option value="fudge">Fudge dice</option>
			            <option value="xkcd">xkcd dice</option>
			          </select>
			        </td>
			      </tr>
			      <tr>
			        <th class="settings">Number of dice: </th>
			        <td class="settings"><input type="text" name="nDice" value="4" id="input_nDice"/></td>
			      </tr>
			      <tr>
			        <th class="settings">Color mode: </th>
			        <td class="settings">
			          <select name="color" id="select_color">
			          </select>
			        </td>
			      </tr>
			      <tr>
			        <th class="settings">Change </th>
			        <td class="settings"><input type="submit" name="Change settings"/></td>
			      </tr>
			    </tbody>
			  </table>
			</form>
			<p class="center"><a href="http://xkcd.com/221/">xkcd</a></p>
		</div>
	</div>

<?php foot() ; ?>
