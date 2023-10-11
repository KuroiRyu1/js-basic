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
let DoDaiMangHai=arr2.length
//cau a
for(i=0;i<=DoDaiMangHai;i++){
    for(n=i+1;n<=DoDaiMangHai;n++){
        if((arr2[i]+arr2[n])==10){
            console.log('So %s Va So %s Co Tong =10',arr2[i],arr2[n])
        }
    }
}
//cau b
i=0
n=1
for(i=0;i<=DoDaiMangHai;i++){
    for(n=i+1;n<=DoDaiMangHai;n++){
        if(arr2[i]==arr2[n]){
            for(o=n,p=n+1;o<DoDaiMangHai;o++,p++){
                arr2[o]=arr2[p]
            }
        }
    }
}
console.log(arr2)
//cau d
let Max1=0
let Max2=0
let Max3=0
for(i=0;i<DoDaiMangHai;i++){
    if(arr2[i]>Max1){
        Max1=arr2[i]
    }    
}
for(n=0;n<DoDaiMang;n++){
    if(arr2[n]>Max2&arr2[n]<Max1){
        Max2=arr2[n]
    }
}
for(o=0;o<DoDaiMangHai;o++){
    if(arr2[o]>Max3&arr2[o]<Max2){
        Max3=arr2[o]
    }
}
console.log(Max1,Max2,Max3)
let TongMax=Max1+Max2+Max3
console.log('Tong Ba So Lon Nhat La : %s',TongMax)
//cau e
let TrungBinhCongMax=TongMax/3
console.log('Trung Binh Cong Ba So Lon Nhat La : %s',TrungBinhCongMax)
//cau f
Max=0
Min=0
for(i=0;i<DoDaiMangHai;i++){
    if(arr2[i]>Max){
        Max=arr2[i]
    }
}
for(n=0;n<DoDaiMangHai;n++){
    if(arr2[n]<Min){
        Min=arr2[n]
    }
}
let DoChenhLechMax=Max-Min
console.log('Do Chenh Lech Lon Nhat Giua Cac Phan Tu La %s',DoChenhLechMax)