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
const TanXuatXuatHien={}
for(i=0;i<DoDaiMang;i++){
    const PhanTuThuI=arr1[i];
    TanXuatXuatHien[PhanTuThuI]=(TanXuatXuatHien[PhanTuThuI]||0)+1;
}
console.log('=>>>',TanXuatXuatHien)
//cau g
for(i=DoDaiMang-1;i>=0;i--){
    arr1[i+1]=arr1[i]
}
arr1[0]=177
console.log(arr1)
//cau h
DoDaiMangMoi=arr1.length
let CheckTangDan=true
for(i=1;i<DoDaiMangMoi;i++){
    if(arr1[i+1]<arr1[i]){
        CheckTangDan=false
        break
    }
}
if(CheckTangDan===true){
    console.log('Day La Day So Tang Dan')
}
else{console.log('Day Khong Phai La Day So Tang Dan')}
//cau i
for(i=0;i<DoDaiMangMoi;i++){
    for(j=i+1;j<DoDaiMangMoi;j++){
        if(arr1[i]>arr1[j]){
        let tam=arr1[i];
        arr1[i]=arr1[j];
        arr1[j]=tam
    }
  }
}
console.log(arr1)
//cau j
for(i=0;i<DoDaiMangMoi;i++){
    for(j=i+1;j<DoDaiMangMoi;j++){
        if(arr1[i]<arr1[j]){
        let tam=arr1[i];
        arr1[i]=arr1[j];
        arr1[j]=tam
    }
  }
}
console.log(arr1)

//cau k
let SoChan=[]
let a=-1
for(i=0;i<DoDaiMangMoi;i++){
 if((arr1[i]%2)==0){
    a++
   SoChan[a]=arr1[i]
 }
}
console.log('Cac so chan trong mang la:',SoChan)
//cau l
let SoLe=[]
a=-1
for(i=0;i<DoDaiMangMoi;i++){
 if((arr1[i]%2)!=0){
    a++
   SoLe[a]=arr1[i]
 }
}
console.log('Cac so le trong mang la:',SoLe)
//Bai 2
arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
let Tong={}
a=0
let DoDaiMangHai=arr2.length
for(i=0;i<=DoDaiMangHai;i++){
    Tong=arr2[i]+arr2[i+1]
    if(Tong==10){
        console.log('So %s Va So %s Co Tong =10',arr2[i],arr2[i+1])
    }
}
console.log(DoDaiMangHai)