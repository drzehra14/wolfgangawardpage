import React from "react";




  
function Filter() {
  return (
<div style={{background:"#f8f8f8",paddingtop:"32px"}}>
<div class="wrapper">
<div class="flexbox">
<div className="Filter">

<div class="filter-controls">
<label>FILTER</label>
<button >CLEAR FILTERS</button>
</div>

<div class="category">
<button class="button-toggle" ><span>By Awards Ceremony</span>
<span id="ceremonies-icon" class="--closed">›</span></button>
<div id="ceremonies" class="hidden">
<div class="pretty p-default p-curve">
<input type="checkbox" id="European Search Awards" ></input>
<div class="state">
<label for="European Search Awards">European Search Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="European Content Awards" ></input>
<div class="state">
<label for="European Content Awards">European Content Awards</label>
</div>
</div>

<div class="pretty p-default p-curve">
<input type="checkbox" id="Digital Media Awards" ></input>
<div class="state">
<label for="Digital Media Awards">Digital Media Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="Content Marketing Institute Awards" ></input>
<div class="state">
<label for="Content Marketing Institute Awards">Content Marketing Institute Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="Irish Content Marketing Awards" ></input>
<div class="state">
<label for="Irish Content Marketing Awards">Irish Content Marketing Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="Nordic Search Awards" ></input>
<div class="state">
<label for="Nordic Search Awards">Nordic Search Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="The Drum Search Awards" ></input>
<div class="state">
<label for="The Drum Search Awards">The Drum Search Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="Search Engine Land Awards" ></input>
<div class="state">
<label for="Search Engine Land Awards">Search Engine Land Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="YouTube Work Awards" ></input>
<div class="state">
<label for="YouTube Work Awards">YouTube Work Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="Great Place To Work Awards" ></input>
<div class="state">
<label for="Great Place To Work Awards">Great Place To Work Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="Content Marketing Awards (Global)" ></input>
<div class="state">
<label for="Content Marketing Awards (Global)">Content Marketing Awards (Global)</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="Google Premier Partner Awards" ></input>
<div class="state">
<label for="Google Premier Partner Awards">Google Premier Partner Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="The Spider Awards" ></input>
<div class="state">
<label for="The Spider Awards">The Spider Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="The Drum Social Buzz Awards" ></input>
<div class="state">
<label for="The Drum Social Buzz Awards">The Drum Social Buzz Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="The US Search Engine Land Awards" ></input>
<div class="state">
<label for="The US Search Engine Land Awards">The US Search Engine Land Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="The UK Drum Search Awards" ></input>
<div class="state">
<label for="The UK Drum Search Awards">The UK Drum Search Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="The US Landy Awards" ></input>
<div class="state">
<label for="The US Landy Awards">The US Landy Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="Retail Excellence Awards" ></input>
<div class="state">
<label for="Retail Excellence Awards">Retail Excellence Awards</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="V by Very Blog Awards" ></input>
<div class="state">
<label for="V by Very Blog Awards">V by Very Blog Awards</label>
</div>
</div>
</div>
</div>
<div class="category">
<button class="button-toggle" onclick="toggleCategoryList('#years')"><span>By Year</span>
<span id="years-icon" class="--closed">›</span></button>
<div id="years" class="hidden">
<div class="pretty p-default p-curve">
<input type="checkbox" id="2021" onclick="changeYearFilter('2021')"></input>
<div class="state">
<label for="2021">2021</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="2020" onclick="changeYearFilter('2020')"></input>
<div class="state">
<label for="2020">2020</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="2019" onclick="changeYearFilter('2019')"></input>
<div class="state">
<label for="2019">2019</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="2018" onclick="changeYearFilter('2018')"></input>
<div class="state">
<label for="2018">2018</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="2017" onclick="changeYearFilter('2017')"></input>
<div class="state">
<label for="2017">2017</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="2016" onclick="changeYearFilter('2016')"></input>
<div class="state">
<label for="2016">2016</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="2015" onclick="changeYearFilter('2015')"></input>
<div class="state">
<label for="2015">2015</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="2014" onclick="changeYearFilter('2014')"></input>
<div class="state">
<label for="2014">2014</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="2013" onclick="changeYearFilter('2013')"></input>
<div class="state">
<label for="2013">2013</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="2012" onclick="changeYearFilter('2012')"></input>
<div class="state">
<label for="2012">2012</label>
</div>
</div>
<div class="pretty p-default p-curve">
<input type="checkbox" id="2011" onclick="changeYearFilter('2011')"></input>
<div class="state">
<label for="2011">2011</label>
</div>
</div>

</div>
</div>


</div>

</div>
</div>









</div>
  
        );
                }

export default Filter;