async function makeIssue() {
    const token = process.env.GH_TOKEN; 
    const OWNER = "s0ooo0k";
    const REPO = "lucky-test"; // 여러분들의 현재 리포지터리 이름

    const luckyNumber = Math.floor(Math.random()*100)+1;
    let message;
    if (luckyNumber > 80){
        message=`${luckyNumber}점입니다. 바로 지금 행운의 사나이는 당신!`;
    } else if (luckyNumber>40){
        message=`${luckyNumber}점입니다. 나쁘지 않습니다. 행운은 만들어 가는 것!`;
    } else {
        message=`${luckyNumber}점입니다. 행운보다 행복이 더 중요합니다`;
    }
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: "이 시각 나의 행운 점수는? 🍀", 
            body: message,
        })
    });
    if (response.ok) {
        console.log("성공");
    } else {
        console.log("실패");
    }
}

makeIssue();