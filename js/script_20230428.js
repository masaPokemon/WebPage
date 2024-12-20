


window.onload = function () {
  //bobyの最後にコピーしたダメカン要素の置き場を作成
  const damecanDiv = document.createElement("div");
  damecanDiv.classList.add("damecanOkiba");
  damecanDiv.setAttribute("id", "damecan_okiba")
  damecanDiv.setAttribute("onContextmenu", "return false;")
  const damecanOkiba = document.body.appendChild(damecanDiv);


  //各DOMを変数に定義 
  const coin = document.getElementById("coin");
  const damecan10 = document.getElementById("damecan10");
  const damecan50 = document.getElementById("damecan50");
  const damecan100 = document.getElementById("damecan100");
  const trashBox = document.getElementById("trashBox");
  const moveLeftButton = document.getElementById("moveLeftButton");
  const moveRightButton = document.getElementById("moveRightButton");
  const getDeckButton = document.getElementById("set-btn");
  const smartPhoneButton = document.getElementById("smartphone_btn");

  const p1SideWrap = document.getElementById("p1_side_wrap");
  const p1SideOpen = document.getElementById("p1_side_open"); //202207アプデ
  const p1SideShuffle = document.getElementById("p1_side_shuffle"); //202207アプデ
  const p1SideGet1 = document.getElementById("p1_side_get1"); //202207アプデ
  const p1SideGet2 = document.getElementById("p1_side_get2"); //202207アプデ
  const p1SideGet3 = document.getElementById("p1_side_get3"); //202207アプデ
  const p1DeckRemaining = document.getElementById("p1_deck_remaining"); //202207アプデ
  const p1LostzoneRemaining = document.getElementById("p1_lostzone_remaining"); //202207アプデ
  const p1HandRemaining = document.getElementById("p1_hand_remaining"); //202207アプデ
  const p1TrashRemaining = document.getElementById("p1_trash_remaining"); //202207アプデ
  const p1LostzoneWrap = document.getElementById("p1_lostzone_wrap"); //202207アプデ
  const p1LostzoneSort = document.getElementById("p1_lostzone_sort"); //202207アプデ
  const p1LostzoneBtn = document.getElementById("p1_lostzone_btn"); //202207アプデ
  const p1BattleWrap = document.getElementById("p1_battle_wrap");
  const p1Bench1Wrap = document.getElementById("p1_bench1_wrap");
  const p1Bench2Wrap = document.getElementById("p1_bench2_wrap");
  const p1Bench3Wrap = document.getElementById("p1_bench3_wrap");
  const p1Bench4Wrap = document.getElementById("p1_bench4_wrap");
  const p1Bench5Wrap = document.getElementById("p1_bench5_wrap");
  const p1Bench6Wrap = document.getElementById("p1_bench6_wrap");
  const p1Bench7Wrap = document.getElementById("p1_bench7_wrap");
  const p1Bench8Wrap = document.getElementById("p1_bench8_wrap");
  const p1HandWrap = document.getElementById("p1_hand_wrap");
  const p1TrashWrap = document.getElementById("p1_trash_wrap");
  const p1DeckWrap = document.getElementById("p1_deck_wrap");
  const p1DrawBtn = document.getElementById("p1_draw_btn");
  const p1ShuffleBtn = document.getElementById("p1_shuffle_btn");
  const p1DeckBtn = document.getElementById("p1_deck_btn");
  const p1Deck5 = document.getElementById("p1_deck_5");
  const p1Deck7 = document.getElementById("p1_deck_7");
  const p1Burn = document.getElementById("p1_burn");
  const p1Poison = document.getElementById("p1_poison");
  const p1Sleeping = document.getElementById("p1_sleeping");
  const p1Paralysis = document.getElementById("p1_paralysis");
  const p1Confusion = document.getElementById("p1_confusion");
  const p1BattleToDeck = document.getElementById("p1_battle_to_deck")

  const p1SmartphoneWrap = document.getElementById("p1_smartphone_wrap")


  const p2SideWrap = document.getElementById("p2_side_wrap");
  const p2SideOpen = document.getElementById("p2_side_open"); //202207アプデ
  const p2SideShuffle = document.getElementById("p2_side_shuffle"); //202207アプデ
  const p2SideGet1 = document.getElementById("p2_side_get1"); //202207アプデ
  const p2SideGet2 = document.getElementById("p2_side_get2"); //202207アプデ
  const p2SideGet3 = document.getElementById("p2_side_get3"); //202207アプデ
  const p2DeckRemaining = document.getElementById("p2_deck_remaining"); //202207アプデ
  const p2LostzoneRemaining = document.getElementById("p2_lostzone_remaining"); //202207アプデ
  const p2HandRemaining = document.getElementById("p2_hand_remaining"); //202207アプデ
  const p2TrashRemaining = document.getElementById("p2_trash_remaining"); //202207アプデ
  const p2LostzoneWrap = document.getElementById("p2_lostzone_wrap"); //202207アプデ
  const p2LostzoneSort = document.getElementById("p2_lostzone_sort"); //202207アプデ
  const p2LostzoneBtn = document.getElementById("p2_lostzone_btn"); //202207アプデ
  const p2BattleWrap = document.getElementById("p2_battle_wrap");
  const p2Bench1Wrap = document.getElementById("p2_bench1_wrap");
  const p2Bench2Wrap = document.getElementById("p2_bench2_wrap");
  const p2Bench3Wrap = document.getElementById("p2_bench3_wrap");
  const p2Bench4Wrap = document.getElementById("p2_bench4_wrap");
  const p2Bench5Wrap = document.getElementById("p2_bench5_wrap");
  const p2Bench6Wrap = document.getElementById("p2_bench6_wrap");
  const p2Bench7Wrap = document.getElementById("p2_bench7_wrap");
  const p2Bench8Wrap = document.getElementById("p2_bench8_wrap");
  const p2HandWrap = document.getElementById("p2_hand_wrap");
  const p2TrashWrap = document.getElementById("p2_trash_wrap");
  const p2DeckWrap = document.getElementById("p2_deck_wrap");
  const p2DrawBtn = document.getElementById("p2_draw_btn");
  const p2ShuffleBtn = document.getElementById("p2_shuffle_btn");
  const p2DeckBtn = document.getElementById("p2_deck_btn");
  const p2Deck5 = document.getElementById("p2_deck_5");
  const p2Deck7 = document.getElementById("p2_deck_7");
  const p2Burn = document.getElementById("p2_burn");
  const p2Poison = document.getElementById("p2_poison");
  const p2Sleeping = document.getElementById("p2_sleeping");
  const p2Paralysis = document.getElementById("p2_paralysis");
  const p2Confusion = document.getElementById("p2_confusion");
  const p2BattleToDeck = document.getElementById("p2_battle_to_deck")

  const p2SmartphoneWrap = document.getElementById("p2_smartphone_wrap")


  const stadiumWrap = document.getElementById("stadium_wrap");

  const leftCode = document.getElementById("left_code");
  const rightCode = document.getElementById("right_code");

  const returnToDeck = document.getElementById("retuen_to_deck")
  const moveToTrash = document.getElementById("move_to_trash")
  const goToCardPage = document.getElementById("go_to_card_page")
  const moveToTop = document.getElementById("move_to_top")
  const moveToBottom = document.getElementById("move_to_bottom")
  const reverseCard = document.getElementById("reverse_card")
  const moveToHand = document.getElementById("move_to_hand")


  const maggyo = document.getElementById("maggyo");
  const testFieldCard = [];
  let p1Deck;
  let p2Deck;
  let x;
  let y;
  let width;
  let height;



  //20230318アプデ↓
  document.getElementById("p1_battle_damage_box_up").onclick = function () {
    document.getElementById("p1_battle_damage_box").value = Number(document.getElementById("p1_battle_damage_box").value) + 10;
  }
  document.getElementById("p1_battle_damage_box_down").onclick = function () {
    if (Number(document.getElementById("p1_battle_damage_box").value > 10)) {
      document.getElementById("p1_battle_damage_box").value = Number(document.getElementById("p1_battle_damage_box").value) - 10;
    } else {
      document.getElementById("p1_battle_damage_box").value = ""
    }
  }

  for (let i = 1; i < 9; i++) {
    document.getElementById("p1_bench" + i + "_damage_box_up").onclick = function () {
      document.getElementById("p1_bench" + i + "_damage_box").value = Number(document.getElementById("p1_bench" + i + "_damage_box").value) + 10;
    }
    document.getElementById("p1_bench" + i + "_damage_box_down").onclick = function () {
      if (Number(document.getElementById("p1_bench" + i + "_damage_box").value > 10)) {
        document.getElementById("p1_bench" + i + "_damage_box").value = Number(document.getElementById("p1_bench" + i + "_damage_box").value) - 10;
      } else {
        document.getElementById("p1_bench" + i + "_damage_box").value = ""
      }
    }
  }

  document.getElementById("p2_battle_damage_box_up").onclick = function () {
    document.getElementById("p2_battle_damage_box").value = Number(document.getElementById("p2_battle_damage_box").value) + 10;
  }
  document.getElementById("p2_battle_damage_box_down").onclick = function () {
    if (Number(document.getElementById("p2_battle_damage_box").value > 10)) {
      document.getElementById("p2_battle_damage_box").value = Number(document.getElementById("p2_battle_damage_box").value) - 10;
    } else {
      document.getElementById("p2_battle_damage_box").value = ""
    }
  }

  for (let i = 1; i < 9; i++) {
    document.getElementById("p2_bench" + i + "_damage_box_up").onclick = function () {
      document.getElementById("p2_bench" + i + "_damage_box").value = Number(document.getElementById("p2_bench" + i + "_damage_box").value) + 10;
    }
    document.getElementById("p2_bench" + i + "_damage_box_down").onclick = function () {
      if (Number(document.getElementById("p2_bench" + i + "_damage_box").value > 10)) {
        document.getElementById("p2_bench" + i + "_damage_box").value = Number(document.getElementById("p2_bench" + i + "_damage_box").value) - 10;
      } else {
        document.getElementById("p2_bench" + i + "_damage_box").value = ""
      }
    }
  }

  const p1HandToDeckBottom = document.getElementById("p1_hand_to_deck_bottom")
  const p2HandToDeckBottom = document.getElementById("p2_hand_to_deck_bottom")


  //20230205アプデ↓

  const bgLayout = document.getElementsByClassName("bgLayout")

  for (let i = 0; i < bgLayout.length; i++) {
    bgLayout[i].style.backgroundColor = "transparent";
    bgLayout[i].onclick = function () {
      if (this.style.backgroundColor == "lightgreen") {
        this.style.backgroundColor = "transparent";
      } else {
        this.style.backgroundColor = "lightgreen";
      }
    }
  }

  document.getElementById("stadium_bg").onclick = function () {
    if (this.style.backgroundColor == "lightgreen") {
      this.style.backgroundColor = "transparent";
    } else {
      this.style.backgroundColor = "lightgreen";
    }
  }




  //202207アプデ↓
  p1SideOpen.onclick = function () {
    let p1SideArea = Array.from(p1SideWrap.children)
    if (p1SideOpen.innerText == "表にする") {
      p1SideArea.forEach(function (card) {
        card.classList.remove("hide");
      });
      p1SideOpen.innerText = "裏にする"
    } else if (p1SideOpen.innerText == "裏にする") {
      p1SideArea.forEach(function (card) {
        card.classList.add("hide");
      });
      p1SideOpen.innerText = "表にする"
    }


  }

  p1SideShuffle.onclick = function () {
    let temp = Array.from(p1SideWrap.children)
    temp.shuffle()
    p1SideWrap.innerHTML = ""
    temp.forEach(_node => p1SideWrap.appendChild(_node))
  }

  p1SideGet1.onclick = function () {
    for (let i = 0; i < 1; i++) {
      p1SideWrap.firstElementChild.classList.remove("hide");
      p1HandWrap.appendChild(p1SideWrap.firstElementChild)
    }
  }

  p1SideGet2.onclick = function () {
    for (let i = 0; i < 2; i++) {
      p1SideWrap.firstElementChild.classList.remove("hide");
      p1HandWrap.appendChild(p1SideWrap.firstElementChild)
    }
  }

  p1SideGet3.onclick = function () {
    for (let i = 0; i < 3; i++) {
      p1SideWrap.firstElementChild.classList.remove("hide");
      p1HandWrap.appendChild(p1SideWrap.firstElementChild)
    }
  }

  const p1DeckObserver = new MutationObserver(records => {
    p1DeckRemaining.innerText = p1DeckWrap.childElementCount;
  })
  p1DeckObserver.observe(p1DeckWrap, {
    childList: true
  })

  const p1LostzoneObserver = new MutationObserver(records => {
    p1LostzoneRemaining.innerText = p1LostzoneWrap.childElementCount;
  })
  p1LostzoneObserver.observe(p1LostzoneWrap, {
    childList: true
  })

  const p1HandObserver = new MutationObserver(records => {
    p1HandRemaining.innerText = p1HandWrap.childElementCount;
  })
  p1HandObserver.observe(p1HandWrap, {
    childList: true
  })

  const p1TrashObserver = new MutationObserver(records => {
    p1TrashRemaining.innerText = p1TrashWrap.childElementCount;
  })
  p1TrashObserver.observe(p1TrashWrap, {
    childList: true
  })


  p1LostzoneBtn.onclick = function () {
    if (document.getElementById("p1_lostzone").style.display == "none") {
      document.getElementById("p1_lostzone").style.display = "block";
      p1LostzoneBtn.innerText = "ロストゾーン非表示"
    } else {
      document.getElementById("p1_lostzone").style.display = "none";
      p1LostzoneBtn.innerText = "ロストゾーン表示"
    }
  }




  p2SideOpen.onclick = function () {
    let p2SideArea = Array.from(p2SideWrap.children)
    if (p2SideOpen.innerText == "表にする") {
      p2SideArea.forEach(function (card) {
        card.classList.remove("hide");
      });
      p2SideOpen.innerText = "裏にする"
    } else if (p2SideOpen.innerText == "裏にする") {
      p2SideArea.forEach(function (card) {
        card.classList.add("hide");
      });
      p2SideOpen.innerText = "表にする"
    }


  }

  p2SideShuffle.onclick = function () {
    let temp = Array.from(p2SideWrap.children)
    temp.shuffle()
    p2SideWrap.innerHTML = ""
    temp.forEach(_node => p2SideWrap.appendChild(_node))
  }

  p2SideGet1.onclick = function () {
    for (let i = 0; i < 1; i++) {
      p2SideWrap.firstElementChild.classList.remove("hide");
      p2HandWrap.appendChild(p2SideWrap.firstElementChild)
    }
  }

  p2SideGet2.onclick = function () {
    for (let i = 0; i < 2; i++) {
      p2SideWrap.firstElementChild.classList.remove("hide");
      p2HandWrap.appendChild(p2SideWrap.firstElementChild)
    }
  }

  p2SideGet3.onclick = function () {
    for (let i = 0; i < 3; i++) {
      p2SideWrap.firstElementChild.classList.remove("hide");
      p2HandWrap.appendChild(p2SideWrap.firstElementChild)
    }
  }

  const p2DeckObserver = new MutationObserver(records => {
    p2DeckRemaining.innerText = p2DeckWrap.childElementCount;
  })
  p2DeckObserver.observe(p2DeckWrap, {
    childList: true
  })

  const p2LostzoneObserver = new MutationObserver(records => {
    p2LostzoneRemaining.innerText = p2LostzoneWrap.childElementCount;
  })
  p2LostzoneObserver.observe(p2LostzoneWrap, {
    childList: true
  })

  const p2HandObserver = new MutationObserver(records => {
    p2HandRemaining.innerText = p2HandWrap.childElementCount;
  })
  p2HandObserver.observe(p2HandWrap, {
    childList: true
  })

  const p2TrashObserver = new MutationObserver(records => {
    p2TrashRemaining.innerText = p2TrashWrap.childElementCount;
  })
  p2TrashObserver.observe(p2TrashWrap, {
    childList: true
  })

  p2LostzoneBtn.onclick = function () {
    if (document.getElementById("p2_lostzone").style.display == "none") {
      document.getElementById("p2_lostzone").style.display = "block";
      p2LostzoneBtn.innerText = "ロストゾーン非表示"
    } else {
      document.getElementById("p2_lostzone").style.display = "none";
      p2LostzoneBtn.innerText = "ロストゾーン表示"
    }
  }

  //202207アプデ↑


  //GETパラメータ取得
  const url = new url("./window.location.href.html");
  const params = url.searchParams;

  if (params.get('deck1') && params.get('deck2')) {
    leftCode.value = params.get('deck1');
    rightCode.value = params.get('deck2');
    setTimeout(() => {
      getDeckButton.click()
    }, 500);
  }

  //デッキ確認ツールに移動
  const deckCheckBtn1 = document.getElementById("move_to_deck_check1")
  deckCheckBtn1.onclick = function (event) {
    if (leftCode.value) {
      const url = "https://funamushi.net/pokeca_hitorimawashi/pokeca_deck_check?deck1=" + leftCode.value;
      deckCheckBtn1.setAttribute('href', url);
    };
  }

  const deckCheckBtn2 = document.getElementById("move_to_deck_check2")
  deckCheckBtn2.onclick = function (event) {
    if (leftCode.value) {
      const url = "https://funamushi.net/pokeca_hitorimawashi/pokeca_deck_check?deck1=" + rightCode.value;
      deckCheckBtn2.setAttribute('href', url);
    };
  }

  const setDamecan = function (damecan) {
    damecan.onmouseover = (event) => {
      const damecan_new = damecan.cloneNode(true);
      damecan_new.setAttribute("id", "");
      damecan_new.style.position = "absolute";
      damecan_new.style.top = damecan.getBoundingClientRect().top + window.pageYOffset + "px";
      damecan_new.style.left = damecan.getBoundingClientRect().left + window.pageXOffset + "px";
      damecan_new.onmousedown = function (event) {
        document.addEventListener("mousemove", onMouseMove);
      };
      const onMouseMove = function (event) {
        x = event.clientX + window.pageXOffset;
        y = event.clientY + window.pageYOffset;
        width = damecan_new.offsetWidth;
        height = damecan_new.offsetHeight;
        damecan_new.style.top = (y - height / 2) + "px";
        damecan_new.style.left = (x - width / 2) + "px";
      }
      damecan_new.ondragstart = function (event) {
        return false;
      }
      damecan_new.oncontextmenu = function (event) {//右クリックされたら消す
        damecanOkiba.removeChild(damecan_new);
        document.removeEventListener("mousemove", onMouseMove);
      }
      damecan_new.onmouseup = function (event) {
        x = event.clientX;
        y = event.clientY;
        let trashBoxRect = trashBox.getBoundingClientRect();
        if ((x >= trashBoxRect.left && x <= (trashBoxRect.left + trashBoxRect.width)) && (y >= trashBoxRect.top && y <= (trashBoxRect.top + trashBoxRect.height))) {
          damecanOkiba.removeChild(damecan_new);
        }
        document.removeEventListener("mousemove", onMouseMove);
      }
      damecanOkiba.appendChild(damecan_new);
    };
  }

  function damecanMove(from_id, to_id) {
    let from = document.getElementById(from_id).getBoundingClientRect()
    let to = document.getElementById(to_id).getBoundingClientRect()
    let fromTop = from.top + window.pageYOffset;
    let toTop = to.top + window.pageYOffset;
    let fromLeft = from.left + window.pageXOffset;
    let toLeft = to.left + window.pageXOffset;
    let damecanArray = document.getElementById("damecan_okiba").childNodes;
    for (let i = 0; i < damecanArray.length; i++) {
      let topD = damecanArray[i].getBoundingClientRect().top + (damecanArray[i].getBoundingClientRect().height / 2) + window.pageYOffset;
      let leftD = damecanArray[i].getBoundingClientRect().left + (damecanArray[i].getBoundingClientRect().width / 2) + window.pageXOffset;
      if (toTop < topD && topD < (toTop + to.height) && toLeft < leftD && leftD < (toLeft + to.width)) {
        damecanArray[i].classList.add('damecanHide');
      }
      if (fromTop < topD && topD < (fromTop + from.height) && fromLeft < leftD && leftD < (fromLeft + from.width)) {  //ベンチにあるダメカンをカウント
        damecanArray[i].style.top = toTop + (topD - fromTop) - 12 + "px";      //ベンチからバトル場へ
        damecanArray[i].style.left = toLeft + (leftD - fromLeft) - 12 + "px";  //ベンチからバトル場へ
      }
    }
    batlleDamecan = document.getElementsByClassName("damecanHide")
    for (let j = 0; j < batlleDamecan.length; j++) {
      let topD = batlleDamecan[j].getBoundingClientRect().top + (batlleDamecan[j].getBoundingClientRect().height / 2) + window.pageYOffset;
      let leftD = batlleDamecan[j].getBoundingClientRect().left + (batlleDamecan[j].getBoundingClientRect().width / 2) + window.pageXOffset;
      if ((leftD - toLeft) > 190) {
        console.log("in")
        leftD = leftD - 190;
      }
      batlleDamecan[j].style.top = fromTop + (topD - toTop) - 22 + "px";
      batlleDamecan[j].style.left = fromLeft + (leftD - toLeft) - 12 + "px";
      batlleDamecan[j].classList.remove("damecanHide");
      j--
    }
  }

  function damecanTrash(from_id) {
    let from = document.getElementById(from_id).getBoundingClientRect()
    let fromTop = from.top + window.pageYOffset;
    let fromLeft = from.left + window.pageXOffset;
    let damecanArray = document.getElementById("damecan_okiba").childNodes
    for (let i = 0; i < damecanArray.length; i++) {
      let topD = damecanArray[i].getBoundingClientRect().top + (damecanArray[i].getBoundingClientRect().height / 2) + window.pageYOffset;
      let leftD = damecanArray[i].getBoundingClientRect().left + (damecanArray[i].getBoundingClientRect().width / 2) + window.pageXOffset;
      if (fromTop < topD && topD < (fromTop + from.height) && fromLeft < leftD && leftD < (fromLeft + from.width)) {
        damecanArray[i].remove()
        i--  //★ここが重要ポイント
      }
    }
  }

  smartPhoneButton.onclick = function () {
    if (document.getElementById("p1_smartphone").style.display == "none") {
      document.getElementById("p1_smartphone").style.display = "block";
      document.getElementById("p2_smartphone").style.display = "block";
      smartPhoneButton.innerText = "スマホエリア非表示"
    } else {
      document.getElementById("p1_smartphone").style.display = "none";
      document.getElementById("p2_smartphone").style.display = "none";
      smartPhoneButton.innerText = "スマホエリア追加"
    }
  }

  moveLeftButton.onclick = function () {
    window.scrollTo(0, 100);
    // for (let i = 9; i < 18; i++) {
    //   bgLayout[i].style.backgroundColor = "transparent";
    // }
  }

  moveRightButton.onclick = function () {
    window.scrollTo(document.body.scrollWidth, 100);
    // for (let i = 0; i < 9; i++) {
    //   bgLayout[i].style.backgroundColor = "transparent";
    // }
  }

  document.getElementById("p1_uncheck").onclick = function () {
    for (let i = 0; i < 9; i++) {
      bgLayout[i].style.backgroundColor = "transparent";
    }
    document.getElementById("stadium_bg").style.backgroundColor = "transparent";
  }

  document.getElementById("p2_uncheck").onclick = function () {
    for (let i = 9; i < 18; i++) {
      bgLayout[i].style.backgroundColor = "transparent";
      document.getElementById("stadium_bg").style.backgroundColor = "transparent";
    }
  }

  coin.onclick = function () {
    coinCheck();
  }

  function coinSpin() {  //0.1秒後にコインの画像を反対にする
    return new Promise((resolve) => {
      setTimeout(() => {
        if (coin.src.match(".+/(.+?)([\?#;].*)?$")[1] == "coin.png") {
          coin.src = "img/coin_bk.png";
          resolve();
        } else {
          coin.src = "img/coin.png"
          resolve();
        }
      }, 100);
    })
  }

  async function coinCheck() {
    for (var i = 0; i < 8; i++) {
      await coinSpin();
    }
    if (Math.floor(Math.random() * 100) % 2 === 0) {
      coin.src = "img/coin.png";
    } else {
      coin.src = "img/coin_bk.png";
    }
  }

  Array.prototype.shuffle = function () { //
    let i = this.length;
    while (i) {
      let j = Math.floor(Math.random() * i);
      let t = this[--i];
      this[i] = this[j];
      this[j] = t;
    }
    return this;
  };


  document.addEventListener('click', function (e) {
    document.getElementById('contextmenu').style.display = "none";
  });


  function init(player) {  //カードに命を吹き込んでるところ
    let deck;
    let deckWrap;
    let hand;
    let side;
    let kasanariSide;
    let kasanariBattle;
    let kasanariBench1;
    let kasanariBench2;
    let kasanariBench3;
    let kasanariBench4;
    let kasanariBench5;
    let kasanariHand;
    let kasanariTrash;
    let kasanariDeck;
    if (player === "p1") {
      deck = p1Deck;
      deckWrap = document.getElementById("p1_deck_wrap");
      hand = document.getElementById("p1_hand_wrap");
      side = document.getElementById("p1_side_wrap");
      kasanariSide = p1SideWrap;
      kasanariBattle = p1BattleWrap;
      kasanariBench1 = p1Bench1Wrap;
      kasanariBench2 = p1Bench2Wrap;
      kasanariBench3 = p1Bench3Wrap;
      kasanariBench4 = p1Bench4Wrap;
      kasanariBench5 = p1Bench5Wrap;
      kasanariHand = p1HandWrap;
      kasanariTrash = p1TrashWrap;
      kasanariDeck = p1DeckWrap;
    } else if (player === "p2") {
      deck = p2Deck;
      deckWrap = document.getElementById("p2_deck_wrap");
      hand = document.getElementById("p2_hand_wrap");
      side = document.getElementById("p2_side_wrap");
      kasanariSide = p2SideWrap;
      kasanariBattle = p2BattleWrap;
      kasanariBench1 = p2Bench1Wrap;
      kasanariBench2 = p2Bench2Wrap;
      kasanariBench3 = p2Bench3Wrap;
      kasanariBench4 = p2Bench4Wrap;
      kasanariBench5 = p2Bench5Wrap;
      kasanariHand = p2HandWrap;
      kasanariTrash = p2TrashWrap;
      kasanariDeck = p2DeckWrap;
    } else {
      return false
    }
    deck.shuffle()
    for (let i = 0; i < deck.length; i++) {
      let li = document.createElement("li");
      li.setAttribute("id", player + "_" + deck[i].id);
      li.classList.add("card");
      let img = document.createElement("img");
      img.setAttribute("src", deck[i].url);
      img.setAttribute("alt", deck[i].name);
      li.appendChild(img);
      deckWrap.appendChild(li);
      let card = document.getElementById(player + "_" + deck[i].id);
      card.addEventListener('contextmenu', function (event) {  //右クリックメニュー
        const rightClickHeight = document.getElementById('contextmenu').getBoundingClientRect().height
        document.getElementById('contextmenu').style.position = "absolute";
        document.getElementById('contextmenu').style.top = event.clientY + window.pageYOffset - 200 + "px";
        document.getElementById('contextmenu').style.left = event.clientX + window.pageXOffset + "px";
        document.getElementById('contextmenu').style.display = "block";

        returnToDeck.onclick = function (e) {  //右クリックメニュー内のボタンを押された時の処理をここに書く
          kasanariDeck.appendChild(card)
          if (card.id.slice(0, 2) == "p1") {
            let temp = Array.from(document.getElementById("p1_deck_wrap").children)
            temp.shuffle()
            document.getElementById("p1_deck_wrap").innerHTML = ""
            temp.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
          } else if (card.id.slice(0, 2) == "p2") {
            let temp = Array.from(document.getElementById("p2_deck_wrap").children)
            temp.shuffle()
            document.getElementById("p2_deck_wrap").innerHTML = ""
            temp.forEach(_node => document.getElementById("p2_deck_wrap").appendChild(_node))
          }

        }
        moveToTrash.onclick = function (e) {
          kasanariTrash.appendChild(card)
        }
        goToCardPage.onclick = function (e) {
          window.open(card.firstElementChild.getAttribute('src'), "cardPage", "width=374,height=522");
        }
        moveToTop.onclick = function (e) {
          kasanariDeck.prepend(card)
        }
        moveToBottom.onclick = function (e) {
          kasanariDeck.appendChild(card)
        }
        moveToHand.onclick = function (e) {
          if (card.id.slice(0, 2) == "p1") {
            document.getElementById("p1_hand_wrap").appendChild(card)
          } else if (card.id.slice(0, 2) == "p2") {
            document.getElementById("p2_hand_wrap").appendChild(card)
          }
          if (card.classList.contains("hide")) {
            card.classList.remove("hide");
          }
        }
        reverseCard.onclick = function (e) {
          if (!card.classList.contains("hide")) {
            card.classList.add("hide");
          } else if (card.classList.contains("hide")) {
            card.classList.remove("hide");
          }
        }
        saru.onclick = function (e) {
          if (card.id.slice(0, 2) == "p1") {
            document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
          } else if (card.id.slice(0, 2) == "p2") {
            document.getElementById("p2_hand_wrap").appendChild(document.getElementById("p2_deck_wrap").firstElementChild)
          }
          kasanariDeck.prepend(card)
        }
      });
      card.onmousedown = function () {
        document.getElementById('contextmenu').style.display = "none"; //右クリックメニューが開いてら閉じる
      }
    }
    for (let j = 0; j < 7; j++) {
      hand.appendChild(deckWrap.firstElementChild);
    }
    for (let k = 0; k < 6; k++) {
      let temp = deckWrap.firstElementChild;
      temp.classList.add("hide")
      side.appendChild(temp);
    }
  }


  //山札ボタン  

  p1DrawBtn.onclick = function () {
    document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
  };

  p1ShuffleBtn.onclick = function () {
    let temp = Array.from(document.getElementById("p1_deck_wrap").children)
    temp.shuffle()
    document.getElementById("p1_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
  }

  p1DeckBtn.onclick = function () {

    if (document.getElementById("p1_deck").style.display == "none") {
      document.getElementById("p1_deck").style.display = "flex";
      p1DeckSort.style.display = "inline";
      window.scrollTo(0, document.body.scrollHeight);
      p1DeckBtn.value = "デッキを閉じる"
      p1Deck5.value = "シャッフル閉じる"
    } else {
      document.getElementById("p1_deck").style.display = "none";
      p1Deck7.style.display = "none";
      p1DeckSort.style.display = "none";
      window.scrollTo(0, 0);
      let temp = Array.from(document.getElementById("p1_deck_wrap").children)
      document.getElementById("p1_deck_wrap").innerHTML = ""
      temp.forEach(_node => {
        _node.classList.remove("hide")
        document.getElementById("p1_deck_wrap").appendChild(_node)
      })
      p1DeckBtn.value = "デッキを見る"
      p1Deck5.value = "山上5枚見る"
    }
  }

  p1Deck5.onclick = function () {
    if (document.getElementById("p1_deck").style.display == "none") {
      document.getElementById("p1_deck").style.display = "flex";
      p1Deck7.style.display = "inline";
      window.scrollTo(0, document.body.scrollHeight);

      let temp = Array.from(document.getElementById("p1_deck_wrap").children)
      document.getElementById("p1_deck_wrap").innerHTML = ""
      for (let i = 0; i < temp.length; i++) {
        if (i < 5) {
          document.getElementById("p1_deck_wrap").appendChild(temp[i])
        } else {
          temp[i].classList.add("hide")
          document.getElementById("p1_deck_wrap").appendChild(temp[i])
        }
      }

      p1DeckBtn.value = "デッキを閉じる"
      p1Deck5.value = "シャッフル閉じる"
    } else {
      document.getElementById("p1_deck").style.display = "none";
      p1Deck7.style.display = "none";
      p1DeckSort.style.display = "none";
      window.scrollTo(0, 0);
      let temp = Array.from(document.getElementById("p1_deck_wrap").children)
      temp.shuffle()
      document.getElementById("p1_deck_wrap").innerHTML = ""
      temp.forEach(_node => {
        _node.classList.remove("hide")
        document.getElementById("p1_deck_wrap").appendChild(_node)
      })
      p1DeckBtn.value = "デッキを見る"
      p1Deck5.value = "山上5枚見る"
    }
  }

  p1Deck7.onclick = function () {
    let temp = document.getElementById("p1_deck_wrap").children;
    temp[5].classList.remove("hide");
    temp[6].classList.remove("hide");
  }


  p2DrawBtn.onclick = function () {
    document.getElementById("p2_hand_wrap").appendChild(document.getElementById("p2_deck_wrap").firstElementChild)
  };

  p2ShuffleBtn.onclick = function () {
    let temp = Array.from(document.getElementById("p2_deck_wrap").children)
    temp.shuffle()
    document.getElementById("p2_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p2_deck_wrap").appendChild(_node))
  }

  p2DeckBtn.onclick = function () {

    if (document.getElementById("p2_deck").style.display == "none") {
      document.getElementById("p2_deck").style.display = "flex";
      p2DeckSort.style.display = "inline";
      window.scrollTo(document.body.scrollWidth, document.body.scrollHeight);
      p2DeckBtn.value = "デッキを閉じる"
      p2Deck5.value = "シャッフル閉じる"
    } else {
      document.getElementById("p2_deck").style.display = "none";
      p2Deck7.style.display = "none";
      p2DeckSort.style.display = "none";
      window.scrollTo(document.body.scrollWidth, 0);
      let temp = Array.from(document.getElementById("p2_deck_wrap").children)
      document.getElementById("p2_deck_wrap").innerHTML = ""
      temp.forEach(_node => {
        _node.classList.remove("hide")
        document.getElementById("p2_deck_wrap").appendChild(_node)
      })
      p2DeckBtn.value = "デッキを見る"
      p2Deck5.value = "山上5枚見る"
    }
  }

  p2Deck5.onclick = function () {
    if (document.getElementById("p2_deck").style.display == "none") {
      document.getElementById("p2_deck").style.display = "flex";
      p2Deck7.style.display = "inline";
      window.scrollTo(document.body.scrollWidth, document.body.scrollHeight);

      let temp = Array.from(document.getElementById("p2_deck_wrap").children)
      document.getElementById("p2_deck_wrap").innerHTML = ""
      for (let i = 0; i < temp.length; i++) {
        if (i < 5) {
          document.getElementById("p2_deck_wrap").appendChild(temp[i])
        } else {
          temp[i].classList.add("hide")
          document.getElementById("p2_deck_wrap").appendChild(temp[i])
        }
      }

      p2DeckBtn.value = "デッキを閉じる"
      p2Deck5.value = "シャッフル閉じる"
    } else {
      document.getElementById("p2_deck").style.display = "none";
      p2Deck7.style.display = "none";
      p2DeckSort.style.display = "none";
      window.scrollTo(document.body.scrollWidth, 0);
      let temp = Array.from(document.getElementById("p2_deck_wrap").children)
      temp.shuffle()
      document.getElementById("p2_deck_wrap").innerHTML = ""
      temp.forEach(_node => {
        _node.classList.remove("hide")
        document.getElementById("p2_deck_wrap").appendChild(_node)
      })
      p2DeckBtn.value = "デッキを見る"
      p2Deck5.value = "山上5枚見る"
    }
  }

  p2Deck7.onclick = function () {
    let temp = document.getElementById("p2_deck_wrap").children;
    temp[5].classList.remove("hide");
    temp[6].classList.remove("hide");
  }

  //状態異常ボタン

  function statusAilmentButton(event) {
    buttonId = document.getElementById(event.target.id)
    if (buttonId.classList.contains("on")) {
      buttonId.classList.remove("on");
    } else {
      buttonId.classList.add("on");
    }
  }

  p1Burn.onclick = (event) => {
    statusAilmentButton(event)
  };
  p1Poison.onclick = (event) => {
    statusAilmentButton(event)
  };
  p1Sleeping.onclick = (event) => {
    statusAilmentButton(event)
  };
  p1Paralysis.onclick = (event) => {
    statusAilmentButton(event)
  };
  p1Confusion.onclick = (event) => {
    statusAilmentButton(event)
  };

  p2Burn.onclick = (event) => {
    statusAilmentButton(event)
  };
  p2Poison.onclick = (event) => {
    statusAilmentButton(event)
  };
  p2Sleeping.onclick = (event) => {
    statusAilmentButton(event)
  };
  p2Paralysis.onclick = (event) => {
    statusAilmentButton(event)
  };
  p2Confusion.onclick = (event) => {
    statusAilmentButton(event)
  };

  //フィールドボタン

  const stadiumTrash = document.getElementById("stadium_trash")

  stadiumTrash.onclick = function () {
    let stadium = Array.from(document.getElementById("stadium_wrap").children)
    document.getElementById("stadium_wrap").innerHTML = "";
    stadium.forEach((_node) => {
      if (_node.id.slice(0, 2) == "p1") {
        p1TrashWrap.appendChild(_node)
      } else {
        p2TrashWrap.appendChild(_node)
      }
    })
  }


  const p1BattleTrash = document.getElementById("p1_battle_trash")
  // const p1GX = document.getElementById("p1_GX")
  const p1Vstar = document.getElementById("p1_Vstar")

  const p1B1Battle = document.getElementById("p1_b1_battle")
  const p1B1Trash = document.getElementById("p1_b1_trash")
  const p1B2Battle = document.getElementById("p1_b2_battle")
  const p1B2Trash = document.getElementById("p1_b2_trash")
  const p1B3Battle = document.getElementById("p1_b3_battle")
  const p1B3Trash = document.getElementById("p1_b3_trash")
  const p1B4Battle = document.getElementById("p1_b4_battle")
  const p1B4Trash = document.getElementById("p1_b4_trash")
  const p1B5Battle = document.getElementById("p1_b5_battle")
  const p1B5Trash = document.getElementById("p1_b5_trash")
  const p1B6Battle = document.getElementById("p1_b6_battle")
  const p1B6Trash = document.getElementById("p1_b6_trash")
  const p1B7Battle = document.getElementById("p1_b7_battle")
  const p1B7Trash = document.getElementById("p1_b7_trash")
  const p1B8Battle = document.getElementById("p1_b8_battle")
  const p1B8Trash = document.getElementById("p1_b8_trash")



  const p1HandTrash = document.getElementById("p1_hand_trash")
  const p1HandToDeck = document.getElementById("p1_hand_to_deck")
  const p1HandHakase = document.getElementById("p1_hand_hakase")
  const p1HandMarnie = document.getElementById("p1_hand_marnie")
  const p1HandNanjamo = document.getElementById("p1_hand_nanjamo")
  const p1HandJudgeman = document.getElementById("p1_hand_judgeman")
  const p1HandCynthia = document.getElementById("p1_hand_cynthia")
  const p1MugenZone = document.getElementById("p1_mugen_zone")

  const p1DeckSort = document.getElementById("p1_deck_sort")
  const p1TrashSort = document.getElementById("p1_trash_sort")
  const p1HandSort = document.getElementById("p1_hand_sort")

  const p1Reset = document.getElementById("p1_reset")

  const p1BattleDamageBox = document.getElementById("p1_battle_damage_box")
  const p1Bench1DamageBox = document.getElementById("p1_bench1_damage_box")
  const p1Bench2DamageBox = document.getElementById("p1_bench2_damage_box")
  const p1Bench3DamageBox = document.getElementById("p1_bench3_damage_box")
  const p1Bench4DamageBox = document.getElementById("p1_bench4_damage_box")
  const p1Bench5DamageBox = document.getElementById("p1_bench5_damage_box")
  const p1Bench6DamageBox = document.getElementById("p1_bench6_damage_box")
  const p1Bench7DamageBox = document.getElementById("p1_bench7_damage_box")
  const p1Bench8DamageBox = document.getElementById("p1_bench8_damage_box")

  const p1SmartphoneMoveToTop = document.getElementById("p1_smartphone_move_to_top")
  const p1SmartphoneBottom = document.getElementById("p1_smartphone_move_to_bottom")
  const p1SmartphoneReverse = document.getElementById("p1_smartphone_reverse")



  p1SmartphoneMoveToTop.onclick = function () {
    let p1SmartphoneArea = Array.from(p1SmartphoneWrap.children)
    p1SmartphoneArea.forEach(function (card) {
      p1DeckWrap.prepend(card)
    });
  }

  p1SmartphoneBottom.onclick = function () {
    let p1SmartphoneArea = Array.from(p1SmartphoneWrap.children)
    p1SmartphoneArea.forEach(function (card) {
      p1DeckWrap.appendChild(card)
    });
  }

  p1SmartphoneReverse.onclick = function () {
    let p1SmartphoneArea = Array.from(p1SmartphoneWrap.children)
    p1SmartphoneArea.forEach(function (card) {
      if (!card.classList.contains("hide")) {
        card.classList.add("hide");
      } else if (card.classList.contains("hide")) {
        card.classList.remove("hide");
      }
    });
  }

  p1BattleTrash.onclick = function (e) {
    let battle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_battle_wrap").innerHTML = "";
    battle.forEach(_node => p1TrashWrap.appendChild(_node))
    damecanTrash("p1_battle")
    p1BattleDamageBox.value = "";
    document.getElementById("p1_battle_bg").style.backgroundColor = "transparent";
  }

  p1BattleToDeck.onclick = function () {
    let battle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_battle_wrap").innerHTML = "";
    battle.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
    damecanTrash("p1_battle")
    p1BattleDamageBox.value = "";
    let temp = Array.from(document.getElementById("p1_deck_wrap").children)
    temp.shuffle()
    document.getElementById("p1_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
  }

  // p1GX.onclick = function () {
  //   if (!p1GX.classList.contains("on")) {
  //     p1GX.classList.add("on");
  //   } else if (p1GX.classList.contains("on")) {
  //     p1GX.classList.remove("on");
  //   }
  // }

  p1Vstar.onclick = function () {
    console.log("V");
    if (!p1Vstar.classList.contains("on")) {
      p1Vstar.classList.add("on");
    } else if (p1Vstar.classList.contains("on")) {
      p1Vstar.classList.remove("on");
    }
  }

  p1B1Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench1_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench1_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench1_wrap").appendChild(_node))
    damecanMove("p1_bench1", "p1_battle")
    let benchDamage = p1Bench1DamageBox.value
    p1Bench1DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench1_bg").style.backgroundColor;
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p1_bench1_bg").style.backgroundColor = buttleColor;

  }
  p1B1Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench1_wrap").children)
    document.getElementById("p1_bench1_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    damecanTrash("p1_bench1")
    p1Bench1DamageBox.value = "";
    document.getElementById("p1_bench1_bg").style.backgroundColor = "transparent";
  }

  p1B2Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench2_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench2_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench2_wrap").appendChild(_node))
    damecanMove("p1_bench2", "p1_battle")
    let benchDamage = p1Bench2DamageBox.value
    p1Bench2DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench2_bg").style.backgroundColor;
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p1_bench2_bg").style.backgroundColor = buttleColor;
  }
  p1B2Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench2_wrap").children)
    document.getElementById("p1_bench2_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    damecanTrash("p1_bench2")
    p1Bench2DamageBox.value = "";
    document.getElementById("p1_bench2_bg").style.backgroundColor = "transparent";
  }

  p1B3Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench3_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench3_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench3_wrap").appendChild(_node))
    damecanMove("p1_bench3", "p1_battle")
    let benchDamage = p1Bench3DamageBox.value
    p1Bench3DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench3_bg").style.backgroundColor;
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p1_bench3_bg").style.backgroundColor = buttleColor;
  }
  p1B3Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench3_wrap").children)
    document.getElementById("p1_bench3_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    damecanTrash("p1_bench3")
    p1Bench3DamageBox.value = "";
    document.getElementById("p1_bench3_bg").style.backgroundColor = "transparent";
  }

  p1B4Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench4_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench4_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench4_wrap").appendChild(_node))
    damecanMove("p1_bench4", "p1_battle")
    let benchDamage = p1Bench4DamageBox.value
    p1Bench4DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench4_bg").style.backgroundColor;
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p1_bench4_bg").style.backgroundColor = buttleColor;
  }
  p1B4Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench4_wrap").children)
    document.getElementById("p1_bench4_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    damecanTrash("p1_bench4")
    p1Bench4DamageBox.value = "";
    document.getElementById("p1_bench4_bg").style.backgroundColor = "transparent";
  }

  p1B5Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench5_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench5_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench5_wrap").appendChild(_node))
    damecanMove("p1_bench5", "p1_battle")
    let benchDamage = p1Bench5DamageBox.value
    p1Bench5DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench5_bg").style.backgroundColor;
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p1_bench5_bg").style.backgroundColor = buttleColor;
  }
  p1B5Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench5_wrap").children)
    document.getElementById("p1_bench5_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    damecanTrash("p1_bench5")
    p1Bench5DamageBox.value = "";
    document.getElementById("p1_bench5_bg").style.backgroundColor = "transparent";
  }

  p1B6Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench6_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench6_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench6_wrap").appendChild(_node))
    damecanMove("p1_bench6", "p1_battle")
    let benchDamage = p1Bench6DamageBox.value
    p1Bench6DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench6_bg").style.backgroundColor;
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p1_bench6_bg").style.backgroundColor = buttleColor;
  }
  p1B6Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench6_wrap").children)
    document.getElementById("p1_bench6_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    damecanTrash("p1_bench6")
    p1Bench6DamageBox.value = "";
    document.getElementById("p1_bench6_bg").style.backgroundColor = "transparent";
  }

  p1B7Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench7_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench7_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench7_wrap").appendChild(_node))
    damecanMove("p1_bench7", "p1_battle")
    let benchDamage = p1Bench7DamageBox.value
    p1Bench7DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench7_bg").style.backgroundColor;
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p1_bench7_bg").style.backgroundColor = buttleColor;
  }
  p1B7Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench7_wrap").children)
    document.getElementById("p1_bench7_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    damecanTrash("p1_bench7")
    p1Bench7DamageBox.value = "";
    document.getElementById("p1_bench7_bg").style.backgroundColor = "transparent";
  }

  p1B8Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench8_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench8_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench8_wrap").appendChild(_node))
    damecanMove("p1_bench8", "p1_battle")
    let benchDamage = p1Bench8DamageBox.value
    p1Bench8DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench8_bg").style.backgroundColor;
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p1_bench8_bg").style.backgroundColor = buttleColor;
  }
  p1B8Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p1_bench8_wrap").children)
    document.getElementById("p1_bench8_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    damecanTrash("p1_bench8")
    p1Bench8DamageBox.value = "";
    document.getElementById("p1_bench8_bg").style.backgroundColor = "transparent";
  }

  p1HandTrash.onclick = function () {
    let hand = Array.from(document.getElementById("p1_hand_wrap").children)
    document.getElementById("p1_hand_wrap").innerHTML = "";
    hand.forEach(_node => p1TrashWrap.appendChild(_node))
  }
  p1HandToDeck.onclick = function () {
    let hand = Array.from(document.getElementById("p1_hand_wrap").children)
    document.getElementById("p1_hand_wrap").innerHTML = "";
    hand.forEach(_node => p1DeckWrap.appendChild(_node))
    let temp = Array.from(document.getElementById("p1_deck_wrap").children)
    temp.shuffle()
    document.getElementById("p1_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
  }
  p1HandHakase.onclick = function () {
    let hand = Array.from(document.getElementById("p1_hand_wrap").children)
    document.getElementById("p1_hand_wrap").innerHTML = "";
    hand.forEach(_node => p1TrashWrap.appendChild(_node))
    for (let i = 0; i < 7; i++) {
      document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    }
  }

  p1HandMarnie.onclick = function () {
    let p1Hand = Array.from(document.getElementById("p1_hand_wrap").children)
    p1Hand.shuffle()
    document.getElementById("p1_hand_wrap").innerHTML = "";
    p1Hand.forEach(_node => p1DeckWrap.appendChild(_node))
    for (let i = 0; i < 5; i++) {
      document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    }
    let p2Hand = Array.from(document.getElementById("p2_hand_wrap").children)
    p2Hand.shuffle()
    document.getElementById("p2_hand_wrap").innerHTML = "";
    p2Hand.forEach(_node => p2DeckWrap.appendChild(_node))
    for (let j = 0; j < 4; j++) {
      document.getElementById("p2_hand_wrap").appendChild(document.getElementById("p2_deck_wrap").firstElementChild)
    }
  }

  p1HandNanjamo.onclick = function () {
    let p1Hand = Array.from(document.getElementById("p1_hand_wrap").children)
    p1Hand.shuffle()
    document.getElementById("p1_hand_wrap").innerHTML = "";
    p1Hand.forEach(_node => p1DeckWrap.appendChild(_node))
    for (let i = 0; i < document.getElementById("p1_side_wrap").childElementCount; i++) {
      document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    }
    let p2Hand = Array.from(document.getElementById("p2_hand_wrap").children)
    p2Hand.shuffle()
    document.getElementById("p2_hand_wrap").innerHTML = "";
    p2Hand.forEach(_node => p2DeckWrap.appendChild(_node))
    for (let j = 0; j < document.getElementById("p2_side_wrap").childElementCount; j++) {
      document.getElementById("p2_hand_wrap").appendChild(document.getElementById("p2_deck_wrap").firstElementChild)
    }
  }

  p1HandToDeckBottom.onclick = function () {
    let p1Hand = Array.from(document.getElementById("p1_hand_wrap").children)
    p1Hand.shuffle()
    document.getElementById("p1_hand_wrap").innerHTML = "";
    p1Hand.forEach(_node => p1DeckWrap.appendChild(_node))
  }

  p1HandJudgeman.onclick = function () {
    let hand1 = Array.from(document.getElementById("p1_hand_wrap").children)
    document.getElementById("p1_hand_wrap").innerHTML = "";
    hand1.forEach(_node => p1DeckWrap.appendChild(_node))
    let temp1 = Array.from(document.getElementById("p1_deck_wrap").children)
    temp1.shuffle()
    document.getElementById("p1_deck_wrap").innerHTML = ""
    temp1.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
    for (let i = 0; i < 4; i++) {
      document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    }
    let hand2 = Array.from(document.getElementById("p2_hand_wrap").children)
    document.getElementById("p2_hand_wrap").innerHTML = "";
    hand2.forEach(_node => p2DeckWrap.appendChild(_node))
    let temp2 = Array.from(document.getElementById("p2_deck_wrap").children)
    temp2.shuffle()
    document.getElementById("p2_deck_wrap").innerHTML = ""
    temp2.forEach(_node => document.getElementById("p2_deck_wrap").appendChild(_node))
    for (let i = 0; i < 4; i++) {
      document.getElementById("p2_hand_wrap").appendChild(document.getElementById("p2_deck_wrap").firstElementChild)
    }
  }

  p1HandCynthia.onclick = function () {
    let hand = Array.from(document.getElementById("p1_hand_wrap").children)
    document.getElementById("p1_hand_wrap").innerHTML = "";
    hand.forEach(_node => p1DeckWrap.appendChild(_node))
    let temp = Array.from(document.getElementById("p1_deck_wrap").children)
    temp.shuffle()
    document.getElementById("p1_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
    for (let i = 0; i < 6; i++) {
      document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    }
  }

  p1DeckSort.onclick = function () {
    console.log("click")
    let temp = Array.from(document.getElementById("p1_deck_wrap").children)
    temp.sort(function (a, b) {
      if (a.id.slice(-2) < b.id.slice(-2)) return -1;
      if (a.id.slice(-2) > b.id.slice(-2)) return 1;
      return 0;
    });
    document.getElementById("p1_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
  }


  p1TrashSort.onclick = function () {
    console.log("click")
    let temp = Array.from(document.getElementById("p1_trash_wrap").children)
    temp.sort(function (a, b) {
      if (a.id.slice(-2) < b.id.slice(-2)) return -1;
      if (a.id.slice(-2) > b.id.slice(-2)) return 1;
      return 0;
    });
    document.getElementById("p1_trash_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_trash_wrap").appendChild(_node))
  }

  //202207アプデ↓
  p1LostzoneSort.onclick = function () {
    console.log("click")
    let temp = Array.from(document.getElementById("p1_lostzone_wrap").children)
    temp.sort(function (a, b) {
      if (a.id.slice(-2) < b.id.slice(-2)) return -1;
      if (a.id.slice(-2) > b.id.slice(-2)) return 1;
      return 0;
    });
    document.getElementById("p1_lostzone_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_lostzone_wrap").appendChild(_node))
  }

  p1HandSort.onclick = function () {
    console.log("click")
    let temp = Array.from(document.getElementById("p1_hand_wrap").children)
    temp.sort(function (a, b) {
      if (a.id.slice(-2) < b.id.slice(-2)) return -1;
      if (a.id.slice(-2) > b.id.slice(-2)) return 1;
      return 0;
    });
    document.getElementById("p1_hand_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_hand_wrap").appendChild(_node))
  }
  //202207アプデ↑

  p1MugenZone.onclick = function () {
    if (document.getElementById("p1_bench6").style.display == "none") {
      document.getElementById("p1_bench6").style.display = "block";
      document.getElementById("p1_bench7").style.display = "block";
      document.getElementById("p1_bench8").style.display = "block";
      p1MugenZone.innerText = "ベンチ-"
    } else {
      document.getElementById("p1_bench6").style.display = "none";
      document.getElementById("p1_bench7").style.display = "none";
      document.getElementById("p1_bench8").style.display = "none";
      p1MugenZone.innerText = "ベンチ+"
    }
  }

  p1Reset.onclick = function () {
    p1SideWrap.innerHTML = ""
    p1BattleWrap.innerHTML = ""
    p1Bench1Wrap.innerHTML = ""
    p1Bench2Wrap.innerHTML = ""
    p1Bench3Wrap.innerHTML = ""
    p1Bench4Wrap.innerHTML = ""
    p1Bench5Wrap.innerHTML = ""
    p1Bench6Wrap.innerHTML = ""
    p1Bench7Wrap.innerHTML = ""
    p1Bench8Wrap.innerHTML = ""
    p1HandWrap.innerHTML = ""
    p1TrashWrap.innerHTML = ""
    p1LostzoneWrap.innerHTML = ""
    p1DeckWrap.innerHTML = ""
    p1SmartphoneWrap.innerHTML = ""
    stadiumWrap.innerHTML = ""
    p1BattleDamageBox.value = "";
    p1Bench1DamageBox.value = "";
    p1Bench2DamageBox.value = "";
    p1Bench3DamageBox.value = "";
    p1Bench4DamageBox.value = "";
    p1Bench5DamageBox.value = "";
    p1Bench6DamageBox.value = "";
    p1Bench7DamageBox.value = "";
    p1Bench8DamageBox.value = "";
    p2BattleDamageBox.value = "";
    p2Bench1DamageBox.value = "";
    p2Bench2DamageBox.value = "";
    p2Bench3DamageBox.value = "";
    p2Bench4DamageBox.value = "";
    p2Bench5DamageBox.value = "";
    p2Bench6DamageBox.value = "";
    p2Bench7DamageBox.value = "";
    p2Bench8DamageBox.value = "";

    let damecanArray = document.getElementById("damecan_okiba").childNodes
    for (let i = 0; i < damecanArray.length; i++) {
      damecanArray[i].remove()
      i--
    }
    init("p1")
  }



  const p2BattleTrash = document.getElementById("p2_battle_trash")
  // const p2GX = document.getElementById("p2_GX")
  const p2Vstar = document.getElementById("p2_Vstar")

  const p2B1Battle = document.getElementById("p2_b1_battle")
  const p2B1Trash = document.getElementById("p2_b1_trash")
  const p2B2Battle = document.getElementById("p2_b2_battle")
  const p2B2Trash = document.getElementById("p2_b2_trash")
  const p2B3Battle = document.getElementById("p2_b3_battle")
  const p2B3Trash = document.getElementById("p2_b3_trash")
  const p2B4Battle = document.getElementById("p2_b4_battle")
  const p2B4Trash = document.getElementById("p2_b4_trash")
  const p2B5Battle = document.getElementById("p2_b5_battle")
  const p2B5Trash = document.getElementById("p2_b5_trash")
  const p2B6Battle = document.getElementById("p2_b6_battle")
  const p2B6Trash = document.getElementById("p2_b6_trash")
  const p2B7Battle = document.getElementById("p2_b7_battle")
  const p2B7Trash = document.getElementById("p2_b7_trash")
  const p2B8Battle = document.getElementById("p2_b8_battle")
  const p2B8Trash = document.getElementById("p2_b8_trash")

  const p2HandTrash = document.getElementById("p2_hand_trash")
  const p2HandToDeck = document.getElementById("p2_hand_to_deck")
  const p2HandHakase = document.getElementById("p2_hand_hakase")
  const p2HandMarnie = document.getElementById("p2_hand_marnie")
  const p2HandNanjamo = document.getElementById("p2_hand_nanjamo")
  const p2HandJudgeman = document.getElementById("p2_hand_judgeman")
  const p2HandCynthia = document.getElementById("p2_hand_cynthia")
  const p2MugenZone = document.getElementById("p2_mugen_zone")

  const p2DeckSort = document.getElementById("p2_deck_sort")
  const p2TrashSort = document.getElementById("p2_trash_sort")
  const p2HandSort = document.getElementById("p2_hand_sort")

  const p2Reset = document.getElementById("p2_reset")

  const p2BattleDamageBox = document.getElementById("p2_battle_damage_box")
  const p2Bench1DamageBox = document.getElementById("p2_bench1_damage_box")
  const p2Bench2DamageBox = document.getElementById("p2_bench2_damage_box")
  const p2Bench3DamageBox = document.getElementById("p2_bench3_damage_box")
  const p2Bench4DamageBox = document.getElementById("p2_bench4_damage_box")
  const p2Bench5DamageBox = document.getElementById("p2_bench5_damage_box")
  const p2Bench6DamageBox = document.getElementById("p2_bench6_damage_box")
  const p2Bench7DamageBox = document.getElementById("p2_bench7_damage_box")
  const p2Bench8DamageBox = document.getElementById("p2_bench8_damage_box")

  const p2SmartphoneMoveToTop = document.getElementById("p2_smartphone_move_to_top")
  const p2SmartphoneBottom = document.getElementById("p2_smartphone_move_to_bottom")
  const p2SmartphoneReverse = document.getElementById("p2_smartphone_reverse")

  p2SmartphoneMoveToTop.onclick = function () {
    let p2SmartphoneArea = Array.from(p2SmartphoneWrap.children)
    p2SmartphoneArea.forEach(function (card) {
      p2DeckWrap.prepend(card)
    });
  }

  p2SmartphoneBottom.onclick = function () {
    let p2SmartphoneArea = Array.from(p2SmartphoneWrap.children)
    p2SmartphoneArea.forEach(function (card) {
      p2DeckWrap.appendChild(card)
    });
  }

  p2SmartphoneReverse.onclick = function () {
    let p2SmartphoneArea = Array.from(p2SmartphoneWrap.children)
    p2SmartphoneArea.forEach(function (card) {
      if (!card.classList.contains("hide")) {
        card.classList.add("hide");
      } else if (card.classList.contains("hide")) {
        card.classList.remove("hide");
      }
    });
  }

  p2BattleTrash.onclick = function (e) {
    let battle = Array.from(document.getElementById("p2_battle_wrap").children)
    document.getElementById("p2_battle_wrap").innerHTML = "";
    battle.forEach(_node => p2TrashWrap.appendChild(_node))
    damecanTrash("p2_battle")
    p2BattleDamageBox.value = "";
    document.getElementById("p2_battle_bg").style.backgroundColor = "transparent";
  }

  p2BattleToDeck.onclick = function () {
    let battle = Array.from(document.getElementById("p2_battle_wrap").children)
    document.getElementById("p2_battle_wrap").innerHTML = "";
    battle.forEach(_node => document.getElementById("p2_deck_wrap").appendChild(_node))
    damecanTrash("p2_battle")
    p2BattleDamageBox.value = "";
    let temp = Array.from(document.getElementById("p2_deck_wrap").children)
    temp.shuffle()
    document.getElementById("p2_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p2_deck_wrap").appendChild(_node))
  }

  // p2GX.onclick = function () {
  //   if (!p2GX.classList.contains("on")) {
  //     p2GX.classList.add("on");
  //   } else if (p2GX.classList.contains("on")) {
  //     p2GX.classList.remove("on");
  //   }
  // }

  p2Vstar.onclick = function () {
    if (!p2Vstar.classList.contains("on")) {
      p2Vstar.classList.add("on");
    } else if (p2Vstar.classList.contains("on")) {
      p2Vstar.classList.remove("on");
    }
  }

  p2B1Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench1_wrap").children)
    let batlle = Array.from(document.getElementById("p2_battle_wrap").children)
    document.getElementById("p2_bench1_wrap").innerHTML = "";
    document.getElementById("p2_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p2_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p2_bench1_wrap").appendChild(_node))
    damecanMove("p2_bench1", "p2_battle")
    let benchDamage = p2Bench1DamageBox.value
    p2Bench1DamageBox.value = p2BattleDamageBox.value;
    p2BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p2_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p2_bench1_bg").style.backgroundColor;
    document.getElementById("p2_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p2_bench1_bg").style.backgroundColor = buttleColor;
  }
  p2B1Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench1_wrap").children)
    document.getElementById("p2_bench1_wrap").innerHTML = "";
    bench.forEach(_node => p2TrashWrap.appendChild(_node))
    damecanTrash("p2_bench1")
    p2Bench1DamageBox.value = "";
    document.getElementById("p2_bench1_bg").style.backgroundColor = "transparent";
  }

  p2B2Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench2_wrap").children)
    let batlle = Array.from(document.getElementById("p2_battle_wrap").children)
    document.getElementById("p2_bench2_wrap").innerHTML = "";
    document.getElementById("p2_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p2_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p2_bench2_wrap").appendChild(_node))
    damecanMove("p2_bench2", "p2_battle")
    let benchDamage = p2Bench2DamageBox.value
    p2Bench2DamageBox.value = p2BattleDamageBox.value;
    p2BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p2_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p2_bench2_bg").style.backgroundColor;
    document.getElementById("p2_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p2_bench2_bg").style.backgroundColor = buttleColor;
  }
  p2B2Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench2_wrap").children)
    document.getElementById("p2_bench2_wrap").innerHTML = "";
    bench.forEach(_node => p2TrashWrap.appendChild(_node))
    damecanTrash("p2_bench2")
    p2Bench2DamageBox.value = "";
    document.getElementById("p2_bench2_bg").style.backgroundColor = "transparent";
  }

  p2B3Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench3_wrap").children)
    let batlle = Array.from(document.getElementById("p2_battle_wrap").children)
    document.getElementById("p2_bench3_wrap").innerHTML = "";
    document.getElementById("p2_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p2_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p2_bench3_wrap").appendChild(_node))
    damecanMove("p2_bench3", "p2_battle")
    let benchDamage = p2Bench3DamageBox.value
    p2Bench3DamageBox.value = p2BattleDamageBox.value;
    p2BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p2_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p2_bench3_bg").style.backgroundColor;
    document.getElementById("p2_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p2_bench3_bg").style.backgroundColor = buttleColor;
  }
  p2B3Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench3_wrap").children)
    document.getElementById("p2_bench3_wrap").innerHTML = "";
    bench.forEach(_node => p2TrashWrap.appendChild(_node))
    damecanTrash("p2_bench3")
    p2Bench3DamageBox.value = "";
    document.getElementById("p2_bench3_bg").style.backgroundColor = "transparent";
  }

  p2B4Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench4_wrap").children)
    let batlle = Array.from(document.getElementById("p2_battle_wrap").children)
    document.getElementById("p2_bench4_wrap").innerHTML = "";
    document.getElementById("p2_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p2_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p2_bench4_wrap").appendChild(_node))
    damecanMove("p2_bench4", "p2_battle")
    let benchDamage = p2Bench4DamageBox.value
    p2Bench4DamageBox.value = p2BattleDamageBox.value;
    p2BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p2_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p2_bench4_bg").style.backgroundColor;
    document.getElementById("p2_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p2_bench4_bg").style.backgroundColor = buttleColor;
  }
  p2B4Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench4_wrap").children)
    document.getElementById("p2_bench4_wrap").innerHTML = "";
    bench.forEach(_node => p2TrashWrap.appendChild(_node))
    damecanTrash("p2_bench4")
    p2Bench4DamageBox.value = "";
    document.getElementById("p2_bench4_bg").style.backgroundColor = "transparent";
  }

  p2B5Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench5_wrap").children)
    let batlle = Array.from(document.getElementById("p2_battle_wrap").children)
    document.getElementById("p2_bench5_wrap").innerHTML = "";
    document.getElementById("p2_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p2_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p2_bench5_wrap").appendChild(_node))
    damecanMove("p2_bench5", "p2_battle")
    let benchDamage = p2Bench5DamageBox.value
    p2Bench5DamageBox.value = p2BattleDamageBox.value;
    p2BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p2_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p2_bench5_bg").style.backgroundColor;
    document.getElementById("p2_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p2_bench5_bg").style.backgroundColor = buttleColor;
  }
  p2B5Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench5_wrap").children)
    document.getElementById("p2_bench5_wrap").innerHTML = "";
    bench.forEach(_node => p2TrashWrap.appendChild(_node))
    damecanTrash("p2_bench5")
    p2Bench5DamageBox.value = "";
    document.getElementById("p2_bench5_bg").style.backgroundColor = "transparent";
  }

  p2B6Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench6_wrap").children)
    let batlle = Array.from(document.getElementById("p2_battle_wrap").children)
    document.getElementById("p2_bench6_wrap").innerHTML = "";
    document.getElementById("p2_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p2_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p2_bench6_wrap").appendChild(_node))
    damecanMove("p2_bench6", "p2_battle")
    let benchDamage = p2Bench6DamageBox.value
    p2Bench6DamageBox.value = p2BattleDamageBox.value;
    p2BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p2_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p2_bench6_bg").style.backgroundColor;
    document.getElementById("p2_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p2_bench6_bg").style.backgroundColor = buttleColor;
  }
  p2B6Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench6_wrap").children)
    document.getElementById("p2_bench6_wrap").innerHTML = "";
    bench.forEach(_node => p2TrashWrap.appendChild(_node))
    damecanTrash("p2_bench6")
    p2Bench6DamageBox.value = "";
    document.getElementById("p2_bench6_bg").style.backgroundColor = "transparent";
  }

  p2B7Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench7_wrap").children)
    let batlle = Array.from(document.getElementById("p2_battle_wrap").children)
    document.getElementById("p2_bench7_wrap").innerHTML = "";
    document.getElementById("p2_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p2_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p2_bench7_wrap").appendChild(_node))
    damecanMove("p2_bench7", "p2_battle")
    let benchDamage = p2Bench7DamageBox.value
    p2Bench7DamageBox.value = p2BattleDamageBox.value;
    p2BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p2_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p2_bench7_bg").style.backgroundColor;
    document.getElementById("p2_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p2_bench7_bg").style.backgroundColor = buttleColor;
  }
  p2B7Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench7_wrap").children)
    document.getElementById("p2_bench7_wrap").innerHTML = "";
    bench.forEach(_node => p2TrashWrap.appendChild(_node))
    damecanTrash("p2_bench7")
    p2Bench7DamageBox.value = "";
    document.getElementById("p2_bench7_bg").style.backgroundColor = "transparent";
  }

  p2B8Battle.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench8_wrap").children)
    let batlle = Array.from(document.getElementById("p2_battle_wrap").children)
    document.getElementById("p2_bench8_wrap").innerHTML = "";
    document.getElementById("p2_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p2_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p2_bench8_wrap").appendChild(_node))
    damecanMove("p2_bench8", "p2_battle")
    let benchDamage = p2Bench8DamageBox.value
    p2Bench8DamageBox.value = p2BattleDamageBox.value;
    p2BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p2_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p2_bench8_bg").style.backgroundColor;
    document.getElementById("p2_battle_bg").style.backgroundColor = benchColor;
    document.getElementById("p2_bench8_bg").style.backgroundColor = buttleColor;
  }
  p2B8Trash.onclick = function (e) {
    let bench = Array.from(document.getElementById("p2_bench8_wrap").children)
    document.getElementById("p2_bench8_wrap").innerHTML = "";
    bench.forEach(_node => p2TrashWrap.appendChild(_node))
    damecanTrash("p2_bench8")
    p2Bench8DamageBox.value = "";
    document.getElementById("p2_bench8_bg").style.backgroundColor = "transparent";
  }

  p2HandTrash.onclick = function () {
    let hand = Array.from(document.getElementById("p2_hand_wrap").children)
    document.getElementById("p2_hand_wrap").innerHTML = "";
    hand.forEach(_node => p2TrashWrap.appendChild(_node))
  }
  p2HandToDeck.onclick = function () {
    let hand = Array.from(document.getElementById("p2_hand_wrap").children)
    document.getElementById("p2_hand_wrap").innerHTML = "";
    hand.forEach(_node => p2DeckWrap.appendChild(_node))
    let temp = Array.from(document.getElementById("p2_deck_wrap").children)
    temp.shuffle()
    document.getElementById("p2_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p2_deck_wrap").appendChild(_node))
  }
  p2HandHakase.onclick = function () {
    let hand = Array.from(document.getElementById("p2_hand_wrap").children)
    document.getElementById("p2_hand_wrap").innerHTML = "";
    hand.forEach(_node => p2TrashWrap.appendChild(_node))
    for (let i = 0; i < 7; i++) {
      document.getElementById("p2_hand_wrap").appendChild(document.getElementById("p2_deck_wrap").firstElementChild)
    }
  }
  p2HandMarnie.onclick = function () {
    let p2Hand = Array.from(document.getElementById("p2_hand_wrap").children)
    p2Hand.shuffle()
    document.getElementById("p2_hand_wrap").innerHTML = "";
    p2Hand.forEach(_node => p2DeckWrap.appendChild(_node))
    for (let i = 0; i < 5; i++) {
      document.getElementById("p2_hand_wrap").appendChild(document.getElementById("p2_deck_wrap").firstElementChild)
    }
    let p1Hand = Array.from(document.getElementById("p1_hand_wrap").children)
    p1Hand.shuffle()
    document.getElementById("p1_hand_wrap").innerHTML = "";
    p1Hand.forEach(_node => p1DeckWrap.appendChild(_node))
    for (let j = 0; j < 4; j++) {
      document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    }
  }

  p2HandNanjamo.onclick = function () {
    let p1Hand = Array.from(document.getElementById("p1_hand_wrap").children)
    p1Hand.shuffle()
    document.getElementById("p1_hand_wrap").innerHTML = "";
    p1Hand.forEach(_node => p1DeckWrap.appendChild(_node))
    for (let i = 0; i < document.getElementById("p1_side_wrap").childElementCount; i++) {
      document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    }
    let p2Hand = Array.from(document.getElementById("p2_hand_wrap").children)
    p2Hand.shuffle()
    document.getElementById("p2_hand_wrap").innerHTML = "";
    p2Hand.forEach(_node => p2DeckWrap.appendChild(_node))
    for (let j = 0; j < document.getElementById("p2_side_wrap").childElementCount; j++) {
      document.getElementById("p2_hand_wrap").appendChild(document.getElementById("p2_deck_wrap").firstElementChild)
    }
  }

  p2HandJudgeman.onclick = function () {
    let hand1 = Array.from(document.getElementById("p1_hand_wrap").children)
    document.getElementById("p1_hand_wrap").innerHTML = "";
    hand1.forEach(_node => p1DeckWrap.appendChild(_node))
    let temp1 = Array.from(document.getElementById("p1_deck_wrap").children)
    temp1.shuffle()
    document.getElementById("p1_deck_wrap").innerHTML = ""
    temp1.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
    for (let i = 0; i < 4; i++) {
      document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    }
    let hand2 = Array.from(document.getElementById("p2_hand_wrap").children)
    document.getElementById("p2_hand_wrap").innerHTML = "";
    hand2.forEach(_node => p2DeckWrap.appendChild(_node))
    let temp2 = Array.from(document.getElementById("p2_deck_wrap").children)
    temp2.shuffle()
    document.getElementById("p2_deck_wrap").innerHTML = ""
    temp2.forEach(_node => document.getElementById("p2_deck_wrap").appendChild(_node))
    for (let i = 0; i < 4; i++) {
      document.getElementById("p2_hand_wrap").appendChild(document.getElementById("p2_deck_wrap").firstElementChild)
    }
  }

  p2HandCynthia.onclick = function () {
    let hand = Array.from(document.getElementById("p2_hand_wrap").children)
    document.getElementById("p2_hand_wrap").innerHTML = "";
    hand.forEach(_node => p2DeckWrap.appendChild(_node))
    let temp = Array.from(document.getElementById("p2_deck_wrap").children)
    temp.shuffle()
    document.getElementById("p2_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p2_deck_wrap").appendChild(_node))
    for (let i = 0; i < 6; i++) {
      document.getElementById("p2_hand_wrap").appendChild(document.getElementById("p2_deck_wrap").firstElementChild)
    }
  }

  p2HandToDeckBottom.onclick = function () {
    let p2Hand = Array.from(document.getElementById("p2_hand_wrap").children)
    p2Hand.shuffle()
    document.getElementById("p2_hand_wrap").innerHTML = "";
    p2Hand.forEach(_node => p2DeckWrap.appendChild(_node))
  }

  p2DeckSort.onclick = function () {
    console.log("click")
    let temp = Array.from(document.getElementById("p2_deck_wrap").children)
    temp.sort(function (a, b) {
      if (a.id.slice(-2) < b.id.slice(-2)) return -1;
      if (a.id.slice(-2) > b.id.slice(-2)) return 1;
      return 0;
    });
    document.getElementById("p2_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p2_deck_wrap").appendChild(_node))
  }

  p2TrashSort.onclick = function () {
    console.log("click")
    let temp = Array.from(document.getElementById("p2_trash_wrap").children)
    temp.sort(function (a, b) {
      if (a.id.slice(-2) < b.id.slice(-2)) return -1;
      if (a.id.slice(-2) > b.id.slice(-2)) return 1;
      return 0;
    });
    document.getElementById("p2_trash_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p2_trash_wrap").appendChild(_node))
  }

  //202207アプデ↓
  p2LostzoneSort.onclick = function () {
    console.log("click")
    let temp = Array.from(document.getElementById("p2_lostzone_wrap").children)
    temp.sort(function (a, b) {
      if (a.id.slice(-2) < b.id.slice(-2)) return -1;
      if (a.id.slice(-2) > b.id.slice(-2)) return 1;
      return 0;
    });
    document.getElementById("p2_lostzone_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p2_lostzone_wrap").appendChild(_node))
  }

  p2HandSort.onclick = function () {
    console.log("click")
    let temp = Array.from(document.getElementById("p2_hand_wrap").children)
    temp.sort(function (a, b) {
      if (a.id.slice(-2) < b.id.slice(-2)) return -1;
      if (a.id.slice(-2) > b.id.slice(-2)) return 1;
      return 0;
    });
    document.getElementById("p2_hand_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p2_hand_wrap").appendChild(_node))
  }
  //202207アプデ↑

  p2MugenZone.onclick = function () {
    if (document.getElementById("p2_bench6").style.display == "none") {
      document.getElementById("p2_bench6").style.display = "block";
      document.getElementById("p2_bench7").style.display = "block";
      document.getElementById("p2_bench8").style.display = "block";
      p2MugenZone.innerText = "ベンチ-"
    } else {
      document.getElementById("p2_bench6").style.display = "none";
      document.getElementById("p2_bench7").style.display = "none";
      document.getElementById("p2_bench8").style.display = "none";
      p2MugenZone.innerText = "ベンチ+"
    }
  }

  p2Reset.onclick = function () {
    p2SideWrap.innerHTML = ""
    p2BattleWrap.innerHTML = ""
    p2Bench1Wrap.innerHTML = ""
    p2Bench2Wrap.innerHTML = ""
    p2Bench3Wrap.innerHTML = ""
    p2Bench4Wrap.innerHTML = ""
    p2Bench5Wrap.innerHTML = ""
    p2HandWrap.innerHTML = ""
    p2TrashWrap.innerHTML = ""
    p2LostzoneWrap.innerHTML = ""
    p2DeckWrap.innerHTML = ""
    p2SmartphoneWrap.innerHTML = ""
    stadiumWrap.innerHTML = ""
    p1BattleDamageBox.value = "";
    p1Bench1DamageBox.value = "";
    p1Bench2DamageBox.value = "";
    p1Bench3DamageBox.value = "";
    p1Bench4DamageBox.value = "";
    p1Bench5DamageBox.value = "";
    p1Bench6DamageBox.value = "";
    p1Bench7DamageBox.value = "";
    p1Bench8DamageBox.value = "";
    p2BattleDamageBox.value = "";
    p2Bench1DamageBox.value = "";
    p2Bench2DamageBox.value = "";
    p2Bench3DamageBox.value = "";
    p2Bench4DamageBox.value = "";
    p2Bench5DamageBox.value = "";
    p2Bench6DamageBox.value = "";
    p2Bench7DamageBox.value = "";
    p2Bench8DamageBox.value = "";
    let damecanArray = document.getElementById("damecan_okiba").childNodes
    for (let i = 0; i < damecanArray.length; i++) {
      damecanArray[i].remove()
      i--
    }
    init("p2")
  }


  ////デッキ取得
  getDeckButton.onclick = function (event) {
    if (leftCode.value == "" || rightCode.value == "") {
      alert("デッキコードを2つ入力してください")
      return
    } else if (leftCode.value == "maggyo" || rightCode.value == "maggyo") {
      p1Deck = p2Deck = [
        {
          name: 'ガラル マッギョV',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S2a/038117_P_GARARUMAGGYOV.jpg',
          id: "00"
        },
        {
          name: 'ガラル マッギョV',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S2a/038117_P_GARARUMAGGYOV.jpg',
          id: "01"
        },
        {
          name: 'ガラル マッギョV',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S2a/038117_P_GARARUMAGGYOV.jpg',
          id: "02"
        },
        {
          name: 'ガラル マッギョV',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S2a/038117_P_GARARUMAGGYOV.jpg',
          id: "03"
        },
        {
          name: 'ルカリオ&amp;メルメタルGX',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SM12a/037287_P_RUKARIOMERUMETARUGX.jpg',
          id: "04"
        },
        {
          name: 'ルカリオ&amp;メルメタルGX',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SM12a/037287_P_RUKARIOMERUMETARUGX.jpg',
          id: "05"
        },
        {
          name: 'ザシアンV',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S1W/037656_P_ZASHIANV.jpg',
          id: "06"
        },
        {
          name: 'ザマゼンタV',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S1H/037714_P_ZAMAZENTAV.jpg',
          id: "07"
        },
        {
          name: 'デデンネGX',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SM12a/037252_P_DEDENNEGX.jpg',
          id: "08"
        },
        {
          name: 'メタルソーサー',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SP1/037788_T_METARUSOSA.jpg',
          id: "09"
        },
        {
          name: 'メタルソーサー',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SP1/037788_T_METARUSOSA.jpg',
          id: 10
        },
        {
          name: 'メタルソーサー',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SP1/037788_T_METARUSOSA.jpg',
          id: 11
        },
        {
          name: 'メタルソーサー',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SP1/037788_T_METARUSOSA.jpg',
          id: 12
        },
        {
          name: 'タッグコール',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SM12/037147_T_TAGGUKORU.jpg',
          id: 13
        },
        {
          name: 'タッグコール',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SM12/037147_T_TAGGUKORU.jpg',
          id: 14
        },
        {
          name: 'クイックボール',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S1H/037722_T_KUIKKUBORU.jpg',
          id: 15
        },
        {
          name: 'クイックボール',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S1H/037722_T_KUIKKUBORU.jpg',
          id: 16
        },
        {
          name: 'クイックボール',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S1H/037722_T_KUIKKUBORU.jpg',
          id: 17
        },
        {
          name: 'クイックボール',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S1H/037722_T_KUIKKUBORU.jpg',
          id: 18
        },
        {
          name: 'ポケモンいれかえ',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SCS/038025_T_POKEMONIREKAE.jpg',
          id: 19
        },
        {
          name: 'ポケモンいれかえ',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SCS/038025_T_POKEMONIREKAE.jpg',
          id: 20
        }
      ];

      init("p1")
      init("p2")
      return
    } else if (leftCode.value.length < 20 || rightCode.value.length < 20) {
      alert("正しい形式のデッキコードを入力してください")
      return
    }
    p1SideWrap.innerHTML = ""
    p1BattleWrap.innerHTML = ""
    p1Bench1Wrap.innerHTML = ""
    p1Bench2Wrap.innerHTML = ""
    p1Bench3Wrap.innerHTML = ""
    p1Bench4Wrap.innerHTML = ""
    p1Bench5Wrap.innerHTML = ""
    p1Bench6Wrap.innerHTML = ""
    p1Bench7Wrap.innerHTML = ""
    p1Bench8Wrap.innerHTML = ""
    p1HandWrap.innerHTML = ""
    p1TrashWrap.innerHTML = ""
    p1DeckWrap.innerHTML = ""
    p1LostzoneWrap.innerHTML = ""

    p2SideWrap.innerHTML = ""
    p2BattleWrap.innerHTML = ""
    p2Bench1Wrap.innerHTML = ""
    p2Bench2Wrap.innerHTML = ""
    p2Bench3Wrap.innerHTML = ""
    p2Bench4Wrap.innerHTML = ""
    p2Bench5Wrap.innerHTML = ""
    p2Bench6Wrap.innerHTML = ""
    p2Bench7Wrap.innerHTML = ""
    p2Bench8Wrap.innerHTML = ""
    p2HandWrap.innerHTML = ""
    p2TrashWrap.innerHTML = ""
    p2DeckWrap.innerHTML = ""
    p2LostzoneWrap.innerHTML = ""

    stadiumWrap.innerHTML = ""

    p1BattleDamageBox.value = "";
    p1Bench1DamageBox.value = "";
    p1Bench2DamageBox.value = "";
    p1Bench3DamageBox.value = "";
    p1Bench4DamageBox.value = "";
    p1Bench5DamageBox.value = "";
    p1Bench6DamageBox.value = "";
    p1Bench7DamageBox.value = "";
    p1Bench8DamageBox.value = "";

    p2BattleDamageBox.value = "";
    p2Bench1DamageBox.value = "";
    p2Bench2DamageBox.value = "";
    p2Bench3DamageBox.value = "";
    p2Bench4DamageBox.value = "";
    p2Bench5DamageBox.value = "";
    p2Bench6DamageBox.value = "";
    p2Bench7DamageBox.value = "";
    p2Bench8DamageBox.value = "";

    let damecanArray = document.getElementById("damecan_okiba").childNodes
    for (let i = 0; i < damecanArray.length; i++) {
      damecanArray[i].remove()
      i--
    }

    let $loading = $(".loading");
    jQuery.ajax({
      url: "https://api.funamushi.net/ajax/get3?id=" + leftCode.value,
      dataType: "json",
      beforeSend: function () {
        $loading.removeClass("is-hide");
      }
    }).done((json) => {
      p1Deck = json;
      init("p1")
      jQuery.ajax({
        url: "https://api.funamushi.net/ajax/get3?id=" + rightCode.value,
        dataType: "json",
      }).done((json) => {
        p2Deck = json;
        init("p2")
        $loading.addClass("is-hide");
      })
    })

    //      jQuery.ajax({
    //        url: "https://api.funamushi.net/ajax/get2?id=" + rightCode.value,
    //        dataType: "json",
    //      }).done((json) => {
    //        p2Deck = json;
    //        init("p2")
    //        $loading.addClass("is-hide");
    //      })

  }


  ////////////////////////////////

  setDamecan(damecan10);
  setDamecan(damecan50);
  setDamecan(damecan100);

  Sortable.create(p1_side_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    ghostClass: "black-background-class",
    animation: 100
  });

  Sortable.create(p1_battle_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_lostzone_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_hand_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    ghostClass: "black-background-class",
    animation: 100
  });

  Sortable.create(p1_deck_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench1_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench2_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench3_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench4_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench5_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench6_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench7_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench8_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_trash_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_smartphone_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  //////////////////////


  Sortable.create(stadium_wrap, {
    group: {
      name: "stadium",
      put: ["p1", "p2"]
    },
    animation: 100
  });


  //////////////////////


  Sortable.create(p2_side_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_battle_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_lostzone_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_hand_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_deck_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_bench1_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_bench2_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_bench3_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_bench4_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_bench5_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_bench6_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_bench7_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_bench8_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_trash_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p2_smartphone_wrap, {
    group: {
      name: "p2",
      put: ["p2", "stadium"]
    },
    animation: 100
  });

  ///////////


}
