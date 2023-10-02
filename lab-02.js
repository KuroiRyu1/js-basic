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
    if(b=='a'||b=='u'||b=='i'||b=='e'||b=='o'){
        console.log('do la nguyen am')
    }
    else{console.log('do la phu am')}
}
Kiem_Tra_Nguyen_Am_Hay_Phu_Am('a')
//Bai 2
function Phuong_Trinh_Bac_Hai(a,b,c){
    let delta=b*b-4*a*c
    if(delta<0){
        console.log('phuong trinh vo nghiem')
    }
    else if(delta==0){
        const x1=(-b)/(2*a)
        return x1,
        console.log('phuong trinh co nghiem kep',x1)
    }
    else if(delta>0){
        const x1=(-b+(Math.sqrt(delta)))/(2*a)
        const x2=(-b-(Math.sqrt(delta)))/(2*a)
        return x1,x2,
        console.log('phuong trinh co 2 nghiem x1=',x1,"va x2=",x2)
    }
}
Phuong_Trinh_Bac_Hai(4,2,7)
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
//cau c
function Xep_Hang(diemkiemtra,diemthigiuaki,diemthicuoiki){
    let diemtrungbinh=(diemkiemtra+diemthigiuaki*2+diemthicuoiki*3)/6
    if(diemtrungbinh>=9){
        console.log('Hang A')
    }
    else if(diemtrungbinh>=7&diemtrungbinh<9){
        console.log('Hang B')
    }
    else if(diemtrungbinh>=5&diemtrungbinh<7){
        console.log('Hang C')
    }
    else if(diemtrungbinh<5){
        console.log('Hang F')
    }
}
Xep_Hang(2,4,8)
//cau d
function Tinh_Gia_Cuoc_DT(thoigian){
    let thuebao=25000
    if(thoigian<50){
        let chiphi=thuebao+thoigian*600
        console.log('Gia Thue Bao:',chiphi)
    }
    else if(thoigian>50&thoigian<=200){
        let chiphi=thuebao+50*600+(thoigian-50)*400
        console.log('Gia Thue Bao:',chiphi)
    }
    else if(thoigian>200){
        let chiphi=thuebao+50*600+150*400+(thoigian-200)*200
        console.log('Gia Thue Bao:',chiphi)
    }
}
Tinh_Gia_Cuoc_DT(70)
