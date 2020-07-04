const deleteNth = (lst, N) => {
    const res = [];
    const countNums = {};
  
    lst.forEach((el, idx) => {
      countNums[el] = countNums[el] ? countNums[el] + 1 : 1;
      if(countNums[el] <= N) {
        res.push(el);
      }
    })
  
    return res;
  }
  
  console.log(deleteNth([1,1,1,1],2));
