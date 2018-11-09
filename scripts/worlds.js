const canvas = document.getElementById('map');

function initiateWorld(imagePath, worldName, worldId, worldLevel, positionX, positionY) {	
	let newWorld = document.createElement('div');
	
	newWorld.setAttribute('class', 'world');
	newWorld.setAttribute('title', worldName);
	newWorld.setAttribute('onclick', 'openGUI(' + worldId + ')');
	
	newWorld.style.left = positionX + 'px';
	newWorld.style.top = positionY + 'px';
	newWorld.style.backgroundImage = 'url(' + imagePath + ')';
	
	canvas.appendChild(newWorld);
}

function openGUI(worldId) {
	deleteWorld();
	
	switch(worldId) {
		case 0: loadWorld(); break;
		case 1: openSummon(); break;
		case 2: openArena(); break;
	}
	
	console.clear();
}

function deleteWorld() {
	while (canvas.firstChild) {
		canvas.removeChild(canvas.firstChild);
	}
	
	canvas.setAttribute('class', 'homeScreen');
}

function backButton() {
	let backButton = document.createElement('div');
	backButton.setAttribute('id', 'backButton');
	backButton.setAttribute('onclick', 'openGUI(0)');
	canvas.appendChild(backButton);
}

function loadWorld() {
	initiateWorld('./img/worlds/world1.png' ,'Summon Circle', 1, 1, 200, 50);
	initiateWorld('./img/worlds/world2.png' ,'Arena', 2, 20, 50, 200);
}

function openSummon() {
	backButton();
	canvas.setAttribute('class', 'summonScreen');
	
	const scrollImage = '<img style="vertical-align: bottom" width="20px" src="./img/items/basicScroll.png"/>';
	const gemImage = '<img style="vertical-align: bottom" width="20px" src="./img/items/gems.png"/>';
	const friendImage = '<img style="vertical-align: bottom" width="20px" src="./img/items/friendPoint.png"/>';
	
	let columnLeft = document.createElement('div');
		columnLeft.setAttribute('class', 'column');
		let columnLeftTitle = document.createElement('p');
			columnLeftTitle.innerText = 'Basic Summon';
			columnLeft.appendChild(columnLeftTitle);
		let columnLeftPoints = document.createElement('p');
			columnLeftPoints.setAttribute('class', 'points');
			columnLeftPoints.innerHTML = '99 ' + scrollImage;
			columnLeft.appendChild(columnLeftPoints);
		canvas.appendChild(columnLeft);
		let summonBasicOneButton = document.createElement('button');
			summonBasicOneButton.innerHTML = priceOneBasic + 'x ' + scrollImage;
			summonBasicOneButton.setAttribute('onclick', 'basicSummon(1)');
		let summonBasicTenButton = document.createElement('button');
			summonBasicTenButton.innerHTML = Math.floor((priceOneBasic*10)/100*(100-discountBasicSummon)) + 'x ' + scrollImage;
			summonBasicTenButton.setAttribute('onclick', 'basicSummon(10)');
			if(discountBasicSummon>0){
				let columnLeftDiscount = document.createElement('p');
					columnLeftDiscount.innerText = '-' + discountBasicSummon + '%';
					columnLeftDiscount.setAttribute('class', 'discount');
					summonBasicTenButton.appendChild(columnLeftDiscount);
			}
		columnLeft.appendChild(summonBasicOneButton);
		columnLeft.appendChild(summonBasicTenButton);
		
	let columnMiddle = document.createElement('div');
		columnMiddle.setAttribute('class', 'column');
		let columnMiddleTitle = document.createElement('p');
			columnMiddleTitle.innerText = 'Heroic Summon';
			columnMiddle.appendChild(columnMiddleTitle);
		let columnMiddlePoints = document.createElement('p');
			columnMiddlePoints.innerHTML = '999,999 ' + gemImage;
			columnMiddlePoints.setAttribute('class', 'points');
			columnMiddle.appendChild(columnMiddlePoints);
		canvas.appendChild(columnMiddle);
		let summonHeroicOneButton = document.createElement('button');
			summonHeroicOneButton.innerHTML = priceOneHeroic + 'x ' + gemImage;
			summonHeroicOneButton.setAttribute('onclick', 'heroicSummon(1)');
		let summonHeroicTenButton = document.createElement('button');
			summonHeroicTenButton.innerHTML = Math.floor((priceOneHeroic*10)/100*(100-discountHeroicSummon)) + 'x ' + gemImage;
			summonHeroicTenButton.setAttribute('onclick', 'heroicSummon(10)');
			if(discountHeroicSummon>0){
				let columnMiddleDiscount = document.createElement('p');
					columnMiddleDiscount.innerText = '-' + discountHeroicSummon + '%';
					columnMiddleDiscount.setAttribute('class', 'discount');
					summonHeroicTenButton.appendChild(columnMiddleDiscount);
			}
		columnMiddle.appendChild(summonHeroicOneButton);
		columnMiddle.appendChild(summonHeroicTenButton);
		
	let columnRight = document.createElement('div');
		columnRight.setAttribute('class', 'column');
		let columnRightTitle = document.createElement('p');
			columnRightTitle.innerText = 'Friend Summon';
			columnRight.appendChild(columnRightTitle);
		let columnRightPoints = document.createElement('p');
			columnRightPoints.innerHTML = '999 ' + friendImage;
			columnRightPoints.setAttribute('class', 'points');
			columnRight.appendChild(columnRightPoints);
		canvas.appendChild(columnRight);
		let summonFriendOneButton = document.createElement('button');
			summonFriendOneButton.innerHTML = priceOneFriend + 'x ' + friendImage;
			summonFriendOneButton.setAttribute('onclick', 'friendSummon(1)');
		let summonFriendTenButton = document.createElement('button');
			summonFriendTenButton.innerHTML = Math.floor((priceOneFriend*10)/100*(100-discountFriendSummon)) + 'x ' + friendImage;
			summonFriendTenButton.setAttribute('onclick', 'friendSummon(10)');
			if(discountFriendSummon>0){
				let columnRightDiscount = document.createElement('p');
					columnRightDiscount.innerText = '-' + discountFriendSummon + '%';
					columnRightDiscount.setAttribute('class', 'discount');
					summonFriendTenButton.appendChild(columnRightDiscount);
			}
		columnRight.appendChild(summonFriendOneButton);
		columnRight.appendChild(summonFriendTenButton);
	
	
	
	
}

function openArena() {
	backButton();
	canvas.setAttribute('class', 'arenaScreen');
}