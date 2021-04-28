function swap(a,i,j){
    temp = a[i];
    a[i] = a[j];
    a[j] = temp;    
}

function max_heapify(a,i,n){
    let left = 2*i;             
    let right = 2*i+1;          
    let maximum;
    if(right<n){                 
        if(a[left]>=a[right]){
            maximum = left;
        }
        else{
            maximum = right;
        }
    }
    else if(left<n){                
        maximum = left;
    }
    else return;                    
    if(a[i]<a[maximum]){            
        swap(a,i,maximum);          
        max_heapify(a,maximum,n);   
    }
    return;
}

function heapSort(a){
    let n = a.length;
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        max_heapify(a,i,n);            //Building max heap
    }
    for(let i = n-1;i>=0;i--){
        swap(a,0,i);              //Deleting root element
        max_heapify(a,0,i);           //Building max heap again
    }
    return a;
}

console.log(heapSort([-2, 5, 1, 6, 8, 3]));