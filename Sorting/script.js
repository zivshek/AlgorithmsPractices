// helpers
function generateRandomArray(count, min = 0, max = 1000) {
    let array = new Array(count);
    for (let i = 0; i < count; i++) {
        array[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return array;
}

function generateSortedArray(count) {
    let array = new Array(count);
    for (let i = 0; i < count; i++) {
        array[i] = i;
    }
    return array;
}

function swap(array, i1, i2){
    let temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
}

let sameRandomArray = generateRandomArray(1000);
let sameSortedArray = generateSortedArray(1000);

// sorting functions
function bubbleSort(arr) {
    // copy the array so the original array won't get changed
    let array = arr.slice();
    
    if (array.length < 2)
        return array;
    
    let swapped;
    let startTime = new Date();
    
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
    
    let endTime = new Date();
    console.log(`${arguments.callee.name} time used: ${endTime - startTime} ms`);
    return array;
}


function selectionSort(arr) {
    let array = arr.slice();
    if (array.length < 2)
        return array;

    let currStartIndex = 0;

    let startTime = new Date();

    while (currStartIndex != array.length - 2){

        let smallestIndex = currStartIndex;
        for (let i = currStartIndex; i < array.length; i++){
            if (array[i] < array[smallestIndex]){
                smallestIndex = i;
            }
        }

        // swap with currStartIndex
        swap(array, currStartIndex, smallestIndex);
        currStartIndex++;
    }

    let endTime = new Date();
    console.log(`${arguments.callee.name} time used: ${endTime - startTime} ms`);

    return array;
}


function insertionSort(arr){
    let array = arr.slice();
    if (array.length < 2)
        return array;

    let startTime = new Date();

    for (let i = 1; i < array.length; i++){
        for (let j = i; j > 0; j--){
            if (array[j] < array[j-1]){
                swap(array, j, j-1);
            }
        }
    }

    let endTime = new Date();
    console.log(`${arguments.callee.name} time used: ${endTime - startTime} ms`);

    return array;
}


function heapSort(arr){
    let array = arr.slice();
    if (array.length < 2)
        return array;

    let startTime = new Date();
    
}



function allOfThem(array) {
    bubbleSort(array);
    selectionSort(array);
    insertionSort(array);
}


