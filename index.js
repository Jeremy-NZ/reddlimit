setTimeout(function () {
  console.log('reddlimit started');
  
  var elementsToRemove = document.querySelectorAll(".XPromoPopupRpl, .OuterBannerContainer,.XPromoBottomBar,.PaginationButtons");
  for (var i =0; i<elementsToRemove.length; i++){
    elementsToRemove[i].remove();
  }

  console.log('reddlimit finished');
}, 5000)


