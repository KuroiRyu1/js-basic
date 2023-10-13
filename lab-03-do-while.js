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
let arr1=[]
let n=0
i=SoPhanTu-1
do{
    arr1[n]=arr[i]
    i--
    n++
}while((arr[i]!==undefined) &n<SoPhanTu)
console.log('Doi Chieu Mang %s',arr1)
//cau f
const TanSuatXuatHien={}
i=0
do{
    const PhanTuThuI=arr[i];
    TanSuatXuatHien[PhanTuThuI]=(TanSuatXuatHien[PhanTuThuI]||0)+1;
    i++
}while(arr[i]!==undefined)
console.log('%s',TanSuatXuatHien)
//cau g
i=SoPhanTu-1
do{
    arr[i+1]=arr[i]
    i--
}while(i>=0)
arr[0]=177
console.log('%s',arr)
//cau h
i=0
let CheckTangDan=true
do{
    if(arr[i+1]<arr[i]){
        CheckTangDan=false
        break
    }
    i++
}
while(arr[i]!==undefined)
if(CheckTangDan==true){
    console.log('Day La Day So Tang Dan')
}
else{console.log('Day Khong Phai La Day So Tang Dan')}
//cau i
i=0
do{
    let j=i+1
    do{
        if(arr[i]>arr[j]){
            let tam=arr[i]
            arr[i]=arr[j]
            arr[j]=tam
        }
    j++
    }
    while(arr[j]!==undefined)
    i++
}
while(arr[i]!==undefined)
console.log('Sap Xep Theo Thu Tu Tang Dan : %s',arr)
//cau j
i=0
do{
    let j=i+1
    do{
        if(arr[i]<arr[j]){
            let tam=arr[i]
            arr[i]=arr[j]
            arr[j]=tam
        }
    j++
    }
    while(arr[j]!==undefined)
    i++
}
while(arr[i]!==undefined)
console.log('Sap Xep Theo Thu Tu Giam Dan : %s',arr)
//cau k
let SoChan=[]
i=0
n=-1
do{
    if((arr[i]%2)==0){
        n++
        SoChan[n]=arr[i]
    }
    i++
}
while(arr[i]!==undefined)
console.log('So Chan Gom: %s',SoChan)
//cau l
let SoLe=[]
i=0
n=-1
do{
    if((arr[i]%2)!==0){
        n++
        SoLe[n]=arr[i]
    }
    i++
}
while(arr[i]!==undefined)
console.log('So Le Gom: %s',SoLe)
//Bai 2
arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
//cau a
i=0
n=i+1
do{
    do{
        if((arr2[i]+arr2[n])==10){
           console.log('So %s Va So %s Co Tong Bang 10',arr2[i],arr2[n])
        }
        n++
    }while(arr2[n]!==undefined)
    i++
    n=i+1
}while(arr2[i]!==undefined)
//cau b
i=0
n=1
let del=0
do{
    do{
        if(arr2[i]==arr2[n]){
            let o=n
            let p=o+1
            del=del+1
            do{
                arr2[o]=arr2[p]
                p++
                o++
            }
            while(arr2[o]!==undefined)
        }
        n++
    }while(arr2[n]!==undefined)
    i++
}while(arr2[i]!==undefined)
arr2.length=arr2.length-del
console.log('%s',arr2)
//cau d
let Max1=0
let Max2=arr2[0]
let Max3=arr2[0]
i=0
n=0
let o=0
do{
    if(arr2[i]>Max1){
        Max1=arr2[i]
    }
    i++
}while(arr2[i]!==undefined)
do{
    if(arr2[n]>Max2&arr2[n]<Max1){
        Max2=arr2[n]
    }
    n++
}while(arr2[n]!==undefined)
do{
    if(arr2[o]>Max3&arr2[o]<Max2){
        Max3=arr2[o]
    }
    o++
}while(arr2[o]!==undefined)
let TongMax=Max1+Max2+Max3
console.log('Tong Ba So Lon Nhat Trong Mang La : %s',TongMax)
//cau e
let TrungBinhCongMax=(Max1+Max2+Max3)/3
console.log('Trung Binh Cong Ba So Lon Nhat La %s',TrungBinhCongMax)
//cau f
i=0
n=0
Max=arr2[0],Min=arr2[0]
do{
    if(arr2[i]>Max){
        Max=arr2[i]
    }
    i++
}while(arr2[i]!==undefined)
do{
    if(arr2[n]<Min){
        Min=arr2[n]
    }
    n++
}while(arr2[n]!==undefined)
let DoChenhLechMax=Max-Min
console.log('Do Chenh Lech Lon Nhat Giua Cac Phan Tu Trong Mang La %s',DoChenhLechMax)