const input = document.querySelector('.Input');
  let inputNum = '';

  document.querySelector('.val0').addEventListener('click', () => {
    inputNum += '0'
    document.querySelector('.Input input').value = inputNum
  })
  document.querySelector('.val1').addEventListener('click', () => {
    inputNum += '1'
    document.querySelector('.Input input').value = inputNum
  })

  document.querySelector('.convert-btn').addEventListener('click', () => {
    Bin2Dec(inputNum);
  });

  // Delete one digit from the binary number btn
  document.querySelector('.fa-delete-left').addEventListener('click', () => {
    inputNum = inputNum.slice(0, -1)
    document.querySelector('.Input input').value = inputNum
  })

  // Clear btn
  document.querySelector('.clear-btn').addEventListener('click', () => {
    inputNum = ''
    document.querySelector('.Input input').value = inputNum
    document.querySelector('.Output input').value = ''
  })

  const Bin2Dec = (n) => {
    if (inputNum === '') {
      document.querySelector('.Output input').value = '';
      return
    }
    // Check if the number is a valid binary number
    // if (n.length > 8) {
    //   return alert('You can not enter a binary number more than 8 digit');
    // }
    
    // Convert the binary to decimal
    let sum = 0;
    let j = 0;
    for (let i = n.length - 1; i >= 0; i--) {
      sum += n[i] * Math.pow(2, j);
      j++;
    }
    document.querySelector('.Output input').value = sum;
  };