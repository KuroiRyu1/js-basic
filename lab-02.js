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
    let Max=a
   if(a>b&a>c){
    console.log('a la so lon nhat')}
   if(b>c&b>a){
    console.log('b la so lon nhat')
   }
   if(c>b&c>a){
    console.log('c la so lon nhat')
   }
}
Tim_So_Lon_Nhat(4,5,6)
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
    if(b='a'||'u'||'i'||'e'||'o'){
        console.log('do la nguyen am')
    }
    else{console.log('do la phu am')}
}
Kiem_Tra_Nguyen_Am_Hay_Phu_Am('a')
//Bai 2
function Phuong_Trinh_Bac_Hai(x,a,b,c){
    if(a=b=0){
        console.log('Phuong Trinh Vo Nghiem')
    }
    if(a=0){
        console.log('Phuong trinh co mot nghiem la',-c/b)
    }
    if(b*b-4*a*c<0){
        console.log('phuong trinh vo nghiem')
    }
    else{console.log('phuong trinh co 2 nghiem la',)}
}
// cau b
function Tinh_Thue(thunhap){
    let thue=10
    function out(){
        console.log('thue la',thue)
    }
    if(thunhap>20){
        thue=20
        out()
    }
    if(8<thunhap<15){
        thue=15
        out()
    }
    if(thunhap<8){
        thue=0
        out()
    }
}
Tinh_Thue(10)
