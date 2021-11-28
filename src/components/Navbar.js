import React from "react";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

function Navbar() {
    return (
<div style={{background:"#f8f8f8",paddingtop:"32px"}}>
<div class="wrapper">
<div class="flexbox">
<div className="Filter">

<div class="filter-controls">
<label>FILTER</label>
<button >CLEAR FILTERS</button>
<span id="ceremonies-icon" class="--closed">›</span>
</div>


<>
        <Navigation
            
            items={[
             
              {
                class:'pretty p-default p-curve',
                title: 'By Awards Ceremony',
                itemId: '/By Awards Ceremony',
               // elemBefore: () => <Icon name="users" />,
                subNav: [
                  {
                    
                  
                    title: 'European Content Awards',
                   // input :'checkbox',
                    itemId: '/European Content Awards',

                  },
                  {
                    title: 'Digital Media Awards',
                    itemId: '/Digital Media Awards',
                  },
                  {
                    title: 'Content Marketing Institute Awards',
                    itemId: '/Content Marketing Institute Awards',
                  },
                  {
                    title: 'Irish Content Marketing Awards',
                    itemId: '/Irish Content Marketing Awards',
                  },
                
                ],
              },
              {
                title: 'By Year',
                itemId: '/By Year',
                subNav: [
                  {
                    title: '2021',
                    itemId: '/2021',
                  },
                  {
                    title: '2020',
                    itemId: '/2020',
                  },
                  {
                    title: '2019',
                    itemId: '/2019',
                  },
                  {
                    title: '2018',
                    itemId: '/2018',
                  },
                  {
                    title: '2018',
                    itemId: '/2018',
                  },
                  {
                    title: '2017',
                    itemId: '/2017',
                  },
                ],
              },
              {
                title: 'By Channel',
                itemId: '/By Channel',
                subNav: [
                  {
                    title: 'Integrated',
                    itemId: '/Integrated',
                  },
                  {
                    title: 'Content',
                    itemId: '/Content',
                  },
                  {
                    title: 'Email',
                    itemId: '/Email',
                  },
                  {
                    title: 'Social',
                    itemId: '/Social',
                  },
                  {
                    title: 'Creative',
                    itemId: '/Creative',
                  },
                  {
                    title: 'PPC',
                    itemId: '/PPC',
                  },
                ],
              },
              {
                title: 'By Industry',
                itemId: '/By Industry',
                subNav: [
                  {
                    title: 'B2C',
                    itemId: '/B2C',
                  },
                  {
                    title: 'Retail',
                    itemId: '/Retail',
                  },
                  {
                    title: 'Travel',
                    itemId: '/Travel',
                  },
                  {
                    title: 'Social',
                    itemId: '/Social',
                  },
                  {
                    title: 'Digital',
                    itemId: '/Digital',
                  },
                  {
                    title: 'Financial',
                    itemId: '/Financial',
                  },
                ],
              },
            ]}
            
          />
          
 
      </>
      </div>


     <div class="awards">
        <p style={{fontweight:"bolder"}}>Viewing <span id="award-count">2</span> of 75 awards</p>
        <div class="awards-group" data-year="2021">

       
        <h2 class="year" >2021 
        <span>Click on the award to read more about the winning entry</span>
        <span id="container-2021-icon">›
        </span>
        </h2>
            <div id="container-2021">
            <div class="ceremony" data-awards="Content Marketing Institute Awards" data-year="5">
            <div style={{gridcolumn:"1",margintop:"12px",bordertop: "1px dotted #6DB2AA"}}>
            <h3>Content Marketing Institute Awards</h3>
                <h4 data-awards="Content Marketing Institute Awards" data-award-entry="Strategy: Highest Subscriber Growth" data-year-label="2021" data-channels="Integrated, Content, Email, Social, Creative" data-industry="B2C" onclick="showDetail('#detail-1745')">
            <span style={{color:"#3F9B90",fontweight:"bold"}}>Winner - </span> Strategy: Highest Subscriber Growth
                </h4>
            </div>
            <div id="detail-1745" class="award-detail"  data-channels="Integrated, Content, Email, Social, Creative" data-industry="B2C">
            <div>
            <button aria-label="Close" >x</button>
                <div class="head --border-bottom-dotted">
            <div>
<h3>Content Marketing Institute Awards</h3>
<h4>
<span style={{color:"#3F9B90",fontweight:"bold"}}> Winner - </span> Strategy: Highest Subscriber Growth
</h4>
            </div>
<img src="https://www.wolfgangdigital.com/uploads/logos/_shrink/Logos_CMA21.jpg" aria-hidden="true" aria-label="Award logo" loading="lazy" alt="Content Marketing Institute Awards" width="150" height="112"></img>
</div>

</div>
</div>
<div class="img-container">
<img src="https://www.wolfgangdigital.com/uploads/logos/_shrink/Logos_CMA21.jpg" loading="lazy" alt="Content Marketing Institute Awards" width="150" height="112"></img>
</div>
</div>

</div>
</div>





<div class="awards-group" data-year="2020">
<h2 class="year" onclick="toggleCategoryList('#container-2020')">2020
<span>Click on
the award to read more about the winning entry</span><span id="container-2020-icon">›</span></h2>
<div id="container-2020">
<div class="ceremony" data-awards="European Search Awards" data-year="4">
<div style={{gridcolumn:"1",margintop:"12px",bordertop: "1px dotted #6DB2AA"}}>
<h3>European Search Awards</h3>
<h4 data-awards="European Search Awards" data-award-entry="Best B2C Campaign (PPC)" data-year-label="2020" data-channels="PPC" data-industry="Retail" onclick="showDetail('#detail-1749')">
<span style={{color:"#3F9B90",fontweight:"bold"}}>Winner - </span>
Best B2C Campaign (PPC)
</h4>
</div>
<div id="detail-1749" class="award-detail" onclick="hideDetail()" data-channels="PPC" data-industry="Retail">
<div>
<button aria-label="Close" onclick="hideDetail()">x</button>
<div class="head --border-bottom-dotted">
<div>
<h3>European Search Awards</h3>
<h4>
<span style={{color:"#3F9B90",fontweight:"bold"}}>Winner - </span>
Best B2C Campaign (PPC)
</h4>
</div>
<img src="https://www.wolfgangdigital.com/uploads/logos/_shrink/Logos_ESA20.jpg" aria-hidden="true" aria-label="Award logo" loading="lazy" alt="European Search Awards" width="150" height="112"></img>
</div>
<div class="detail-content">
<div>
<p>The Client: BT &amp; Arnotts</p>
<p>The Team: Beth Quigley, John Lennon</p>
<p>Channels: PPC</p>
</div>
</div>
</div>
</div>
<div class="img-container">
<img src="https://www.wolfgangdigital.com/uploads/logos/_shrink/Logos_ESA20.jpg" loading="lazy" alt="European Search Awards" width="150" height="112"></img>
</div>
<div style={{gridcolumn:"1"}}>
<h4 data-awards="European Search Awards" data-award-entry="Best Retail Campaign (PPC)" data-year-label="2020" data-channels="PPC" data-industry="Retail" onclick="showDetail('#detail-1747')">
<span style={{color:"#3F9B90",fontweight:"bold"}}>Winner - </span>
Best Retail Campaign (PPC)
</h4>
</div>
<div id="detail-1747" class="award-detail" onclick="hideDetail()" data-channels="PPC" data-industry="Retail">
<div>
 <button aria-label="Close" onclick="hideDetail()">x</button>
<div class="head --border-bottom-dotted">
<div>
<h3>European Search Awards</h3>
<h4>
<span style={{color:"#3F9B90",fontweight:"bold"}}>Winner - </span>
Best Retail Campaign (PPC)
</h4>
</div>
<img src="https://www.wolfgangdigital.com/uploads/logos/_shrink/Logos_ESA20.jpg" aria-hidden="true" aria-label="Award logo" loading="lazy" alt="European Search Awards" width="150" height="112"></img>
</div>
<div class="detail-content">
<div>
<p>The Client: BT &amp; Arnotts</p>
<p>The Team: Beth Quigley, John Lennon</p>
<p>Channels: PPC</p>
</div>
</div>
</div>
</div>
<div style={{gridcolumn:"1"}}>
<h4 data-awards="European Search Awards" data-award-entry="Best PPC Campaign" data-year-label="2020" data-channels="PPC" data-industry="Retail" onclick="showDetail('#detail-1746')">
<span style={{color:"#3F9B90",fontweight:"bold"}}>Winner - </span>
Best PPC Campaign
</h4>
</div>
<div id="detail-1746" class="award-detail" onclick="hideDetail()" data-channels="PPC" data-industry="Retail">
<div>
<button aria-label="Close" onclick="hideDetail()">x</button>
<div class="head --border-bottom-dotted">
<div>
<h3>European Search Awards</h3>
<h4>
<span style={{color:"#3F9B90",fontweight:"bold"}}>Winner - </span>
Best PPC Campaign
</h4>
</div>
<img src="https://www.wolfgangdigital.com/uploads/logos/_shrink/Logos_ESA20.jpg" aria-hidden="true" aria-label="Award logo" loading="lazy" alt="European Search Awards" width="150" height="112"></img>
</div>
<div class="detail-content">
<div>
<p>The Client: BT &amp; Arnotts</p>
<p>The Team: Beth Quigley, John Lennon</p>
<p>Channels: PPC</p>
</div>
</div>
</div>
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


export default Navbar;


