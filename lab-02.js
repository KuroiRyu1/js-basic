//Bai 1

//cau a
function check(n){
    if(n<0){
        console.log('n la so am') 
    }
    else if(n>0){
        console.log('n la so duong')}
        else{console.log('n la so khong am khong duong')}
    }
check(0)
//cau b
function SoChanHayLe(a){
   let Ketqua=a%2
    if(Ketqua=0){
        console.log('a la so chan')
    }
    else{
        console.log('a la so le')
    }
}
SoChanHayLe(3)
//cau c
function Tim_So_Lon_Nhat(a,b,c){
    let Max=0
    if(Max<b){
        Max=b
}
    else if(Max<c){
        Max=c
}
else if(Max<a){
    Max=a
}
    if(Max=a){
        console.log('a la so lon nhat')
}
else if(max=c){
    console.log('c la so lon nhat')
}
else{console.log('b la so lon nhat')}
}
Tim_So_Lon_Nhat(9,5,6)
//cau d
function Tinh_Nam_Nhuan(a){
    let bonus=a%4
    let add=a%100
    if(bonus=0 & add!=0){
        console.log('nam',a,'la nam nhuan')
    }
    else{console.log('nam',a,'khong phai la nam nhuan')}
}
Tinh_Nam_Nhuan(2023)
//cau e
function Kiem_Tra_Nguyen_Am_Hay_Phu_Am(b){
    if(b='a' )
}
//Bai 2
function Phuong_Trinh_Bac_Hai(x,a,b,c){
    if(a=b=0){
        console.log('Phuong Trinh Vo Nghiem')
    }
    else if(a=0){
        console.log('Phuong trinh co mot nghiem la',-c/b)
    }
}

