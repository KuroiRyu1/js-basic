arr=[3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let arr1=[]
let DoDaiMang=arr.length
let n=0
//cach 1
for(let i=DoDaiMang-1,n=0;i>=0&n<DoDaiMang;i--,n++){
    arr1[n]=arr[i]
}
console.log(arr1)
//cach 2
let dau=0
let cuoi=DoDaiMang-1
let giua=0
for(dau,cuoi,u=0;dau<cuoi&cuoi>0;dau++,cuoi--){
    giua=arr[dau]
    arr[dau]=arr[cuoi]
    arr[cuoi]=giua
}
console.log(arr)