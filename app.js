const song = document.getElementById("song");
    const startBtn = document.getElementById("startBtn");

    startBtn.onclick = () => {
      song.play();
      createBalloons();
      startFireworks();
    };
    function randomPosition() {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      };
    }

    function launchFireworks() {
      for (let i = 0; i < 20; i++) {
        const fw = document.createElement("div");
        fw.className = "firework";
        fw.textContent = "🎉";
        const pos = randomPosition();
        fw.style.left = pos.x + "px";
        fw.style.top = pos.y + "px";
        document.body.appendChild(fw);
        setTimeout(() => fw.remove(), 2000);
      }
    }

    function dropHearts() {
      for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = "💖";
        const pos = randomPosition();
        heart.style.left = pos.x + "px";
        heart.style.top = pos.y + "px";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
      }
    }

    function rainConfetti() {
      for (let i = 0; i < 30; i++) {
        const cf = document.createElement("div");
        cf.className = "confetti";
        cf.textContent = "🎈✨";
        const pos = randomPosition();
        cf.style.left = pos.x + "px";
        cf.style.top = pos.y + "px";
        document.body.appendChild(cf);
        setTimeout(() => cf.remove(), 2000);
      }
    }

    startBtn.onclick = () => {
      song.play().catch((err) => alert("Click again if music didn't start"));
      launchFireworks();
      dropHearts();
      rainConfetti();

      // Optional: Stop music after 60 sec
      setTimeout(() => song.play(), 20000);
    };