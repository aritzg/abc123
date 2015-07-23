var matchReader = {
  read: function () {

    var results = [];

    var matches = $("iframe").contents().find("[id^=match]");
    matches.each(
      function(index, match){
        if($(match).find(".bg_285").length==1){//is tennis match
          partido = new Match();
          var prefijo_juego=match.id.replace("match_", "");
          partido.matchId=match.id;

          var players=$(match).find("#" + prefijo_juego).attr("des");
          var playerSplit = players.split(" vs. ");
          partido.a=playerSplit[0];
          partido.b=playerSplit[1];


          var coeficientesPartido = $(match).find("#" + prefijo_juego + "_794 span.coef");
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
          partido.s1ga=puntosA.siblings()[2].innerText;
          partido.s2ga=puntosA.siblings()[3].innerText;


          var puntajesB = puntajes[1];
          var puntosB = $(puntajesB).find("td.servicio");
          partido.pointsb=puntosB.html();
          partido.s1gb=puntosB.siblings()[2].innerText;
          partido.s2gb=puntosB.siblings()[3].innerText;

          /*if($(match).find("[id^=" + prefijo_juego + "_11]").length>1){
              alert("hay juego");
          }*/

          results.push(partido);
        }
      }
    );

    return results;
    }
}


function Match() {
    matchId:""; //Identificador de partido
    a:"";       //jugador A
    b:"";       //jugador B
    pa:"";      //
    pb:"";
    serve:"";
    pointsa:"";
    pointsb:"";
    s1ga:"";
    s1gb:"";
    s2ga:"";
    s2gb:"";
}
