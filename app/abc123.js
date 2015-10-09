var matchReader = {
  read: function () {

    var results = [];

    var matches = $("iframe").contents().find("[id^=match]");
    matches.each(
      function(index, match){
        if($(match).find(".bg_285").length==1){//is tennis match
          partido = new MatchInfo();
          var prefijo_partido=match.id.replace("match_", "");
          partido.matchId=match.id;

          var players=$(match).find("#" + prefijo_partido).attr("des");
          var playerSplit = players.split(" vs. ");
          partido.a=playerSplit[0];
          partido.b=playerSplit[1];


          var coeficientesPartido = $(match).find("#" + prefijo_partido + "_794 span.coef");
          partido.pa='0';
          partido.pb='0';
          coeficientesPartido.each(
            function(index, coeficientePartido){
              if(index==0){
                partido.pa=coeficientePartido.innerText;
              }else if(index==1){
                partido.pb=coeficientePartido.innerText;
              }
            }
          );

          var saque = $(match).find(".saque_primero");
          if(saque.length==1){
            partido.serve='A';
          }else {
            partido.serve='B';
          }

          var puntajes = $(match).find("div.marcador_live_ten tr");

          var puntajesA = puntajes[0];
          var puntosA = $(puntajesA).find("td.servicio");
          partido.pointsa=puntosA.html();
          if(puntosA.siblings().length>2)partido.s1ga=puntosA.siblings()[2].innerText;
          if(puntosA.siblings().length>3)partido.s2ga=puntosA.siblings()[3].innerText;


          var puntajesB = puntajes[1];
          var puntosB = $(puntajesB).find("td.servicio");
          partido.pointsb=puntosB.html();
          if(puntosB.siblings().length>2)partido.s1gb=puntosB.siblings()[2].innerText;
          if(puntosB.siblings().length>3)partido.s2gb=puntosB.siblings()[3].innerText;

          var coeficientesS1 = $(match).find("#" + prefijo_partido + "_790 span.coef");
          coeficientesS1.each(
            function(index, coeficienteS1){
              if(index==0){
                partido.s1pa=coeficienteS1.innerText;
              }else if(index==1){
                partido.s1pb=coeficienteS1.innerText;
              }
            }
          );

          var coeficientesS2 = $(match).find("#" + prefijo_partido + "_791 span.coef");
          coeficientesS2.each(
            function(index, coeficienteS2){
              if(index==0){
                partido.s2pa=coeficienteS2.innerText;
              }else if(index==1){
                partido.s2pb=coeficienteS2.innerText;
              }
            }
          );



          var gameCoefs = new Array(20);
          for (var i = 0; i < 19; i++) {
            gameCoefs[i] = new Array(2);
          }

          var coeficientesS1G2 = $(match).find("#" + prefijo_partido + "_1179 span.coef");
          coeficientesS1G2.each(
            function(index, coeficientesS1G2){
              if(index==0){
                partido.s1g2pa=coeficientesS1G2.innerText;
              }else if(index==1){
                partido.s1g2pb=coeficientesS1G2.innerText;
              }
              gameCoefs[2-1][index]=coeficientesS1G2.innerText;
            }
          );

          var coeficientesS1G3 = $(match).find("#" + prefijo_partido + "_1174 span.coef");
          coeficientesS1G3.each(
            function(index, coeficientesS1G3){
              if(index==0){
                partido.s1g3pa=coeficientesS1G3.innerText;
              }else if(index==1){
                partido.s1g3pb=coeficientesS1G3.innerText;
              }
              gameCoefs[3-1][index]=coeficientesS1G3.innerText;
            }
          );

          var coeficientesS1G4 = $(match).find("#" + prefijo_partido + "_1180 span.coef");
          coeficientesS1G4.each(
            function(index, coeficientesS1G4){
              if(index==0){
                partido.s1g4pa=coeficientesS1G4.innerText;
              }else if(index==1){
                partido.s1g4pb=coeficientesS1G4.innerText;
              }
              gameCoefs[4-1][index]=coeficientesS1G4.innerText;
            }
          );

          var coeficientesS1G5 = $(match).find("#" + prefijo_partido + "_1175 span.coef");
          coeficientesS1G5.each(
            function(index, coeficientesS1G5){
              if(index==0){
                partido.s1g5pa=coeficientesS1G5.innerText;
              }else if(index==1){
                partido.s1g5pb=coeficientesS1G5.innerText;
              }
              gameCoefs[5-1][index]=coeficientesS1G5.innerText;
            }
          );

          var coeficientesS1G6 = $(match).find("#" + prefijo_partido + "_1181 span.coef");
          coeficientesS1G6.each(
            function(index, coeficientesS1G6){
              if(index==0){
                partido.s1g6pa=coeficientesS1G6.innerText;
              }else if(index==1){
                partido.s1g6pb=coeficientesS1G6.innerText;
              }
              gameCoefs[6-1][index]=coeficientesS1G6.innerText;
            }
          );

          var coeficientesS1G7 = $(match).find("#" + prefijo_partido + "_1176 span.coef");
          coeficientesS1G7.each(
            function(index, coeficientesS1G7){
              if(index==0){
                partido.s1g7pa=coeficientesS1G7.innerText;
              }else if(index==1){
                partido.s1g7pb=coeficientesS1G7.innerText;
              }
              gameCoefs[7-1][index]=coeficientesS1G7.innerText;
            }
          );

          var coeficientesS1G8 = $(match).find("#" + prefijo_partido + "_1182 span.coef");
          coeficientesS1G8.each(
            function(index, coeficientesS1G8){
              if(index==0){
                partido.s1g8pa=coeficientesS1G8.innerText;
              }else if(index==1){
                partido.s1g8pb=coeficientesS1G8.innerText;
              }
              gameCoefs[8-1][index]=coeficientesS1G8.innerText;
            }
          );

          var coeficientesS1G9 = $(match).find("#" + prefijo_partido + "_1177 span.coef");
          coeficientesS1G9.each(
            function(index, coeficientesS1G9){
              if(index==0){
                partido.s1g9pa=coeficientesS1G9.innerText;
              }else if(index==1){
                partido.s1g9pb=coeficientesS1G9.innerText;
              }
              gameCoefs[9-1][index]=coeficientesS1G9.innerText;
            }
          );


          var coeficientesS2G2 = $(match).find("#" + prefijo_partido + "_1185 span.coef");
          coeficientesS2G2.each(
            function(index, coeficientesS2G2){
              if(index==0){
                partido.s2g2pa=coeficientesS2G2.innerText;
              }else if(index==1){
                partido.s2g2pb=coeficientesS2G2.innerText;
              }
              gameCoefs[2+10-1][index]=coeficientesS2G2.innerText;
            }
          );

          var coeficientesS2G3 = $(match).find("#" + prefijo_partido + "_1186 span.coef");
          coeficientesS2G3.each(
            function(index, coeficientesS2G3){
              if(index==0){
                partido.s2g3pa=coeficientesS2G3.innerText;
              }else if(index==1){
                partido.s2g3pb=coeficientesS2G3.innerText;
              }
              gameCoefs[3+10-1][index]=coeficientesS2G3.innerText;
            }
          );

          var coeficientesS2G4 = $(match).find("#" + prefijo_partido + "_1187 span.coef");
          coeficientesS2G4.each(
            function(index, coeficientesS2G4){
              if(index==0){
                partido.s2g4pa=coeficientesS2G4.innerText;
              }else if(index==1){
                partido.s2g4pb=coeficientesS2G4.innerText;
              }
              gameCoefs[4+10-1][index]=coeficientesS2G4.innerText;
            }
          );

          var coeficientesS2G5 = $(match).find("#" + prefijo_partido + "_1188 span.coef");
          coeficientesS2G5.each(
            function(index, coeficientesS2G5){
              if(index==0){
                partido.s2g5pa=coeficientesS2G5.innerText;
              }else if(index==1){
                partido.s2g5pb=coeficientesS2G5.innerText;
              }
              gameCoefs[5+10-1][index]=coeficientesS2G5.innerText;
            }
          );

          var coeficientesS2G7 = $(match).find("#" + prefijo_partido + "_1190 span.coef");
          coeficientesS2G7.each(
            function(index, coeficientesS2G7){
              if(index==0){
                partido.s2g7pa=coeficientesS2G7.innerText;
              }else if(index==1){
                partido.s2g7pb=coeficientesS2G7.innerText;
              }
              gameCoefs[7+10-1][index]=coeficientesS2G7.innerText;
            }
          );


          partido.gameCoefs=gameCoefs;




          //Calculamos set actual
          if(partido.s2ga=='-'){
            partido.currentGame=1;
          }
          else {
            partido.currentGame=2;
          }

          //Calculamos juego actual
          if(partido.currentGame==1){
            partido.currentSet=parseInt(partido.s1ga) + parseInt(partido.s1gb) + 1;
          }
          else if(partido.currentGame==2){
            partido.currentSet=parseInt(partido.s2ga) + parseInt(partido.s2gb) + 1;
          }

          results.push(partido);

          //Save in PARSE
          var Match = Parse.Object.extend("Match");
          var match = new Match();
          match.set("matchId", partido.matchId);
          match.set("sampleTime", new Date());
          match.set("pa", parseFloat(partido.pa.replace(',','.')));
          match.set("pb", parseFloat(partido.pb.replace(',','.')));

          match.save();

        }
      }
    );

    return results;
    }
}


