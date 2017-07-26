function main(){
        
        var canvas = document.getElementById("movel_alentejano");
        var c = canvas.getContext("2d");
                        
        fundobranco(c);
        c.fillStyle = "#BAC1CB"
        c.fill();

        fundoazul(c);
        c.fillStyle = "#1C295D";
        c.fill();

        chao(c);
        c.fillStyle = "#46433E";
        c.fill();

        topodireito(c);
        c.fillStyle = "#5F7BA2";
        c.fill();

        topoesquerdo(c);
        c.lineWidth = 0.4;
        c.fillStyle = "#D1D1D1";
        c.fill();
        c.strokeStyle = "#9F9F9B";
        c.stroke();

        ladoesquerdo(c);
        c.lineWidth = 0.02;
        c.fillStyle = "#CCCDD1";
        c.fill();

        pesquerdo(c);
        c.fillStyle = "#495E7C";
        c.fill();

        pedireito(c);
        c.fillStyle = "#4F5A6C";
        c.fill();

        ladodireito(c);
        c.lineWidth = 0.02; 
        c.fillStyle = "#5F7BA2";
        c.fill();

        relevodireitabaixo(c);
        c.fillStyle = "#7294C1";
        c.fill();

        relevodireitacima(c);
        c.fillStyle = "#566989";
        c.fill();

        gaveta1(c);

        gaveta2(c);

        gaveta3(c);

        centro_lado_direito(c);

        relevocimagaveta1(c);
        c.fillStyle = "#D8D7D3";
        c.fill();

        relevodireitagaveta1(c);
        c.fillStyle = "#839DB6";
        c.fill();

        sombragaveta1(c);
        c.fillStyle = "#7889A5";
        c.fill();

        relevocimagaveta2(c);
        c.fillStyle = "#D8D7D3";
        c.fill();

        relevodireitagaveta2(c);
        c.fillStyle = "#839DB6";
        c.fill();

        sombragaveta2(c);
        c.fillStyle = "#7889A5";
        c.fill();

        relevocimagaveta3(c);
        c.fillStyle = "#D8D7D3";
        c.fill();

        relevodireitagaveta3(c);
        c.fillStyle = "#839DB6";
        c.fill();

        sombragaveta3(c);
        c.fillStyle = "#7889A5";
        c.fill();

        puxador1(c);
        c.lineWidth = 0.5;
        c.fillStyle = "#C0C9D0";
        c.fill();
        c.strokeStyle = "grey";
        c.stroke();

        puxador2(c);
        c.lineWidth = 0.5;
        c.fillStyle = "#C0C9D0";
        c.fill();
        c.strokeStyle = "grey";
        c.stroke();

        puxador3(c);
        c.lineWidth = 0.5;
        c.fillStyle = "#C0C9D0";
        c.fill();
        c.strokeStyle = "grey";
        c.stroke();

        borda_gaveta1(c);
                
        flores_gaveta1(c);
                
        borda_gaveta2(c);
                
        flores_gaveta2(c);
                
        borda_gaveta3(c);
                
        flores_gaveta3(c);
                
        borda_esquerda(c);
                
        flores_direita(c);

        folhasgaveta1(c);

        folhasgaveta2(c);

        folhasgaveta3(c);  

        folhasladodireito(c);

        florosagaveta1(c);
        
        florazulgaveta2(c);

        florosagaveta3(c);

        florazulladodireito(c);

        floramrelaladodireito(c);

        florosaladodireito(c);

}

                    function fundobranco(fb) {
                        //Parede Branca
                        fb.beginPath();
                        fb.moveTo(0,0);
                        fb.lineTo(336,0);
                        fb.lineTo(336,121);
                        fb.lineTo(11,125)
                        fb.quadraticCurveTo(8,129,4,126);
                        fb.lineTo(0,128);
                        fb.lineTo(0,0);
                        fb.closePath();
                    
                    }

                    function fundoazul(fa){
                        fa.beginPath();
                        fa.moveTo(0,126);
                        fa.quadraticCurveTo(10,128,10,125);
                        fa.lineTo(336,118);
                        fa.lineTo(336,384);
                        fa.lineTo(0,391);
                        fa.lineTo(0,128);
                        fa.closePath();
                    
                    }

                    function chao(ch){
                        ch.beginPath();
                        ch.moveTo(0,391);
                        ch.lineTo(336,383);
                        ch.lineTo(336,448);
                        ch.lineTo(0,448);
                        ch.lineTo(0,391);
                        ch.closePath();

                    }

                    function topodireito(td){
                        td.beginPath();
                        td.moveTo(168,17);
                        td.lineTo(334,15);
                        td.lineTo(334,25);
                        td.lineTo(168,31);
                        td.lineTo(168,17);
                        td.closePath();

                    }

                    function topoesquerdo(te){
                        te.beginPath();
                        te.moveTo(8,12);
                        te.lineTo(168,17);
                        te.lineTo(168,31);
                        te.lineTo(9,23);
                        te.lineTo(8,12);
                        te.closePath();
                    
                    }

                    function ladoesquerdo(le){
                        le.beginPath();
                        le.moveTo(19,23);
                        le.lineTo(172,31);
                        le.lineTo(171,448);
                        le.lineTo(155,448);
                        le.lineTo(155,434);
                        le.quadraticCurveTo(144,416,127,417);
                        le.lineTo(124,410);
                        le.quadraticCurveTo(104,407,95,396);
                        le.quadraticCurveTo(86,398,69,381);
                        le.bezierCurveTo(67,386,54,371,45,373);
                        le.lineTo(47,448);
                        le.lineTo(39,447);
                        le.lineTo(31,361);
                        le.lineTo(19,23);
                        le.closePath();
                    
                    }

                    function pesquerdo(pe) {

                        pe.beginPath();
                        pe.moveTo(45,373);
                        pe.lineTo(47,448);
                        pe.lineTo(61,448);
                        pe.lineTo(61,379);
                        pe.quadraticCurveTo(54,371,45,373);
                        pe.closePath();

                    }

                    function pedireito(pd) {
                        pd.beginPath();
                        pd.moveTo(283,381);
                        pd.lineTo(300,373);
                        pd.lineTo(295,448);
                        pd.lineTo(282,448);
                        pd.lineTo(283,381);                
                        pd.closePath();

                    }
                    
                    function ladodireito(ld){
                        ld.beginPath();
                        ld.moveTo(172,31);
                        ld.lineTo(171,448);
                        ld.lineTo(187,448);
                        ld.lineTo(188,423);
                        ld.lineTo(300,373);
                        ld.lineTo(295,448);
                        ld.lineTo(306,448);
                        ld.lineTo(314,369);
                        ld.lineTo(330,25);
                        ld.lineTo(172,31);
                        ld.closePath();
                    
                    }

                    function relevodireitabaixo(rdb){
                        rdb.beginPath();
                        rdb.moveTo(188,402);
                        rdb.lineTo(304,355);
                        rdb.lineTo(297,349);
                        rdb.lineTo(188,394);
                        rdb.lineTo(188,402);
                        rdb.closePath();
                    
                    }

                    function relevodireitacima(rdc){
                        rdc.beginPath();
                        rdc.moveTo(190,61);
                        rdc.lineTo(190,57);
                        rdc.lineTo(313,50);
                        rdc.lineTo(312,68);
                        rdc.lineTo(309,93);
                        rdc.lineTo(309,52);
                        rdc.lineTo(190,61);
                        rdc.closePath();
                    }

                    function centro_lado_direito(cld){
                        //rectangulo de dentro
                        cld.beginPath();
                        cld.moveTo(199,75);
                        cld.lineTo(300,66);
                        cld.lineTo(289,341);
                        cld.lineTo(198,376);
                        cld.lineTo(199,75);
                        cld.lineWidth = 0.8;
                        cld.fillStyle = "#6885AD";
                        cld.fill();
                        cld.strokeStyle = "#0A204F";
                        cld.stroke();
                        cld.closePath();

                        //rectangulo de fora
                        cld.beginPath();
                        cld.moveTo(191,61);
                        cld.lineTo(308,53);
                        cld.lineTo(296,350);
                        cld.lineTo(189,394);
                        cld.lineTo(296,350);
                        cld.moveTo(191,61);
                        cld.closePath();
                        cld.lineWidth = 0.9 ;
                        cld.strokeStyle = "";
                        cld.stroke();
                        cld.closePath();

                    }

                    function relevocimagaveta1(rcg1){
                        rcg1.beginPath();
                        rcg1.moveTo(22,54);
                        rcg1.lineTo(26,48);
                        rcg1.lineTo(152,57);
                        rcg1.lineTo(140,64);
                        rcg1.lineTo(22,54);
                        rcg1.closePath();

                    }

                    function relevodireitagaveta1(rdg1){
                        rdg1.beginPath();
                        rdg1.moveTo(143,63);
                        rdg1.lineTo(144,161);
                        rdg1.lineTo(153,167);
                        rdg1.lineTo(153,57);
                        rdg1.lineTo(143,63);
                        rdg1.closePath();

                    }

                    function sombragaveta1(sg1){
                        sg1.beginPath();
                        sg1.moveTo(153,166);
                        sg1.lineTo(159,167);
                        sg1.lineTo(158,60);
                        sg1.lineTo(153,64);
                        sg1.lineTo(153,166);
                        sg1.closePath();
                    
                    }

                    function relevocimagaveta2(rcg2){
                        rcg2.beginPath();
                        rcg2.moveTo(24,162);
                        rcg2.lineTo(28,156);
                        rcg2.lineTo(155,185);
                        rcg2.lineTo(144,194);
                        rcg2.lineTo(24,162);
                        rcg2.closePath();

                    }

                    function relevodireitagaveta2(rdg2){
                        rdg2.beginPath();
                        rdg2.moveTo(144,193);
                        rdg2.lineTo(145,285);
                        rdg2.lineTo(153,290);
                        rdg2.lineTo(153,188);
                        rdg2.lineTo(144,193);
                        rdg2.closePath();

                    }

                    function sombragaveta2(sg2){
                        sg2.beginPath();
                        sg2.moveTo(153,289);
                        sg2.lineTo(160,290);
                        sg2.lineTo(159,189);
                        sg2.lineTo(153,192);
                        sg2.lineTo(153,289);
                        sg2.closePath();
                    
                    }

                    function relevocimagaveta3(rcg3){
                        rcg3.beginPath();
                        rcg3.moveTo(32,265);
                        rcg3.lineTo(36,258);
                        rcg3.lineTo(157,308);
                        rcg3.lineTo(148,312);
                        rcg3.lineTo(32,265);
                        rcg3.closePath();

                    }

                    function relevodireitagaveta3(rdg3){
                        rdg3.beginPath();
                        rdg3.moveTo(149,314);
                        rdg3.lineTo(150,398);
                        rdg3.lineTo(157,402);
                        rdg3.lineTo(158,309);
                        rdg3.lineTo(149,314);
                        rdg3.closePath();

                    }

                    function sombragaveta3(sg3){
                        sg3.beginPath();
                        sg3.moveTo(157,401);
                        sg3.lineTo(160,401);
                        sg3.lineTo(160,311);
                        sg3.lineTo(158,312);
                        sg3.lineTo(157,401);
                        sg3.closePath();
                    }

                    function gaveta1(g1){
                        //recatngulo de fora
                        g1.beginPath();
                        g1.moveTo(24,56);
                        g1.lineTo(142,66);
                        g1.lineTo(143,159);
                        g1.lineTo(25,134);
                        g1.lineTo(24,56);
                        g1.lineWidth = 1;
                        g1.fillStyle = "#CCCCCC";
                        g1.fill();
                        g1.strokeStyle = "#1C326C";
                        g1.stroke();
                        g1.closePath();

                        //Rectangulo de dentro
                        g1.beginPath();
                        g1.moveTo(31,67);
                        g1.lineTo(133,78);
                        g1.lineTo(132,144);
                        g1.lineTo(31,124);
                        g1.lineTo(31,67);
                        g1.lineWidth = 2;
                        g1.strokeStyle = "#313F5C";
                        g1.stroke();
                        g1.fillStyle = "#CCCDD1";
                        g1.fill();
                        g1.closePath();
                    
                    }

                    function gaveta2(g2){
                        //rectangulo de fora
                        g2.beginPath();
                        g2.moveTo(26,163);
                        g2.lineTo(142,195);
                        g2.lineTo(144,282);
                        g2.lineTo(29,240);
                        g2.lineTo(26,163);
                        g2.lineWidth = 1;
                        g2.fillStyle = "#CCCCCC";
                        g2.fill();
                        g2.strokeStyle = "#1C326C";
                        g2.stroke();
                        g2.closePath();

                        //rectangulo de dentro
                        g2.beginPath();
                        g2.moveTo(33,178);
                        g2.lineTo(134,204);
                        g2.lineTo(134,266);
                        g2.lineTo(34,229);
                        g2.lineTo(33,176);
                        g2.lineWidth = 1;
                        g2.fillStyle = "#CCCDD1";
                        g2.fill();
                        g2.strokeStyle = "#303F5C";
                        g2.stroke();
                        g2.closePath();

                    }

                    function gaveta3(g3){
                        //rectangulo de fora
                        g3.beginPath();
                        g3.moveTo(32,267);
                        g3.lineTo(147,315);
                        g3.lineTo(148,397);
                        g3.lineTo(36,339);
                        g3.lineTo(32,267);
                        g3.lineWidth = 1;
                        g3.fillStyle = "#CCCCCC";
                        g3.fill();
                        g3.strokeStyle = "#1C326C";
                        g3.stroke();
                        g3.closePath();

                        //rectangulo de dentro
                        g3.beginPath();
                        g3.moveTo(39,280);
                        g3.lineTo(137,322);
                        g3.lineTo(138,379);
                        g3.lineTo(41,332);
                        g3.lineTo(39,281);
                        g3.lineWidth = 0.7;
                        g3.fillStyle = "#CCCCCC";
                        g3.fill();
                        g3.strokeStyle = "#303F5C";
                        g3.stroke();
                        g3.closePath();
                    }

                    function puxador1(p1){
                        p1.beginPath();
                        p1.moveTo(77,94);
                        p1.quadraticCurveTo(90,103,77,111);
                        p1.quadraticCurveTo(74,109,74,109);
                        p1.quadraticCurveTo(66,120,59,109);
                        p1.quadraticCurveTo(57,105,60,98);
                        p1.quadraticCurveTo(67,89,73,99);
                        p1.quadraticCurveTo(71,96,77,94);
                        p1.closePath();

                    }

                    function puxador2(p2){
                        p2.beginPath();
                        p2.moveTo(80,209);
                        p2.quadraticCurveTo(86,211,85,221);
                        p2.quadraticCurveTo(82,230,75,224);
                        p2.quadraticCurveTo(65,234,62,216);
                        p2.quadraticCurveTo(66,203,74,214);
                        p2.quadraticCurveTo(75,206,80,209);
                        p2.closePath();

                    }

                    function puxador3(p3){
                        p3.beginPath();
                        p3.moveTo(85,318);
                        p3.quadraticCurveTo(92,321,92,328);
                        p3.quadraticCurveTo(90,339,83,333);
                        p3.quadraticCurveTo(77,347,69,333);
                        p3.quadraticCurveTo(67,313,80,324);
                        p3.quadraticCurveTo(80,317,85,318);
                        p3.closePath();

                    }

                    function borda_gaveta1(bg1){

                        //1
                        bg1.beginPath();
                        bg1.moveTo(30,62);
                        bg1.quadraticCurveTo(36,58,38,62);
                        bg1.quadraticCurveTo(38,66,30,62);
                        bg1.fillStyle = "#323851";
                        bg1.fill();
                        bg1.closePath();

                        //2
                        bg1.beginPath();
                        bg1.moveTo(74,66);
                        bg1.lineTo(72,66);
                        bg1.quadraticCurveTo(67,60,64,64);
                        bg1.quadraticCurveTo(66,69,72,66);
                        bg1.lineTo(74,66);
                        bg1.fillStyle = "#323851";
                        bg1.fill();
                        bg1.closePath();

                        //3
                        bg1.beginPath();
                        bg1.moveTo(82,66);
                        bg1.lineTo(84,67);
                        bg1.quadraticCurveTo(89,61,92,67);
                        bg1.quadraticCurveTo(89,71,84,67);
                        bg1.lineTo(82,66);
                        bg1.fillStyle = "#28365D";
                        bg1.fill();
                        bg1.closePath();

                        //4
                        bg1.beginPath();
                        bg1.moveTo(135,72);
                        bg1.lineTo(132,72);
                        bg1.quadraticCurveTo(124,67,120,71);
                        bg1.quadraticCurveTo(125,76,132,72);
                        bg1.lineTo(135,72);
                        bg1.lineWidth = 0.7;
                        bg1.strokeStyle = "#435D7E";
                        bg1.stroke();
                        bg1.fillStyle = "#1E3970";
                        bg1.fill();
                        bg1.closePath();

                        //5
                        bg1.beginPath();
                        bg1.moveTo(137,80);
                        bg1.lineTo(137,85);
                        bg1.quadraticCurveTo(135,90,138,99);
                        bg1.quadraticCurveTo(140,91,137,85);
                        bg1.lineTo(137,80);
                        bg1.lineWidth = 0.8;
                        bg1.strokeStyle = "#435D7E";
                        bg1.stroke();
                        bg1.fillStyle = "#294069";
                        bg1.fill();
                        bg1.closePath();

                        //6
                        bg1.beginPath();
                        bg1.moveTo(138,146);
                        bg1.quadraticCurveTo(135,137,138,130);
                        bg1.quadraticCurveTo(141,136,138,146);
                        bg1.fillStyle = "#28365D";
                        bg1.fill();
                        bg1.closePath();

                        //7
                        bg1.beginPath();
                        bg1.moveTo(134,151);
                        bg1.lineTo(132,151);
                        bg1.quadraticCurveTo(126,145,121,148);
                        bg1.quadraticCurveTo(125,154,132,151);
                        bg1.lineTo(134,151);
                        bg1.fillStyle = "#28365D";
                        bg1.fill();
                        bg1.closePath();

                        //8
                        bg1.beginPath();
                        bg1.moveTo(82,141);
                        bg1.quadraticCurveTo(89,138,92,143);
                        bg1.quadraticCurveTo(88,145,82,141);
                        bg1.fillStyle = "#28365D";
                        bg1.fill();
                        bg1.closePath();

                        //9
                        bg1.beginPath();
                        bg1.moveTo(77,140);
                        bg1.lineTo(75,140);
                        bg1.quadraticCurveTo(70,133,67,138);
                        bg1.quadraticCurveTo(70,142,75,140);
                        bg1.lineTo(77,140);
                        bg1.fillStyle = "#28365D";
                        bg1.fill();
                        bg1.closePath();

                        //10
                        bg1.beginPath();
                        bg1.moveTo(33,129);
                        bg1.lineTo(35,131);
                        bg1.quadraticCurveTo(41,128,43,133);
                        bg1.quadraticCurveTo(39,135,35,131);
                        bg1.lineTo(33,129);
                        bg1.fillStyle = "#28365D";
                        bg1.fill();
                        bg1.closePath();

                        //11
                        bg1.beginPath();
                        bg1.moveTo(29,120);
                        bg1.quadraticCurveTo(26,114,28,109);
                        bg1.quadraticCurveTo(30,113,29,120);
                        bg1.fillStyle = "#586073";
                        bg1.fill();
                        bg1.closePath();

                        //12
                        bg1.beginPath();
                        bg1.moveTo(27,69);
                        bg1.quadraticCurveTo(25,76,28,83);
                        bg1.quadraticCurveTo(29,75,27,69);
                        bg1.fillStyle = "#586073";
                        bg1.fill();
                        bg1.closePath();

                    }

                    function flores_gaveta1(fg1){
                        //1
                        fg1.beginPath();
                        fg1.moveTo(26,65);
                        fg1.quadraticCurveTo(35,63,26,58);
                        fg1.quadraticCurveTo(23,61,26,65);
                        fg1.fillStyle = "#D0C1C6";
                        fg1.fill();
                        fg1.closePath();

                        //2
                        fg1.beginPath();
                        fg1.moveTo(79,70);
                        fg1.quadraticCurveTo(68,65,79,61);
                        fg1.quadraticCurveTo(86,67,79,70);
                        fg1.fillStyle = "#C0BC8D";
                        fg1.fill();
                        fg1.closePath();

                        //3
                        fg1.beginPath();
                        fg1.moveTo(137,77);
                        fg1.quadraticCurveTo(144,73,137,69);
                        fg1.quadraticCurveTo(129,73,137,77);
                        fg1.fillStyle = "#C4B0B8";
                        fg1.fill();
                        fg1.closePath();

                        //4
                        fg1.beginPath();
                        fg1.moveTo(138,147);
                        fg1.quadraticCurveTo(145,152,138,157);
                        fg1.quadraticCurveTo(130,151,138,147);
                        fg1.fillStyle = "#BFA8AC";
                        fg1.fill();
                        fg1.closePath();

                        //5
                        fg1.beginPath();
                        fg1.moveTo(82,141);
                        fg1.quadraticCurveTo(79,135,77,140);
                        fg1.quadraticCurveTo(79,147,82,141);
                        fg1.fillStyle = "#D1CDB4";
                        fg1.fill();
                        fg1.closePath();

                        //6
                        fg1.beginPath();
                        fg1.moveTo(28,126);
                        fg1.quadraticCurveTo(32,130,28,133);
                        fg1.quadraticCurveTo(25,129,28,126);
                        fg1.fillStyle = "#C9C3C5";
                        fg1.fill();
                        fg1.closePath();

                    }

                    function borda_gaveta2(bg2){
                        //1
                        bg2.beginPath();
                        bg2.moveTo(34,170);
                        bg2.quadraticCurveTo(40,168,40,172);
                        bg2.quadraticCurveTo(38,174,34,170);
                        bg2.fillStyle = "#2C364D";
                        bg2.fill();
                        bg2.closePath();

                        //2
                        bg2.beginPath();
                        bg2.moveTo(66,178);
                        bg2.quadraticCurveTo(70,177,74,181);
                        bg2.quadraticCurveTo(70,183,66,180);
                        bg2.fillStyle = "#284369";
                        bg2.fill();
                        bg2.closePath();

                        //3
                        bg2.beginPath();
                        bg2.moveTo(82,183);
                        bg2.quadraticCurveTo(88,181,91,187);
                        bg2.quadraticCurveTo(86,187,82,184);
                        bg2.fillStyle = "#283756";
                        bg2.fill();
                        bg2.closePath();

                        //4
                        bg2.beginPath();
                        bg2.moveTo(121,195);
                        bg2.quadraticCurveTo(127,192,133,198);
                        bg2.quadraticCurveTo(124,199,121,195);
                        bg2.fillStyle = "#2A385E";
                        bg2.fill();
                        bg2.closePath();

                        //5
                        bg2.beginPath();
                        bg2.moveTo(138,210);
                        bg2.quadraticCurveTo(140,216,138,223);
                        bg2.quadraticCurveTo(135,216,138,210);
                        bg2.fillStyle = "#384160";
                        bg2.fill();
                        bg2.closePath();

                        //6
                        bg2.beginPath();
                        bg2.moveTo(138,251);
                        bg2.quadraticCurveTo(134,255,138,264);
                        bg2.quadraticCurveTo(141,256,138,251);
                        bg2.fillStyle = "#2D3B5B";
                        bg2.fill();
                        bg2.closePath();

                        //7
                        bg2.beginPath();
                        bg2.moveTo(133,271);
                        bg2.quadraticCurveTo(127,265,123,268);
                        bg2.quadraticCurveTo(126,272,133,271);
                        bg2.fillStyle = "#343D5A";
                        bg2.fill();
                        bg2.closePath();

                        //8
                        bg2.beginPath();
                        bg2.moveTo(85,255);
                        bg2.quadraticCurveTo(92,253,93,257);
                        bg2.quadraticCurveTo(91,260,86,256);
                        bg2.fillStyle = "#212B48";
                        bg2.fill();
                        bg2.closePath();

                        //9
                        bg2.beginPath();
                        bg2.moveTo(77,251);
                        bg2.quadraticCurveTo(72,245,70,248);
                        bg2.quadraticCurveTo(71,253,77,251);
                        bg2.fillStyle = "#2D364B";
                        bg2.fill();
                        bg2.closePath();

                        //10
                        bg2.beginPath();
                        bg2.moveTo(42,239);
                        bg2.quadraticCurveTo(40,233,35,236);
                        bg2.quadraticCurveTo(38,239,42,239);
                        bg2.fillStyle = "#2B324E";
                        bg2.fill();
                        bg2.closePath();

                        //11
                        bg2.beginPath();
                        bg2.moveTo(31,226);
                        bg2.quadraticCurveTo(33,221,31,216);
                        bg2.quadraticCurveTo(28,219,31,226);
                        bg2.fillStyle = "#3E4D61";
                        bg2.fill();
                        bg2.closePath();

                        //12
                        bg2.beginPath();
                        bg2.moveTo(31,187);
                        bg2.quadraticCurveTo(32,181,30,175);
                        bg2.quadraticCurveTo(28,184,31,188);
                        bg2.fillStyle = "#4A5268";
                        bg2.fill();
                        bg2.closePath();

                    }

                    function flores_gaveta2(fg2){
                        //1
                        fg2.beginPath();
                        fg2.moveTo(30,175);
                        fg2.quadraticCurveTo(35,171,31,166);
                        fg2.quadraticCurveTo(25,169,30,175);
                        fg2.fillStyle = "#BFA7B4";
                        fg2.fill();
                        fg2.closePath();

                        //2
                        fg2.beginPath();
                        fg2.moveTo(75,182);
                        fg2.quadraticCurveTo(78,176,82,183);
                        fg2.quadraticCurveTo(77,189,75,182);
                        fg2.fillStyle = "#ABA375";
                        fg2.fill();
                        fg2.closePath();

                        //3
                        fg2.beginPath();
                        fg2.moveTo(137,196);
                        fg2.quadraticCurveTo(143,202,137,206);
                        fg2.quadraticCurveTo(130,199,137,196);
                        fg2.fillStyle = "#B7A8AF";
                        fg2.fill();
                        fg2.closePath();

                        //4
                        fg2.beginPath();
                        fg2.moveTo(137,278);
                        fg2.quadraticCurveTo(145,275,139,267);
                        fg2.quadraticCurveTo(131,271,137,278);
                        fg2.fillStyle = "#B3A6AF";
                        fg2.fill();
                        fg2.closePath();

                        //5
                        fg2.beginPath();
                        fg2.moveTo(85,256);
                        fg2.quadraticCurveTo(82,248,78,252);
                        fg2.quadraticCurveTo(80,259,85,256);
                        fg2.fillStyle = "#BDB5A2";
                        fg2.fill();
                        fg2.closePath();

                        //6
                        fg2.beginPath();
                        fg2.moveTo(32,232);
                        fg2.quadraticCurveTo(36,236,32,238);
                        fg2.quadraticCurveTo(29,236,32,232);
                        fg2.fillStyle = "#BFB2B9";
                        fg2.fill();
                        fg2.closePath();

                    }

                    function borda_gaveta3(bg3){
                        //1
                        bg3.beginPath();
                        bg3.moveTo(39,276);
                        bg3.quadraticCurveTo(46,273,47,279);
                        bg3.quadraticCurveTo(43,279,39,276);
                        bg3.fillStyle = "#454858";
                        bg3.fill();
                        bg3.closePath();

                        //2
                        bg3.beginPath();
                        bg3.moveTo(73,289);
                        bg3.quadraticCurveTo(75,295,81,293);
                        bg3.quadraticCurveTo(78,289,73,289);
                        bg3.fillStyle = "#1A273B";
                        bg3.fill();
                        bg3.closePath();

                        //3
                        bg3.beginPath();
                        bg3.moveTo(89,296);
                        bg3.quadraticCurveTo(93,294,97,299);
                        bg3.quadraticCurveTo(92,301,89,296);
                        bg3.fillStyle = "#16203E";
                        bg3.fill();
                        bg3.closePath();

                        //4
                        bg3.beginPath();
                        bg3.moveTo(126,312);
                        bg3.quadraticCurveTo(131,310,136,315);
                        bg3.quadraticCurveTo(131,317,126,312);
                        bg3.fillStyle = "#1A2B4E";
                        bg3.fill();
                        bg3.closePath();

                        //5
                        bg3.beginPath();
                        bg3.moveTo(142,323);
                        bg3.quadraticCurveTo(139,331,143,336);
                        bg3.quadraticCurveTo(144,330,142,323);
                        bg3.fillStyle = "#2C3552";
                        bg3.fill();
                        bg3.closePath();

                        //6
                        bg3.beginPath();
                        bg3.moveTo(142,368);
                        bg3.quadraticCurveTo(140,375,143,380);
                        bg3.quadraticCurveTo(145,372,142,368);
                        bg3.fillStyle = "#29354F";
                        bg3.fill();
                        bg3.closePath();

                        //7
                        bg3.beginPath();
                        bg3.moveTo(139,385);
                        bg3.quadraticCurveTo(133,378,129,381);
                        bg3.quadraticCurveTo(132,385,139,385);
                        bg3.fillStyle = "#142948";
                        bg3.fill();
                        bg3.closePath();


                        //8
                        bg3.beginPath();
                        bg3.moveTo(98,365);
                        bg3.quadraticCurveTo(96,360,91,361);
                        bg3.quadraticCurveTo(93,366,98,365);
                        bg3.fillStyle = "#162345";
                        bg3.fill();
                        bg3.closePath();

                        //9
                        bg3.beginPath();
                        bg3.moveTo(83,358);
                        bg3.quadraticCurveTo(79,352,76,354);
                        bg3.quadraticCurveTo(78,358,83,358);
                        bg3.fillStyle = "#23304E";
                        bg3.fill();
                        bg3.closePath();

                        //10
                        bg3.beginPath();
                        bg3.moveTo(49,341);
                        bg3.quadraticCurveTo(49,337,42,336);
                        bg3.quadraticCurveTo(45,340,49,341);
                        bg3.fillStyle = "#303B4F";
                        bg3.fill();
                        bg3.closePath();

                        //11
                        bg3.beginPath();
                        bg3.moveTo(38,329);
                        bg3.quadraticCurveTo(41,323,38,319);
                        bg3.quadraticCurveTo(37,323,38,329);
                        bg3.fillStyle = "#586673";
                        bg3.fill();
                        bg3.closePath();

                        //12
                        bg3.beginPath();
                        bg3.moveTo(37,291);
                        bg3.quadraticCurveTo(34,285,36,281);
                        bg3.quadraticCurveTo(38,284,37,291);
                        bg3.fillStyle = "#494C5A";
                        bg3.fill();
                        bg3.closePath();

                    }

                    function flores_gaveta3(fg3){
                        //1
                        fg3.beginPath();
                        fg3.moveTo(36,280);
                        fg3.quadraticCurveTo(41,277,37,271);
                        fg3.quadraticCurveTo(32,274,36,280);
                        fg3.fillStyle = "#B4A1A7";
                        fg3.fill();
                        fg3.closePath();

                        //2
                        fg3.beginPath();
                        fg3.moveTo(81,293);
                        fg3.quadraticCurveTo(85,288,87,296);
                        fg3.quadraticCurveTo(83,300,81,293);
                        fg3.fillStyle = "#ACA883";
                        fg3.fill();
                        fg3.closePath();

                        //3
                        fg3.beginPath();
                        fg3.moveTo(141,324);
                        fg3.quadraticCurveTo(147,319,142,314);
                        fg3.quadraticCurveTo(135,317,141,324);
                        fg3.fillStyle = "#BAAFB7";
                        fg3.fill();
                        fg3.closePath();

                        //4
                        fg3.beginPath();
                        fg3.moveTo(142,382);
                        fg3.quadraticCurveTo(148,387,142,391);
                        fg3.quadraticCurveTo(135,382,142,382);
                        fg3.fillStyle = "#BAAFB7";
                        fg3.fill();
                        fg3.closePath();

                        //5
                        fg3.beginPath();
                        fg3.moveTo(85,363);
                        fg3.quadraticCurveTo(91,362,87,357);
                        fg3.quadraticCurveTo(83,357,85,363);
                        fg3.fillStyle = "#A6A376";
                        fg3.fill();
                        fg3.closePath();

                        //6
                        fg3.beginPath();
                        fg3.moveTo(39,339);
                        fg3.quadraticCurveTo(43,336,39,332);
                        fg3.quadraticCurveTo(35,333,39,339);
                        fg3.fillStyle = "#B0A7AA";
                        fg3.fill();
                        fg3.closePath();

                    }
                    
                    function borda_esquerda(be){
                        //1
                        be.beginPath();
                        be.moveTo(201,68);
                        be.quadraticCurveTo(206,62,212,67);
                        be.quadraticCurveTo(208,71,201,68);
                        be.fillStyle = "#081D4A";
                        be.fill();
                        be.closePath();

                        //2
                        be.beginPath();
                        be.moveTo(241,65);
                        be.quadraticCurveTo(245,61,250,64);
                        be.quadraticCurveTo(243,69,241,65);
                        be.fillStyle = "#011D4D";
                        be.fill();
                        be.closePath();

                        //3
                        be.beginPath();
                        be.moveTo(263,63);
                        be.quadraticCurveTo(268,59,272,63);
                        be.quadraticCurveTo(268,67,263,63);
                        be.fillStyle = "#00113D";
                        be.fill();
                        be.closePath();

                        //4
                        be.beginPath();
                        be.moveTo(292,61);
                        be.quadraticCurveTo(293,57,300,60);
                        be.quadraticCurveTo(296,64,292,61);
                        be.fillStyle = "#142658";
                        be.fill();
                        be.closePath();

                        //rodape direito
                        //5
                        be.beginPath();
                        be.moveTo(304,68);
                        be.quadraticCurveTo(306,78,304,83);
                        be.quadraticCurveTo(301,79,304,68);
                        be.fillStyle = "#031F51";
                        be.fill();
                        be.closePath();

                        //6
                        be.beginPath();
                        be.moveTo(302,122);
                        be.quadraticCurveTo(305,126,302,133);
                        be.quadraticCurveTo(299,126,302,122);
                        be.fillStyle = "#031F51";
                        be.fill();
                        be.closePath();

                        //7
                        be.beginPath();
                        be.moveTo(301,151);
                        be.quadraticCurveTo(302,157,300,164);
                        be.quadraticCurveTo(298,158,301,151);
                        be.fillStyle = "#031F51";
                        be.fill();
                        be.closePath();

                        //8
                        be.beginPath();
                        be.moveTo(299,187);
                        be.quadraticCurveTo(302,190,299,196);
                        be.quadraticCurveTo(297,192,299,187);
                        be.fillStyle = "#1D3C6A";
                        be.fill();
                        be.closePath();

                        //9
                        be.beginPath();
                        be.moveTo(298,212);
                        be.quadraticCurveTo(301,218,297,224);
                        be.quadraticCurveTo(297,218,298,212);
                        be.fillStyle = "#001C4B";
                        be.fill();
                        be.closePath();

                        //10
                        be.beginPath();
                        be.moveTo(297,255);
                        be.quadraticCurveTo(298,258,296,264);
                        be.quadraticCurveTo(294,256,297,255);
                        be.fillStyle = "#031F5";
                        be.fill();
                        be.closePath();

                        //11
                        be.beginPath();
                        be.moveTo(296,278);
                        be.quadraticCurveTo(298,289,295,292);
                        be.quadraticCurveTo(293,289,296,278);
                        be.fillStyle = "#022150";
                        be.fill();
                        be.closePath();

                        //12
                        be.beginPath();
                        be.moveTo(293,327);
                        be.quadraticCurveTo(295,330,293,337);
                        be.quadraticCurveTo(291,331,293,327);
                        be.fillStyle = "#07224D";
                        be.fill();
                        be.closePath();

                        //rodape baixo
                        //13
                        be.beginPath();
                        be.moveTo(289,345);
                        be.quadraticCurveTo(285,350,282,349);
                        be.quadraticCurveTo(283,345,289,345);
                        be.fillStyle = "#0C2754";
                        be.fill();
                        be.closePath();

                        //14
                        be.beginPath();
                        be.moveTo(261,358);
                        be.quadraticCurveTo(259,363,251,362);
                        be.quadraticCurveTo(257,357,261,358);
                        be.fillStyle = "#091E4D";
                        be.fill();
                        be.closePath();

                        //15
                        be.beginPath();
                        be.moveTo(243,365);
                        be.quadraticCurveTo(238,371,233,370);
                        be.quadraticCurveTo(236,364,243,365);
                        be.fillStyle = "#05204D";
                        be.fill();
                        be.closePath();

                        //16
                        be.beginPath();
                        be.moveTo(208,380);
                        be.quadraticCurveTo(205,384,198,384);
                        be.quadraticCurveTo(202,378,208,380);
                        be.fillStyle = "#021945";
                        be.fill();
                        be.closePath();

                        //rodape esquerdo
                        //17
                        be.beginPath();
                        be.moveTo(193,376);
                        be.quadraticCurveTo(196,366,192,363);
                        be.quadraticCurveTo(189,369,193,376);
                        be.fillStyle = "#011F51";
                        be.fill();
                        be.closePath();

                        //18
                        be.beginPath();
                        be.moveTo(194,320);
                        be.quadraticCurveTo(197,316,193,305);
                        be.quadraticCurveTo(190,313,194,320);
                        be.fillStyle = "#011F51";
                        be.fill();
                        be.closePath();

                        //19
                        be.beginPath();
                        be.moveTo(193,287);
                        be.quadraticCurveTo(196,277,193,275);
                        be.quadraticCurveTo(191,279,193,287);
                        be.fillStyle = "#011F51";
                        be.fill();
                        be.closePath();

                        //20
                        be.beginPath();
                        be.moveTo(193,252);
                        be.quadraticCurveTo(197,242,193,236);
                        be.quadraticCurveTo(190,244,193,252);
                        be.fillStyle = "#011F51";
                        be.fill();
                        be.closePath();

                        //21
                        be.beginPath();
                        be.moveTo(193,219);
                        be.quadraticCurveTo(196,209,193,206);
                        be.quadraticCurveTo(191,209,193,219);
                        be.fillStyle = "#011F51";
                        be.fill();
                        be.closePath();

                        //22
                        be.beginPath();
                        be.moveTo(195,173);
                        be.quadraticCurveTo(197,162,195,156);
                        be.quadraticCurveTo(191,166,195,173);
                        be.fillStyle = "#011F51";
                        be.fill();
                        be.closePath();

                        //23
                        be.beginPath();
                        be.moveTo(195,141);
                        be.quadraticCurveTo(198,131,195,125);
                        be.quadraticCurveTo(193,130,195,141);
                        be.fillStyle = "#011C51";
                        be.fill();
                        be.closePath();

                        //24
                        be.beginPath();
                        be.moveTo(193,94);
                        be.quadraticCurveTo(197,87,194,80);
                        be.quadraticCurveTo(190,90,194,94);
                        be.fillStyle = "#001846";
                        be.fill();
                        be.closePath();
                    
                    }

                    function flores_direita(fd){
                        //flores cima
                        //1
                        fd.beginPath();
                        fd.moveTo(196,64);
                        fd.quadraticCurveTo(203,69,197,75);
                        fd.quadraticCurveTo(190,71,196,64);
                        fd.fillStyle = "#725D86";
                        fd.fill();
                        fd.closePath();

                        //2
                        fd.beginPath();
                        fd.moveTo(250,63);
                        fd.quadraticCurveTo(256,54,262,62);
                        fd.quadraticCurveTo(258,74,250,63);
                        fd.fillStyle = "#697768";
                        fd.fill();
                        fd.closePath();

                        //3
                        fd.beginPath();
                        fd.moveTo(305,56);
                        fd.quadraticCurveTo(308,60,305,66);
                        fd.quadraticCurveTo(297,61,305,56);
                        fd.fillStyle = "#574873";
                        fd.fill();
                        fd.closePath();

                        //flores direita
                        //4
                        fd.beginPath();
                        fd.moveTo(301,136);
                        fd.quadraticCurveTo(305,140,301,146);
                        fd.quadraticCurveTo(296,141,301,136);
                        fd.fillStyle = "#5F726C";
                        fd.fill();
                        fd.closePath();

                        //5
                        fd.beginPath();
                        fd.moveTo(300,200);
                        fd.quadraticCurveTo(303,202,300,208);
                        fd.quadraticCurveTo(294,203,300,200);
                        fd.fillStyle = "#606897";
                        fd.fill();
                        fd.closePath();
                        
                        //6
                        fd.beginPath();
                        fd.moveTo(296,266);
                        fd.quadraticCurveTo(300,271,296,278);
                        fd.quadraticCurveTo(291,272,296,266);
                        fd.fillStyle = "#58707A";
                        fd.fill();
                        fd.closePath();
                     
                        //flores baixo
                        //7
                        fd.beginPath();
                        fd.moveTo(293,339);
                        fd.quadraticCurveTo(296,342,293,349);
                        fd.quadraticCurveTo(287,348,293,339);
                        fd.fillStyle = "#595B84";
                        fd.fill();
                        fd.closePath();

                        //8
                        fd.beginPath();
                        fd.moveTo(252,362);
                        fd.quadraticCurveTo(250,371,243,367);
                        fd.quadraticCurveTo(245,358,252,362);
                        fd.fillStyle = "#5B6B60";
                        fd.fill();
                        fd.closePath();

                        //9
                        fd.beginPath();
                        fd.moveTo(193,380);
                        fd.quadraticCurveTo(199,382,194,389);
                        fd.quadraticCurveTo(185,385,193,380);
                        fd.fillStyle = "#5A5B89";
                        fd.fill();
                        fd.closePath();

                        
                        //flores esquerda
                        //10
                        fd.beginPath();
                        fd.moveTo(192,303);
                        fd.quadraticCurveTo(203,297,193,291);
                        fd.quadraticCurveTo(186,296,192,303);
                        fd.fillStyle = "#65797A";
                        fd.fill();
                        fd.closePath();

                        //11
                        fd.beginPath();
                        fd.moveTo(193,233);
                        fd.quadraticCurveTo(203,227,194,222);
                        fd.quadraticCurveTo(186,226,193,233);
                        fd.fillStyle = "#64719E";
                        fd.fill();
                        fd.closePath();

                        //12
                        fd.beginPath();
                        fd.moveTo(194,155);
                        fd.quadraticCurveTo(201,149,195,141);
                        fd.quadraticCurveTo(189,147,194,155);
                        fd.fillStyle = "#6C8276";
                        fd.fill();
                        fd.closePath();
                    
                    }

                    function folhasgaveta1(fg1){
                        //lado esquerdo
                        fg1.beginPath();
                        fg1.moveTo(43,93);
                        fg1.quadraticCurveTo(41,91,38,89);
                        fg1.quadraticCurveTo(38,94,43,93);
                        fg1.fillStyle = "#424740";
                        fg1.fill();
                        fg1.closePath();

                        fg1.beginPath();
                        fg1.moveTo(42,95);
                        fg1.quadraticCurveTo(37,91,33,95);
                        fg1.quadraticCurveTo(39,99,42,95);
                        fg1.fillStyle = "#364B3A";
                        fg1.fill();
                        fg1.closePath();

                        fg1.beginPath();
                        fg1.moveTo(43,96);
                        fg1.quadraticCurveTo(33,101,38,101);
                        fg1.quadraticCurveTo(41,101,43,96);
                        fg1.fillStyle = "#2D4933";
                        fg1.fill();
                        fg1.closePath();

                        fg1.beginPath();
                        fg1.moveTo(67,92);
                        fg1.quadraticCurveTo(67,89,64,88);
                        fg1.quadraticCurveTo(63,92,67,92);
                        fg1.fillStyle = "#2D4933";
                        fg1.fill();
                        fg1.closePath();

                        fg1.beginPath();
                        fg1.moveTo(63,92);
                        fg1.quadraticCurveTo(62,89,61,88);
                        fg1.quadraticCurveTo(61,91,63,92);
                        fg1.fillStyle = "#2D4933";
                        fg1.fill();
                        fg1.closePath();

                        fg1.beginPath();
                        fg1.moveTo(63,92);
                        fg1.quadraticCurveTo(57,93,56,96);
                        fg1.quadraticCurveTo(59,94,63,92);
                        fg1.fillStyle = "#2D4933";
                        fg1.fill();
                        fg1.closePath();

                        fg1.beginPath();
                        fg1.moveTo(61,94);
                        fg1.quadraticCurveTo(57,98,58,100);
                        fg1.quadraticCurveTo(60,98,61,94);
                        fg1.fillStyle = "#2D4933";
                        fg1.fill();
                        fg1.closePath();
                        
                        //lado direito
                        //antes da flor
                        fg1.beginPath();
                        fg1.moveTo(93,103);
                        fg1.quadraticCurveTo(99,96,101,99);
                        fg1.quadraticCurveTo(100,107,93,103);
                        fg1.fillStyle = "#38483D";
                        fg1.fill();
                        fg1.closePath();

                        fg1.beginPath();
                        fg1.moveTo(89,104);
                        fg1.quadraticCurveTo(97,107,98,118);
                        fg1.quadraticCurveTo(94,112,89,104);
                        fg1.fillStyle = "#334338";
                        fg1.fill();
                        fg1.closePath();

                        fg1.beginPath();
                        fg1.moveTo(96,108);
                        fg1.quadraticCurveTo(99,110,100,113);
                        fg1.quadraticCurveTo(98,112,96,108);
                        fg1.fillStyle = "#334338";
                        fg1.fill();
                        fg1.closePath();

                        fg1.beginPath();
                        fg1.moveTo(95,106);
                        fg1.quadraticCurveTo(99,107,103,108);
                        fg1.quadraticCurveTo(99,109,95,106);
                        fg1.fillStyle = "#334338";
                        fg1.fill();
                        fg1.closePath();

                        fg1.beginPath();
                        fg1.moveTo(95,105);
                        fg1.quadraticCurveTo(99,105,103,104);
                        fg1.quadraticCurveTo(99,107,95,105);
                        fg1.fillStyle = "#334338";
                        fg1.fill();
                        fg1.closePath();

                        fg1.beginPath();
                        fg1.moveTo(85,99);
                        fg1.quadraticCurveTo(89,101,94,105);
                        fg1.quadraticCurveTo(89,103,85,99);
                        fg1.fillStyle = "#334338";
                        fg1.fill();
                        fg1.closePath();

                        //lado direito
                        //depois da flor
                        fg1.beginPath();
                        fg1.moveTo(120,107);
                        fg1.quadraticCurveTo(120,104,124,104);
                        fg1.quadraticCurveTo(123,107,120,107);
                        fg1.fillStyle = "#445046";
                        fg1.fill();
                        fg1.closePath();

                        fg1.beginPath();
                        fg1.moveTo(120,109);
                        fg1.quadraticCurveTo(126,106,129,109);
                        fg1.quadraticCurveTo(125,113,120,109);
                        fg1.fillStyle = "#30433D";
                        fg1.fill();
                        fg1.closePath();

                        fg1.beginPath();
                        fg1.moveTo(119,110);
                        fg1.quadraticCurveTo(122,110,123,114);
                        fg1.quadraticCurveTo(121,112,119,110);
                        fg1.fillStyle = "#415144";
                        fg1.fill();
                        fg1.closePath();
                    
                    }

                    function folhasgaveta2(fg2){
                        //lado esquerdo
                        fg2.beginPath();
                        fg2.moveTo(44,205);
                        fg2.quadraticCurveTo(43,203,41,201);
                        fg2.quadraticCurveTo(41,205,44,205);
                        fg2.fillStyle = "#404B43";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(45,206);
                        fg2.quadraticCurveTo(44,202,41,201);
                        fg2.quadraticCurveTo(41,205,45,206);
                        fg2.fillStyle = "#404B43";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(44,207);
                        fg2.quadraticCurveTo(41,204,37,206);
                        fg2.quadraticCurveTo(40,209,44,207);
                        fg2.fillStyle = "#404B43";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(44,208);
                        fg2.quadraticCurveTo(42,208,41,211);
                        fg2.quadraticCurveTo(43,211,44,208);
                        fg2.fillStyle = "#404B43";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(64,209);
                        fg2.quadraticCurveTo(62,206,58,209);
                        fg2.quadraticCurveTo(61,212,64,209);
                        fg2.fillStyle = "#3F4B3F";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(70,210);
                        fg2.quadraticCurveTo(68,204,65,199);
                        fg2.quadraticCurveTo(64,207,70,210);
                        fg2.fillStyle = "#3E4943";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(67,210);
                        fg2.quadraticCurveTo(61,202,56,204);
                        fg2.quadraticCurveTo(61,205,67,210);
                        fg2.fillStyle = "#3E4943";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(64,203);
                        fg2.quadraticCurveTo(63,201,61,200);
                        fg2.quadraticCurveTo(61,201,64,203);
                        fg2.fillStyle = "#323E30";
                        fg2.fill();
                        fg2.closePath();

                        //lado direito
                        fg2.beginPath();
                        fg2.moveTo(89,221);
                        fg2.quadraticCurveTo(96,227,96,234);
                        fg2.quadraticCurveTo(91,227,89,221);
                        fg2.fillStyle = "#323E30";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(96,223);
                        fg2.quadraticCurveTo(100,222,104,222);
                        fg2.quadraticCurveTo(100,230,96,223);
                        fg2.fillStyle = "#323E30";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(98,229);
                        fg2.quadraticCurveTo(102,232,106,232);
                        fg2.quadraticCurveTo(103,230,98,229);
                        fg2.fillStyle = "#323E30";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(87,217);
                        fg2.quadraticCurveTo(92,220,96,224);
                        fg2.quadraticCurveTo(92,221,87,217);
                        fg2.fillStyle = "#323E30";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(100,229);
                        fg2.quadraticCurveTo(102,228,105,229);
                        fg2.quadraticCurveTo(102,229,100,229);
                        fg2.fillStyle = "#323E30";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(97,230);
                        fg2.quadraticCurveTo(98,231,99,234);
                        fg2.quadraticCurveTo(98,233,97,230);
                        fg2.fillStyle = "#323E30";
                        fg2.fill();
                        fg2.closePath();

                        //lado direito flor
                        fg2.beginPath();
                        fg2.moveTo(121,232);
                        fg2.quadraticCurveTo(122,229,124,229);
                        fg2.quadraticCurveTo(124,232,121,232);
                        fg2.fillStyle = "#323E30";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(121,233);
                        fg2.quadraticCurveTo(129,231,129,236);
                        fg2.quadraticCurveTo(126,237,121,233);
                        fg2.fillStyle = "#323E30";
                        fg2.fill();
                        fg2.closePath();

                        fg2.beginPath();
                        fg2.moveTo(122,234);
                        fg2.quadraticCurveTo(123,235,125,238);
                        fg2.quadraticCurveTo(122,238,122,234);
                        fg2.fillStyle = "#323E30";
                        fg2.fill();
                        fg2.closePath();
                        
                    }

                    function folhasgaveta3(fg3){
                        //lado esquerdo
                        //antes da flor
                        fg3.beginPath();
                        fg3.moveTo(54,310);
                        fg3.quadraticCurveTo(52,307,50,306);
                        fg3.quadraticCurveTo(52,309,54,310);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        fg3.beginPath();
                        fg3.moveTo(52,311);
                        fg3.quadraticCurveTo(49,307,46,308);
                        fg3.quadraticCurveTo(48,312,52,311);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        fg3.beginPath();
                        fg3.moveTo(54,311);
                        fg3.quadraticCurveTo(52,311,51,313);
                        fg3.quadraticCurveTo(53,314,54,311);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        //lado esquerdo
                        //depois da flor
                        fg3.beginPath();
                        fg3.moveTo(76,319);
                        fg3.quadraticCurveTo(75,313,72,311);
                        fg3.quadraticCurveTo(72,316,76,319);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        fg3.beginPath();
                        fg3.moveTo(73,318);
                        fg3.quadraticCurveTo(69,313,65,313);
                        fg3.quadraticCurveTo(68,315,73,318);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        fg3.beginPath();
                        fg3.moveTo(71,312);
                        fg3.quadraticCurveTo(70,310,69,309);
                        fg3.quadraticCurveTo(68,311,71,312);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        fg3.beginPath();
                        fg3.moveTo(70,315);
                        fg3.quadraticCurveTo(68,315,66,316);
                        fg3.quadraticCurveTo(68,317,70,315);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        fg3.beginPath();
                        fg3.moveTo(71,318);
                        fg3.quadraticCurveTo(67,315,68,320);
                        fg3.quadraticCurveTo(70,320,71,318);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        //lado direito
                        //antes da flor
                        fg3.beginPath();
                        fg3.moveTo(94,327);
                        fg3.quadraticCurveTo(102,331,103,339);
                        fg3.quadraticCurveTo(96,332,94,327);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        fg3.beginPath();
                        fg3.moveTo(102,332);
                        fg3.quadraticCurveTo(106,332,109,334);
                        fg3.quadraticCurveTo(105,340,102,332);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        fg3.beginPath();
                        fg3.moveTo(102,332);
                        fg3.quadraticCurveTo(98,326,92,325);
                        fg3.quadraticCurveTo(98,328,102,332);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        fg3.beginPath();
                        fg3.moveTo(104,337);
                        fg3.quadraticCurveTo(105,338,105,341);
                        fg3.quadraticCurveTo(103,340,104,337);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        fg3.beginPath();
                        fg3.moveTo(104,338);
                        fg3.quadraticCurveTo(108,339,110,340);
                        fg3.quadraticCurveTo(108,341,105,338);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        //lado direito
                        //depois da flor
                        fg3.beginPath();
                        fg3.moveTo(126,344);
                        fg3.quadraticCurveTo(126,341,130,342);
                        fg3.quadraticCurveTo(128,345,125,343);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        fg3.beginPath();
                        fg3.moveTo(129,346);
                        fg3.quadraticCurveTo(132,345,134,349);
                        fg3.quadraticCurveTo(130,349,129,346);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();

                        fg3.beginPath();
                        fg3.moveTo(126,345);
                        fg3.quadraticCurveTo(129,346,130,349);
                        fg3.quadraticCurveTo(127,348,126,345);
                        fg3.fillStyle = "#222D27";
                        fg3.fill();
                        fg3.closePath();
                    
                    }

                    function folhasladodireito(fld){
                        //antes da rosa azul
                        fld.beginPath();
                        fld.moveTo(251,137);
                        fld.quadraticCurveTo(253,131,251,127);
                        fld.quadraticCurveTo(249,133,251,137);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(252,143);
                        fld.quadraticCurveTo(249,137,255,133);
                        fld.quadraticCurveTo(254,139,252,143);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(250,142);
                        fld.quadraticCurveTo(252,135,248,136);
                        fld.quadraticCurveTo(248,139,250,142);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        //Antes da rosa amarela esquerda
                        fld.beginPath();
                        fld.moveTo(234,183);
                        fld.quadraticCurveTo(236,180,235,177);
                        fld.quadraticCurveTo(232,179,234,183);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(233,182);
                        fld.quadraticCurveTo(229,175,225,179);
                        fld.quadraticCurveTo(229,181,233,182);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(233,184);
                        fld.quadraticCurveTo(229,181,228,185);
                        fld.quadraticCurveTo(231,185,233,184);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        //Antes da rosa amarela direita
                        fld.beginPath();
                        fld.moveTo(267,176);
                        fld.quadraticCurveTo(267,173,271,173);
                        fld.quadraticCurveTo(269,175,267,176);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(266,175);
                        fld.quadraticCurveTo(271,171,273,168);
                        fld.quadraticCurveTo(268,167,266,175);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(265,175);
                        fld.quadraticCurveTo(266,173,265,170);
                        fld.quadraticCurveTo(264,173,265,175);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        //Centro
                        fld.beginPath();
                        fld.moveTo(254,185);
                        fld.quadraticCurveTo(253,170,259,167);
                        fld.quadraticCurveTo(258,177,254,185);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(251,183);
                        fld.quadraticCurveTo(252,170,246,171);
                        fld.quadraticCurveTo(247,175,251,183);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(258,176);
                        fld.quadraticCurveTo(259,171,262,170);
                        fld.quadraticCurveTo(261,174,258,176);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(253,183);
                        fld.quadraticCurveTo(253,172,253,167);
                        fld.quadraticCurveTo(251,172,253,183);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(249,185);
                        fld.quadraticCurveTo(248,176,243,178);
                        fld.quadraticCurveTo(247,181,249,185);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(249,201);
                        fld.quadraticCurveTo(248,185,243,187);
                        fld.quadraticCurveTo(245,195,249,201);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(253,201);
                        fld.quadraticCurveTo(256,189,264,190);
                        fld.quadraticCurveTo(256,199,253,201);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(253,194);
                        fld.quadraticCurveTo(257,189,257,185);
                        fld.quadraticCurveTo(255,187,253,194);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(249,183);
                        fld.quadraticCurveTo(251,189,251,199);
                        fld.quadraticCurveTo(250,191,249,183);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(255,183);
                        fld.quadraticCurveTo(251,187,252,197);
                        fld.quadraticCurveTo(255,187,255,183);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(245,196);
                        fld.quadraticCurveTo(245,191,241,190);
                        fld.quadraticCurveTo(245,194,245,196);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(247,201);
                        fld.quadraticCurveTo(243,189,239,195);
                        fld.quadraticCurveTo(241,197,247,201);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(255,201);
                        fld.quadraticCurveTo(255,197,262,196);
                        fld.quadraticCurveTo(258,199,255,201);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(246,206);
                        fld.quadraticCurveTo(243,198,239,201);
                        fld.quadraticCurveTo(243,203,246,206);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(253,209);
                        fld.quadraticCurveTo(255,202,260,203);
                        fld.quadraticCurveTo(256,209,253,209);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(257,211);
                        fld.quadraticCurveTo(259,205,265,198);
                        fld.quadraticCurveTo(264,207,257,211);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(245,217);
                        fld.quadraticCurveTo(247,207,241,207);
                        fld.quadraticCurveTo(241,211,245,217);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(239,215);
                        fld.quadraticCurveTo(237,206,235,202);
                        fld.quadraticCurveTo(231,208,239,215);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(238,210);
                        fld.quadraticCurveTo(237,206,237,201);
                        fld.quadraticCurveTo(240,206,238,210);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(262,207);
                        fld.quadraticCurveTo(266,205,267,202);
                        fld.quadraticCurveTo(265,203,262,207);
                        fld.fillStyle = "#1B353A";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(236,219);
                        fld.quadraticCurveTo(231,212,225,219);
                        fld.quadraticCurveTo(230,220,236,219);
                        fld.fillStyle = "#0E2535";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(260,214);
                        fld.quadraticCurveTo(267,209,271,213);
                        fld.quadraticCurveTo(266,214,260,214);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(238,219);
                        fld.quadraticCurveTo(233,222,227,225);
                        fld.quadraticCurveTo(233,224,238,219);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(237,217);
                        fld.quadraticCurveTo(235,212,231,212);
                        fld.quadraticCurveTo(233,216,237,217);
                        fld.fillStyle = "#536C82";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(241,223);
                        fld.quadraticCurveTo(232,224,229,232);
                        fld.quadraticCurveTo(236,229,241,223);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(229,226);
                        fld.quadraticCurveTo(225,232,224,237);
                        fld.quadraticCurveTo(228,233,229,226);
                        fld.fillStyle = "#2B496F";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(219,232);
                        fld.quadraticCurveTo(216,233,215,238);
                        fld.quadraticCurveTo(217,236,219,232);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(219,234);
                        fld.quadraticCurveTo(215,243,218,248);
                        fld.quadraticCurveTo(219,241,219,234);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(253,221);
                        fld.quadraticCurveTo(267,213,265,224);
                        fld.quadraticCurveTo(259,221,253,221);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(249,234);
                        fld.quadraticCurveTo(246,228,255,223);
                        fld.quadraticCurveTo(253,230,249,234);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(246,234);
                        fld.quadraticCurveTo(246,225,240,225);
                        fld.quadraticCurveTo(240,229,246,234);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(274,222);
                        fld.quadraticCurveTo(276,222,278,225);
                        fld.quadraticCurveTo(274,225,274,222);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(275,225);
                        fld.quadraticCurveTo(278,228,276,232);
                        fld.quadraticCurveTo(274,231,275,225);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(272,224);
                        fld.quadraticCurveTo(275,228,273,231);
                        fld.quadraticCurveTo(272,227,272,224);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(252,219);
                        fld.quadraticCurveTo(264,210,268,222);
                        fld.quadraticCurveTo(263,211,252,219);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(249,262);
                        fld.quadraticCurveTo(252,250,261,252);
                        fld.quadraticCurveTo(255,255,249,262);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(249,270);
                        fld.quadraticCurveTo(251,262,257,260);
                        fld.quadraticCurveTo(255,266,249,270);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(244,263);
                        fld.quadraticCurveTo(240,254,234,261);
                        fld.quadraticCurveTo(240,261,244,263);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(249,255);
                        fld.quadraticCurveTo(253,250,252,245);
                        fld.quadraticCurveTo(249,250,249,255);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(246,258);
                        fld.quadraticCurveTo(242,254,244,249);
                        fld.quadraticCurveTo(246,252,246,258);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(247,247);
                        fld.quadraticCurveTo(252,240,249,237);
                        fld.quadraticCurveTo(248,243,247,247);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(246,249);
                        fld.quadraticCurveTo(248,245,244,243);
                        fld.quadraticCurveTo(243,246,246,249);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(247,274);
                        fld.quadraticCurveTo(246,265,238,270);
                        fld.quadraticCurveTo(242,274,247,274);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(249,297);
                        fld.quadraticCurveTo(252,304,249,311);
                        fld.quadraticCurveTo(246,303,249,297);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(250,306);
                        fld.quadraticCurveTo(251,314,246,316);
                        fld.quadraticCurveTo(248,313,250,306);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(240,274);
                        fld.quadraticCurveTo(243,272,246,277);
                        fld.quadraticCurveTo(243,275,240,274);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(235,268);
                        fld.quadraticCurveTo(241,263,245,266);
                        fld.quadraticCurveTo(241,264,235,268);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(248,299);
                        fld.quadraticCurveTo(251,291,248,280);
                        fld.quadraticCurveTo(249,293,248,299);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(248,285);
                        fld.quadraticCurveTo(249,279,245,279);
                        fld.quadraticCurveTo(246,282,248,285);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(250,284);
                        fld.quadraticCurveTo(250,279,253,277);
                        fld.quadraticCurveTo(252,280,250,284);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(249,279);
                        fld.quadraticCurveTo(250,271,255,267);
                        fld.quadraticCurveTo(253,272,249,279);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(250,261);
                        fld.quadraticCurveTo(253,256,261,255);
                        fld.quadraticCurveTo(255,258,250,261);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(246,261);
                        fld.quadraticCurveTo(240,256,241,253);
                        fld.quadraticCurveTo(243,256,246,261);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(249,219);
                        fld.quadraticCurveTo(251,213,255,211);
                        fld.quadraticCurveTo(252,217,249,219);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(247,201);
                        fld.quadraticCurveTo(246,207,249,214);
                        fld.quadraticCurveTo(249,207,247,201);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(246,217);
                        fld.quadraticCurveTo(246,216,243,216);
                        fld.quadraticCurveTo(244,219,246,217);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(243,254);
                        fld.quadraticCurveTo(239,254,236,254);
                        fld.quadraticCurveTo(239,255,243,254);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(250,254);
                        fld.quadraticCurveTo(252,249,255,246);
                        fld.quadraticCurveTo(255,250,250,254);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(249,250);
                        fld.quadraticCurveTo(249,260,249,280);
                        fld.quadraticCurveTo(248,260,249,250);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(239,214);
                        fld.quadraticCurveTo(244,219,247,222);
                        fld.quadraticCurveTo(243,221,239,214);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(259,187);
                        fld.quadraticCurveTo(257,190,253,199);
                        fld.quadraticCurveTo(256,190,259,187);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(246,264);
                        fld.quadraticCurveTo(247,252,246,234);
                        fld.quadraticCurveTo(245,242,246,264);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(237,219);
                        fld.quadraticCurveTo(243,219,246,231);
                        fld.quadraticCurveTo(243,220,237,219);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(247,219);
                        fld.quadraticCurveTo(250,223,249,229);
                        fld.quadraticCurveTo(248,223,247,219);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(253,203);
                        fld.quadraticCurveTo(249,210,249,218);
                        fld.quadraticCurveTo(252,207,253,203);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(243,261);
                        fld.quadraticCurveTo(247,264,249,271);
                        fld.quadraticCurveTo(246,264,243,261);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        fld.beginPath();
                        fld.moveTo(258,211);
                        fld.quadraticCurveTo(252,216,249,225);
                        fld.quadraticCurveTo(255,215,258,211);
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();

                        /*fld.beginPath();
                        fld.moveTo();
                        fld.quadraticCurveTo();
                        fld.quadraticCurveTo();
                        fld.fillStyle = "#143045";
                        fld.fill();
                        fld.closePath();*/
                    
                    }

                    function florosagaveta1(frg1){
                        //flor da esquerda
                        frg1.beginPath();
                        frg1.moveTo(53,98);
                        frg1.quadraticCurveTo(56,96,55,94);
                        frg1.quadraticCurveTo(53,95,53,98);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(52,94);
                        frg1.quadraticCurveTo(55,92,54,87);
                        frg1.quadraticCurveTo(52,91,52,94);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(53,93);
                        frg1.quadraticCurveTo(53,86,49,86);
                        frg1.quadraticCurveTo(50,89,53,93);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(50,89);
                        frg1.quadraticCurveTo(43,87,43,93);
                        frg1.quadraticCurveTo(45,91,50,89);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(43,97);
                        frg1.quadraticCurveTo(44,103,49,103);
                        frg1.quadraticCurveTo(47,100,43,97);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(51,102);
                        frg1.quadraticCurveTo(47,105,49,108);
                        frg1.quadraticCurveTo(51,106,51,102);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(52,102);
                        frg1.quadraticCurveTo(51,105,53,107);
                        frg1.quadraticCurveTo(54,105,52,102);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(54,100);
                        frg1.quadraticCurveTo(53,104,56,104);
                        frg1.quadraticCurveTo(56,101,54,100);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(50,90);
                        frg1.quadraticCurveTo(40,94,48,101);
                        frg1.quadraticCurveTo(54,104,54,97);
                        frg1.quadraticCurveTo(52,91,50,90);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        //flor da direita
                        frg1.beginPath();
                        frg1.moveTo(104,105);
                        frg1.quadraticCurveTo(104,112,110,117);
                        frg1.quadraticCurveTo(108,110,104,105);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(111,113);
                        frg1.quadraticCurveTo(115,119,118,111);
                        frg1.quadraticCurveTo(115,112,111,113);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(105,103);
                        frg1.quadraticCurveTo(104,97,106,95);
                        frg1.quadraticCurveTo(107,100,105,103);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(108,98);
                        frg1.quadraticCurveTo(106,94,110,92);
                        frg1.quadraticCurveTo(110,97,108,98);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(111,97);
                        frg1.quadraticCurveTo(110,92,113,92);
                        frg1.quadraticCurveTo(115,96,111,97);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(108,99);
                        frg1.quadraticCurveTo(120,93,119,104);
                        frg1.quadraticCurveTo(110,98,108,99);
                        frg1.fillStyle = "#D87A8C";
                        frg1.fill();
                        frg1.closePath();

                        frg1.beginPath();
                        frg1.moveTo(108,99);
                        frg1.quadraticCurveTo(103,108,113,113);
                        frg1.quadraticCurveTo(124,107,114,101);
                        frg1.quadraticCurveTo(110,97,108,99);
                        frg1.fillStyle = "#CA5D74";
                        frg1.fill();
                        frg1.closePath();
                    
                    }

                    function florazulgaveta2(fag2){
                        //flor da esquerda
                        fag2.beginPath();
                        fag2.moveTo(55,206);
                        fag2.quadraticCurveTo(52,198,49,199);
                        fag2.quadraticCurveTo(49,203,55,206);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(50,203);
                        fag2.quadraticCurveTo(46,198,45,205);
                        fag2.quadraticCurveTo(48,205,50,203);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(45,211);
                        fag2.quadraticCurveTo(47,219,54,212);
                        fag2.quadraticCurveTo(49,213,45,211);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(45,201);
                        fag2.quadraticCurveTo(54,208,51,201);
                        fag2.quadraticCurveTo(44,207,46,211);
                        fag2.quadraticCurveTo(48,213,53,211);
                        fag2.quadraticCurveTo(56,205,45,201);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(51,213);
                        fag2.quadraticCurveTo(49,215,51,219);
                        fag2.quadraticCurveTo(52,215,51,213);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(53,213);
                        fag2.quadraticCurveTo(53,215,54,218);
                        fag2.quadraticCurveTo(55,215,53,213);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(52,212);
                        fag2.quadraticCurveTo(55,212,57,209);
                        fag2.quadraticCurveTo(55,210,52,212);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(53,209);
                        fag2.quadraticCurveTo(57,208,56,205);
                        fag2.quadraticCurveTo(53,207,53,209);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        //flor da direita
                        fag2.beginPath();
                        fag2.moveTo(108,231);
                        fag2.quadraticCurveTo(105,235,109,238);
                        fag2.quadraticCurveTo(109,235,108,231);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(109,235);
                        fag2.quadraticCurveTo(109,238,113,241);
                        fag2.quadraticCurveTo(113,237,109,235);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(112,237);
                        fag2.quadraticCurveTo(119,243,120,235);
                        fag2.quadraticCurveTo(117,238,112,237);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(120,232);
                        fag2.quadraticCurveTo(121,224,114,225);
                        fag2.quadraticCurveTo(117,227,120,232);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(108,227);
                        fag2.quadraticCurveTo(107,225,107,223);
                        fag2.quadraticCurveTo(109,224,108,227);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(109,226);
                        fag2.quadraticCurveTo(108,224,109,220);
                        fag2.quadraticCurveTo(111,223,109,226);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(111,225);
                        fag2.quadraticCurveTo(111,220,115,220);
                        fag2.quadraticCurveTo(115,222,111,225);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                        fag2.beginPath();
                        fag2.moveTo(108,231);
                        fag2.quadraticCurveTo(112,242,119,233);
                        fag2.quadraticCurveTo(119,231,115,226);
                        fag2.quadraticCurveTo(108,223,108,231);
                        fag2.fillStyle = "#407EB1";
                        fag2.fill();
                        fag2.closePath();

                    }

                    function florosagaveta3(frg3){
                        //flor da esquerda
                        frg3.beginPath();
                        frg3.moveTo(65,319);
                        frg3.quadraticCurveTo(66,321,66,323);
                        frg3.quadraticCurveTo(64,321,65,319);
                        frg3.fillStyle = "#C5778A";
                        frg3.fill();
                        frg3.closePath();

                        frg3.beginPath();
                        frg3.moveTo(63,319);
                        frg3.quadraticCurveTo(64,322,61,325);
                        frg3.quadraticCurveTo(61,321,63,319);
                        frg3.fillStyle = "#C5778A";
                        frg3.fill();
                        frg3.closePath();

                        frg3.beginPath();
                        frg3.moveTo(62,321);
                        frg3.quadraticCurveTo(55,321,54,314);
                        frg3.quadraticCurveTo(57,318,62,321);
                        frg3.fillStyle = "#C5778A";
                        frg3.fill();
                        frg3.closePath();

                        frg3.beginPath();
                        frg3.moveTo(64,311);
                        frg3.quadraticCurveTo(63,307,58,305);
                        frg3.quadraticCurveTo(60,309,64,311);
                        frg3.fillStyle = "#C5778A";
                        frg3.fill();
                        frg3.closePath();

                        frg3.beginPath();
                        frg3.moveTo(57,308);
                        frg3.quadraticCurveTo(57,306,56,305);
                        frg3.quadraticCurveTo(55,308,57,308);
                        frg3.fillStyle = "#C5778A";
                        frg3.fill();
                        frg3.closePath();

                        frg3.beginPath();
                        frg3.moveTo(60,319);
                        frg3.quadraticCurveTo(68,318,62,310);
                        frg3.quadraticCurveTo(56,304,55,314);
                        frg3.quadraticCurveTo(56,318,60,319);
                        frg3.fillStyle = "#C5778A";
                        frg3.fill();
                        frg3.closePath();

                        //flor da direita
                        frg3.beginPath();
                        frg3.moveTo(113,338);
                        frg3.quadraticCurveTo(111,335,113,333);
                        frg3.quadraticCurveTo(114,334,113,338);
                        frg3.fillStyle = "#A84B5E";
                        frg3.fill();
                        frg3.closePath();

                        frg3.beginPath();
                        frg3.moveTo(115,336);
                        frg3.quadraticCurveTo(113,334,115,331);
                        frg3.quadraticCurveTo(117,332,115,336);
                        frg3.fillStyle = "#A84B5E";
                        frg3.fill();
                        frg3.closePath();

                        frg3.beginPath();
                        frg3.moveTo(112,342);
                        frg3.quadraticCurveTo(111,345,114,347);
                        frg3.quadraticCurveTo(116,343,112,342);
                        frg3.fillStyle = "#A84B5E";
                        frg3.fill();
                        frg3.closePath();

                        frg3.beginPath();
                        frg3.moveTo(115,345);
                        frg3.quadraticCurveTo(115,350,117,350);
                        frg3.quadraticCurveTo(117,347,115,345);
                        frg3.fillStyle = "#A84B5E";
                        frg3.fill();
                        frg3.closePath();
                        
                        frg3.beginPath();
                        frg3.moveTo(116,345);
                        frg3.quadraticCurveTo(123,351,123,346);
                        frg3.quadraticCurveTo(122,346,116,345);
                        frg3.fillStyle = "#A84B5E";
                        frg3.fill();
                        frg3.closePath();

                        frg3.beginPath();
                        frg3.moveTo(123,344);
                        frg3.quadraticCurveTo(124,337,117,336);
                        frg3.quadraticCurveTo(120,340,123,344);
                        frg3.fillStyle = "#A84B5E";
                        frg3.fill();
                        frg3.closePath();

                        frg3.beginPath();
                        frg3.moveTo(116,336);
                        frg3.quadraticCurveTo(117,328,121,335);
                        frg3.quadraticCurveTo(119,336,116,336);
                        frg3.fillStyle = "#A84B5E";
                        frg3.fill();
                        frg3.closePath();

                        frg3.beginPath();
                        frg3.moveTo(113,339);
                        frg3.quadraticCurveTo(112,338,109,338);
                        frg3.quadraticCurveTo(111,341,113,339);
                        frg3.fillStyle = "#A84B5E";
                        frg3.fill();
                        frg3.closePath();

                        frg3.beginPath();
                        frg3.moveTo(113,341);
                        frg3.quadraticCurveTo(115,346,121,347);
                        frg3.quadraticCurveTo(123,339,118,337);
                        frg3.quadraticCurveTo(113,333,113,341);
                        frg3.fillStyle = "#A84B5E";
                        frg3.fill();
                        frg3.closePath();
                    
                    }

                    function florazulladodireito(fald){
                        //flor de cima
                        fald.beginPath();
                        fald.moveTo(246,159);
                        fald.quadraticCurveTo(241,149,250,143);
                        fald.quadraticCurveTo(247,151,246,159);
                        fald.fillStyle = "#28559A";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(253,143);
                        fald.quadraticCurveTo(259,145,256,157);
                        fald.quadraticCurveTo(255,150,253,143);
                        fald.fillStyle = "#3B6799";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(247,153);
                        fald.quadraticCurveTo(252,140,255,152);
                        fald.quadraticCurveTo(251,148,247,153);
                        fald.fillStyle = "#1D4786";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(251,161);
                        fald.quadraticCurveTo(254,156,259,154);
                        fald.quadraticCurveTo(257,161,251,161);
                        fald.fillStyle = "#184380";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(251,161);
                        fald.quadraticCurveTo(246,157,243,154);
                        fald.quadraticCurveTo(241,160,251,161);
                        fald.fillStyle = "#0D3A7B";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(249,161);
                        fald.quadraticCurveTo(243,159,243,162);
                        fald.quadraticCurveTo(245,166,249,161);
                        fald.fillStyle = "#375B93";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(250,161);
                        fald.quadraticCurveTo(247,163,245,166);
                        fald.quadraticCurveTo(251,167,250,161);
                        fald.fillStyle = "#305A91";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(251,165);
                        fald.quadraticCurveTo(252,163,256,160);
                        fald.quadraticCurveTo(257,165,251,165);
                        fald.fillStyle = "#2B568C";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(251,159);
                        fald.quadraticCurveTo(258,155,251,150);
                        fald.quadraticCurveTo(244,157,251,159);
                        fald.fillStyle = "#083174";
                        fald.fill();
                        fald.closePath();

                        //flor da esquerda
                        fald.beginPath();
                        fald.moveTo(241,237);
                        fald.quadraticCurveTo(239,227,233,231);
                        fald.quadraticCurveTo(237,233,241,237);
                        fald.fillStyle = "#24548A";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(243,239);
                        fald.quadraticCurveTo(246,235,243,231);
                        fald.quadraticCurveTo(241,235,243,239);
                        fald.fillStyle = "#2B5586";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(233,231);
                        fald.quadraticCurveTo(230,235,231,236);
                        fald.quadraticCurveTo(234,235,233,231);
                        fald.fillStyle = "#1F4276";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(229,235);
                        fald.quadraticCurveTo(226,245,235,245);
                        fald.quadraticCurveTo(231,240,229,235);
                        fald.fillStyle = "#1B4789";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(235,245);
                        fald.quadraticCurveTo(231,245,230,249);
                        fald.quadraticCurveTo(234,250,235,245);
                        fald.fillStyle = "#144689";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(237,247);
                        fald.quadraticCurveTo(234,248,233,251);
                        fald.quadraticCurveTo(237,251,237,247);
                        fald.fillStyle = "#20528E";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(237,235);
                        fald.quadraticCurveTo(232,231,233,243);
                        fald.quadraticCurveTo(235,237,237,235);
                        fald.fillStyle = "#163E7B";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(240,236);
                        fald.quadraticCurveTo(234,233,235,245);
                        fald.quadraticCurveTo(239,240,240,236);
                        fald.fillStyle = "#163E7B";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(237,244);
                        fald.quadraticCurveTo(233,250,240,251);
                        fald.quadraticCurveTo(240,245,237,244);
                        fald.fillStyle = "#426C9D";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(242,239);
                        fald.quadraticCurveTo(239,242,241,246);
                        fald.quadraticCurveTo(244,244,242,239);
                        fald.fillStyle = "#436C95";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(236,243);
                        fald.quadraticCurveTo(236,239,240,238);
                        fald.quadraticCurveTo(241,242,236,243);
                        fald.fillStyle = "#154789";
                        fald.fill();
                        fald.closePath();

                        //flor da direita
                        fald.beginPath();
                        fald.moveTo(254,231);
                        fald.quadraticCurveTo(258,219,261,223);
                        fald.quadraticCurveTo(259,227,254,231);
                        fald.fillStyle = "#1D4B8A";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(263,226);
                        fald.quadraticCurveTo(267,224,264,234);
                        fald.quadraticCurveTo(261,230,263,226);
                        fald.fillStyle = "#3D6496";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(260,240);
                        fald.quadraticCurveTo(262,237,265,234);
                        fald.quadraticCurveTo(266,240,260,240);
                        fald.fillStyle = "#4876A3";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(254,237);
                        fald.quadraticCurveTo(255,233,253,230);
                        fald.quadraticCurveTo(249,235,254,237);
                        fald.fillStyle = "#18478F";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(255,239);
                        fald.quadraticCurveTo(252,236,249,239);
                        fald.quadraticCurveTo(253,243,255,239);
                        fald.fillStyle = "#15457C";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(257,240);
                        fald.quadraticCurveTo(253,241,252,245);
                        fald.quadraticCurveTo(257,243,257,240);
                        fald.fillStyle = "#4C7197";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(263,241);
                        fald.quadraticCurveTo(259,239,257,243);
                        fald.quadraticCurveTo(261,246,263,241);
                        fald.fillStyle = "#2F5B93";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(255,232);
                        fald.quadraticCurveTo(261,223,263,231);
                        fald.quadraticCurveTo(261,231,255,232);
                        fald.fillStyle = "#164789";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(260,230);
                        fald.quadraticCurveTo(251,232,257,242);
                        fald.quadraticCurveTo(268,236,260,230);
                        fald.fillStyle = "#07397E";
                        fald.fill();
                        fald.closePath();
                    
                    }

                    function floramrelaladodireito(fald){
                        //lado esquerdo
                        fald.beginPath();
                        fald.moveTo(234,184);
                        fald.quadraticCurveTo(229,192,239,192);
                        fald.quadraticCurveTo(235,197,239,187);
                        fald.fillStyle = "#69715F";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(235,183);
                        fald.quadraticCurveTo(237,180,241,180);
                        fald.quadraticCurveTo(245,183,242,188);
                        fald.quadraticCurveTo(237,188,235,183);
                        fald.fillStyle = "#66745B";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(235,185);
                        fald.quadraticCurveTo(235,182,238,183);
                        fald.quadraticCurveTo(237,186,235,185);
                        fald.fillStyle = "#616649";
                        fald.fill();
                        fald.closePath();

                        //lado direito
                        fald.beginPath();
                        fald.moveTo(263,175);
                        fald.quadraticCurveTo(256,179,259,187);
                        fald.quadraticCurveTo(263,184,265,187);
                        fald.quadraticCurveTo(268,183,268,181);
                        fald.quadraticCurveTo(265,175,263,175);
                        fald.fillStyle = "#6A7444";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(265,181);
                        fald.quadraticCurveTo(263,178,265,177);
                        fald.quadraticCurveTo(268,179,265,181);
                        fald.fillStyle = "#616649";
                        fald.fill();
                        fald.closePath();

                        //baixo esquerda
                        fald.beginPath();
                        fald.moveTo(219,231);
                        fald.quadraticCurveTo(216,220,226,224);
                        fald.quadraticCurveTo(225,231,219,231);
                        fald.fillStyle = "#668098";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(221,229);
                        fald.quadraticCurveTo(221,226,223,227);
                        fald.quadraticCurveTo(223,228,221,229);
                        fald.fillStyle = "#4D5A5A";
                        fald.fill();
                        fald.closePath();

                        //baixo direita
                        fald.beginPath();
                        fald.moveTo(270,215);
                        fald.quadraticCurveTo(278,215,273,221);
                        fald.quadraticCurveTo(263,224,270,215);
                        fald.fillStyle = "#5E7A8E";
                        fald.fill();
                        fald.closePath();

                        fald.beginPath();
                        fald.moveTo(272,220);
                        fald.quadraticCurveTo(272,217,270,217);
                        fald.quadraticCurveTo(269,219,272,220);
                        fald.fillStyle = "#4D5A5A";
                        fald.fill();
                        fald.closePath();

                    }

                    function florosaladodireito(frld){
                        //lado esquerdo
                        frld.beginPath();
                        frld.moveTo(218,199);
                        frld.quadraticCurveTo(213,204,218,209);
                        frld.quadraticCurveTo(218,204,218,199);
                        frld.fillStyle = "#654B79";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(220,211);
                        frld.quadraticCurveTo(213,209,216,215);
                        frld.quadraticCurveTo(219,213,220,211);
                        frld.fillStyle = "#64355E";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(224,210);
                        frld.quadraticCurveTo(220,212,220,217);
                        frld.quadraticCurveTo(224,214,224,210);
                        frld.fillStyle = "#624871";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(226,209);
                        frld.quadraticCurveTo(229,211,225,215);
                        frld.quadraticCurveTo(225,211,226,209);
                        frld.fillStyle = "#5B547C";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(217,196);
                        frld.quadraticCurveTo(225,188,227,199);
                        frld.quadraticCurveTo(223,198,217,196);
                        frld.fillStyle = "#69628D";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(228,194);
                        frld.quadraticCurveTo(230,195,228,201);
                        frld.quadraticCurveTo(226,197,228,194);
                        frld.fillStyle = "#4C4168";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(230,199);
                        frld.quadraticCurveTo(231,204,228,205);
                        frld.quadraticCurveTo(228,201,230,199);
                        frld.fillStyle = "#614D79";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(227,209);
                        frld.quadraticCurveTo(227,205,230,205);
                        frld.quadraticCurveTo(230,210,227,209);
                        frld.fillStyle = "#69436B";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(219,207);
                        frld.quadraticCurveTo(218,198,225,199);
                        frld.quadraticCurveTo(221,201,219,207);
                        frld.fillStyle = "#614167";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(220,209);
                        frld.quadraticCurveTo(219,200,226,201);
                        frld.quadraticCurveTo(228,212,220,209);
                        frld.fillStyle = "#693155";
                        frld.fill();
                        frld.closePath();

                        //lado direito
                        frld.beginPath();
                        frld.moveTo(281,189);
                        frld.quadraticCurveTo(284,195,279,199);
                        frld.quadraticCurveTo(279,193,281,189);
                        frld.fillStyle = "#5C6790";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(273,201);
                        frld.quadraticCurveTo(276,200,281,199);
                        frld.quadraticCurveTo(279,206,273,201);
                        frld.fillStyle = "#513F67";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(273,203);
                        frld.quadraticCurveTo(277,203,276,208);
                        frld.quadraticCurveTo(273,207,273,203);
                        frld.fillStyle = "#57537C";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(279,186);
                        frld.quadraticCurveTo(273,183,271,191);
                        frld.quadraticCurveTo(275,188,279,186);
                        frld.fillStyle = "#514C74";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(268,203);
                        frld.quadraticCurveTo(271,191,267,197);
                        frld.quadraticCurveTo(273,197,268,203);
                        frld.fillStyle = "#68446D";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(268,197);
                        frld.quadraticCurveTo(267,190,272,190);
                        frld.quadraticCurveTo(272,194,268,197);
                        frld.fillStyle = "#6C4B72";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(271,193);
                        frld.quadraticCurveTo(279,183,279,196);
                        frld.quadraticCurveTo(277,192,271,193);
                        frld.fillStyle = "#55375D";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(270,197);
                        frld.quadraticCurveTo(277,189,278,199);
                        frld.quadraticCurveTo(275,197,270,197);
                        frld.fillStyle = "#633C62";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(274,197);
                        frld.quadraticCurveTo(268,197,271,203);
                        frld.quadraticCurveTo(277,201,274,198);
                        frld.fillStyle = "#6F3E63";
                        frld.fill();
                        frld.closePath();

                        frld.beginPath();
                        frld.moveTo(271,201);
                        frld.quadraticCurveTo(269,203,267,206);
                        frld.quadraticCurveTo(272,205,271,201);
                        frld.fillStyle = "#6F3E63";
                        frld.fill();
                        frld.closePath();

                    }

                    