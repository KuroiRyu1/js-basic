//cau a
arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let i=0
while(arr[i]!==undefined){
    console.log('Phan Tu Thu :%s = %s',i,arr[i])
    i++
}
//cau b
i=0
let tong=0
while(arr[i]!==undefined){
    tong=tong+arr[i]
    i++
}
console.log('Cau b Tong Cac Phan Tu Trong Mang la %s',tong)
//cau c
let Max=arr[0]
let Min=arr[0]
i=0
while(arr[i] !==undefined){
    if(arr[i]>Max){
        Max=arr[i]
    }
    if(arr[i]<Min){
        Min=arr[i]
    }
    i++
}
console.log('So Lon NHat La %s Va So Nho Nhat La %s',Max,Min)
//cau d
SoPhanTu=0
while(arr[SoPhanTu]!==undefined){
    SoPhanTu=SoPhanTu+1
}
const TrungBinhCong=tong/SoPhanTu
console.log('Trung Binh Cong Cac Phan Tu Trong Mang La: %s',TrungBinhCong)
//cau e
let arr1=[]
let n=0
i=SoPhanTu-1
while((arr[i]!==undefined) &n<SoPhanTu){
    arr1[n]=arr[i]
    i--
    n++
}
console.log('Doi Chieu Mang %s',arr1)
// cau f
const TanSuatXuatHien={}
i=0
while(arr[i]!==undefined){
    const PhanTuThuI=arr[i];
    TanSuatXuatHien[PhanTuThuI]=(TanSuatXuatHien[PhanTuThuI]||0)+1;
    i++
}
console.log('%s',TanSuatXuatHien)
// cau g
i=SoPhanTu-1
while(i>=0){
    arr[i+1]=arr[i]
    i--
}
arr[0]=177
console.log('%s',arr)
//cau h
i=0
let CheckTangDan=true
while(arr[i]!==undefined){
    if(arr[i+1]<arr[i]){
        CheckTangDan=false
        break
    }
    i++
}
if(CheckTangDan==true){
    console.log('Day La Day So Tang Dan')
}
else{console.log('Day Khong Phai La Day So Tang Dan')}
//cau i
i=0
while(arr[i]!==undefined){
   let j=i+1
    while(arr[j]!==undefined){
        if(arr[i]>arr[j]){
            let tam=arr[i]
            arr[i]=arr[j]
            arr[j]=tam
        }
    j++
    }
    i++
}
console.log('Sap Xep Theo Thu Tu Tang Dan : %s',arr)
//cau j
i=0
while(arr[i]!==undefined){
   let j=i+1
    while(arr[j]!==undefined){
        if(arr[i]<arr[j]){
            let tam=arr[i]
            arr[i]=arr[j]
            arr[j]=tam
        }
    j++
    }
    i++
}
console.log('Sap Xep Theo Thu Tu Giam Dan : %s',arr)
//cau k
let SoChan=[]
i=0
n=-1
while(arr[i]!==undefined){
    if((arr[i]%2)==0){
        n++
        SoChan[n]=arr[i]
    }
    i++
}
console.log('So Chan Gom: %s',SoChan)
//cau l
let SoLe=[]
i=0
n=-1
while(arr[i]!==undefined){
    if((arr[i]%2)!==0){
        n++
        SoLe[n]=arr[i]
    }
    i++
}
console.log('So Le Gom: %s',SoLe)
//Bai 2
//cau a
i=0
n=0
let arr2=[5, -2, 5, -6, 23, 69, 100, -13, 10, 0,14]
while(arr2[i]!==undefined){
    while(arr2[n]!==undefined){
        if((arr2[i]+arr2[n])==10){
            console.log('Hai So %s Va So %s Co Tong La 10',arr2[i],arr2[n])
        }
        n++
    }
    i++
    n=i+1
}
//cau b
i=0
n=1
let del=0
while(arr2[i]!==undefined){
    while(arr2[n]!==undefined){
        if(arr2[i]==arr2[n]){
            o=n
            p=o+1
            del=del+1
            while(arr2[o]!==undefined){
                arr2[o]=arr2[p]
                p++
                o++
            }
        }
        n++
    }
    i++
}
arr2.length=arr2.length-del
console.log('%s',arr2)
//cau d
let Max1=0
let Max3=0
let Max2=0
i=0,n=0,o=0
while(arr2[i]!==undefined){
    if(arr2[i]>Max1){
        Max1=arr2[i]
    }
    i++
}
while(arr2[n]!==undefined){
    if(arr2[n]<Max1&arr2[n]>Max2){
        Max2=arr2[n]
    }
    n++
}
while(arr2[o]!==undefined){
    if(arr2[o]<Max2&arr2[o]>Max3){
        Max3=arr2[o]
    }
    o++
}
let TongMax=Max1+Max2+Max3
console.log('Tong 3 So Lon Nhat Trong Mang La %s',TongMax)
//cau e
let TrungBinhMax=TongMax/3
console.log('Trung Binh Cong Ba So Lon Nhat Trong Mang la %s',TrungBinhMax)
//cau f
i=0,Max=0
o=0,Min=arr2[0]
while(arr2[i]!==undefined){
    if(arr2[i]>Max){
        Max=arr2[i]
    }
    i++
}
while(arr2[o]!==undefined){
    if(arr2[o]<Min){
        Min=arr2[o]
    }
    o++
}
let DoChenhLech=Max-Min
console.log('Do Lech Lon Nhat La %s ',DoChenhLech)