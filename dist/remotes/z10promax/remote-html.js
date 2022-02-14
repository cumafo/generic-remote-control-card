function getRemoteStyle_z10promax(config) {

   const template = config.remote_template;
   const base_url = `/hacsfiles/generic-remote-control-card/remotes/${template}`;

  return `
    ha-card{
        background-color:transparent;
        box-shadow:var(--paper-material-elevation-0_-_box-shadow);
    }
    body {
    margin: 0;
    padding: 20px;
    font-family: "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif
}

.container {
    width: 360px;
    margin: 0 auto
}

#remote-control-z10promax {
    position: relative;
    background: url(${base_url}/z10promax_remote.png) no-repeat;
    width: 159px;
    height: 596px
}

#remote-control-z10promax h2,
#remote-control-z10promax span {
    position: absolute;
    left: 5000px
}

#remote-control-z10promax ul {
    margin: 0;
    padding: 0;
    list-style-type: none
}

#power a,
#one a,
#two a,
#three a,
#four a,
#five a,
#six a,
#seven a,
#eight a,
#nine a,
#favo a,
#zero a,
#red a,
#green a,
#yellow a,
#blue a,
#info a,
#guide a,
#volmin a,
#volplus a,
#channelup a,
#channeldown a,
#left a,
#right a,
#top a,
#bottom a,
#back a,
#home a,
#menu a,
#ok a {
	position: absolute;
	display: block
}

#remote-control-z10promax li#power a {
	left: 105px;
	top: 42px;
	width: 30px;
	height: 32px;
	background: url(${base_url}/power.png) no-repeat
}

#remote-control-z10promax li#one a {
	left: 33px;
	top: 132px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/one.png) no-repeat 0 0px
}

#remote-control-z10promax li#two a {
	left: 76px;
	top: 131px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/two.png) no-repeat 0 0px
}

#remote-control-z10promax li#three a {
	left: 120px;
	top: 132px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/three.png) no-repeat 0 0px
}

#remote-control-z10promax li#four a {
	left: 33px;
	top: 160px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/four.png) no-repeat 0 0px
}

#remote-control-z10promax li#five a {
	left: 77px;
	top: 159px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/five.png) no-repeat 0 0px
}

#remote-control-z10promax li#six a {
	left: 121px;
	top: 159px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/six.png) no-repeat 0 0px
}


#remote-control-z10promax li#seven a {
	left: 33px;
	top: 187px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/seven.png) no-repeat 0 0px
}

#remote-control-z10promax li#eight a {
	left: 77px;
	top: 186px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/eight.png) no-repeat 0 0px
}

#remote-control-z10promax li#nine a {
	left: 121px;
	top: 186px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/nine.png) no-repeat 0 0px
}

#remote-control-z10promax li#favo a {
	left: 20px;
	top: 219px;
	width: 28px;
	height: 10px;
	background: url(${base_url}/favo.png) no-repeat 0 0px
}

#remote-control-z10promax li#zero a {
	left: 77px;
	top: 214px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/zero.png) no-repeat 0 0px
}

#remote-control-z10promax li#red a {
	left: 16px;
	top: 245px;
	width: 25px;
	height: 19px;
	background: url(${base_url}/red.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#red a:hover {
	background-image: url(${base_url}/red.png) no-repeat 0px -30px;
}  

#remote-control-z10promax li#green a {
	left: 49px;
	top: 246px;
	width: 32px;
	height: 30px;
	background: url(${base_url}/green.png) no-repeat 0px 0px;
}
#remote-control-z10promax li#green a:hover {
	background-image: url(${base_url}/green.png) no-repeat 0px -30px;
}  

#remote-control-z10promax li#yellow a {
	left: 83px;
	top: 246px;
	width: 32px;
	height: 30px;
	background: url(${base_url}/yellow.png) no-repeat 0px 0px;
}
#remote-control-z10promax li#yellow a:hover {
	background-image: url(${base_url}/yellow.png) no-repeat 0px -30px;
}  

#remote-control-z10promax li#blue a {
	left: 117px;
	top: 246px;
	width: 32px;
	height: 30px;
	background: url(${base_url}/blue.png) no-repeat 0px 0px;
}
#remote-control-z10promax li#blue a:hover {
	background-image: url(${base_url}/blue.png) no-repeat 0px -30px;
}  

#remote-control-z10promax li#info a {
	left: 28px;
	top: 282px;
	width: 20px;
	height: 10px;
	background: url(${base_url}/info.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#guide a {
	left: 102px;
	top: 281px;
	width: 32px;
	height: 10px;
	background: url(${base_url}/guide.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#volplus a {
	left: 16px;
	top: 307px;
	width: 15px;
	height: 14px;
	background: url(${base_url}/volplus.png) no-repeat 0px 0px
}

#remote-control-z10promax li#volmin a {
	left: 16px;
	top: 359px;
	width: 15px;
	height: 14px;
	background: url(${base_url}/volmin.png) no-repeat 0 0px
}

#remote-control-z10promax li#channelup a {
	left: 130px;
	top: 308px;
	width: 15px;
	height: 14px;
	background: url(${base_url}/channelup.png) no-repeat 0px 0px
}

#remote-control-z10promax li#channeldown a {
	left: 130px;
	top: 353px;
	width: 15px;
	height: 14px;
	background: url(${base_url}/channeldown.png) no-repeat 0px 0px
}

#remote-control-z10promax li#left a {
	left: 38px;
	top: 327px;
	width: 13px;
	height: 22px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-z10promax li#right a {
	left: 106px;
	top: 327px;
	width: 13px;
	height: 22px;
	background: url(${base_url}/right.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#top a {
	left: 68px;
	top: 303px;
	width: 22px;
	height: 13px;
	background: url(${base_url}/top.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#bottom a {
	left: 68px;
	top: 365px;
	width: 22px;
	height: 13px;
	background: url(${base_url}/bottom.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#ok a {
	left: 68px;
	top: 327px;
	width:23px;
	height:24px;
	background: url(${base_url}/ok.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#back a {
	left: 20px;
	top: 389px;
    width: 38px;
    height: 27px;
    background: url(${base_url}/back.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#home a {
	left: 70px;
	top: 394px;
	width: 16px;
	height: 16px;
	background: url(${base_url}/home.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#menu a {
	left: 117px;
	top: 392px;
	width: 30px;
	height: 12px;
    background: url(${base_url}/menu.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#one a:hover {
	background: url(${base_url}/one_over.png) no-repeat 0 0px;
}

#remote-control-z10promax li#two a:hover {
	background: url(${base_url}/two_over.png) no-repeat 0 0px;
}

#remote-control-z10promax li#three a:hover {
	background: url(${base_url}/three_over.png) no-repeat 0 0px;
}

#remote-control-z10promax li#four a:hover {
	background: url(${base_url}/four_over.png) no-repeat 0 0px;
}

#remote-control-z10promax li#five a:hover {
	background: url(${base_url}/five_over.png) no-repeat 0 0px;
}

#remote-control-z10promax li#six a:hover {
	background: url(${base_url}/six_over.png) no-repeat 0 0px;
}

#remote-control-z10promax li#seven a:hover {
	background: url(${base_url}/seven_over.png) no-repeat 0 0px;
}

#remote-control-z10promax li#eight a:hover {
	background: url(${base_url}/eight_over.png) no-repeat 0 0px;
}

#remote-control-z10promax li#nine a:hover {
	background: url(${base_url}/nine_over.png) no-repeat 0 0px;
}

#remote-control-z10promax li#zero a:hover {
	background: url(${base_url}/zero_over.png) no-repeat 0 0px;
}

#remote-control-z10promax li#volplus a:hover {
	background: url(${base_url}/volplus_over.png) no-repeat 0 0px;
}

#remote-control-z10promax li#volmin a:hover {
	background: url(${base_url}/volmin_over.png) no-repeat 0 0px;
}

#remote-control-z10promax li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#top a:hover {
	background: url(${base_url}/top_over.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#bottom a:hover {
	background: url(${base_url}/bottom_over.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#channelup a:hover {
	background: url(${base_url}/channelup_over.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#channeldown a:hover {
	background: url(${base_url}/channeldown_over.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#ok a:hover {
	background: url(${base_url}/ok_over.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#back a:hover {
	background: url(${base_url}/back_over.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#home a:hover {
	background: url(${base_url}/home_over.png) no-repeat 0px 0px;
}

  `;
}