function MatchInfo() {
    matchId:""; //Identificador de partido
    currentSet:0;
    currentGame:0;
    a:"";       //jugador A
    b:"";       //jugador B
    pa:"";      //cuota de partido para A
    pb:"";      //cuota de partido para B
    serve:"";   //Al servicio
    pointsa:""; //Puntos en el juego actual para A
    pointsb:""; //Puntos en el juego actual para B
    s1ga:"";    //Juegos en el primer set para A
    s1gb:"";    //Juegos en el primer set para B
    s2ga:"";    //Juegos en el segundo set para A
    s2gb:"";    //Juegos en el segundo set para B
    s1pa:"";    //Cuota set 1 para A
    s1pb:"";    //Cuota set 1 para B
    s2pa:"";
    s2pb:"";
    gameCoefs:[];
    s1g1pa:"";
    s1g1pb:"";
    s1g2pa:"";
    s1g2pb:"";
    s1g3pa:"";
    s1g3pb:"";
    s1g4pa:"";
    s1g4pb:"";
    s1g5pa:"";
    s1g5pb:"";
    s1g6pa:"";
    s1g6pb:"";
    s1g7pa:"";
    s1g7pb:"";
    s1g8pa:"";
    s1g8pb:"";
    s1g9pa:"";
    s1g9pb:"";

    s2g1pa:"";
    s2g1pb:"";
    s2g2pa:"";
    s2g2pb:"";
    s2g3pa:"";
    s2g3pb:"";
    s2g4pa:"";
    s2g4pb:"";
    s2g5pa:"";
    s2g5pb:"";
    s2g6pa:"";
    s2g6pb:"";
    s2g7pa:"";
    s2g7pb:"";
    s2g8pa:"";
    s2g8pb:"";
    s2g9pa:"";
    s2g9pb:"";
}
