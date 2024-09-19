const main = () =&gt; {
    const video = document.getElementById(&#039;video-player&#039;);
 
 
    // ビデオファイル選択ボタン
    const fileSelector = document.getElementById(&#039;video-file&#039;);
    const videoSelectButton = document.getElementById(&#039;video-select&#039;);
    videoSelectButton.addEventListener(&#039;click&#039;, (e) =&gt; {
        e.preventDefault();
        e.stopPropagation();
        fileSelector.click();
    });
 
    // ビデオファイル選択
    fileSelector.addEventListener(&#039;change&#039;, (e) =&gt; {
        const file = e.target.files[0];
        if (!file.type.match(&#039;video.*&#039;)) {
            console.log(&#039;This file is not video.&#039;);
            return;
        }
 
        video.src = window.URL.createObjectURL(file);
        video.load();
        video.play();
    });
 
 
    // ビデオ再生ボタン
    const videoPlayButton = document.getElementById(&#039;video-play&#039;);
    videoPlayButton.addEventListener(&#039;click&#039;, (e) =&gt; {
        e.preventDefault();
        e.stopPropagation();
 
        video.play();
    });
 
 
    // ビデオ停止ボタン
    const videoStopButton = document.getElementById(&#039;video-stop&#039;);
    videoStopButton.addEventListener(&#039;click&#039;, (e) =&gt; {
        e.preventDefault();
        e.stopPropagation();
 
        video.pause();
        video.currentTime = 0.0;
    });
 
 
    // ビデオポーズボタン
    const videoPauseButton = document.getElementById(&#039;video-pause&#039;);
    videoPauseButton.addEventListener(&#039;click&#039;, (e) =&gt; {
        e.preventDefault();
        e.stopPropagation();
 
        video.pause();
    });
 
 
    // ビデオフルスクリーンボタン
    const videoFullScreenButton = document.getElementById(&#039;video-fullscreen&#039;);
    videoFullScreenButton.addEventListener(&#039;click&#039;, (e) =&gt; {
        e.preventDefault();
        e.stopPropagation();
        if (video.requestFullScreen) {
            video.requestFullScreen();
        }
        else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
        else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        }
        else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
 
 
    // プログレスバー長さ更新
    const progressOut = document.getElementById(&quot;progress-out&quot;);
    const progressIn = document.getElementById(&quot;progress-in&quot;);
    video.addEventListener(&#039;timeupdate&#039;, () =&gt; {
        progressIn.style.transform = `scaleX(${video.currentTime / video.duration})`;
    });
 
 
    // プログレスバークリック時イベント
    progressOut.addEventListener(&#039;click&#039;, (e) =&gt; {
        const percent = (e.pageX - (progressOut.getBoundingClientRect().left + window.pageXOffset)) / progressOut.clientWidth;
        video.currentTime = video.duration * percent;
    });
};
 
 
 
document.addEventListener(&#039;DOMContentLoaded&#039;, () =&gt; {
    main();
});
