function animate(callback,arr){
  animate.isAnimating = true;
  let maxDiff = -1;
  let count = 0;
  arr.forEach(value => {
    let {
      start,end 
    } = value;
    let diff = Math.abs(end - start);
    if(diff > maxDiff){
      maxDiff = diff;
    }
  });

  function wrappedCallback(){
    callback(arr);
    count += 1;
    arr.forEach((v,i,a) => {
      if(a[i].reverse && (a[i].start > a[i].end)){
        a[i].start = a[i].start - 1;
      } else if(!a[i].reverse && (a[i].end > a[i].start)){
        a[i].start = a[i].start + 1;
      }
    });

    if(count >= maxDiff) {
      animate.isAnimating = false;
      window.cancelAnimationFrame(animationFrameHandler)
    } else {
      window.requestAnimationFrame(wrappedCallback);
    } 
  }
  const animationFrameHandler = window.requestAnimationFrame(wrappedCallback);
}

export { animate }