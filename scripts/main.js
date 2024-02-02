// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
    var s1 = document.getElementById('dietSelect');
    var s2 = document.getElementById('secondSelect');
    var s2A = document.getElementById('thirdSelect');
    var s3 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s3.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions

	//Sort failsafe, since first sort in groceries.js doesn't work until a swap happens.
	for(let count=0;count<products.length;count=count + 1){
		for(let innerCount=count;innerCount<products.length-1;innerCount=innerCount + 1){
			if(products[innerCount].price < products[innerCount+1].price){
				hold = products[innerCount];
				products[innerCount] = products[innerCount+1];
				products[innerCount+1] = hold;
			}
		
		}
	}
    var optionArray = restrictListProducts(products, s1.value, s2.value, s2A.value);

	// Group products by category
	var productsByCategory = {};
	optionArray.forEach(function(product) {
		var category = products.find(p => p.name === product).category;
		if (!productsByCategory[category]) {
			productsByCategory[category] = [];
		}
		productsByCategory[category].push(product);
	});

	// Create a checkbox list for each category
    for (var category in productsByCategory) {
        var categoryLabel = document.createElement('h3');
        categoryLabel.textContent = category;
        s3.appendChild(categoryLabel);

        productsByCategory[category].forEach(function(productName) {
            var productPrice = products.find(p => p.name === productName).price;

            // create the checkbox and add in HTML DOM
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "product";
            checkbox.value = productName;
            s3.appendChild(checkbox);

            // create a label for the checkbox, and also add in HTML DOM
            var label = document.createElement('label')
            label.htmlFor = productName;
            label.appendChild(document.createTextNode(productName + " - $" + productPrice.toFixed(2)));
            s3.appendChild(label);

			// create a breakline node and add in HTML DOM
			s3.appendChild(document.createElement("br"));  

			var image = document.createElement('img')
			image.src = products.find(p => p.name === productName).image;
			image.style = "width:200px;height:200px";
		
		
			s3.appendChild(image);

            // create a breakline node and add in HTML DOM
            s3.appendChild(document.createElement("br"));
        });
    }
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}
