localStorage.setItem('bannerLastClosed', new Date()); 
localStorage.setItem('xpromo-consolidation', new Date()); 

setTimeout(function () {
  console.log('reddlimit started');
  
  var elementsToRemove = document.querySelectorAll(".OuterBannerContainer,.XPromoBottomBar,.PaginationButtons");
  for (var i =0; i<elementsToRemove.length; i++){
    elementsToRemove[i].remove();
  }

  console.log('reddlimit finished');
}, 5000)


