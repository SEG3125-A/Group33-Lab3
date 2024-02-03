var products = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		category: "Vegetables",
		image: "https://www.shutterstock.com/image-photo/packaged-labeled-broccoli-on-isolated-600nw-2099475799.jpg"
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		category: "Bakery",
		image: "https://media.istockphoto.com/id/518733512/photo/bread-in-plastic-bag.jpg?s=612x612&w=0&k=20&c=irxMCjErMaMeCh1UV9t8AqsPWNkJjTEL8VFMT6rCoW8="
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00,
		category: "Seafood",
		image: "https://thumbs.dreamstime.com/b/packaged-salmon-sale-1059933.jpg"
	},
	{
		name: "Steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 15.00,
		category: "Meat",
		image: "https://media.gettyimages.com/id/183889528/photo/pre-packaged-new-york-cut-boneless-steak.jpg?s=612x612&w=gi&k=20&c=hN0Ptu5tlG4oRK2hrSNiX2GXM7Bqm8e9VSNNkZNHdss="
	},
	{
		name: "Potatoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 8.00,
		category: "Vegetables",
		image: "https://www.shutterstock.com/image-photo/potatoes-bazaar-260nw-658758991.jpg"
	},
	{
		name: "Cereal",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 6.50,
		category: "Breakfast Cereals",
		image: "https://t3.ftcdn.net/jpg/03/06/54/08/360_F_306540879_e1fHVEmKRlVSTpI5iA6Tyg3cZG21joVD.jpg"
	},
	{
		name: "Crab",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 13.00,
		category: "Seafood",
		image: "https://www.shutterstock.com/image-photo/vacuum-packaged-peruvian-southern-king-260nw-2373884479.jpg"
	},
	{
		name: "Jam",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.99,
		category: "Condiments",
		image: "https://www.shutterstock.com/image-photo/homemade-strawberry-preserves-jam-mason-260nw-1976134916.jpg"
	},
	{
		name: "Chicken strips",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 11.20,
		category: "Meat",
		image: "https://media.istockphoto.com/id/925706336/photo/fried-chicken.jpg?s=612x612&w=0&k=20&c=g6qJo-ONvXeG9vVOi747vOiqP-fNg8cOxRWsODTEo7E="
	},
	{
		name: "Grape juice",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 7.60,
		category: "Juice",
		image: "https://www.shutterstock.com/image-photo/winneconne-wi-14-august-2017-600nw-697405333.jpg"
	},
		
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction1, restriction2) {
	let product_names = [];
	var hold;

	//Sort by price
	for(let count=0;count<prods.length;count=count + 1){
		for(let innerCount=count;innerCount<prods.length-1;innerCount=innerCount + 1){
			if(prods[innerCount].price < prods[innerCount+1].price){
				hold = prods[innerCount];
				prods[innerCount] = prods[innerCount+1];
				prods[innerCount+1] = hold;
			}
		
		}
	}
 
	for (let i = 0; i < prods.length; i += 1) {
        if ( // will only "use" the condition it meets
            ((restriction1 == "Vegetarian") && (prods[i].vegetarian == true)) ||
            ((restriction1 == "GlutenFree") && (prods[i].glutenFree == true)) ||
			((restriction1 == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)) ||
            (restriction1 == "None")){
				if( // will only "use" the other condition it meets
                ((restriction2 == "Organic") && (prods[i].organic == true)) ||
                ((restriction2 == "NonOrganic") && (prods[i].organic == false)) ||
                (restriction2 == "")
            ){
                product_names.push(prods[i].name);
            }
        }
    }
    return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
	}
	return totalPrice;
}
