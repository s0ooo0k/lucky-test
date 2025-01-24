async function makeIssue() {
    const token = process.env.GH_TOKEN; 
    const OWNER = "s0ooo0k";
    const REPO = "lucky-test"; // 여러분들의 현재 리포지터리 이름
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title: "오늘의 운세는", // 요고 3
            body: `${Math.floor(Math.random() * 100) + 1}점입니다`, // 요고 4
        })
    });
    if (response.ok) {
        console.log("성공");
    } else {
        console.log("실패");
    }
}

makeIssue();