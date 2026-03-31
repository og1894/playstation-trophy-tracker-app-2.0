

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


// from dashboard controller where sorting functionality for rating remeoved
      {{#if rating}}
        <p>
          <span 
            class="ui yellow disabled rating" 
            data-icon="star" 
            data-rating="{{rating}}" 
            data-max-rating="5">
          </span>
          
          <span style="color: grey; font-size: 90%; font-style: italic">
              {{highlightPopular rating}}
          </span>
        </p>
      {{/if}}

      <option value="rating" {{#if ratingSelected}}selected{{/if}}>Rating</option>

       if (sortField === "rating") {
          return (a.rating - b.rating) * order;
        }

      ratingSelected: request.query.sort === "rating",

      <div class="ui sixteen wide column">
      <div class="ui centered three statistics">

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

    displayAvgRating: avgRating.toFixed(2),
    highest: maxRating,
    displayFav: favTitles,

    const totalRating = collections.reduce((total, collection) => total + parseInt(collection.rating || 0), 0);
    const avgRating = numCollections > 0 ? totalRating / numCollections : 0;
    const maxRating = numCollections > 0 ? Math.max(...collections.map(collection => parseInt(collection.rating || 0))) : 0;
    const maxRated = collections.filter(collection => parseInt(collection.rating || 0) === maxRating);
    const favTitles = maxRated.map(item => item.title);

    {{#if rating}}
      <div class="extra content">
        <div class="ui yellow disabled rating" data-icon="star" data-rating="{{rating}}" data-max-rating="5"></div>
      </div>
    {{/if}}