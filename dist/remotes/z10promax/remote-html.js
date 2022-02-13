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
#zero a,
#volmin a,
#volplus a,
#channelup a,
#channeldown a,
#left a,
#right a,
#up a,
#down a,
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
	width: 24px;
	height: 24px;
	background: url(${base_url}/power.png) no-repeat
}

#remote-control-z10promax li#one a {
	left: 35px;
	top: 131px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/one.png) no-repeat 0 0px
}

#remote-control-z10promax li#two a {
	left: 77px;
	top: 130px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/two.png) no-repeat 0 0px
}

#remote-control-z10promax li#three a {
	left: 121px;
	top: 131px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/three.png) no-repeat 0 0px
}

#remote-control-z10promax li#four a {
	left: 35px;
	top: 158px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/four.png) no-repeat 0 0px
}

#remote-control-z10promax li#five a {
	left: 77px;
	top: 157px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/five.png) no-repeat 0 0px
}

#remote-control-z10promax li#six a {
	left: 123px;
	top: 157px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/six.png) no-repeat 0 0px
}


#remote-control-z10promax li#seven a {
	left: 35px;
	top: 186px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/seven.png) no-repeat 0 0px
}

#remote-control-z10promax li#eight a {
	left: 77px;
	top: 185px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/eight.png) no-repeat 0 0px
}

#remote-control-z10promax li#nine a {
	left: 122px;
	top: 185px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/nine.png) no-repeat 0 0px
}


#remote-control-z10promax li#zero a {
	left: 77px;
	top: 213px;
	width: 9px;
	height: 19px;
	background: url(${base_url}/zero.png) no-repeat 0 0px
}

#remote-control-z10promax li#volplus a {
	left: 20px;
	top: 305px;
	width: 15px;
	height: 14px;
	background: url(${base_url}/volplus.png) no-repeat 0 0px
}

#remote-control-z10promax li#volmin a {
	left: 20px;
	top: 355px;
	width: 15px;
	height: 14px;
	background: url(${base_url}/volmin.png) no-repeat 0 0px
}

#remote-control-z10promax li#channelup a {
	left: 106px;
	top: 353px;
	width: 15px;
	height: 14px;
	background: url(${base_url}/channelup.png) no-repeat 0px 0px
}

#remote-control-z10promax li#channeldown a {
	left: 106px;
	top: 353px;
	width: 15px;
	height: 14px;
	background: url(${base_url}/channeldown.png) no-repeat 0px 0px
}


#remote-control-z10promax li#left a {
	left: 36px;
	top: 316px;
	width: 15px;
	height: 14px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-z10promax li#right a {
	left: 104px;
	top: 316px;
	width: 15px;
	height: 14px;
	background: url(${base_url}/right.png) no-repeat 0px 0px
}

#remote-control-z10promax li#up a {
	left: 79px;
	top: 289px;
	width: 15px;
	height: 1r4x;
	background: url(${base_url}/up.png) no-repeat 0px 0px
}

#remote-control-z10promax li#down a {
	left: 79px;
	top: 347px;
	width: 15px;
	height: 14px;
	background: url(${base_url}/down.png) no-repeat 0px 0px
}

#remote-control-z10promax li#ok a {
	left: 72px;
	top: 320px;
	width:15px;
	height: 14px;
	background: url(${base_url}/ok.png) no-repeat 0px 0px
}

#remote-control-z10promax li#back a {
	left: 18px;
	top: 383px;
    width: 38px;
    height: 27px;
    background: url(${base_url}/back.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#home a {
	left: 57px;
	top: 377px;
	width: 38px;
	height: 27px;
	background: url(${base_url}/menu.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#menu a {
	left: 110px;
	top: 377px;
	width: 38px;
	height: 27px;
	background: url(${base_url}/menu.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}

#remote-control-z10promax li#one a:hover {
	background: url(${base_url}/one_over.png) no-repeat 0 0px
}

#remote-control-z10promax li#two a:hover {
	background: url(${base_url}/two_over.png) no-repeat 0 0px
}

#remote-control-z10promax li#three a:hover {
	background: url(${base_url}/three_over.png) no-repeat 0 0px
}

#remote-control-z10promax li#four a:hover {
	background: url(${base_url}/four_over.png) no-repeat 0 0px
}

#remote-control-z10promax li#five a:hover {
	background: url(${base_url}/five_over.png) no-repeat 0 0px
}

#remote-control-z10promax li#six a:hover {
	background: url(${base_url}/six_over.png) no-repeat 0 0px
}

#remote-control-z10promax li#seven a:hover {
	background: url(${base_url}/seven_over.png) no-repeat 0 0px
}

#remote-control-z10promax li#eight a:hover {
	background: url(${base_url}/eight_over.png) no-repeat 0 0px
}

#remote-control-z10promax li#nine a:hover {
	background: url(${base_url}/nine_over.png) no-repeat 0 0px
}

#remote-control-z10promax li#zero a:hover {
	background: url(${base_url}/zero_over.png) no-repeat 0 0px
}

#remote-control-z10promax li#volplus a:hover {
	background: url(${base_url}/volplus_over.png) no-repeat 0 0px
}

#remote-control-z10promax li#volmin a:hover {
	background: url(${base_url}/volmin_over.png) no-repeat 0 0px
}

#remote-control-z10promax li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}

#remote-control-z10promax li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}

#remote-control-z10promax li#up a:hover {
	background: url(${base_url}/up_over.png) no-repeat 0px 0px
}

#remote-control-z10promax li#down a:hover {
	background: url(${base_url}/down_over.png) no-repeat 0px 0px
}

#remote-control-z10promax li#channelup a:hover {
	background: url(${base_url}/channelup_over.png) no-repeat 0px 0px
}

#remote-control-z10promax li#channeldown a:hover {
	background: url(${base_url}/channeldown_over.png) no-repeat 0px 0px
}

#remote-control-z10promax li#ok a:hover {
	background: url(${base_url}/ok_over.png) no-repeat 0px 0px
}

#remote-control-z10promax li#back a:hover {
	background: url(${base_url}/back_over.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#home a:hover {
	background: url(${base_url}/home_over.png) no-repeat 0px 0px;
}

#remote-control-z10promax li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
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
					<li class="myButton-${config.remote_template}" id="zero"><a href="#" title="zero"><span>zero</span></a></li>
					<li class="myButton-${config.remote_template}" id="channelup"><a href="#" title="channel up"><span>channelup</span></a></li>
					<li class="myButton-${config.remote_template}" id="channeldown"><a href="#" title="channel down"><span>channeldown</span></a></li>
					<li class="myButton-${config.remote_template}" id="volplus"><a href="#" title="vol plus"><span>volplus</span></a></li>
					<li class="myButton-${config.remote_template}" id="volmin"><a href="#" title="vol min"><span>volmin</span></a></li>
					<li class="myButton-${config.remote_template}" id="back"><a href="#" title="back"><span>back</span></a></li>
					<li class="myButton-${config.remote_template}" id="menu"><a href="#" title="menu"><span>menu</span></a></li>
					<li class="myButton-${config.remote_template}" id="left"><a href="#" title="Left"><span>left</span></a></li>
					<li class="myButton-${config.remote_template}" id="right"><a href="#" title="right"><span>right</span></a></li>
					<li class="myButton-${config.remote_template}" id="up"><a href="#" title="up"><span>up</span></a></li>
					<li class="myButton-${config.remote_template}" id="down"><a href="#" title="down"><span>down</span></a></li>
					<li class="myButton-${config.remote_template}" id="ok"><a href="#" title="OK"><span>OK</span></a></li>
				</ul>
			</div>	
		</div>

`;
}
