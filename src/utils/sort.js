var sort = function(arr) {
};

/**
*冒泡排序
*
*/
sort.prototype.bubbleSort = function(arr) {
  let len = arr.length;
  for (let i = 0; i < len -1; i++) {
    for (let j = 0; j < len -1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        var tem = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = arr[j+1];
      }
    }
  }
  return arr;
};

/**
*选择排序
*
*/
sort.prototype.selectionSort = function(arr) {
  let minIndex,temp;
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = arr[i];
  }
  return arr;
};

/**
*插入排序
*
*/
sort.prototype.insertionSort = function(arr) {
  let len = arr.lenth;
  let preIndex,current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
};

/**
*希尔排序
*
*/
sort.prototype.shellSort = function(arr) { // 3， 1， 4, 2， 5， 6, 8, 9, 0， 7
  let len = arr.length,
    temp,
    gap = 1;
  while (gap < len / 3) {
    gap = gap*3 + 1; // 4
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) { // 步长4, 1
    console.log(gap + ".....gap");
    // for (let i = gap; i < len; i++) { // gap 4
    // 	temp = arr[i]; // 5
    // 	for (j = i - gap; j > 0 && arr[j] > temp; j-=gap) {
    // 		arr[j + gap] = arr[j]; // arr[4] = arr[0]
    // 	}
    // 	arr[j + gap] = temp;
    // }
    for (let i = gap; i < len; i++) {
      console.log(i + ".....i");
      /* 将a[i]插入到a[i-h]、a[i-2h]、a[i-3h]...中 */
      for (let j = i; j >= gap && (arr[j] < arr[j-gap]); j -= gap) {
        console.log(j + "...j");
        temp = arr[j];
        arr[j] = arr[j-gap];
        arr[j-gap] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
};


/**
*分治排序
*
*/
sort.prototype.mergeSort = function(arr) {  // 采用自上而下的递归方法
  var self = this;
  var len = arr.length;
  if (len < 2) {
    return arr;
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

sort.prototype.merge = function(left, right) {
  var result = [];
  while (left.length>0 && right.length>0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result;
};


/**
*快速排序
*
*/
sort.prototype.quickSort = function(arr, left, right) {
  var self = this;
  var len = arr.length,
    partitionIndex,
    left = typeof left != "number" ? 0 : left,
    right = typeof right != "number" ? len - 1 : right;

  if (left < right) {
    partitionIndex = self.partition(arr, left, right);
    self.quickSort(arr, left, partitionIndex-1);
    self.quickSort(arr, partitionIndex+1, right);
  }
  return arr;
};

sort.prototype.partition = function(arr, left ,right) {     // 分区操作
  var self = this;
  var pivot = left,                      // 设定基准值（pivot）
    index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      self.swap(arr, i, index);
      index++;
    }
  }
  self.swap(arr, pivot, index - 1);
  return index-1;
};

sort.prototype.swap = function(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};


/**
*计数排序
*
*/
sort.prototype.countingSort = function(arr, maxValue) {
  var bucket = new Array(maxValue + 1),
    sortedIndex = 0;
  arrLen = arr.length,
  bucketLen = maxValue + 1;

  for (var i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }

  for (var j = 0; j < bucketLen; j++) {
    while(bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }

  return arr;
};

module.exports = sort;
