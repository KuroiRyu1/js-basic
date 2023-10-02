//Bai 1
//cau a
arr=[3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let DoDaiMang=arr.length
for(i=0;i<DoDaiMang;i=i+1){
    console.log('Phan tu thu %s = %s',i+1,arr[i])
}
//cau b
let TongPhanTu=0
for(i=0;i<DoDaiMang;i=i+1){
    TongPhanTu=TongPhanTu+arr[i]
}
console.log('Cau b :Tong Cac Phan Tu Trong Mang La:%s',TongPhanTu)
//cau c
let Max=0
let Min=arr[0]
for(let n=0;n<DoDaiMang;n=n+1){
    if(arr[n]>Max){
        Max=arr[n]
    }
    if(arr[n]<Min){
        Min=arr[n]
    }
}
console.log('So Lon Nhat La: %s Va So Nho Nhat La: %s',Max,Min)
//cau d
const TrungBinhCong=TongPhanTu/DoDaiMang
console.log('Trung Binh Cong Cac Phan Tu Trong Mang La: %s',TrungBinhCong)
//cau e
let arr1=[]
for(let i=DoDaiMang-1,n=0;i>=0&n<DoDaiMang;i--,n++){
    arr1[n]=arr[i]
}
console.log(arr1)
//cau f
let giongnhau=0
let ketqua=[]
for(n=0;n<DoDaiMang;n++){
    let 
}