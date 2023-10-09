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
//test f
let tanxuat=0
for(i=0;i<DoDaiMang;i++){
    let i
        giatri=arr1[i],
        tanxuat=tanxuat+1
}
//f2
const TanXuatXuatHien = {};
for(i=0;i<DoDaiMang;i++){
    const PhanTuThuI=arr[i];
    TanXuatXuatHien[PhanTuThuI] = (TanXuatXuatHien[PhanTuThuI]|| 0) + 1;
}

console.log('=>>>>',TanXuatXuatHien)
i=0
let j=i+1
console.log(i,j)
i=10
console.log(j)
//
let arr2=[5, -2, 5, -6, 23, 69, 100, -13, 10, 0,14]
i=0
let Max1=100
let Max2=0
while(arr2[n]!==undefined){
    if(arr2[n]<Max1&arr2[n]>Max2){
        Max2=arr2[n]
    }
    n++
}
console.log(Max2)