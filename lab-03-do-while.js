let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
//Bai 1 
//cau a
let i=0
do{
    console.log('Phan Tu Thu : %s = %s',i+1,arr[i])
    i++
}while(arr[i]!==undefined)
//cau b
i=0
let Tong=0
do{
    Tong=Tong+arr[i]
    i++
}while(arr[i]!==undefined)
console.log('Tong Cac Phan Tu Trong Mang La %s',Tong)
//cau c
i=0
let Max=arr[0]
let Min=arr[0]
do{
    if(arr[i]>Max){
        Max=arr[i]
    }
    i++
}while(arr[i]!==undefined)
i=0
do{
    if(arr[i]<Min){
        Min=arr[i]
    }
    i++
}while(arr[i]!==undefined)
console.log('So Lon Nhat La %s Va So Nho Nhat La %s',Max,Min)
//cau d
let SoPhanTu=0
do{
    SoPhanTu=SoPhanTu+1
}while(arr[SoPhanTu]!==undefined)
let TrungBinhCong=Tong/SoPhanTu
console.log('Trung Binh Cong Cac Phan Trong Mang La %s',TrungBinhCong)
//cau e