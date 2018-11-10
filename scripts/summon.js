/*
	ODDS BASIC SUMMON
		1* -> 56.0% [   1.00 -  56.00 ]
		2* -> 34.0% [  56.00 -  90.00 ]
		3* -> 8.50% [  90.00 -  98.50 ]
		4* -> 1.45% [  98.50 -  99.95 ]
		5* -> 0.05% [  99.95 - 100.00 ]
		
	ODDS FRIEND SUMMON
		2* -> 32.0% [   1.00 -  32.00 ]
		3* -> 54.0% [  32.00 -  86.00 ]
		4* -> 13.2% [  86.00 -  99.20 ]
		5* ->  0.8% [  99.20 - 100.00 ]
		
	ODDS HEROIC SUMMON
		3* -> 78.5% [   1.00 -  78.50 ]
		4* -> 20.0% [  78.50 -  98.50 ]
		5* ->  1.5% [  98.50 - 100.00 ]
*/

let basicScrolls = 10;
let friendPoints = 90;
let gems = 800;

const priceOneBasic = 1;	//   1x Basic Scroll
const priceOneFriend = 10;	//  10x Friends Point
const priceOneHeroic = 100; // 100x Gems

const discountBasicSummon = 10  // 0% discount
const discountFriendSummon = 20 // 0% discount
const discountHeroicSummon = 30 // 0% discount

let newCalculatedScrollPrice;
let newCalculatedFriendPrice;
let newCalculatedGemPrice;

/*
	MATHS FOR 10x PRICE
		(priceOne*10)/100*(100-discount);
		
			eg.
		(1*10)/100*(100-0)  = 10 (  0% discount )
		(1*10)/100*(100-50) =  5 ( 50% discount )
*/

function basicSummon(summon) {
	if(summon == 10){
		newCalculatedScrollPrice = Math.floor((priceOneBasic*summon)/100*(100-discountBasicSummon));
	} else {
		newCalculatedScrollPrice = priceOneBasic;
	}
	
	if(basicScrolls - newCalculatedScrollPrice >= 0) {
		basicScrolls -= newCalculatedScrollPrice;
		let basicScrollCounter = document.getElementById('scrollPointsCounter');
			basicScrollCounter.innerHTML = basicScrolls + ' <img style="vertical-align: bottom" width="20px" src="./img/items/basicScroll.png"/>';
		
		for(let i=0; i<summon; i++){
			let randomRarity = Math.floor(Math.random() * 10000) + 1;
			let rarity = 0;
			
			if(randomRarity>=1 && randomRarity<=5600) {
				rarity = 1;
			} else if(randomRarity>5600 && randomRarity<9000) {
				rarity = 2;
			} else if(randomRarity>=9000 && randomRarity<=9850) {
				rarity = 3;
			} else if(randomRarity>9850 && randomRarity<=9995) {
				rarity = 4;
			} else if(randomRarity>=9995 && randomRarity<=10000) {
				rarity = 5;
			}
			
			let randomType = Math.floor(Math.random() * characterList.length);
			let result = [];
			characterList[randomType].forEach(function(o){if (o.rarity == rarity) result.push(o);} );
			
			if(result.length>1){
				let randomCharacter = Math.floor(Math.random() * result.length);
				result = result[randomCharacter];
			} else {
				result = characterList[randomType][0];
			}
			
			console.log(langSummonText1 + result.name + langSummonText2 + result.rarity + langSummonText3);
		}
	} else {
		console.log(langBasicSummonFail);
	}
}

function friendSummon(summon) {
	if(summon == 10){
		newCalculatedFriendPrice = Math.floor((priceOneFriend*summon)/100*(100-discountFriendSummon));
	} else {
		newCalculatedFriendPrice = priceOneFriend;
	}
	
	if(friendPoints - newCalculatedFriendPrice >= 0) {
		friendPoints -= newCalculatedFriendPrice;
		let friendPointsCounter = document.getElementById('friendPointsCounter');
			friendPointsCounter.innerHTML = friendPoints + ' <img style="vertical-align: bottom" width="20px" src="./img/items/friendPoint.png"/>';
		
		for(let i=0; i<summon; i++){
			let randomRarity = Math.floor(Math.random() * 10000) + 1;
			let rarity = 0;
			
			if(randomRarity>=1 && randomRarity<=3200) {
				rarity = 2;
			} else if(randomRarity>3200 && randomRarity<8600) {
				rarity = 3;
			} else if(randomRarity>=8600 && randomRarity<=9920) {
				rarity = 4;
			} else if(randomRarity>9920 && randomRarity<=10000) {
				rarity = 5;
			}
			
			let randomType = Math.floor(Math.random() * characterList.length);
			let result = [];
			characterList[randomType].forEach(function(o){if (o.rarity == rarity) result.push(o);} );
			
			if(result.length>1){
				let randomCharacter = Math.floor(Math.random() * result.length);
				result = result[randomCharacter];
			} else {
				result = characterList[randomType][0];
			}
			
			console.log(langSummonText1 + result.name + langSummonText2 + result.rarity + langSummonText3);
		}
	} else {
		console.log(langFriendSummonFail);
	}
}

function heroicSummon(summon) {
	if(summon == 10){
		newCalculatedGemPrice = Math.floor((priceOneHeroic*summon)/100*(100-discountHeroicSummon));
	} else {
		newCalculatedGemPrice = priceOneHeroic;
	}
	
	if(gems - newCalculatedGemPrice >= 0) {
		gems -= newCalculatedGemPrice;
		let gemsPointsCounter = document.getElementById('gemsPointsCounter');
			gemsPointsCounter.innerHTML = gems + ' <img style="vertical-align: bottom" width="20px" src="./img/items/gems.png"/>';

		for(let i=0; i<summon; i++){
			let randomRarity = Math.floor(Math.random() * 10000) + 1;
			let rarity = 0;
			
			if(randomRarity>=1 && randomRarity<=7850) {
				rarity = 3;
			} else if(randomRarity>7850 && randomRarity<9850) {
				rarity = 4;
			} else if(randomRarity>=9850 && randomRarity<=10000) {
				rarity = 5;
			}
			
			let randomType = Math.floor(Math.random() * characterList.length);
			let result = [];
			characterList[randomType].forEach(function(o){if (o.rarity == rarity) result.push(o);} );
			
			if(result.length>1){
				let randomCharacter = Math.floor(Math.random() * result.length);
				result = result[randomCharacter];
			} else {
				result = characterList[randomType][0];
			}
			
			console.log(langSummonText1 + result.name + langSummonText2 + result.rarity + langSummonText3);
		}
	} else {
		console.log(langHeroicSummonFail);
	}
}