function getRemoteHtml_z10promax(config){return `
       <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-${config.remote_template}">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton-${config.remote_template}"><a href="#" title="power"><span>power</span></a></li>
                </ul>

				<ul>
					<li class="myButton-${config.remote_template}" id="one"><a href="#" title="one"><span>one</span></a></li>
					<li class="myButton-${config.remote_template}" id="two"><a href="#" title="two"><span>two</span></a></li>
					<li class="myButton-${config.remote_template}" id="three"><a href="#" title="three"><span>three</span></a></li>
					<li class="myButton-${config.remote_template}" id="four"><a href="#" title="four"><span>four</span></a></li>
					<li class="myButton-${config.remote_template}" id="five"><a href="#" title="five"><span>five</span></a></li>
					<li class="myButton-${config.remote_template}" id="six"><a href="#" title="six"><span>six</span></a></li>
					<li class="myButton-${config.remote_template}" id="seven"><a href="#" title="seven"><span>seven</span></a></li>
					<li class="myButton-${config.remote_template}" id="eight"><a href="#" title="eight"><span>eight</span></a></li>
					<li class="myButton-${config.remote_template}" id="nine"><a href="#" title="nine"><span>nine</span></a></li>
					<li class="myButton-${config.remote_template}" id="favo"><a href="#" title="favo"><span>favo</span></a></li>
					<li class="myButton-${config.remote_template}" id="zero"><a href="#" title="zero"><span>zero</span></a></li>

					<li class="myButton-${config.remote_template}" id="red"><a href="#" title="red"><span>red</span></a></li>
					<li class="myButton-${config.remote_template}" id="green"><a href="#" title="green"><span>green</span></a></li>
					<li class="myButton-${config.remote_template}" id="yellow"><a href="#" title="yellow"><span>yellow</span></a></li>
					<li class="myButton-${config.remote_template}" id="blue"><a href="#" title="blue"><span>blue</span></a></li>

					<li class="myButton-${config.remote_template}" id="info"><a href="#" title="info"><span>info</span></a></li>
					<li class="myButton-${config.remote_template}" id="guide"><a href="#" title="guide"><span>guide</span></a></li>

					<li class="myButton-${config.remote_template}" id="channelup"><a href="#" title="channel up"><span>channelup</span></a></li>
					<li class="myButton-${config.remote_template}" id="channeldown"><a href="#" title="channel down"><span>channeldown</span></a></li>
					<li class="myButton-${config.remote_template}" id="volplus"><a href="#" title="vol plus"><span>volplus</span></a></li>
					<li class="myButton-${config.remote_template}" id="volmin"><a href="#" title="vol min"><span>volmin</span></a></li>
					<li class="myButton-${config.remote_template}" id="back"><a href="#" title="back"><span>back</span></a></li>
					<li class="myButton-${config.remote_template}" id="home"><a href="#" title="home"><span>home</span></a></li>
					<li class="myButton-${config.remote_template}" id="menu"><a href="#" title="menu"><span>menu</span></a></li>
					<li class="myButton-${config.remote_template}" id="left"><a href="#" title="Left"><span>left</span></a></li>
					<li class="myButton-${config.remote_template}" id="right"><a href="#" title="right"><span>right</span></a></li>
					<li class="myButton-${config.remote_template}" id="top"><a href="#" title="top"><span>top</span></a></li>
					<li class="myButton-${config.remote_template}" id="bottom"><a href="#" title="bottom"><span>bottom</span></a></li>
					<li class="myButton-${config.remote_template}" id="ok"><a href="#" title="OK"><span>OK</span></a></li>
				</ul>
			</div>	
		</div>

`;
}
