This web apps function is to display collections of PS3/4/5 games along with the trophy amount that each game has. All elements are 
linked from JSON files that respond to their stores and then to their controllers, which pass the contents on to the handlebars views
pages. The JSON and view code structure is straightforward and adaptive, allowing for the addition of new games, console generations and
authors at any time, and the code will display them correctly with the use of handlebars helpers. Further functionality might be added with 
assignments that require additional functions.

<div class="ui five statistics" style="margin-top: 1em;">
    <div class="ui five statistics" style="margin-top: 1em;">
    
    {{#with info}}
     
    <div class="statistic">
      <div class="value">
        <i class="music icon"></i> 
      </div>
      <div class="label">
        App Title: <br>
        {{appTitle}}
      </div>
    </div>
    
    <div class="statistic">
      <div class="value">
        <i class="code branch icon"></i> 
      </div>
      <div class="label">
        App Version: <br>
        Version {{version}}
      </div>
    </div> 
     
    <div class="statistic">
      <div class="value">
        <i class="map pin icon"></i> 
      </div>
      <div class="label">
        Made in: <br>
        {{location}}
      </div>
    </div> 
	
    <div class="statistic">
      <div class="value">
        <i class="user icon"></i> 
      </div>
      <div class="label">
        Created by: <br>
        {{creators.0.name}}
      </div>
    </div>
	
    <div class="statistic">
      <div class="value">
        <i class="user plus icon"></i> 
      </div>
      <div class="label">
        With help from: <br>
        {{creators.1.name}}
      </div>
    </div>
    
    {{/with}}
  
  </div> 
</section>

<section class="ui center aligned middle aligned segment">

  <h2>Trophy Tracker App Statistics</h2>

  <h3 class="ui header">
    App Statistics
  </h3>
  <p>
    The trophy tracker app now contains:
  </p>
  {{#with stats}}
  <div class="ui center aligned grid">

    <div class="ui sixteen wide column">

      <div class="ui centered three statistics">
        <div class="ui statistic">
          <div class="value">
            <i class="microphone icon"></i>
          </div>
          <div class="label">
            {{displayNumCollections}} collections
          </div>
        </div>

        <div class="ui red statistic">
          <div class="value">
            <i class="music icon"></i>
          </div>
          <div class="label">
            {{displayNumGames}} games
          </div>
        </div>

        <div class="ui blue statistic">
          <div class="value">
            <i class="balance scale icon"></i>
          </div>
          <div class="label">
            Average games per <br> collection: {{displayAverage}}
          </div>
        </div>
      </div>
    </div>

    <div class="ui sixteen wide column">
      <div class="ui centered two statistics">

        <div class="ui yellow statistic">
          <div class="value">
            <i class="star icon"></i>
          </div>
          <div class="label">
            Highest Rated Collections: {{highest}} stars
            <table>
              {{#each displayFav}}
              <tr>
                <td>{{this}}</td>
              </tr>
              {{/each}}
            </table>
          </div>
        </div>

        <div class="ui green statistic">
          <div class="value">
            <i class="dot circle outline icon"></i>
          </div>
          <div class="label">
            Average Rating: {{displayAvgRating}}
          </div>
        </div>
		
      </div>
    </div>
    
  </div>

  {{/with}}

</section>

//testing testing