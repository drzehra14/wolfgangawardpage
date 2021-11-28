import React from "react";
 
function Banner() {
  return (
    <div className="Banner">
        <div class="inner-banner bottom-white-line">
         <img srcset="https://www.wolfgangdigital.com/uploads/banners/_mobile/awards_banner.jpg" alt="The Awards Wall">
         </img>

        <div class="banner-content">
            <h1>The Awards Wall</h1>
        </div>
        </div>
<div class="wrapper --top-purple-line">
    <div class="flexbox --reverse">
        <div class="text-container" style={{textalign:"left"}}>
            <p > Back in 2011, when Wolfgang was only two people we submitted some case studies to the Digital Media Awards,
            optimistically entering the "Best Agency" category. At that time nobody knew who we were and our clients were
            not of the "catwalk" variety. So we certainly didn't expect to win, we optimistically hoped to get one of
            those cool "finalist" badges for our email signatures. Lo and behold, the judges loved our case studies,
            scored them strongly and we took the Gold Medal* home.</p>
            <p>This success imbued us with a wolfish hunger to execute outstanding campaigns and win further domestic &amp;
            international awards.</p>
        </div>
    <div class="img-container">
        <img src="https://www.wolfgangdigital.com/uploads/general/imageblogsize.jpg" alt="Wolfgang Digital - Awards Ceremony" width="465" height="310">
        </img>
    </div>
    </div>
</div>
    </div>
  );
}

export default Banner;