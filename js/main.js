//// Slice Move PJ JS - main.js //////

$(function () { // jQB /////////////////
    
    //// 인트로 셋팅! //////
    
    // 1. #wrap>ul>li 에 flex를 첫번째만 1로 나머지는 0으로 셋팅
    $("#wrap>ul>li").css({flex:"0",transition:"none"})
        .first().css({flex:"1"});
    
    // 2. 로딩후 1초후 flex와 transition 조정으로 인트로애니메이션
    setTimeout(function(){
        $("#wrap>ul>li").css({
            flex:"1",
            transition:"all .9s ease-in-out"
        }); //// css ////////
    }, 1000);
    
    // 3. 인트로 후 인트로커버 제거하기, 인라인 style 제거
    setTimeout(function(){
        // 커버제거
        $("#icover").remove();
        // 스크립트로 삽입된 인라인 style을 제거해야하는 이유는?
        // -> 기존 셋팅된 css보다 우선권을 가지므로 css셋팅 무력화됨!
        // 따라서 기존 style을 지워준다!
        $("#wrap>ul>li").attr("style","");
        
    }, 2000);
    
    
    
    
    

    //// 햄버거버튼 클릭시 메뉴 나오기 ////
    $("#ham").click(function () {
        // 변경대상: #gnb, #wrap
        var easing = "easeOutQuart";

        // 1. GNB이동
        $("#gnb").animate({
            left: "0"
        }, 600, easing);

        // 2. 컨텐츠박스 이동
        $("#wrap").animate({
            left: "300px"
        }, 600, easing);

        // 3. 상단영역 이동
        $("#top").animate({
            left: "300px"
        }, 600, easing);

        // 4. 햄버거버튼 없애기
        $("#ham").hide();

        // 5. GNB 메뉴 li에 순차적이동 애니메이션주기
        // 순차적이라함은 delay()시간을 각각 달리줌
        // 각각 -> each() !!!
        $("#gnb>ul>li").each(function (idx, ele) {
            console.log("순번:" + idx);
            // 순번을 곱하여 지연시간을 다르게셋팅함
            // 각각 0.08초 간격이 됨
            $(ele).delay(idx * 80)
                .animate({
                    left: "0"
                }, 400, "easeInOutCirc");
        }); /////// each ///////////

        // 6. 사이트 커버 나타나기
        $("#scover").show()
            .animate({
                left: "300px"
            }, 600, easing);

    }); ///////// click ////////
    ////////////////////////////

    //// 닫기버튼 클릭시 다시 원상복귀!!! /////
    $("#cbtn").click(function () {
        //console.log("클릭!");
        // 변경대상: #gnb, #wrap
        var easing = "easeOutQuart";

        // 1. GNB이동(다시나감)
        $("#gnb").animate({
            left: "-300px"
        }, 700, easing);

        // 2. 컨텐츠박스 이동(원위치)
        $("#wrap").animate({
            left: "0px"
        }, 600, easing);

        // 3. 상단영역 이동(원위치)
        $("#top").animate({
            left: "0px"
        }, 600, easing, function () {
            // 애니후 실행
            
            // 4. 햄버거버튼 보이기
            $("#ham").show();

            // 5. GNB 메뉴 li설정 원상복귀!
            $("#gnb>ul>li").css({
                left: "-100%"
            }); //// css /////////
            
        }); /// animate ///////////



        // 6. 사이트 커버 나타나기
        $("#scover")
        .animate({
            left: "0px"
        }, 700, easing, function () {
            
            $(this).fadeOut(200,function(){
                //닫기버튼없앰  
                $("#cbtn").hide();
                //커서복귀
                $("body").css({
                    cursor: "default"
                });//// css /////
                
            }); //이동후 숨김 ////////
            
        }); //// animate //////////////




    }); ///////////// click //////////////////
    /////////////////////////////////////////




    /// #scover 위에서 마우스 움직일때 닫기버튼 따라다니기 ///
    $("#scover").mousemove(function (e) { // e-이벤트전달값
        var posx = e.pageX;
        var posy = e.pageY;
        //console.log("좌표값:"+posx+"/"+posy);
        // 닫기버튼 위치 이동설정
        $("#cbtn").css({
            top: posy + "px",
            left: posx + "px"
        }); ///// css ///////

    }); //////// mousemove ///////////////

    //// #scover영역에 들어오면 #cbtn보이고 나가면 사라짐
    $("#scover").mouseenter(
        function () { // over
            //버튼보이기
            $("#cbtn").show();
            //커서없애기
            $("body").css({
                cursor: "none"
            }); // css ////
        }); //////// mouseenter //////

    $("#gnb").mouseenter(
        function () { // out
            //버튼 숨기기
            $("#cbtn").hide();
            //커서보이기
            $("body").css({
                cursor: "default"
            }); /// css ////
        }); /////// mouseenter //////////

    /// 보완: body 바깥으로 나가면 닫기버튼 사라지기
    $("body").mouseleave(function () {
        $("#cbtn").hide();
    }); ///// mouseleave //////////////






}); ///////// jQB /////////////////////
/////////////////////////////////////
