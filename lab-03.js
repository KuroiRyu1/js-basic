//Bai 1
//cau a
arr=[3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let DoDaiMang=arr.length
for(i=0;i<DoDaiMang;i=i+1){
    console.log('Phan tu thu:',i,':',arr[i])
}
//cau b
let TongPhanTu=0
for(let a=0;a<DoDaiMang;a=a+1){
    TongPhanTu=TongPhanTu+arr[a]
}
console.log('Tong Cac Phan Tu Trong Mang La:',TongPhanTu)
//cau c
let Max=0
let Min=1000
for(let n=0;n<DoDaiMang;n=n+1){
    if(arr[n]>Max){
        Max=arr[n]
    }
    if(arr[n]<Min){
        Min=arr[n]
    }
}
console.log('So Lon Nhat La:',Max,', So Nho Nhat La:',Min)
//cau d
let TrungBinhCong=0
for(let b=0,a=1;b<DoDaiMang&a<DoDaiMang;b=b+1,a=a+1){
    TrungBinhCong=(arr[a]+arr[b])/2
    console.log('Trung Binh Cong Phan Tu Thu',b,'va',a,'la',TrungBinhCong)
}
//cau e
let dau=0
let cuoi=DoDaiMang-1
let giua=0
for(dau,cuoi,u=0;dau<cuoi&cuoi>0;dau=dau+1,cuoi=cuoi-1){
    giua=arr[dau]
    arr[dau]=arr[cuoi]
    arr[cuoi]=giua
}
console.log(arr)
//cau f
let luu=0
let n=0
let solanxuathien=0
for(luu;n<DoDaiMang;n=n+1){
}