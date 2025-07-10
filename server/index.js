const express = require("express");
const { title } = require("process");
const app = express();
const port = 3000;

const users = [] // 회원데이터()

app.use(express.json()) // json 데이터 형식 해석

app.use(express.urlencoded({extended: true}) ) // www-form-data (폼데이터) 해석

app.get("/", (req, res) => { // 서버의 자원을 획득
  res.send("Hello World!");
});

app.post('/create', (req, res) => {

    users.push(req.body);
    console.log("회원데이터",users)
    res.status(200).json({
        success: true,
        message: "회원등록 성공"
    })
}) // 서버의 자원을 생성(=저장)

// app.delete() : 서버의 자원을 삭제

// app.put() : 서버의 자원을 전체 수정

// app.patch : 서버의 자원을 일부 수정

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
