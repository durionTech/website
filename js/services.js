function showForm(type){

const area =
document.getElementById("formArea");

if(type==="website"){

area.innerHTML=`

<h2>Website Development Enquiry</h2>

<form>

<input type="text"
placeholder="Client Name">

<input type="tel"
placeholder="Mobile Number">

<input type="email"
placeholder="Email">

<input type="text"
placeholder="Company Name">

<button>
Submit
</button>

</form>

`;

}

if(type==="seo"){

area.innerHTML=`

<h2>SEO Enquiry</h2>

<form>

<input type="text"
placeholder="Company Name">

<input type="url"
placeholder="Website URL">

<input type="text"
placeholder="Target Keywords">

<button>
Submit
</button>

</form>

`;

}

if(type==="marketing"){

area.innerHTML=`

<h2>Digital Marketing</h2>

<form>

<input type="text"
placeholder="Business Name">

<input type="text"
placeholder="Marketing Goal">

<button>
Submit
</button>

</form>

`;

}

if(type==="support"){

area.innerHTML=`

<h2>Service Request</h2>

<form>

<input type="text"
placeholder="Customer Name">

<textarea
placeholder="Issue Description"></textarea>

<button>
Submit
</button>

</form>

`;

}

}